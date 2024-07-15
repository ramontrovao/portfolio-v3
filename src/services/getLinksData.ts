import { fetchHygraphQuery } from "utils/fetchHygraphQuery";

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

  return fetchHygraphQuery(query);
};
