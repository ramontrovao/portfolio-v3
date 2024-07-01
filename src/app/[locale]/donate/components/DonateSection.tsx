import { useTranslations } from "next-intl";
import Image from "next/image";

export const DonateSection = () => {
  const t = useTranslations("donate");

  return (
    <section id="contato" className="bg-zinc-950 w-full">
      <div className="max-w-6xl w-full min-h-screen-without-footer-and-header  m-auto px-4 py-32 flex gap-16 flex-col justify-center items-center">
        <h2 className="text-gray-400 text-xl md:text-3xl font-normal max-w-2xl text-center">
          {t("donate_title")}
        </h2>

        <Image
          src="https://github.com/ramontrovao.png"
          alt=""
          width={350}
          height={350}
          className="rounded-full max-w-[12.5rem]"
        />

        <div className="flex flex-col gap-4">
          <strong className="text-gray-200 transition-all duration-300 hover:opacity-80 text-2xl md:text-4xl font-bold max-w-2xl text-center">
            pix@ramontrovao.dev
          </strong>

          <span className="text-gray-400 text-md font-normal text-center">
            {t("donate_description")}
          </span>
        </div>
      </div>
    </section>
  );
};
