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
      <head>
        <link rel="icon" href="/logo-zls.svg" />
      </head>

      <body className={`${lexendDeca.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
