import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProgressBarScroll } from "@/components/progress-bar-scroll";
import "@/app/globals.css";
import { getDictionary, hasLocale } from "./dictionaries";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { GlobalLoading } from "@/components/global-loading";

export async function generateStaticParams() {
  return [{ lang: 'pt' }, { lang: 'en' }];
}

export default async function LangLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode,
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        <link href="/logo-zls.png" rel="icon" />
      </head>

      <body className="antialiased dark overflow-x-hidden overflow-y-auto" style={{ overflowY: "auto", overflowX: "hidden" }}>
        <Suspense fallback={<GlobalLoading />}>
          <Header dict={dict} locale={lang} />
          <ProgressBarScroll />
          {children}
          <Footer dict={dict} />
        </Suspense>
      </body>
    </html>
  );
}
