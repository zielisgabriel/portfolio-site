import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProgressBarScroll } from "@/components/progress-bar-scroll";
import { ReactLenis } from "lenis/react"
import { CustomCursor } from "@/components/custom-cursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Libertinus+Math&display=swap" rel="stylesheet" />
        <link href="/logo-zls.png" rel="icon" />
      </head>

      <body className={`antialiased dark`}>
          <Header />
          
          <ProgressBarScroll />
          
          <CustomCursor />

          <ReactLenis
            root={true}
            options={{
              duration: 2,
              wheelMultiplier: 3
            }}
          />

          {children}

          <Footer />
      </body>
    </html>
  );
}
