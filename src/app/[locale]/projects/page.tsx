import { fetchHygraphQuery } from "utils/fetchHygraphQuery";
import { ProjectsSection } from "./components/ProjectsSection";
import { TProjectsPageData } from "types/THygraphData";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "projetos",
};

export default async function Projects({ params }) {
  const { page } = (await getProjectsData(params.locale)) as TProjectsPageData;

  return (
    <main>
      <ProjectsSection projects={page.projects} />
    </main>
  );
}
