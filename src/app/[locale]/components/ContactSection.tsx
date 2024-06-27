import { useTranslations } from "next-intl";
import { TSocialMedia } from "types/THygraphData";

interface IContactSectionProps {
  email: string;
  phone: string;
  curriculumUrl: string;
  curriculumSvg: string;
  socialMedias: TSocialMedia[];
}

export const ContactSection = ({
  email,
  phone,
  socialMedias,
  curriculumUrl,
  curriculumSvg,
}: IContactSectionProps) => {
  const t = useTranslations("home");

  return (
    <section id="contato" className="bg-zinc-950 w-full">
      <div className="max-w-6xl w-full m-auto px-4 py-16 flex gap-16 flex-col justify-center items-center">
        <h2 className="text-gray-400 text-xl md:text-3xl font-normal max-w-2xl text-center">
          {t("contact")}
        </h2>

        <strong className="text-gray-200 transition-all duration-300 hover:opacity-80 text-2xl md:text-4xl font-bold max-w-2xl text-center">
          <a href={`mailto:${email}`}>{email}</a>
        </strong>

        <div className="flex justify-center items-center gap-4 text-gray-400">
          <ul className="flex justify-center items-center gap-4">
            {socialMedias.map((socialMedia) => (
              <li
                className="flex justify-center items-center"
                key={socialMedia.id}
              >
                <a
                  className="text-gray-400 transition-all duration-300 text-2xl font-normal text-center hover:opacity-80"
                  href={socialMedia.url}
                  target="_blank"
                  title={`Visitar o meu ${socialMedia.name}`}
                  dangerouslySetInnerHTML={{ __html: socialMedia.logoSvg }}
                />
              </li>
            ))}
            <li>
              <a
                className="text-gray-400 transition-all duration-300 text-2xl font-normal text-center hover:opacity-80"
                href={curriculumUrl}
                target="_blank"
                title={`Acesse meu currículo`}
                dangerouslySetInnerHTML={{ __html: curriculumSvg }}
              />
            </li>
          </ul>
          <span className="font-normal text-sm">-</span>{" "}
          <span className="font-normal text-md">{phone}</span>
        </div>
      </div>
    </section>
  );
};
