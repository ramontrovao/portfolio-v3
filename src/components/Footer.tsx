import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="w-full flex bg-zinc-950">
      <div className="max-w-6xl w-full border-t border-zinc-900 px-4 py-16 m-auto flex justify-between items-center max-sm:gap-4 max-sm:flex-wrap-reverse">
        <div className="text-gray-200">
          <p>{t("made_with_love")}</p>
          <span>{t("legal_rights")}</span>
        </div>

        <Link href="#" className="transition-all duration-300 hover:opacity-80">
          <Image
            priority
            className="max-w-[2rem]"
            src="/images/logo.svg"
            alt=""
            width={400}
            height={400}
          />
        </Link>
      </div>
    </footer>
  );
};
