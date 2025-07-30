import { LinksSection } from "./components/LinksSection";
import { getTranslations } from "next-intl/server";
import { CommonProps } from "types/CommonProps";
import { getLinksData } from "services/getLinksData";

export async function generateMetadata(props: CommonProps) {
  const { locale } = await props.params;
  const t = await getTranslations("links");

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
