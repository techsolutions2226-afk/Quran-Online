export class AppError extends Error {
  readonly statusCode: number;
  readonly code: string;
  readonly details?: Record<string, string[]>;

  constructor(
    message: string,
    options: {
      statusCode?: number;
      code?: string;
      details?: Record<string, string[]>;
    } = {},
  ) {
    super(message);
    this.name = "AppError";
    this.statusCode = options.statusCode ?? 400;
    this.code = options.code ?? "APP_ERROR";
    this.details = options.details;
  }
}

export class ValidationError extends AppError {
  constructor(message: string, details: Record<string, string[]>) {
    super(message, {
      statusCode: 400,
      code: "VALIDATION_ERROR",
      details,
    });
    this.name = "ValidationError";
  }
}

export class ConflictError extends AppError {
  constructor(message: string) {
    super(message, { statusCode: 409, code: "CONFLICT" });
    this.name = "ConflictError";
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = "Invalid email or password.") {
    super(message, { statusCode: 401, code: "UNAUTHORIZED" });
    this.name = "UnauthorizedError";
  }
}
