"use client";

import Image from "next/image";
import logo from "assets/logo.svg";
import { MagnifyingGlass } from "@phosphor-icons/react";

export const Header = () => {
  return (
    <header className="fixed w-full flex bg-transparent">
      <nav className="max-w-6xl w-full p-8 m-auto flex justify-between items-center">
        <a
          className="transition-all duration-300 hover:opacity-80"
          href="#">
          <Image
            src={logo}
            alt=""
            width={400}
            height={650}
            className="max-w-[2rem]"
          />
        </a>

        <button className="bg-slate-200 transition-all duration-300 hover:opacity-80 rounded-full p-3 text-2xl">
          <MagnifyingGlass />
        </button>
      </nav>
    </header>
  );
};
