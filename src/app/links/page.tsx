import Image from "next/image";
import { LinksSection } from "./components/LinksSection";
import { fetchHygraphQuery } from "utils/fetchHygraphQuery";

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
        }
      }`;

  return fetchHygraphQuery(query);
};

export default async function Links() {
  const { page } = await getLinksData();

  return (
    <main>
      <LinksSection links={page.info.socialMedias} />
    </main>
  );
}
