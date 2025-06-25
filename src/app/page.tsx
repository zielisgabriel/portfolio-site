import { DM_Serif_Display, M_PLUS_1_Code } from "next/font/google";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif-display-serif",
})

const mPlus1Code = M_PLUS_1_Code({
  subsets: ["latin"],
  variable: "--font-m-plus-1-code-sans-serif",
})

export const metadata: Metadata = {
  title: "José Gabriel | Portfólio",
  description: "Meu portfólio de Desenvolvedor Web profissional."
}

export default function Home() {
  return (
    <main>

    </main>
  );
}