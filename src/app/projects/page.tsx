import { fetchHygraphQuery } from "utils/fetchHygraphQuery";
import { ProjectsSection } from "./components/ProjectsSection";
import { TProjectsPageData } from "types/THygraphData";
import { Metadata } from "next";

const getProjectsData = async () => {
  const query = `query ProjectsQuery {
        page(where: {slug: "projects"}) {
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
  title: "projetos"
}

export default async function Projects() {
  const { page } = (await getProjectsData()) as TProjectsPageData;

  return (
    <main>
      <ProjectsSection projects={page.projects} />
    </main>
  );
}
