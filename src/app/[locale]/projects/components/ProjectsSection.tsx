"use client";

import { Button } from "fragments/Button";
import { Project } from "fragments/Project";
import { useArrayPagination } from "hooks/useArrayPagination";
import { useTranslations } from "next-intl";
import { TProject } from "types/THygraphData";

interface IProjectsSectionProps {
  projects: TProject[];
}

export const ProjectsSection = ({ projects }: IProjectsSectionProps) => {
  const t = useTranslations("projects");
  const { arrayUpdated, nextPage, isOnLastPage } = useArrayPagination(
    3,
    projects
  );

  return (
    <section className="bg-zinc-950 w-full">
      <div className="max-w-6xl min-h-screen w-full m-auto px-4 py-32 flex gap-16 flex-col justify-center items-center">
        <header>
          <h2 className="text-gray-200 text-5xl font-bold max-w-2xl text-center">
            {t("projects_title")}
          </h2>

          <p className="mt-4 text-gray-400 text-lg font-normal text-center">
            {t("projects_description")}
          </p>
        </header>

        <main className="w-full flex flex-col justify-center items-center gap-12">
          {(arrayUpdated as TProject[]).map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </main>

        {!isOnLastPage && (
          <Button onClick={() => nextPage()}>{t("see_more_projects")}</Button>
        )}
      </div>
    </section>
  );
};
