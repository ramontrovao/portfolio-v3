import { ProjectsSection } from "./components/ProjectsSection";
import { getTranslations } from "next-intl/server";
import { CommonProps } from "types/CommonProps";
import { getProjectsData } from "services/getProjectsData";

export async function generateMetadata({ params: { locale } }: CommonProps) {
  const t = await getTranslations({ locale, namespace: "projects" });

  return {
    title: t("title"),
  };
}

export default async function Projects({ params }: CommonProps) {
  const { page } = await getProjectsData(params.locale);

  return (
    <main>
      <ProjectsSection projects={page.projects} />
    </main>
  );
}
