type ApiErrorBody = {
  success: false;
  error: {
    code: string;
    message: string;
    details?: Record<string, string[]>;
  };
};

type ApiSuccessBody<T> = {
  success: true;
  data: T;
};

export type AuthUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  course: "qaida" | "hifz" | "kirat";
  createdAt: string;
};

export type AuthResponseData = {
  user: AuthUser;
  expiresIn: string;
};

export class ApiClientError extends Error {
  readonly status: number;
  readonly code: string;
  readonly details?: Record<string, string[]>;

  constructor(
    message: string,
    options: {
      status: number;
      code: string;
      details?: Record<string, string[]>;
    },
  ) {
    super(message);
    this.name = "ApiClientError";
    this.status = options.status;
    this.code = options.code;
    this.details = options.details;
  }
}

async function postJson<T>(url: string, body: unknown): Promise<T> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    credentials: "same-origin",
  });

  const payload = (await response.json()) as ApiSuccessBody<T> | ApiErrorBody;

  if (!response.ok || !payload.success) {
    const errorPayload = payload as ApiErrorBody;
    throw new ApiClientError(
      errorPayload.error?.message || "Request failed.",
      {
        status: response.status,
        code: errorPayload.error?.code || "REQUEST_FAILED",
        details: errorPayload.error?.details,
      },
    );
  }

  return payload.data;
}

export function signupRequest(body: {
  firstName: string;
  lastName: string;
  course: string;
  email: string;
  password: string;
  confirmPassword: string;
}) {
  return postJson<AuthResponseData>("/api/auth/signup", body);
}

export function loginRequest(body: { email: string; password: string }) {
  return postJson<AuthResponseData>("/api/auth/login", body);
}

export function mapDetailsToFieldErrors(
  details?: Record<string, string[]>,
): Record<string, string> {
  if (!details) return {};

  const fieldErrors: Record<string, string> = {};
  for (const [key, messages] of Object.entries(details)) {
    if (messages[0]) {
      fieldErrors[key] = messages[0];
    }
  }
  return fieldErrors;
}
