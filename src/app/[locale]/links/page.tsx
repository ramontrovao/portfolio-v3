import { LinksSection } from "./components/LinksSection";
import { getTranslations } from "next-intl/server";
import { CommonProps } from "types/CommonProps";
import { getLinksData } from "services/getLinksData";

export async function generateMetadata({ params: { locale } }: CommonProps) {
  const t = await getTranslations({ locale, namespace: "links" });

  return {
    title: t("title"),
  };
}

export default async function Links() {
  const { page } = await getLinksData();

  return (
    <main>
      <LinksSection links={page.info.socialMedias} name={page.name} />
    </main>
  );
}
