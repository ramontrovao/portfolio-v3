import { fetchGithubRepositories } from "utils/fetchGithubRepositories";

const getRepositoriesData = async () => {
  return fetchGithubRepositories();
};

export default async function Repositories() {
  const repositories = await getRepositoriesData();

  return <main></main>;
}
