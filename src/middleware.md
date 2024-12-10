import { NextRequest, NextResponse } from "next/server";

// add more protected routes here once confirmed this works
const protectedRoutes = ["/dashboard"];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth-token");

  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (!token) {
      const loginUrl = new URL("/auth", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path"],
};
