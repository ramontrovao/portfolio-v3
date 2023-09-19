export const fetchHygraphQuery = async (query: string): Promise<unknown> => {
  try {
    const res = await fetch(process.env.HYGRAPH_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      next: {
        revalidate: 60 * 60 * 24,
      },
    });

    const { data } = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
