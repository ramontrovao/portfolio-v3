import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { pathnames } from "config";
import { locales } from "constants/locale";

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
  });
