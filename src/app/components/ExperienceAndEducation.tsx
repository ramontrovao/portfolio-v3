import { TEducation, TExperience } from "types/THygraphData";

interface IExperienceAndEducationProps {
  experiences: TExperience[];
  educations: TEducation[];
}

export const ExperienceAndEducation = ({
  experiences,
  educations,
}: IExperienceAndEducationProps) => {
  return (
    <section className="bg-zinc-950 w-full">
      <div className="max-w-6xl w-full m-auto p-4 flex justify-between items-center flex-wrap md:flex-nowrap gap-16">
        <article>
          <header>
            <h2 className="text-gray-200 text-5xl font-bold max-w-2xl text-center">
              ex-pe-ri-ên-cias
            </h2>
          </header>

          <main className="w-full flex flex-col justify-center items-center gap-4"></main>
        </article>

        <article>
          <header>
            <h2 className="text-gray-200 text-5xl font-bold max-w-2xl text-center">
              e-du-ca-ção
            </h2>
          </header>

          <main className="w-full flex flex-col justify-center items-center gap-4"></main>
        </article>
      </div>
    </section>
  );
};
