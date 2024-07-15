export const sendHygraphQuery = async <TData>(
  query: string
): Promise<TData> => {
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
        revalidate: 60 * 60 * 4,
      },
    });

    const { data } = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
