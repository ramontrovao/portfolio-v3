import { IntroductionSection } from "./components/IntroductionSection";
import { MoreSection } from "./components/MoreSection";
import { TechsSection } from "./components/TechsSection";
import { AboutMeSection } from "./components/AboutMeSection";
import { ExperienceAndEducation } from "./components/ExperienceAndEducation";
import { ContactSection } from "./components/ContactSection";
import { getTranslations } from "next-intl/server";
import { THomePageData } from "types/THygraphData";
import { CommonProps } from "types/CommonProps";
import { getHomeData } from "services/getHomeData";

export async function generateMetadata({ params: { locale } }: CommonProps) {
  const t = await getTranslations({ locale, namespace: "home" });

  return {
    title: t("title"),
  };
}

export default async function Home({ params }: { params: { locale: "en" } }) {
  const { page } = (await getHomeData(params.locale)) as THomePageData;

  const introductionProps = {
    name: page.name,
    headline: page.headline,
  };

  const techsProps = {
    techs: page.technologies,
    locale: params.locale,
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
      <AboutMeSection {...aboutMeProps} />
      <ExperienceAndEducation {...experienceAndEducationProps} />
      <TechsSection {...techsProps} />
      <ContactSection {...contactProps} />
      <MoreSection />
    </main>
  );
}
