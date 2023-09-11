import Image from "next/image";
import line from "assets/line.svg";

export const IntroductionSection = () => {
  return (
    <section className="bg-zinc-950 w-full min-h-screen">
      <div className="max-w-6xl w-full m-auto px-4 py-24 flex gap-8 flex-col justify-center items-center">
        <div className="flex justify-center items-center flex-col gap-4">
          <Image
            src="https://github.com/ramontrovao.png"
            alt=""
            width={350}
            height={350}
            className="rounded-full max-w-[12.5rem]"
          />

          <span className="text-gray-300 text-xl">
            olá, sou ramon trovão :)
          </span>
        </div>

        <div className="relative">
          <h1 className="text-gray-200 relative z-20 text-5xl font-bold max-w-2xl text-center">
            desenvolvo as melhores interfaces para o seu negócio
          </h1>

          <Image
            className="absolute top-7 z-10"
            src={line}
            width={375}
            height={40}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
