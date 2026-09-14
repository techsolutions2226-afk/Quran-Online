import { getAuthConfig } from "../config/auth";
import { ConflictError, UnauthorizedError } from "../errors/app-error";
import { UserRepository } from "../repositories/user.repository";
import type { AuthResult, PublicUser, UserRecord } from "../types/auth";
import { signAccessToken } from "../utils/jwt";
import { hashPassword, verifyPassword } from "../utils/password";
import {
  parseLoginInput,
  parseSignupInput,
  type LoginInput,
  type SignupInput,
} from "../validators/auth";

function toPublicUser(user: UserRecord): PublicUser {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    course: user.course,
    createdAt: user.createdAt,
  };
}

export class AuthService {
  private users: UserRepository | null = null;

  private getUsers(): UserRepository {
    if (!this.users) {
      // Validates JWT + DATABASE_URL are configured.
      getAuthConfig();
      this.users = new UserRepository();
    }
    return this.users;
  }

  async signup(rawInput: unknown): Promise<AuthResult> {
    const input: SignupInput = parseSignupInput(rawInput);
    const existing = await this.getUsers().findByEmail(input.email);

    if (existing) {
      throw new ConflictError("An account with this email already exists.");
    }

    const passwordHash = await hashPassword(input.password);
    const user = await this.getUsers().create({
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      course: input.course,
      passwordHash,
    });

    return this.issueAuthResult(user);
  }

  async login(rawInput: unknown): Promise<AuthResult> {
    const input: LoginInput = parseLoginInput(rawInput);
    const user = await this.getUsers().findByEmail(input.email);

    if (!user) {
      throw new UnauthorizedError();
    }

    const isValid = await verifyPassword(input.password, user.passwordHash);
    if (!isValid) {
      throw new UnauthorizedError();
    }

    return this.issueAuthResult(user);
  }

  private async issueAuthResult(user: UserRecord): Promise<AuthResult> {
    const config = getAuthConfig();
    const accessToken = await signAccessToken(
      { sub: user.id, email: user.email },
      config.jwtSecret,
      config.jwtExpiresIn,
    );

    return {
      user: toPublicUser(user),
      accessToken,
      expiresIn: config.jwtExpiresIn,
    };
  }
}

export const authService = new AuthService();
