import { formatDistanceToNowStrict } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Card } from "fragments/Card";
import { TTechnology } from "types/THygraphData";

interface ITechsSection {
  techs: TTechnology[];
}

export const TechsSection = ({ techs }: ITechsSection) => {
  const formatDate = (date: Date) => {
    return formatDistanceToNowStrict(date, { locale: ptBR });
  };

  return (
    <section className="bg-zinc-950 w-full">
      <div className="max-w-6xl w-full m-auto p-4 flex gap-16 flex-col justify-center items-center">
        <header>
          <h2 className="text-gray-200 text-5xl font-bold max-w-2xl text-center">
            tec-no-lo-gi-as
          </h2>
        </header>

        <main className="w-full flex flex-col justify-center items-center md:grid md:grid-cols-2 md:place-items-center gap-4">
          {techs.map((tech) => (
            <Card
              cardName={tech.name}
              cardDescription={
                tech.startDate
                  ? `cerca de ${formatDate(
                      new Date(tech.startDate)
                    )} de experiência`
                  : "já usei em alguns projetos pessoais"
              }
              rightText={tech.iconSvg}
              key={tech.iconSvg}
            />
          ))}
        </main>
      </div>
    </section>
  );
};
