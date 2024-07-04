import { fetchHygraphQuery } from "utils/fetchHygraphQuery";
import { ProjectsSection } from "./components/ProjectsSection";
import { TProjectsPageData } from "types/THygraphData";
import { getTranslations } from "next-intl/server";
import { CommonProps } from "types/CommonProps";

export async function generateMetadata({ params: { locale } }: CommonProps) {
  const t = await getTranslations({ locale, namespace: "projects" });

  return {
    title: t("title"),
  };
}

const getProjectsData = async (locale: string) => {
  const query = `query ProjectsQuery {
        page(
        where: {slug: "projects"}
        locales: [${locale}]
        ) {
          id
          projects {
            id
            name
            prodUrl
            repoUrl
            description
            projectTechnologies {
              iconSvg
              id
              name
            }
            wallpaper {
              url
            }
          }
        }
      }
      `;

  return fetchHygraphQuery(query);
};

export default async function Projects({ params }: CommonProps) {
  const { page } = (await getProjectsData(params.locale)) as TProjectsPageData;

  return (
    <main>
      <ProjectsSection projects={page.projects} />
    </main>
  );
}
