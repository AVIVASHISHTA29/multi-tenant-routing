import { data } from "@/constants/config";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const subdomain = body.subdomain || "default";

  const subdomainData = data[subdomain] || data.default;
  return NextResponse.json(subdomainData);
}
