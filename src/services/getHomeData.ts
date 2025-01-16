import { sendHygraphQuery } from "services/sendHygraphQuery";
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
          fileEn {
            url
          }
          filePt {
            url
          }
        }
        phone
      }
    }
  }`;

  return sendHygraphQuery<THomePageData>(query);
};
