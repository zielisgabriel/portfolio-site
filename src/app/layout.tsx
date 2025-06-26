import "./globals.css";
import { Roboto } from "next/font/google";
import { Header } from "@/components/Header";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/logo-zls.svg" />
      </head>

      <body className={`${roboto.className} antialiased`}>
        <Header />
        
        {children}
      </body>
    </html>
  );
}
