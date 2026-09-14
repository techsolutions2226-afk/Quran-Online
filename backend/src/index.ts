export { AppError, ConflictError, UnauthorizedError, ValidationError } from "./errors/app-error";
export { getAuthConfig } from "./config/auth";
export { getPool, query, isPostgresError } from "./db/client";
export { AuthService, authService } from "./services/auth.service";
export { UserRepository } from "./repositories/user.repository";
export {
  loginSchema,
  parseLoginInput,
  parseSignupInput,
  signupSchema,
} from "./validators/auth";
export { hashPassword, verifyPassword } from "./utils/password";
export {
  parseExpiresInToSeconds,
  signAccessToken,
  verifyAccessToken,
} from "./utils/jwt";
export type {
  AuthResult,
  AuthTokenPayload,
  Course,
  PublicUser,
  UserRecord,
} from "./types/auth";
export type { LoginInput, SignupInput } from "./validators/auth";
