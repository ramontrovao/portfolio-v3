import { locales } from "constants/locale";
import { Pathnames } from "next-intl/routing";

export const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "/projects": "/projects",
  "/donate": "/donate",
  "/repositories": "/repositories",
};
