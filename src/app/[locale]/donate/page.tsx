import { getTranslations } from "next-intl/server";
import { DonateSection } from "./components/DonateSection";
import { CommonProps } from "types/CommonProps";

export async function generateMetadata({ params: { locale } }: CommonProps) {
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
