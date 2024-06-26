import type { Metadata } from "next";

import { fetchHygraphQuery } from "utils/fetchHygraphQuery";
import type { TLinksPageData } from "types/THygraphData";

import { LinksSection } from "./components/LinksSection";

const getLinksData = async () => {
  const query = `query LinksQuery {
    page(where: {slug: "links"}) {
      info {
        socialMedias {
          id
          name
          logoSvg
          url
        }
      }
      name
    }
  }`;

  return fetchHygraphQuery(query);
};

export const metadata: Metadata = {
  title: "links",
};

export default async function Links() {
  const { page } = (await getLinksData()) as TLinksPageData;

  return (
    <main>
      <LinksSection
        links={page.info.socialMedias}
        name={page.name}
      />
    </main>
  );
}
