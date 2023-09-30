"use client";

import { useState, FormEvent } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";

import { TAppRoute } from "types/TAppRoute";
import { TSocialMedia, TCurriculum } from "types/THygraphData";

import { meRoutes, portfolioRoutes } from "constants/appRoutes";

import { Modal } from "fragments/Modal";

type TData = {
  portfolio: TAppRoute[];
  me: TAppRoute[];
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState<TData>({
    portfolio: portfolioRoutes,
    me: meRoutes,
    socialMedias: socialMedias,
    hasCurriculum: true,
  });

  const hasPortfolioData = modalData.portfolio.length > 0;
  const hasMeData = modalData.me.length > 0;
  const hasSocialMediaOrCurriculumData =
    modalData.socialMedias.length > 0 || modalData.hasCurriculum;
  const hasData =
    hasPortfolioData || hasMeData || hasSocialMediaOrCurriculumData;

  const curriculumInnerText = "currículo";

  const handleCloseModal = () => {
    setModalIsOpen(false);

    return setModalData({
      portfolio: portfolioRoutes,
      me: meRoutes,
      socialMedias,
      hasCurriculum: true,
    });
  };

  const onInputChange = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.trim().toLowerCase();

    if (value === "") {
      // resets data found
      return setModalData({
        portfolio: portfolioRoutes,
        me: meRoutes,
        socialMedias,
        hasCurriculum: true,
      });
    }

    const portfolioUpdated = portfolioRoutes.filter(
      (route) => route.name.toLowerCase().indexOf(value) !== -1
    );
    const meUpdated = meRoutes.filter(
      (route) => route.name.toLowerCase().indexOf(value) !== -1
    );
    const socialMediasUpdated = socialMedias.filter(
      (socialMedia) => socialMedia.name.toLowerCase().indexOf(value) !== -1
    );
    const curriculumUpdated =
      curriculumInnerText.toLowerCase().indexOf(value) !== -1;

    return setModalData({
      portfolio: portfolioUpdated,
      me: meUpdated,
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
      }>
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
            {hasPortfolioData && (
              <section>
                <header className="px-4 pt-4">
                  <span className="text-gray-200 text-md">portfolio</span>
                </header>

                <main>
                  <ul>
                    {modalData.portfolio.map((route) => (
                      <li key={route.id}>
                        <Link
                          onClick={handleCloseModal}
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
            )}

            {hasMeData && (
              <section>
                <header className="px-4 pt-4">
                  <span className="text-gray-200 text-md">eu</span>
                </header>

                <main>
                  <ul>
                    {modalData.me.map((route) => (
                      <li key={route.id}>
                        <Link
                          onClick={handleCloseModal}
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
                          target="_blank">
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
                          target="_blank">
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
