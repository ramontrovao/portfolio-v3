import Image from "next/image";
import Link from "next/link";

import type { TSocialMedia } from "types/THygraphData";
import { useTranslations } from "next-intl";

interface ILinksSectionProps {
  links: TSocialMedia[];
  name: string;
}

export const LinksSection = ({ links, name }: ILinksSectionProps) => {
  const t = useTranslations("links");

  return (
    <section id="sobre-mim" className="bg-zinc-950 w-full">
      <div className="max-w-6xl h-screen w-full m-auto px-4 py-32 flex gap-12 flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <Image
            src="https://github.com/ramontrovao.png"
            alt=""
            aria-hidden
            width={350}
            height={350}
            className="rounded-full max-w-[12.5rem]"
          />

          <strong className="text-2xl text-gray-200 font-normal">
            {t("links_title", { name })}
          </strong>
        </div>

        <ul className="w-full max-w-sm flex flex-col gap-8">
          <li className="w-full border border-gray-400 rounded-lg text-gray-200 transition-all duration-300 hover:opacity-80 text-lg font-normal">
            <Link
              href="/"
              className="p-4 flex gap-4 justify-center items-center"
            >
              <Image
                className="w-5"
                src="/images/logo.svg"
                width={350}
                height={350}
                alt=""
                aria-hidden
              />
              <span>{t("portfolio")}</span>
            </Link>
          </li>

          {links.map((link) => (
            <li
              key={link.id}
              className="w-full border border-gray-400 rounded-lg text-gray-200 transition-all duration-300 hover:opacity-80 text-lg font-normal"
            >
              <a
                className="p-4 flex gap-4 justify-center items-center"
                href={link.url}
                target="_blank"
              >
                <span dangerouslySetInnerHTML={{ __html: link.logoSvg }} />
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
