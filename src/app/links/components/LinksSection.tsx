import Image from "next/image";
import Link from "next/link";

import logo from "../../../assets/logo.svg";

export const LinksSection = () => {
  return (
    <section
      id="sobre-mim"
      className="bg-zinc-950 w-full">
      <div className="max-w-6xl h-screen w-full m-auto px-4 py-16 flex gap-16 flex-col justify-center items-center">
        <Image
          src="https://github.com/ramontrovao.png"
          alt=""
          width={350}
          height={350}
          className="rounded-full max-w-[12.5rem]"
        />

        <ul className="w-full max-w-sm">
          <li className="w-full flex gap-4 justify-center items-center border border-gray-400 rounded-lg text-gray-200 transition-all duration-300 hover:opacity-80 text-lg font-normal p-4">
            <Image
              className="w-5"
              src={logo}
              alt=""
            />
            <Link href="/">portfólio</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
