import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const hostname = req.headers.get("host") || "";
  let subdomain = hostname.split(".")[0];

  if (!subdomain) {
    subdomain = "default";
  }

  const url = req.nextUrl.clone();

  url.searchParams.set("subdomain", subdomain);

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: "/:path*",
};
