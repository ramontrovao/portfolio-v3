import { fetchGithubRepositories } from "utils/fetchGithubRepositories";
import { RepositoriesSection } from "./components/RepositoriesSection";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "repositórios",
};

export default async function Repositories() {
  const repositories = await fetchGithubRepositories();

  return (
    <main>
      <RepositoriesSection repositories={repositories} />
    </main>
  );
}
