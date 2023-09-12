import Image from "next/image";
import Link from "next/link";
import type { RichTextContent } from "@graphcms/rich-text-types";

import { RichText } from "fragments/RichText";
import { Button } from "fragments/Button";

interface IAboutMeProps {
  image: string;
  text: RichTextContent;
}

export const AboutMeSection = ({ image, text }: IAboutMeProps) => {
  return (
    <section className="bg-zinc-950 w-full">
      <div className="max-w-6xl w-full m-auto p-4 flex gap-16 flex-col justify-center items-center">
        <header>
          <h2 className="text-gray-200 text-5xl font-bold max-w-2xl text-center">
            sobre-mim
          </h2>
        </header>

        <main className="relative w-full flex gap-4">
          <Image
            className="sticky max-w-[7.5rem] max-h-[7.5rem] md:max-w-[17.5rem] md:max-h-[17.5rem] top-2 rounded-lg"
            src={image}
            width={500}
            height={500}
            alt=""
          />

          <div className="text-gray-400 flex flex-col gap-6 flex-1 font-normal text-md">
            <RichText content={text} />

            <Link href="#contato">
              <Button>entrar em contato!</Button>
            </Link>
          </div>
        </main>
      </div>
    </section>
  );
};
