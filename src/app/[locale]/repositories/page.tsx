import { fetchGithubRepositories } from "utils/fetchGithubRepositories";
import { RepositoriesSection } from "./components/RepositoriesSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "repositories" });

  return {
    title: t("title"),
  };
}

export default async function Repositories() {
  const repositories = await fetchGithubRepositories();

  return (
    <main>
      <RepositoriesSection repositories={repositories} />
    </main>
  );
}
