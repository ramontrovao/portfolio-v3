"use client";

import { Button } from "fragments/Button";
import { Card } from "fragments/Card";
import { useArrayPagination } from "hooks/useArrayPagination";
import { useTranslations } from "next-intl";
import { TGithubRepository } from "types/TGithubData";

interface IRepositoriesSectionProps {
  repositories: TGithubRepository[];
}

export const RepositoriesSection = ({
  repositories,
}: IRepositoriesSectionProps) => {
  const t = useTranslations("repositories");
  const publicRepositories = Array.isArray(repositories)
    ? repositories.filter(
        (repository) =>
          repository.visibility === "public" &&
          repository.owner.login === "ramontrovao"
      )
    : [];

  const { arrayUpdated, nextPage, isOnLastPage } = useArrayPagination(
    8,
    publicRepositories
  );

  return (
    <section className="bg-zinc-950 w-full">
      <div className="max-w-6xl min-h-screen w-full m-auto px-4 py-32 flex gap-16 flex-col items-center">
        <header>
          <h2 className="text-gray-200 text-5xl font-bold max-w-2xl text-center">
            {t("repositories_title")}
          </h2>

          <p className="mt-4 text-gray-400 text-lg font-normal text-center">
            {t("repositories_description")}
          </p>
        </header>

        <main className="w-full flex flex-col justify-center items-center md:grid md:grid-cols-2 md:place-items-center gap-4">
          {(arrayUpdated as TGithubRepository[]).map((repository) => (
            <a
              className="w-full"
              target="_blank"
              title={t("repository_of", {
                name: repository.name,
                author: repository.full_name,
              })}
              key={repository.id}
              href={repository.git_url}
            >
              <Card
                cardName={repository.full_name}
                cardDescription={repository.description ?? t("no_description")}
              />
            </a>
          ))}
        </main>

        {!isOnLastPage && (
          <Button onClick={() => nextPage()}>
            {t("see_more_repositories")}
          </Button>
        )}
      </div>
    </section>
  );
};
