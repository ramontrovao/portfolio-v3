import { fetchHygraphQuery } from "utils/fetchHygraphQuery";
import { THomePageData } from "types/THygraphData";

export const getHomeData = async (locale: string) => {
  const query = `query HomeQuery {
    page(
    where: { slug: "home" }
    locales: [${locale}]
    ) {
      name
      headline
      aboutme {
        raw
      }
      educations {
        id
        name
        startDate
        endDate
        shortDescription
      }
      aboutPicture {
        url
      }
      experiences {
        id
        name
        startDate
        endDate
        shortDescription
      }
      technologies {
        id
        name
        iconSvg
        startDate
      }
      info {
        email
        socialMedias {
          id
          name
          logoSvg
          url
        }
        curriculum {
          svg
          file {
            url
          }
        }
        phone
      }
    }
  }`;

  return fetchHygraphQuery<THomePageData>(query);
};
