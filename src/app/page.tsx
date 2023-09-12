import { fetchHygraphQuery } from "utils/fetchHygraphQuery";

import { IntroductionSection } from "./components/IntroductionSection";
import { PortfolioSection } from "./components/PortfolioSection";

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
  const { page } = await getHomeData();

  const introductionProps = {
    name: page.name,
    headline: page.headline,
  };

  return (
    <main>
      <IntroductionSection {...introductionProps} />
      <PortfolioSection />
    </main>
  );
}
