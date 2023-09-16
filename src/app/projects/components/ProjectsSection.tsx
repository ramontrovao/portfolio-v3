"use client";

import { Button } from "fragments/Button";
import { useArrayPagination } from "hooks/useArrayPagination";
import { TProject } from "types/THygraphData";

interface IProjectsSectionProps {
  projects: TProject[];
}

export const ProjectsSection = ({ projects }: IProjectsSectionProps) => {
  const { arrayUpdated, nextPage, isOnLastPage } = useArrayPagination(
    4,
    projects
  );

  return (
    <section className="bg-zinc-950 w-full">
      <div className="max-w-6xl min-h-screen w-full m-auto px-4 py-32 flex gap-16 flex-col items-center">
        <header>
          <h2 className="text-gray-200 text-5xl font-bold max-w-2xl text-center">
            pro-je-tos
          </h2>

          <p className="mt-4 text-gray-400 text-lg font-normal text-center">
            somente os meus melhores e mais legais projetos
          </p>
        </header>

        <main className="w-full flex flex-col justify-center items-center md:grid md:grid-cols-2 md:place-items-center gap-4">
          {(arrayUpdated as TProject[]).map((project) => (
            <h1 key={project.id}>{project.name}</h1>
          ))}
        </main>

        {!isOnLastPage && (
          <Button onClick={() => nextPage()}>ver mais projetos</Button>
        )}
      </div>
    </section>
  );
};
