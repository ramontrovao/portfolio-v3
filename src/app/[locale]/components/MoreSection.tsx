import Link from "next/link";
import { Card } from "fragments/Card";
import { moreRoutes } from "constants/appRoutes";

export const MoreSection = () => {
  return (
    <section className="bg-zinc-950 w-full">
      <div className="max-w-6xl w-full m-auto px-4 py-16 flex gap-16 flex-col justify-center items-center">
        <header>
          <h2 className="text-gray-200 text-5xl font-bold max-w-2xl text-center">
            saiba-mais
          </h2>
        </header>

        <main className="w-full flex flex-col justify-center items-center md:grid md:grid-cols-2 md:place-items-center gap-4">
          {moreRoutes.map((route) => (
            <Link key={route.id} href={route.path}>
              <Card
                cardName={route.name}
                cardDescription={route.description}
                hasHoverAnimation
              />
            </Link>
          ))}
        </main>
      </div>
    </section>
  );
};
