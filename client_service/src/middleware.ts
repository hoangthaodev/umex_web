import { checkAuth } from "@/actions/checkstatus";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const allowedOrigin = process.env.NEXT_PUBLIC_BASE_URL || "*";

  response.headers.set("Access-Control-Allow-Origin", allowedOrigin);
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  if (req.nextUrl.pathname === "/ux-admin/login") {
    const auth = await checkAuth();
    if (auth) {
      return NextResponse.redirect(new URL("/ux-admin", req.nextUrl.origin));
    }
    return response;
  }

  if (
    req.nextUrl.pathname.startsWith("/ux-admin") &&
    req.nextUrl.pathname !== "/ux-admin/login"
  ) {
    const auth = await checkAuth();
    if (!auth) {
      return NextResponse.redirect(
        new URL("/ux-admin/login", req.nextUrl.origin)
      );
    }
    return response;
  }

  return response;
}
