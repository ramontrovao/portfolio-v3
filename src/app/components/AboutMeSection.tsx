import { Card } from "fragments/Card";
import Image from "next/image";

interface IAboutMeProps {
  image: string;
  text: string;
}

export const AboutMeSection = ({ image, text }: IAboutMeProps) => {
  return (
    <section className="bg-zinc-950 w-full">
      <div className="max-w-6xl w-full m-auto p-4 flex gap-16 flex-col justify-center items-center">
        <header>
          <h2 className="text-gray-200 text-5xl font-bold max-w-2xl text-center">
            tec-no-lo-gi-as
          </h2>
        </header>

        <main className="w-full flex flex-col justify-center items-center md:grid md:grid-cols-2 md:place-items-center gap-4">
          <Image
            src={image}
            width={600}
            height={850}
            alt=""
          />

          <div dangerouslySetInnerHTML={{ __html: text }} />
        </main>
      </div>
    </section>
  );
};
