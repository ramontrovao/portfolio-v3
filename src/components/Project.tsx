"use client";

import Image from "next/image";
import { TProject } from "types/THygraphData";
import { motion } from "framer-motion";

interface IProjectProps {
  project: TProject;
}

export const Project = ({
  project: {
    name,
    prodUrl,
    repoUrl,
    description,
    projectTechnologies,
    wallpaper,
  },
}: IProjectProps) => {
  return (
    <motion.a
      href={prodUrl ?? repoUrl}
      target="_blank"
      className="relative w-full group max-md:pr-4 pl-4 py-4 max-w-[45rem] min-h-[15rem] flex gap-6 flex-wrap justify-center items-center overflow-hidden bg-gradient-to-r from-zinc-950 to-zinc-900 border border-gray-500 rounded-md md:flex-nowrap md:justify-between"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="flex md:flex-[0.5] z-30 flex-col gap-6">
        <h2 className="text-gray-200 font-bold text-2xl">{name}</h2>

        <p className="text-gray-400 font-normal text-md">{description}</p>

        <ul className="flex gap-2 flex-wrap">
          {projectTechnologies.map((tech) => (
            <li
              className="text-2xl text-gray-400"
              key={tech.id}
              dangerouslySetInnerHTML={{ __html: tech.iconSvg }}
            />
          ))}
        </ul>
      </div>

      <Image
        className="rounded-md right-0 w-full transition-all min-h-[11rem]  duration-300 md:-mr-10 md:absolute md:group-hover:-mr-5 md:max-w-[20rem]"
        src={wallpaper.url}
        width={1920}
        height={1080}
        alt=""
      />
    </motion.a>
  );
};
