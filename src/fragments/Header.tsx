"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "assets/logo.svg";

import { CommandModal } from "../components/CommandModal";

export const Header = () => {
  return (
    <header className="fixed w-full flex bg-transparent">
      <nav className="max-w-6xl w-full px-4 py-8 m-auto flex justify-between items-center">
        <Link
          className="transition-all duration-300 hover:opacity-80"
          href="/">
          <Image
            src={logo}
            alt=""
            width={400}
            height={650}
            className="max-w-[2rem]"
          />
        </Link>

        <CommandModal />
      </nav>
    </header>
  );
};
