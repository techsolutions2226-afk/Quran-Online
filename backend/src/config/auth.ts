import { AppError } from "../errors/app-error";

export type AuthConfig = {
  jwtSecret: string;
  jwtExpiresIn: string;
};

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new AppError(`Missing required environment variable: ${name}`, {
      statusCode: 500,
      code: "CONFIG_ERROR",
    });
  }
  return value;
}

export function getAuthConfig(): AuthConfig {
  // Ensure DB URL is present early for auth flows.
  requireEnv("DATABASE_URL");

  return {
    jwtSecret: requireEnv("JWT_SECRET"),
    jwtExpiresIn: process.env.JWT_EXPIRES_IN?.trim() || "7d",
  };
}
