"use client";

import { Card } from "fragments/Card";
import { useArrayPagination } from "hooks/useArrayPagination";
import { TEducation, TExperience } from "types/THygraphData";

interface IExperienceAndEducationProps {
  experiences: TExperience[];
  educations: TEducation[];
}

export const ExperienceAndEducation = ({
  experiences,
  educations,
}: IExperienceAndEducationProps) => {
  const experiencesWithPagination = useArrayPagination(1, experiences);
  const educationsWithPagination = useArrayPagination(1, educations);

  const sliceFullDate = (date: string) => {
    const slicedDate = date.slice(0, 7);

    return slicedDate;
  };

  const handleNextExperiencesPage = () => experiencesWithPagination.nextPage();

  const handleNextEducationsPage = () => educationsWithPagination.nextPage();

  return (
    <section className="bg-zinc-950 w-full">
      <div className="max-w-6xl w-full m-auto p-4 flex gap-16 justify-center md:justify-between flex-wrap md:flex-nowrap">
        <article className="w-full md:w-1/2">
          <header>
            <h2 className="text-gray-200 text-5xl font-bold max-w-2xl text-center">
              ex-pe-ri-ên-cias
            </h2>
          </header>

          <main className="w-full mt-8 flex flex-col justify-center items-center gap-4">
            {(experiencesWithPagination.arrayUpdated as TExperience[]).map(
              (experience) => (
                <Card
                  cardName={experience.name}
                  rightText={`${sliceFullDate(experience.startDate)} ~ ${
                    experience.endDate
                      ? sliceFullDate(experience.endDate)
                      : "atual"
                  }`}
                  rightTextSize="md"
                  cardDescription={experience.shortDescription}
                  key={experience.startDate}
                />
              )
            )}
          </main>

          {!experiencesWithPagination.isOnLastPage && (
            <button
              onClick={handleNextExperiencesPage}
              className="mt-4 bg-none border-none text-lg font-normal text-gray-400 transition-all duration-300 hover:opacity-80">
              ver mais
            </button>
          )}
        </article>

        <article className="w-full md:w-1/2">
          <header>
            <h2 className="text-gray-200 text-5xl font-bold max-w-2xl text-center">
              e-du-ca-ção
            </h2>
          </header>

          <main className="w-full mt-8 flex flex-col justify-center items-center gap-4">
            {(educationsWithPagination.arrayUpdated as TEducation[]).map(
              (education) => (
                <Card
                  cardName={education.name}
                  rightText={`${sliceFullDate(education.startDate)} ~ ${
                    education.endDate
                      ? sliceFullDate(education.endDate)
                      : "atual"
                  }`}
                  rightTextSize="md"
                  cardDescription={education.shortDescription}
                  key={education.startDate}
                />
              )
            )}
          </main>

          {!educationsWithPagination.isOnLastPage && (
            <button
              onClick={handleNextExperiencesPage}
              className="mt-4 bg-none border-none text-lg font-normal text-gray-400 transition-all duration-300 hover:opacity-80">
              ver mais
            </button>
          )}
        </article>
      </div>
    </section>
  );
};
