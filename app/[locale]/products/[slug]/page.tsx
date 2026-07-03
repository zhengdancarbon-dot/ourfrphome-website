import { notFound } from "next/navigation";
import {
  createLocalizedProductMetadata,
  LocalizedProductDetailPage,
} from "@/components/localized-pages";
import { isLocalizedLocale, localizedLocales, type LocalizedLocale } from "@/lib/i18n/config";
import { phaseOneProductSlugs } from "@/lib/i18n/phase-one";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return localizedLocales.flatMap((locale) =>
    phaseOneProductSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isLocalizedLocale(locale)) return {};
  return createLocalizedProductMetadata(locale, slug);
}

export default async function LocaleProductPage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isLocalizedLocale(locale)) notFound();
  return <LocalizedProductDetailPage locale={locale as LocalizedLocale} slug={slug} />;
}
