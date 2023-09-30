import Image from "next/image";
import Link from "next/link";

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

        <ul>
          <li>
            <Link href="/">portfólio</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
