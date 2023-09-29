import "styles/global.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Header } from "fragments/Header";
import { Footer } from "fragments/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://ramontrovao.dev"),
  title: {
    template: "%s | ramon dev </>",
    default: "início | ramon dev </>",
  },
  description:
    "desenvolvedor front-end apaixonado por tecnologia desde pequeno! :)",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
