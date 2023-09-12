import Link from "next/link";
import { Card } from "fragments/Card";

export const PortfolioSection = () => {
  return (
    <section className="bg-zinc-950 w-full">
      <div className="max-w-6xl w-full m-auto p-4 flex gap-16 flex-col justify-center items-center">
        <header>
          <h2 className="text-gray-200 text-5xl font-bold max-w-2xl text-center">
            por-t-fó-lio
          </h2>
        </header>

        <main className="flex flex-col justify-center items-center gap-4">
          <div className="flex gap-4 justify-center items-center flex-wrap md:flex-nowrap">
            <Link href="/projects">
              <Card
                cardName="projetos"
                cardDescription="meus projetos mais legais e incríveis, os que eu gostei bastente de fazer! :D"
              />
            </Link>

            <Link href="/repositories">
              <Card
                cardName="repositórios"
                cardDescription="quer ver todos os meus trabalhos públicos até agora? esse é o lugar certo."
              />
            </Link>
          </div>

          <div className="flex gap-4 flex-wrap md:flex-nowrap">
            <Link href="#techs">
              <Card
                cardName="techs"
                cardDescription="descubra quais tecnologias/linguagens eu domino e quais eu possui conhecimento aqui. :o"
              />
            </Link>

            <Link href="#contato">
              <Card
                cardName="contato"
                cardDescription="ei, você que está lendo, o que está esperando pra gente bater aquele papo? :)"
              />
            </Link>
          </div>
        </main>
      </div>
    </section>
  );
};
