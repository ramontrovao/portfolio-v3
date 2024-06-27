"use client";

import { useState, FormEvent } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";

import { TAppRoute } from "types/TAppRoute";
import { TSocialMedia, TCurriculum } from "types/THygraphData";

import { Modal } from "fragments/Modal";
import { useTranslations } from "next-intl";

type TData = {
  more: TAppRoute[];
  socialMedias: TSocialMedia[];
  hasCurriculum: boolean;
};

interface ICommandModalProps {
  socialMedias: TSocialMedia[];
  curriculum: TCurriculum;
}

export const CommandModal = ({
  socialMedias,
  curriculum,
}: ICommandModalProps) => {
  const t = useTranslations("home");

  const moreRoutes: TAppRoute[] = [
    {
      id: 1,
      name: t("projects_title"),
      description: t("projects_description"),
      path: "/projects",
      icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-width="2" d="M9,15 L9,23 L1,23 L1,15 L9,15 Z M23,15 L23,23 L15,23 L15,15 L23,15 Z M9,1 L9,9 L1,9 L1,1 L9,1 Z M23,1 L23,9 L15,9 L15,1 L23,1 Z"></path></svg>`,
    },
    {
      id: 2,
      name: t("repositories_title"),
      description: t("repositories_description"),
      path: "/repositories",
      icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 16V14H19V4H6V14.0354C6.1633 14.0121 6.33024 14 6.5 14H8V16H6.5C5.67157 16 5 16.6716 5 17.5C5 18.3284 5.67157 19 6.5 19H10V21H6.5C4.567 21 3 19.433 3 17.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V20C21 20.5523 20.5523 21 20 21H16V19H19V16H18ZM7 5H9V7H7V5ZM7 8H9V10H7V8ZM14 17V23H12V17H9L13 12L17 17H14Z"></path></svg>`,
    },
    {
      id: 3,
      name: t("about_me_title"),
      description: t("about_me_description"),
      path: "/#sobre-mim",
      icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"></path></svg>`,
    },
    {
      id: 4,
      name: t("donate_title"),
      description: t("donate_description"),
      path: "/donate",
      icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z"></path></svg>`,
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState<TData>({
    more: moreRoutes,
    socialMedias: socialMedias,
    hasCurriculum: true,
  });

  const hasMoreData = modalData.more.length > 0;
  const hasSocialMediaOrCurriculumData =
    modalData.socialMedias.length > 0 || modalData.hasCurriculum;
  const hasData = hasMoreData || hasSocialMediaOrCurriculumData;

  const curriculumInnerText = "currículo";

  const handleCloseModal = () => {
    setModalIsOpen(false);

    return setModalData({
      more: moreRoutes,
      socialMedias,
      hasCurriculum: true,
    });
  };

  const onInputChange = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.trim().toLowerCase();

    if (value === "") {
      return setModalData({
        more: moreRoutes,
        socialMedias,
        hasCurriculum: true,
      });
    }

    const moreUpdated = moreRoutes.filter(
      (route) => route.name.toLowerCase().indexOf(value) !== -1
    );
    const socialMediasUpdated = socialMedias.filter(
      (socialMedia) => socialMedia.name.toLowerCase().indexOf(value) !== -1
    );
    const curriculumUpdated =
      curriculumInnerText.toLowerCase().indexOf(value) !== -1;

    return setModalData({
      more: moreUpdated,
      socialMedias: socialMediasUpdated,
      hasCurriculum: curriculumUpdated,
    });
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onOpenChange={setModalIsOpen}
      triggerComponent={
        <a className="p-4 outline-0 flex justify-center items-center bg-gray-200 text-gray-900 text-2xl rounded-full transition-all duration-300 hover:opacity-80">
          <MagnifyingGlass />
        </a>
      }
    >
      <main className="w-full">
        <header>
          <input
            onChange={onInputChange}
            placeholder="digite um comando ou pesquisa"
            type="text"
            className="w-full p-4 bg-transparent text-lg text-gray-400 border-b border-gray-800 outline-none"
          />
        </header>

        {hasData && (
          <main className="overflow-y-scroll h-80">
            {hasMoreData && (
              <section>
                <header className="px-4 pt-4">
                  <span className="text-gray-200 text-md">saiba mais</span>
                </header>

                <main>
                  <ul>
                    {modalData.more.map((route) => (
                      <li key={route.id}>
                        <Link
                          onClick={handleCloseModal}
                          className="group flex items-center gap-4 text-gray-400 text-lg p-4 w-full border-l-2 border-transparent hover:pl-6 hover:border-gray-400"
                          href={route.path}
                        >
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
            )}

            {hasSocialMediaOrCurriculumData && (
              <section>
                <header className="px-4 pt-4">
                  <span className="text-gray-200 text-md">links rápidos</span>
                </header>

                <main>
                  <ul>
                    {modalData.socialMedias.map((socialMedia) => (
                      <li key={socialMedia.id}>
                        <a
                          onClick={handleCloseModal}
                          className="group flex items-center gap-4 text-gray-400 text-lg p-4 w-full border-l-2 border-transparent hover:pl-6 hover:border-gray-400"
                          href={socialMedia.url}
                          target="_blank"
                        >
                          <span
                            className="group-hover:text-gray-200 text-gray-400"
                            dangerouslySetInnerHTML={{
                              __html: socialMedia.logoSvg,
                            }}
                          />
                          {socialMedia.name}
                        </a>
                      </li>
                    ))}
                    {modalData.hasCurriculum && (
                      <li>
                        <a
                          onClick={handleCloseModal}
                          className="group flex items-center gap-4 text-gray-400 text-lg p-4 w-full border-l-2 border-transparent hover:pl-6 hover:border-gray-400"
                          href={curriculum.file.url}
                          target="_blank"
                        >
                          <span
                            className="group-hover:text-gray-200 text-gray-400"
                            dangerouslySetInnerHTML={{ __html: curriculum.svg }}
                          />
                          {curriculumInnerText}
                        </a>
                      </li>
                    )}
                  </ul>
                </main>
              </section>
            )}
          </main>
        )}

        <footer className="w-full p-4 bg-transparent text-lg text-gray-400 border-t border-gray-800 ">
          pressione
          <span className="mx-2 bg-zinc-800 p-2 text-gray-200 rounded-lg">
            ESC
          </span>
          para fechar
        </footer>
      </main>
    </Modal>
  );
};
