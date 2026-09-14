import { Pool, type QueryResult, type QueryResultRow } from "pg";
import { AppError } from "../errors/app-error";

let pool: Pool | null = null;

function requireDatabaseUrl(): string {
  const value = process.env.DATABASE_URL?.trim();
  if (!value) {
    throw new AppError("Missing required environment variable: DATABASE_URL", {
      statusCode: 500,
      code: "CONFIG_ERROR",
    });
  }
  return value;
}

export function getPool(): Pool {
  if (!pool) {
    pool = new Pool({
      connectionString: requireDatabaseUrl(),
      ssl: { rejectUnauthorized: false },
      max: 5,
      idleTimeoutMillis: 20_000,
      connectionTimeoutMillis: 15_000,
    });
  }
  return pool;
}

export function isPostgresError(
  error: unknown,
): error is { code: string; message: string } {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    typeof (error as { code: unknown }).code === "string"
  );
}

export async function query<T extends QueryResultRow = QueryResultRow>(
  text: string,
  params?: unknown[],
): Promise<QueryResult<T>> {
  try {
    return await getPool().query<T>(text, params);
  } catch (error) {
    if (isPostgresError(error)) {
      throw error;
    }

    console.error("[db]", error);
    throw new AppError("Database request failed.", {
      statusCode: 500,
      code: "DATABASE_ERROR",
    });
  }
}
