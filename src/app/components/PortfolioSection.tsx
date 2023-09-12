import { Card } from "fragments/Card";

export const PortfolioSection = () => {
  return (
    <section className="bg-zinc-950 w-full">
      <div className="max-w-6xl w-full m-auto px-4 py-24 flex gap-8 flex-col justify-center items-center">
        <header>
          <h2 className="text-gray-200 text-5xl font-bold max-w-2xl text-center">
            por-t-fó-lio
          </h2>
        </header>

        <main className="flex flex-col justify-center items-center gap-4">
          <div className="flex gap-4 flex-wrap md:flex-nowrap">
            <Card
              cardName="projetos"
              cardDescription="meus projetos mais legais e incríveis, os que eu gostei bastente de fazer! :D"
            />

            <Card
              cardName="projetos"
              cardDescription="meus projetos mais legais e incríveis, os que eu gostei bastente de fazer! :D"
            />
          </div>

          <Card
            cardName="projetos"
            cardDescription="meus projetos mais legais e incríveis, os que eu gostei bastente de fazer! :D"
          />
        </main>
      </div>
    </section>
  );
};
