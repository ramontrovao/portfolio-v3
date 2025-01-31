import { THeaderData } from "types/THygraphData";
import { sendHygraphQuery } from "services/sendHygraphQuery";

export const getHeaderData = async (locale: string) => {
  const query = `query SocialMediasQuery {
    page(
    where: {slug: "home"}
    locales: [${locale}]
    ) {
      info {
        socialMedias {
          id
          logoSvg
          name
          url
        }
        curriculum {
          svg
          file {
            url
          }
        }
      }
    }
  }
  
`;

  return sendHygraphQuery<THeaderData>(query);
};
