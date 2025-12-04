import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Read cookie
  const token = req.cookies.get("token")?.value;

  let isLoggedIn = false;

  if (token) {
    try {
      await jwtVerify(token, secret);
      isLoggedIn = true;
    } catch (err) {
      isLoggedIn = false;
    }
  }

  // If logged in → block login & signup
  if (isLoggedIn && ["/login", "/signup"].includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // If logged out → protect /profile
  if (!isLoggedIn && pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/login/:path*",
    "/signup",
    "/signup/:path*",
    "/profile/:path*"
  ]
};