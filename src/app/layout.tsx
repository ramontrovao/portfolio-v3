import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Header } from "fragments/Header";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata: Metadata = {
  title: "Ramon Trovão",
  description: "Desenvolvedor",
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
      </body>
    </html>
  );
}
