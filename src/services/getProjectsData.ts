import { TProjectsPageData } from "types/THygraphData";
import { sendHygraphQuery } from "utils/sendHygraphQuery";

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

  return sendHygraphQuery<TProjectsPageData>(query);
};
