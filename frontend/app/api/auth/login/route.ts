import { authService } from "@quran-online/backend";
import {
  createAuthSuccessResponse,
  toErrorResponse,
} from "@/lib/api/auth-response";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const result = await authService.login(body);
    return createAuthSuccessResponse(result);
  } catch (error) {
    return toErrorResponse(error);
  }
}
