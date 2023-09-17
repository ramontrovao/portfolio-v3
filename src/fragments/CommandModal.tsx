import { MagnifyingGlass } from "@phosphor-icons/react";
import { Modal } from "components/Modal";

export const CommandModal = () => {
  const openAnchor = (
    <a className="p-4 flex justify-center items-center bg-gray-200 text-gray-900 text-2xl rounded-full">
      <MagnifyingGlass />
    </a>
  );

  return (
    <Modal triggerComponent={openAnchor}>
      <main className="w-full">
        <input
          placeholder="escreva um comando ou pesquisa"
          type="text"
          className="w-full p-4 bg-transparent text-lg text-gray-400 border-b border-gray-800 outline-none"
        />

        <section>
          <header className="p-4">
            <span className="text-gray-400 text-md">navegação</span>
          </header>

          <main>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
            </ul>
          </main>
        </section>
      </main>
    </Modal>
  );
};
