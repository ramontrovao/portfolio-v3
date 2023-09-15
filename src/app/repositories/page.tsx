import { fetchGithubRepositories } from "utils/fetchGithubRepositories";
import { RepositoriesSection } from "./components/RepositoriesSection";

const getRepositoriesData = async () => {
  return fetchGithubRepositories();
};

export default async function Repositories() {
  const repositories = await getRepositoriesData();

  return (
    <main>
      <RepositoriesSection repositories={repositories} />
    </main>
  );
}
