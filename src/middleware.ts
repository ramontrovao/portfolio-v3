import { NextMiddleware, NextResponse } from "next/server";

const locales = ["pt_BR"];

export const middleware: NextMiddleware = (req) => {
  const { pathname } = req.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const defaultLocale = "pt_BR";

  req.nextUrl.pathname = `/${defaultLocale}${pathname}`;

  return NextResponse.redirect(req.nextUrl);
};

export const config = {
  matcher: ["/((?!_next).*)"],
};
