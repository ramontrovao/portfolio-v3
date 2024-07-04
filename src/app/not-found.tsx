import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import hamud from "assets/hamud.gif";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "não encontrado",
};

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "not_found" });

  return {
    title: t("title"),
  };
}

export default function NotFound() {
  const t = useTranslations("not_found");

  return (
    <main>
      <section className="bg-zinc-950 w-full">
        <div className="max-w-6xl w-full h-screen m-auto px-4 py-16 flex gap-16 flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              className="mb-10 rounded-lg"
              src={hamud}
              alt=""
              aria-hidden
            />

            <h1 className="text-gray-200 text-center text-6xl font-bold">
              404
            </h1>
            <p className="text-gray-400 text-center text-2xl font-normal">
              {t("page_not_found")}
            </p>
          </div>

          <Link
            className="text-gray-200 text-center text-2xl font-bold transition-all duration-300 hover:opacity-80"
            href="/"
          >
            {t("go_back")}
          </Link>
        </div>
      </section>
    </main>
  );
}
