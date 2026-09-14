import { SignJWT, jwtVerify } from "jose";
import type { AuthTokenPayload } from "../types/auth";
import { UnauthorizedError } from "../errors/app-error";

function getSecretKey(secret: string): Uint8Array {
  return new TextEncoder().encode(secret);
}

/** Parses values like "7d", "24h", "3600s", or plain seconds. */
export function parseExpiresInToSeconds(expiresIn: string): number {
  const trimmed = expiresIn.trim();
  const match = /^(\d+)([smhd])?$/i.exec(trimmed);

  if (!match) {
    return 60 * 60 * 24 * 7;
  }

  const amount = Number(match[1]);
  const unit = (match[2] || "s").toLowerCase();

  switch (unit) {
    case "s":
      return amount;
    case "m":
      return amount * 60;
    case "h":
      return amount * 60 * 60;
    case "d":
      return amount * 60 * 60 * 24;
    default:
      return amount;
  }
}

export async function signAccessToken(
  payload: AuthTokenPayload,
  secret: string,
  expiresIn: string,
): Promise<string> {
  const seconds = parseExpiresInToSeconds(expiresIn);

  return new SignJWT({ email: payload.email })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setExpirationTime(`${seconds}s`)
    .sign(getSecretKey(secret));
}

export async function verifyAccessToken(
  token: string,
  secret: string,
): Promise<AuthTokenPayload> {
  try {
    const { payload } = await jwtVerify(token, getSecretKey(secret), {
      algorithms: ["HS256"],
    });

    const sub = payload.sub;
    const email = payload.email;

    if (typeof sub !== "string" || typeof email !== "string") {
      throw new UnauthorizedError("Invalid authentication token.");
    }

    return { sub, email };
  } catch {
    throw new UnauthorizedError("Invalid or expired authentication token.");
  }
}
