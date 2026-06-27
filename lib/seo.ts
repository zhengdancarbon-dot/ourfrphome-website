import type { Metadata } from "next";
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
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const fullTitle = titleWithBrand(title);

  return {
    title,
    description,
    keywords: Array.from(new Set([...defaultKeywords, ...keywords])),
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "FRP HOME",
      title: fullTitle,
      description,
      url: absoluteUrl(path),
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
