import { NextMiddleware, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

const locales = ["pt", "en"];

export const middleware = createMiddleware({
  locales,
  defaultLocale: "pt",
});

export const config = {
  matcher: ["/((?!_next).*)"],
};
