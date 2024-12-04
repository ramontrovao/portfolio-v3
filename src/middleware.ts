import createMiddleware from "next-intl/middleware";
import { locales } from "constants/locale";

export const middleware = createMiddleware({
  locales,
  defaultLocale: "en",
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
