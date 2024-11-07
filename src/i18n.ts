import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "constants/locale";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    timeZone: "America/Sao_Paulo",
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
