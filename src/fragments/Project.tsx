import Image from "next/image";
import { TProject } from "types/THygraphData";

interface IProjectProps {
  project: TProject;
}

export const Project = ({
  project: { name, description, projectTechnologies, wallpaper },
}: IProjectProps) => {
  return (
    <article className="w-full group  max-md:pr-4 pl-4 py-4 max-w-[45rem] min-h-[15rem] flex gap-6 flex-wrap justify-center items-center overflow-hidden bg-gradient-to-r from-zinc-950 to-zinc-900 border border-gray-500 rounded-md md:flex-nowrap md:justify-between">
      <div className="flex flex-col gap-6">
        <h2 className="text-gray-200 font-bold text-2xl">{name}</h2>

        <p className="text-gray-400 font-normal text-md">{description}</p>

        <ul>
          {projectTechnologies.map((tech) => (
            <li
              key={tech.id}
              dangerouslySetInnerHTML={{ __html: tech.iconSvg }}
            />
          ))}
        </ul>
      </div>

      <Image
        className="rounded-md w-full md:-mr-5 transition-all duration-300 md:group-hover:-mr-0 md:max-w-[20rem] min-h-[15rem]"
        src={wallpaper.url}
        width={400}
        height={400}
        alt=""
      />
    </article>
  );
};
