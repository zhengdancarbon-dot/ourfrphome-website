import { notFound } from "next/navigation";
import {
  hreflangLocales,
  isLocalizedLocale,
  type LocalizedLocale,
} from "@/lib/i18n/config";

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocalizedLocale(locale)) notFound();

  const localizedLocale = locale as LocalizedLocale;

  return (
    <div
      className="localized-document"
      lang={hreflangLocales[localizedLocale]}
      dir={localizedLocale === "ar" ? "rtl" : "ltr"}
    >
      {children}
    </div>
  );
}
