import { fetchHygraphQuery } from "utils/fetchHygraphQuery";

import { IntroductionSection } from "./components/IntroductionSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { TechsSection } from "./components/TechsSection";

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

  const techsProps = {
    techs: page.technologies,
  };

  return (
    <main>
      <IntroductionSection {...introductionProps} />
      <PortfolioSection />
      <TechsSection {...techsProps} />
    </main>
  );
}
