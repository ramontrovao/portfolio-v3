import { getTranslations } from "next-intl/server";
import { DonateSection } from "./components/DonateSection";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "donate" });

  return {
    title: t("title"),
  };
}

export default function Donate() {
  return (
    <main>
      <DonateSection />
    </main>
  );
}
