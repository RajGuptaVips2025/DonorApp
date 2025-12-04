import jwt from "jsonwebtoken";
import { serialize, parse } from "cookie";
import prisma from "./prisma";

const JWT_SECRET = process.env.JWT_SECRET!;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is missing in environment variables");
}

export function signToken(payload: object) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export function createTokenCookie(token: string) {
  const maxAge = 60 * 60 * 24 * 7;
  return serialize("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge,
  });
}

export function clearTokenCookie() {
  return serialize("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}

export function getTokenFromRequest(req: Request) {
  const cookieHeader = req.headers.get("cookie") || "";
  const cookies = parse(cookieHeader);
  return cookies.token;
}

export async function getUserFromRequest(req: Request) {
  const token = getTokenFromRequest(req);
  if (!token) return null;
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: number; [k: string]: any };
    const user = await prisma.donor.findUnique({
      where: { id: decoded.id },
      select: { id: true, name: true, email: true, phone: true, address: true, createdAt: true },
    });
    return user;
  } catch (err) {
    return null;
  }
}
