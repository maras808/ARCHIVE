import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import cookies, { CookieNames } from "./src/utils/cookies/cookies";
import { featureFlags } from "./src/utils/featureFlags";
export async function middleware(request: NextRequest) {
  const { exists } = cookies();
  if (
    request.nextUrl.pathname === "/" &&
    featureFlags.redirectFromRoot &&
    (await exists(CookieNames.redirectFromRoot))
  ) {
    return NextResponse.redirect(new URL("/select", request.url));
  }
}
