import { Header } from "@/components/Header";
import "./globals.css";
import { Lexend_Deca } from "next/font/google";

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca-sans-serif",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${lexendDeca.className} antialiased`}>
        <Header />

        {children}
      </body>
    </html>
  );
}
