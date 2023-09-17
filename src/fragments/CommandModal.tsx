import Link from "next/link";
import { MagnifyingGlass } from "@phosphor-icons/react";

import { Modal } from "components/Modal";
import { appRoutes } from "constants/appRoutes";

export const CommandModal = () => {
  const openAnchor = (
    <a className="p-4 outline-none flex justify-center items-center bg-gray-200 text-gray-900 text-2xl rounded-full transition-all duration-300 hover:opacity-80">
      <MagnifyingGlass />
    </a>
  );

  const data = [appRoutes];

  return (
    <Modal triggerComponent={openAnchor}>
      <main className="w-full">
        <header>
          <input
            placeholder="escreva um comando ou pesquisa"
            type="text"
            className="w-full p-4 bg-transparent text-lg text-gray-400 border-b border-gray-800 outline-none"
          />
        </header>

        <main className="overflow-y-scroll h-80">
          <section>
            <header className="px-4 pt-4">
              <span className="text-gray-200 text-md">navegação</span>
            </header>

            <main>
              <ul>
                {data[0].map((route) => (
                  <li key={route.id}>
                    <Link
                      className="group flex items-center gap-4 text-gray-400 text-lg p-4 w-full border-l-2 border-transparent hover:pl-6 hover:border-gray-400"
                      href={route.path}>
                      <span
                        className="group-hover:text-gray-200 text-gray-400"
                        dangerouslySetInnerHTML={{ __html: route.icon }}
                      />

                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </main>
          </section>
        </main>

        <footer className="w-full p-4 bg-transparent text-lg text-gray-400 border-t border-gray-800 ">
          aperte
          <span className="mx-2 bg-zinc-800 p-2 text-gray-200 rounded-lg">
            ESC
          </span>
          para fechar
        </footer>
      </main>
    </Modal>
  );
};
