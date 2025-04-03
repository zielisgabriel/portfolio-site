import { Footer } from "@/components/Footer";
import "./globals.css";
import { Header } from "@/components/Header";
import { Lexend_Deca } from "next/font/google";
import { SearchProjectsProvider } from "@/contexts/SearchProjectsContext";

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
    <SearchProjectsProvider>
      <html lang="pt-BR">
        <head>
          <link rel="icon" href="/logo-zls.svg" />
        </head>

        <body className={`${lexendDeca.className} antialiased`}>
          <Header />

          {children}

          <Footer />
        </body>
      </html>
    </SearchProjectsProvider>
  );
}
