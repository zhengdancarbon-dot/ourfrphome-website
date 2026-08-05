import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { absoluteUrl, titleWithBrand } from "@/lib/seo";

const defaultTitle = "FRP HOME | Carbon Fiber Fabric Manufacturer in China";
const defaultDescription =
  "Zhejiang FRPHome New Material Co., Ltd. manufactures carbon fiber fabric, UD fabric, prepreg and composite reinforcement materials with stable supply, custom specifications, technical support and export packing.";

const googleSiteVerification =
  process.env.GSC_VERIFICATION_CODE || process.env.NEXT_PUBLIC_GSC_VERIFICATION_CODE;
const bingSiteVerification =
  process.env.BING_VERIFICATION_CODE || process.env.NEXT_PUBLIC_BING_VERIFICATION_CODE;
const yandexSiteVerification =
  process.env.YANDEX_VERIFICATION_CODE || process.env.NEXT_PUBLIC_YANDEX_VERIFICATION_CODE;

const verification: Metadata["verification"] = {
  ...(googleSiteVerification ? { google: googleSiteVerification } : {}),
  ...(yandexSiteVerification ? { yandex: yandexSiteVerification } : {}),
  ...(bingSiteVerification ? { other: { "msvalidate.01": bingSiteVerification } } : {}),
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: "%s | FRP HOME",
  },
  description: defaultDescription,
  keywords: [
    "carbon fiber fabric manufacturer",
    "carbon fiber cloth supplier",
    "carbon fiber prepreg China",
    "UD carbon fiber fabric",
    "multiaxial carbon fabric",
    "carbon fiber composite materials",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "FRP HOME",
    title: defaultTitle,
    description: defaultDescription,
    url: siteConfig.url,
    images: [
      {
        url: absoluteUrl("/images/hero-carbon-materials.webp"),
        width: 1200,
        height: 630,
        alt: titleWithBrand("Carbon Fiber Composite Materials"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [absoluteUrl("/images/hero-carbon-materials.webp")],
  },
  alternates: {
    canonical: absoluteUrl("/"),
  },
  ...(googleSiteVerification || bingSiteVerification || yandexSiteVerification
    ? { verification }
    : {}),
};
