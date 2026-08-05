import { notFound } from "next/navigation";
import {
  createLocalizedProductsMetadata,
  LocalizedProductsPage,
} from "@/components/localized-pages";
import { isLocalizedLocale, localizedLocales, type LocalizedLocale } from "@/lib/i18n/config";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return localizedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocalizedLocale(locale)) return {};
  return createLocalizedProductsMetadata(locale);
}

export default async function LocaleProductsPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocalizedLocale(locale)) notFound();
  return <LocalizedProductsPage locale={locale as LocalizedLocale} />;
}
