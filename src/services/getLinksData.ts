import type { TLinksPageData } from "types/THygraphData";
import { sendHygraphQuery } from "utils/sendHygraphQuery";

export const getLinksData = async () => {
  const query = `query LinksQuery {
    page(where: {slug: "links"}) {
      info {
        socialMedias {
          id
          name
          logoSvg
          url
        }
      }
      name
    }
  }`;

  return sendHygraphQuery<TLinksPageData>(query);
};
