import { NextMiddleware, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { locales } from "constants/locale";

export const middleware = createMiddleware({
  locales,
  defaultLocale: "pt",
});

export const config = {
  matcher: ["/((?!_next).*)"],
};
