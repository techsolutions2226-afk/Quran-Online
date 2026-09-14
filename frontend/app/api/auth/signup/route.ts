import { authService } from "@quran-online/backend";
import {
  createSignupSuccessResponse,
  toErrorResponse,
} from "@/lib/api/auth-response";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const result = await authService.signup(body);
    // Account created — user must log in next (no session cookie here).
    return createSignupSuccessResponse(result.user);
  } catch (error) {
    return toErrorResponse(error);
  }
}
