import { fetchHygraphQuery } from "utils/fetch-hygraph-query";
import { IntroductionSection } from "./components/IntroductionSection";

const getHomeData = async () => {
  const query = `
  query MyQuery {
    page(where: {slug: "home"}) {
      name
      headline
      aboutme {
        html
      }
      educations {
        name
        startDate
        endDate
        shortDescription
      }
      aboutPicture {
        url
      }
      experiences {
        name
        startDate
        endDate
        shortDescription
      }
      technologies {
        name
        iconSvg
        startDate
      }
      info {
        email
        socialMedias {
          name
          logoSvg
          url
        }
      }
    }
  }
  `;
  return fetchHygraphQuery(query);
};

export default async function Home() {
  const res = await getHomeData();

  console.log(res);

  return (
    <main>
      <IntroductionSection />
    </main>
  );
}
