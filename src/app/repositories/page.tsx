import { fetchGithubRepositories } from "utils/fetchGithubRepositories";
import { RepositoriesSection } from "./components/RepositoriesSection";
import { Metadata } from "next";

const getRepositoriesData = async () => {
  return fetchGithubRepositories();
};

export const metadata: Metadata = {
  title: "repositórios"
}

export default async function Repositories() {
  const repositories = await getRepositoriesData();

  return (
    <main>
      <RepositoriesSection repositories={repositories} />
    </main>
  );
}
