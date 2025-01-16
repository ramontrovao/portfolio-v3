import "styles/global.css";

import type { Metadata } from "next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Poppins } from "next/font/google";

import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://ramontrovao.dev"),
  title: {
    template: "%s | ramon dev </>",
    default: "início | ramon dev </>",
  },
  description:
    "desenvolvedor mobile apaixonado por tecnologia desde pequeno! :)",
  openGraph: {
    type: "website",
    url: "https://ramontrovao.dev",
    title: "ramon trovão",
    siteName: "ramon trovão - portólio",
    description: "desenvolvedor apaixonado por tecnologia desde pequeno! :)",
    images: "https://media.graphassets.com/y9s5ITcBTNi0Xmo7BjHP",
  },
  twitter: {
    title: "ramon trovão",
    description: "desenvolvedor apaixonado por tecnologia desde pequeno! :)",
    card: "summary_large_image",
    images: "https://media.graphassets.com/y9s5ITcBTNi0Xmo7BjHP",
    site: "@site",
    creator: "@creator",
  },
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode,
  params: { locale: string }
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
      {process.env.GA4_ID && <GoogleAnalytics gaId={process.env.GA4_ID} />}
      {process.env.GTM_ID && <GoogleTagManager gtmId={process.env.GTM_ID} />}
    </html>
  );
}
