import { AppError, ConflictError } from "../errors/app-error";
import { isPostgresError, query } from "../db/client";
import type { Course, UserRecord } from "../types/auth";

type UserRow = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password_hash: string;
  course: Course;
  created_at: Date | string;
};

function mapRow(row: UserRow): UserRecord {
  return {
    id: row.id,
    firstName: row.first_name,
    lastName: row.last_name,
    email: row.email,
    passwordHash: row.password_hash,
    course: row.course,
    createdAt:
      row.created_at instanceof Date
        ? row.created_at.toISOString()
        : new Date(row.created_at).toISOString(),
  };
}

export class UserRepository {
  async findByEmail(email: string): Promise<UserRecord | null> {
    const normalized = email.trim().toLowerCase();

    try {
      const result = await query<UserRow>(
        `
          SELECT id, first_name, last_name, email, password_hash, course, created_at
          FROM users
          WHERE email = $1
          LIMIT 1
        `,
        [normalized],
      );

      const row = result.rows[0];
      return row ? mapRow(row) : null;
    } catch (error) {
      console.error("[user-repository:findByEmail]", error);
      throw new AppError("Database request failed.", {
        statusCode: 500,
        code: "DATABASE_ERROR",
      });
    }
  }

  async findById(id: string): Promise<UserRecord | null> {
    try {
      const result = await query<UserRow>(
        `
          SELECT id, first_name, last_name, email, password_hash, course, created_at
          FROM users
          WHERE id = $1
          LIMIT 1
        `,
        [id],
      );

      const row = result.rows[0];
      return row ? mapRow(row) : null;
    } catch (error) {
      console.error("[user-repository:findById]", error);
      throw new AppError("Database request failed.", {
        statusCode: 500,
        code: "DATABASE_ERROR",
      });
    }
  }

  async create(
    user: Omit<UserRecord, "id" | "createdAt"> & {
      id?: string;
      createdAt?: string;
    },
  ): Promise<UserRecord> {
    const email = user.email.trim().toLowerCase();

    try {
      const result = await query<UserRow>(
        `
          INSERT INTO users (id, first_name, last_name, email, password_hash, course, created_at)
          VALUES (
            COALESCE($1::uuid, gen_random_uuid()),
            $2,
            $3,
            $4,
            $5,
            $6,
            COALESCE($7::timestamptz, NOW())
          )
          RETURNING id, first_name, last_name, email, password_hash, course, created_at
        `,
        [
          user.id ?? null,
          user.firstName,
          user.lastName,
          email,
          user.passwordHash,
          user.course,
          user.createdAt ?? null,
        ],
      );

      const row = result.rows[0];
      if (!row) {
        throw new AppError("Failed to create user.", {
          statusCode: 500,
          code: "DATABASE_ERROR",
        });
      }

      return mapRow(row);
    } catch (error) {
      if (isPostgresError(error) && error.code === "23505") {
        throw new ConflictError("An account with this email already exists.");
      }

      if (error instanceof AppError) {
        throw error;
      }

      console.error("[user-repository:create]", error);
      throw new AppError("Failed to create user.", {
        statusCode: 500,
        code: "DATABASE_ERROR",
      });
    }
  }
}
