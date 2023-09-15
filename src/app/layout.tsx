import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Header } from "fragments/Header";
import "styles/global.css";
import { Footer } from "fragments/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata: Metadata = {
  title: {
    template: "%s | ramon dev </>",
    default: "início | ramon dev </>",
  },
  description:
    "desenvolvedor front-end apaixonado por tecnologia desde pequeno! :)",
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
