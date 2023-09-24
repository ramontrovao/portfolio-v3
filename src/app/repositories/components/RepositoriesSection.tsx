"use client";

import { Button } from "fragments/Button";
import { Card } from "fragments/Card";
import { useArrayPagination } from "hooks/useArrayPagination";
import { TGithubRepository } from "types/TGithubData";

interface IRepositoriesSectionProps {
  repositories: TGithubRepository[];
}

export const RepositoriesSection = ({
  repositories,
}: IRepositoriesSectionProps) => {
  const publicRepositories = repositories.filter(
    (repository) =>
      repository.visibility === "public" &&
      repository.owner.login === "ramontrovao"
  );

  const { arrayUpdated, nextPage, isOnLastPage } = useArrayPagination(
    8,
    publicRepositories
  );

  return (
    <section className="bg-zinc-950 w-full">
      <div className="max-w-6xl min-h-screen w-full m-auto px-4 py-32 flex gap-16 flex-col items-center">
        <header>
          <h2 className="text-gray-200 text-5xl font-bold max-w-2xl text-center">
            re-po-si-tó-rios
          </h2>

          <p className="mt-4 text-gray-400 text-lg font-normal text-center">
            aqui estão listados todos os meus repositórios públicos =D
          </p>
        </header>

        <main className="w-full flex flex-col justify-center items-center md:grid md:grid-cols-2 md:place-items-center gap-4">
          {(arrayUpdated as TGithubRepository[]).map((repository) => (
            <a
              className="w-full"
              target="_blank"
              title={`Repositório do github de nome "${repository.name}" com autor ${repository.full_name}`}
              key={repository.id}
              href={repository.html_url}>
              <Card
                cardName={repository.full_name}
                cardDescription={repository.description ?? "sem descrição :("}
              />
            </a>
          ))}
        </main>

        {!isOnLastPage && (
          <Button onClick={() => nextPage()}>ver mais repostórios</Button>
        )}
      </div>
    </section>
  );
};
