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

  const { data: { user } } = await supabase.auth.getUser();

  const url = request.nextUrl.clone();
  const path = url.pathname;

  if (path.startsWith("/api") || path.startsWith("/_next") || path.startsWith("/static")) {
    return response;
  }

  if (user) {
    if (path === "/login" || path === "/signup") {
      url.pathname = "/"; 
      return NextResponse.redirect(url);
    }
  }

  if (!user) {
    const publicPaths = ["/login", "/signup"];
    
    if (!publicPaths.includes(path)) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  return response;
}



