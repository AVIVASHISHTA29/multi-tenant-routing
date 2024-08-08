import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const hostname = req.headers.get("host") || "";
  const subdomain = hostname.split(".")[0];

  if (subdomain === "blogs") {
    return NextResponse.rewrite(
      new URL(`/blogs${req.nextUrl.pathname}`, req.url)
    );
  }

  if (subdomain === "app") {
    return NextResponse.rewrite(
      new URL(`/app${req.nextUrl.pathname}`, req.url)
    );
  }

  if (subdomain === "pg") {
    return NextResponse.rewrite(new URL(`/pg${req.nextUrl.pathname}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
