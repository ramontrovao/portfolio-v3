import Link from "next/link";

import { CommandModal } from "./CommandModal";
import { ImageMotion } from "./ImageMotion";
import { ProgressHeader } from "./ProgressHeader";
import { SelectLanguage } from "components/SelectLanguage";
import { getHeaderData } from "services/getHeaderData";

export const Header = async () => {
  const { page } = await getHeaderData();

  const socialMedias = page.info.socialMedias;
  const curriculum = page.info.curriculum;

  return (
    <header className="z-40 fixed w-full flex bg-transparent">
      <ProgressHeader />

      <nav className="max-w-6xl w-full px-4 py-8 m-auto flex justify-between items-center">
        <Link className="transition-all duration-300 hover:opacity-80" href="/">
          <ImageMotion
            src="images/logo.svg"
            alt=""
            width={400}
            height={650}
            className="max-w-[2rem]"
          />
        </Link>

        <div className="flex gap-2 justi-center items-center">
          <SelectLanguage />
          <CommandModal socialMedias={socialMedias} curriculum={curriculum} />
        </div>
      </nav>
    </header>
  );
};
