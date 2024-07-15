import { TProjectsPageData } from "types/THygraphData";
import { fetchHygraphQuery } from "utils/fetchHygraphQuery";

export const getProjectsData = async (locale: string) => {
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

  return fetchHygraphQuery<TProjectsPageData>(query);
};
