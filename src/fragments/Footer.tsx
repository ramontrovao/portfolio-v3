import Image from "next/image";

import logo from "assets/logo.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full flex bg-zinc-950">
      <div className="max-w-6xl w-full border-t border-zinc-900 px-4 py-16 m-auto flex justify-between items-center max-sm:gap-4 max-sm:flex-wrap-reverse">
        <div className="text-gray-200">
          <p>feito com muito &hearts; por ramon trovão</p>
          <span>
            &copy; Todos os direitos reservados - Ramon Pinheiro Trovão da Silva
          </span>
        </div>

        <Link
          href="#"
          className="transition-all duration-300 hover:opacity-80">
          <Image
            className="max-w-[2rem]"
            src={logo}
            alt=""
            width={400}
            height={400}
          />
        </Link>
      </div>
    </footer>
  );
};
