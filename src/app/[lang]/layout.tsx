import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProgressBarScroll } from "@/components/progress-bar-scroll";
import { CustomCursor } from "@/components/custom-cursor";
import "@/css/globals.css";
import { getDictionary, hasLocale } from "./dictionaries";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { GlobalLoading } from "@/components/global-loading";

export async function generateStaticParams() {
  return [{ lang: 'pt' }, { lang: 'en' }];
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode,
  params: Promise<{lang: string}>
}>) {
  const {lang} = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="/logo-zls.png" rel="icon" />
      </head>

      <body className="antialiased dark">
        <Suspense fallback={<GlobalLoading />}>
          <Header dict={dict} locale={lang} />
          <ProgressBarScroll />
          <CustomCursor />
          {/* <ReactLenis
            root={true}
            options={{
              duration: 2,
              wheelMultiplier: 3
            }}
          /> */}
          {children}
          <Footer dict={dict} />
        </Suspense>
      </body>
    </html>
  );
}
