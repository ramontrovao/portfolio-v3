import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import hamud from "assets/hamud.gif";

export const metadata: Metadata = {
  title: "não encontrado",
};

export default function NotFound() {
  return (
    <main>
      <section className="bg-zinc-950 w-full">
        <div className="max-w-6xl w-full h-screen m-auto px-4 py-16 flex gap-16 flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              className="mb-10 rounded-lg"
              src={hamud}
              alt=""
            />

            <h1 className="text-gray-200 text-center text-6xl font-bold">
              404
            </h1>
            <p className="text-gray-400 text-center text-2xl font-normal">
              página não encontrada.
            </p>
          </div>

          <Link
            className="text-gray-200 text-center text-2xl font-bold transition-all duration-300 hover:opacity-80"
            href="/">
            clique aqui para voltar pro início :)
          </Link>
        </div>
      </section>
    </main>
  );
}
