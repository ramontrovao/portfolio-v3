import { IntroductionSection } from "./components/IntroductionSection";
import { AboutMeSection } from "./components/AboutMeSection";
import { ExperienceAndEducation } from "./components/ExperienceAndEducation";
import { ContactSection } from "./components/ContactSection";
import { getTranslations } from "next-intl/server";
import { CommonProps } from "types/CommonProps";
import { getHomeData } from "services/getHomeData";

interface HomeProps {
  params: Promise<{ locale: "en" }>;
}

export async function generateMetadata(props: CommonProps) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale: locale, namespace: "home" });

  return {
    title: t("title"),
  };
}

export default async function Home(props: HomeProps) {
  const params = await props.params;
  const { page } = await getHomeData(params.locale);

  const introductionProps = {
    name: page.name,
    headline: page.headline,
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
    curriculumUrl: params.locale === "en" ? page.info.curriculum.fileEn.url :  page.info.curriculum.filePt.url,
    curriculumSvg: page.info.curriculum.svg,
    socialMedias: page.info.socialMedias,
  };

  return (
    <main>
      <IntroductionSection {...introductionProps} />
      <AboutMeSection {...aboutMeProps} />
      <ExperienceAndEducation {...experienceAndEducationProps} />
      <ContactSection {...contactProps} />
    </main>
  );
}
