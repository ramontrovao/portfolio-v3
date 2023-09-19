"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "assets/logo.svg";

import { THeaderData, TSocialMedia } from "types/THygraphData";
import { fetchHygraphQuery } from "utils/fetchHygraphQuery";

import { CommandModal } from "../components/CommandModal";

export const Header = () => {
  const [socialMedias, setSocialMedias] = useState<TSocialMedia[]>([]);

  const socialMediasQuery = `
  query SocialMediasQuery {
    page(where: {slug: "home"}) {
      info {
        socialMedias {
          id
          logoSvg
          name
          url
        }
      }
    }
  }
  `;

  useEffect(() => {
    const getSocialMedias = async (): Promise<void> => {
      const { page } = (await fetchHygraphQuery(
        socialMediasQuery
      )) as THeaderData;

      return setSocialMedias(page.info.socialMedias);
    };

    getSocialMedias();
  }, [socialMediasQuery]);

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
