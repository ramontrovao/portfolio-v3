import { Metadata } from "next";
import { DonateSection } from "./components/DonateSection";

export const metadata: Metadata = {
  title: "donate"
}

export default function Donate() {
    return (
        <main>
            <DonateSection />
        </main>
    )
}