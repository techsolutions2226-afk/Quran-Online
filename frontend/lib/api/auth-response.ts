import { NextResponse } from "next/server";
import {
  AppError,
  parseExpiresInToSeconds,
  type AuthResult,
  type PublicUser,
} from "@quran-online/backend";

export const AUTH_COOKIE_NAME = "qo_access_token";

export function toErrorResponse(error: unknown): NextResponse {
  if (error instanceof AppError) {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: error.code,
          message: error.message,
          details: error.details,
        },
      },
      { status: error.statusCode },
    );
  }

  console.error("[auth-api]", error);

  return NextResponse.json(
    {
      success: false,
      error: {
        code: "INTERNAL_ERROR",
        message: "Something went wrong. Please try again.",
      },
    },
    { status: 500 },
  );
}

export function createSignupSuccessResponse(user: PublicUser): NextResponse {
  return NextResponse.json(
    {
      success: true,
      data: { user },
    },
    { status: 201 },
  );
}

export function createAuthSuccessResponse(result: AuthResult): NextResponse {
  const response = NextResponse.json(
    {
      success: true,
      data: {
        user: result.user,
        expiresIn: result.expiresIn,
      },
    },
    { status: 200 },
  );

  const maxAge = parseExpiresInToSeconds(result.expiresIn);
  const isProduction = process.env.NODE_ENV === "production";

  response.cookies.set(AUTH_COOKIE_NAME, result.accessToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
    path: "/",
    maxAge,
  });

  return response;
}
