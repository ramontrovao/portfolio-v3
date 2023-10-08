import { fetchHygraphQuery } from "utils/fetchHygraphQuery";

import { IntroductionSection } from "./components/IntroductionSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { TechsSection } from "./components/TechsSection";
import { AboutMeSection } from "./components/AboutMeSection";
import { ExperienceAndEducation } from "./components/ExperienceAndEducation";
import { ContactSection } from "./components/ContactSection";
import { THomePageData } from "types/THygraphData";
import { MeSection } from "./components/MeSection";

const getHomeData = async () => {
  const query = `query HomeQuery {
    page(where: {slug: "home"}) {
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

  return fetchHygraphQuery(query);
};

export default async function Home() {
  const { page } = (await getHomeData()) as THomePageData;

  const introductionProps = {
    name: page.name,
    headline: page.headline,
  };

  const techsProps = {
    techs: page.technologies,
  };

  const aboutMeProps = {
    image: page.aboutPicture.url,
    text: page.aboutme.raw,
  };

  const experienceAndEducationProps = {
    experiences: page.experiences,
    educations: page.educations,
  };

  const contactProps = {
    email: page.info.email,
    phone: page.info.phone,
    curriculumUrl: page.info.curriculum.file.url,
    curriculumSvg: page.info.curriculum.svg,
    socialMedias: page.info.socialMedias,
  };

  return (
    <main>
      <IntroductionSection {...introductionProps} />
      <PortfolioSection />
      <MeSection />
      <TechsSection {...techsProps} />
      <AboutMeSection {...aboutMeProps} />
      <ExperienceAndEducation {...experienceAndEducationProps} />
      <ContactSection {...contactProps} />
    </main>
  );
}
