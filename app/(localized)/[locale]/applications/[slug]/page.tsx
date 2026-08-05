import { notFound } from "next/navigation";
import {
  createLocalizedApplicationMetadata,
  LocalizedApplicationDetailPage,
} from "@/components/localized-pages";
import { isLocalizedLocale, localizedLocales, type LocalizedLocale } from "@/lib/i18n/config";
import { phaseOneApplicationSlugs } from "@/lib/i18n/phase-one";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return localizedLocales.flatMap((locale) =>
    phaseOneApplicationSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isLocalizedLocale(locale)) return {};
  return createLocalizedApplicationMetadata(locale, slug);
}

export default async function LocaleApplicationPage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isLocalizedLocale(locale)) notFound();
  return <LocalizedApplicationDetailPage locale={locale as LocalizedLocale} slug={slug} />;
}
