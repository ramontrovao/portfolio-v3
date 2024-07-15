import { THeaderData } from "types/THygraphData";
import { fetchHygraphQuery } from "utils/fetchHygraphQuery";

export const getHeaderData = async () => {
  const query = `query SocialMediasQuery {
    page(where: {slug: "home"}) {
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

  return fetchHygraphQuery<THeaderData>(query);
};
