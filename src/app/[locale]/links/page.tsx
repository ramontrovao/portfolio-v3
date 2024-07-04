import { fetchHygraphQuery } from "utils/fetchHygraphQuery";
import type { TLinksPageData } from "types/THygraphData";
import { LinksSection } from "./components/LinksSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "links" });

  return {
    title: t("title"),
  };
}

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

export default async function Links() {
  const { page } = (await getLinksData()) as TLinksPageData;

  return (
    <main>
      <LinksSection links={page.info.socialMedias} name={page.name} />
    </main>
  );
}
