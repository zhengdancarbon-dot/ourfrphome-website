import { notFound } from "next/navigation";
import { SiteLayoutContent } from "@/components/site-layout-content";
import {
  hreflangLocales,
  isLocalizedLocale,
  type LocalizedLocale,
} from "@/lib/i18n/config";
import { siteMetadata } from "@/lib/site-metadata";
import "../../globals.css";

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export const metadata = siteMetadata;

export default async function LocaleRootLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocalizedLocale(locale)) notFound();

  const localizedLocale = locale as LocalizedLocale;
  const direction = localizedLocale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={hreflangLocales[localizedLocale]} dir={direction}>
      <SiteLayoutContent>
        <div className="localized-document" lang={hreflangLocales[localizedLocale]} dir={direction}>
          {children}
        </div>
      </SiteLayoutContent>
    </html>
  );
}
