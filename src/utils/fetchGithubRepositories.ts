import { TGithubData } from "types/TGithubData";

export const fetchGithubRepositories = async (): Promise<TGithubData> => {
  try {
    const res = await fetch(`https://api.github.com/users/ramontrovao/repos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: {
        revalidate: 60 * 60 * 24,
      },
    });

    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
