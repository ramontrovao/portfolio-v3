"use client";

import { formatDistanceToNowStrict } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import en from "date-fns/locale/en-US";
import { Button } from "fragments/Button";

import { Card } from "fragments/Card";
import { useArrayPagination } from "hooks/useArrayPagination";
import { useTranslations } from "next-intl";
import { TTechnology } from "types/THygraphData";

interface ITechsSection {
  techs: TTechnology[];
  locale: "pt" | "en";
}

export const TechsSection = ({ techs, locale }: ITechsSection) => {
  const t = useTranslations("home");
  const { arrayUpdated, nextPage, isOnLastPage } = useArrayPagination(4, techs);

  const formatDate = (date: Date) => {
    return formatDistanceToNowStrict(date, {
      locale: locale === "pt" ? ptBR : en,
    });
  };

  return (
    <section id="techs" className="bg-zinc-950 w-full">
      <div className="max-w-6xl w-full m-auto px-4 py-16 flex gap-16 flex-col justify-center items-center">
        <header>
          <h2 className="text-gray-200 text-5xl font-bold max-w-2xl text-center">
            {t("technologies")}
          </h2>
        </header>

        <main className="w-full flex flex-col justify-center items-center md:grid md:grid-cols-2 md:place-items-center gap-4">
          {(arrayUpdated as TTechnology[]).map((tech, index) => (
            <Card
              cardName={tech.name}
              cardDescription={
                tech.startDate
                  ? t("experience_content", {
                      time: formatDate(new Date(tech.startDate)),
                    })
                  : t("little_experience")
              }
              rightText={tech.iconSvg}
              key={tech.id}
            />
          ))}
        </main>

        {!isOnLastPage && (
          <Button onClick={() => nextPage()}>{t("see_more_techs")}</Button>
        )}
      </div>
    </section>
  );
};
