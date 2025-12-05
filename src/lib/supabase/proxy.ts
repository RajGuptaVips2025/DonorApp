// src/lib/supabase/proxy.ts
import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Validate the user via Supabase
  const { data: { user } } = await supabase.auth.getUser();

  // Define paths
  const url = request.nextUrl.clone();
  const path = url.pathname;

  // 🛑 FIX: Add this block to allow API routes to pass through
  if (path.startsWith("/api") || path.startsWith("/_next") || path.startsWith("/static")) {
    return response;
  }

  // 1. If user is LOGGED IN and tries to access login/signup, redirect to Home
  if (user) {
    if (path === "/login" || path === "/signup") {
      url.pathname = "/"; 
      return NextResponse.redirect(url);
    }
  }

  // 2. If user is NOT LOGGED IN and tries to access protected routes
  if (!user) {
    const publicPaths = ["/login", "/signup"];
    
    if (!publicPaths.includes(path)) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  return response;
}



