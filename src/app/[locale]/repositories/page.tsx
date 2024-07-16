import { getGithubRepositories } from "services/getGithubRepositories";
import { RepositoriesSection } from "./components/RepositoriesSection";
import { getTranslations } from "next-intl/server";
import { CommonProps } from "types/CommonProps";

export async function generateMetadata({ params: { locale } }: CommonProps) {
  const t = await getTranslations({ locale, namespace: "repositories" });

  return {
    title: t("title"),
  };
}

export default async function Repositories() {
  const repositories = await getGithubRepositories();

  return (
    <main>
      <RepositoriesSection repositories={repositories} />
    </main>
  );
}
