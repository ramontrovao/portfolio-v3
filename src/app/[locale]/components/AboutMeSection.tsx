import Link from "next/link";
import type { RichTextContent } from "@graphcms/rich-text-types";

import { RichText } from "components/RichText";
import { Button } from "components/Button";
import { ImageMotion } from "components/ImageMotion";
import { useTranslations } from "next-intl";

interface IAboutMeProps {
  image: string;
  text: RichTextContent;
}

export const AboutMeSection = ({ image, text }: IAboutMeProps) => {
  const t = useTranslations("home");

  return (
    <section id="sobre-mim" className="bg-zinc-950 w-full">
      <div className="max-w-6xl w-full m-auto px-4 py-16 flex gap-16 flex-col justify-center items-center">
        <header>
          <h2 className="text-gray-200 text-5xl font-bold max-w-2xl text-center">
            {t("about_me")}
          </h2>
        </header>

        <main className="relative w-full flex gap-4">
          <ImageMotion
            className="sticky max-w-[7.5rem] max-h-[7.5rem] md:max-w-[17.5rem] md:max-h-[17.5rem] top-2"
            src={image}
            width={500}
            height={500}
            alt=""
            aria-hidden
            animate={{
              borderRadius: ["30%", "10%", "20%", "25%", "30%"],
            }}
            transition={{
              repeat: Infinity,
              times: [0, 0.2, 0.5, 0.8, 1],
              duration: 2,
            }}
          />

          <div className="text-gray-400 flex flex-col gap-6 flex-1 font-normal text-md">
            <RichText content={text} />

            <Link href="#contato">
              <Button>{t("get_in_touch")}</Button>
            </Link>
          </div>
        </main>
      </div>
    </section>
  );
};
