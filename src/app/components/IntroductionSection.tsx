"use client";

import Image from "next/image";
import line from "assets/line.svg";
import { motion } from "framer-motion";
import { ImageMotion } from "fragments/ImageMotion";

interface IIntroductionSectionProps {
  name: string;
  headline: string;
}

export const IntroductionSection = ({
  name,
  headline,
}: IIntroductionSectionProps) => {
  return (
    <section className="bg-zinc-950 w-full">
      <div className="max-w-6xl min-h-screen w-full m-auto px-4 py-32 flex gap-8 flex-col justify-center items-center">
        <div className="flex justify-center items-center flex-col gap-4">
          <ImageMotion
            src="https://github.com/ramontrovao.png"
            alt=""
            width={350}
            height={350}
            className="max-w-[12.5rem] rounded-full transition-all duration-700 hover:rounded-lg"
          />

          <span className="text-gray-300 text-xl">olá, sou {name} :)</span>
        </div>

        <div className="relative overflow-hidden">
          <h1 className="text-gray-200 relative z-20 text-5xl font-bold md:max-w-2xl max-w-full text-center">
            {headline}
          </h1>

          <ImageMotion
            className="absolute top-7 left-4 z-10 max-w-xs"
            src={line}
            width={375}
            height={40}
            alt=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          />
        </div>
      </div>
    </section>
  );
};
