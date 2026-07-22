import type { Metadata } from "next";
import {
  defaultLocale,
  hreflangLocales,
  localePath,
  localizedAlternates,
  ogLocales,
  type Locale,
} from "@/lib/i18n/config";
import { isPhaseOneLocalizedPath } from "@/lib/i18n/phase-one-paths";
import { siteConfig } from "@/lib/site-config";

const defaultKeywords = [
  "carbon fiber fabric manufacturer",
  "carbon fiber cloth supplier",
  "carbon fiber prepreg China",
  "UD carbon fiber fabric",
  "multiaxial carbon fabric",
  "carbon fiber composite materials",
];

const defaultOgImage = "/images/hero-carbon-materials.webp";

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function titleWithBrand(title: string) {
  return title.includes("FRP HOME") ? title : `${title} | FRP HOME`;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = defaultOgImage,
  locale = defaultLocale,
  localized = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  locale?: Locale;
  localized?: boolean;
}): Metadata {
  const fullTitle = titleWithBrand(title);
  const canonicalPath = localePath(path, locale);
  const shouldIncludeLanguages = localized || isPhaseOneLocalizedPath(path);
  const languages = shouldIncludeLanguages
    ? {
        ...Object.fromEntries(
          Object.entries(localizedAlternates(path)).map(([language, localizedPath]) => [
            language,
            absoluteUrl(localizedPath),
          ]),
        ),
        "x-default": absoluteUrl(localePath(path, defaultLocale)),
      }
    : undefined;

  return {
    title,
    description,
    keywords: Array.from(new Set([...defaultKeywords, ...keywords])),
    alternates: {
      canonical: absoluteUrl(canonicalPath),
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      type: "website",
      locale: ogLocales[locale],
      siteName: "FRP HOME",
      title: fullTitle,
      description,
      url: absoluteUrl(canonicalPath),
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

export function localizedJsonLdId(path: string, fragment: string, locale: Locale) {
  return absoluteUrl(`${localePath(path, locale)}#${fragment.replace(/^#/, "")}`);
}

export function localizedJsonLdUrl(path: string, locale: Locale) {
  return absoluteUrl(localePath(path, locale));
}

export function createB2bProductPageSchema({
  name,
  description,
  url,
  image,
  sku,
  locale = defaultLocale,
}: {
  name: string;
  description: string;
  url: string;
  image: string;
  sku: string;
  locale?: Locale;
}) {
  const imageUrl = absoluteUrl(image);
  const productId = `${url}#product`;

  // RFQ-only pages do not publish a price or customer ratings. Keep the page
  // entity separate from the real product entity and do not invent Offer,
  // Review, AggregateRating, price, availability, or stock data.
  return {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: hreflangLocales[locale],
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      "@id": `${url}#primaryimage`,
      url: imageUrl,
      contentUrl: imageUrl,
      caption: name,
    },
    mainEntity: {
      "@type": "Product",
      "@id": productId,
      name,
      description,
      image: imageUrl,
      url,
      sku,
      brand: {
        "@type": "Brand",
        name: siteConfig.brandName,
      },
    },
    about: { "@id": productId },
  };
}

export function hrefLang(locale: Locale) {
  return hreflangLocales[locale];
}
