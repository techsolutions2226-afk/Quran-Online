import { cookies } from "next/headers";
import {
  getAuthConfig,
  UnauthorizedError,
  UserRepository,
  verifyAccessToken,
} from "@quran-online/backend";
import { AUTH_COOKIE_NAME, toErrorResponse } from "@/lib/api/auth-response";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;

    if (!token) {
      throw new UnauthorizedError("Please log in to continue.");
    }

    const { jwtSecret } = getAuthConfig();
    const payload = await verifyAccessToken(token, jwtSecret);
    const user = await new UserRepository().findById(payload.sub);

    if (!user) {
      throw new UnauthorizedError("Please log in to continue.");
    }

    return NextResponse.json({
      success: true,
      data: {
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          course: user.course,
          createdAt: user.createdAt,
        },
      },
    });
  } catch (error) {
    return toErrorResponse(error);
  }
}
