import type { Metadata } from "next";
import Script from "next/script";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";
import { absoluteUrl, titleWithBrand } from "@/lib/seo";
import "./globals.css";

const defaultTitle = "FRP HOME | Carbon Fiber Fabric Manufacturer in China";
const defaultDescription =
  "Zhejiang FRPHome New Material Co., Ltd. manufactures carbon fiber fabric, UD fabric, prepreg and composite reinforcement materials with stable supply, custom specifications, technical support and export packing.";
const ga4MeasurementId =
  process.env.GA4_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
const googleSiteVerification =
  process.env.GSC_VERIFICATION_CODE || process.env.NEXT_PUBLIC_GSC_VERIFICATION_CODE;
const bingSiteVerification =
  process.env.BING_VERIFICATION_CODE || process.env.NEXT_PUBLIC_BING_VERIFICATION_CODE;
const verification: Metadata["verification"] = {
  ...(googleSiteVerification ? { google: googleSiteVerification } : {}),
  ...(bingSiteVerification ? { other: { "msvalidate.01": bingSiteVerification } } : {}),
};

export const metadata: Metadata = {
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
  ...(googleSiteVerification || bingSiteVerification ? { verification } : {}),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": absoluteUrl("/#organization"),
  name: siteConfig.companyName,
  alternateName: [siteConfig.brandName, siteConfig.alternateBrandName],
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  logo: absoluteUrl("/images/brand/frphome-logo-original.jpg"),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Haining",
    addressRegion: "Zhejiang",
    addressCountry: "CN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: siteConfig.email,
    telephone: siteConfig.phone,
    availableLanguage: ["en", "zh"],
  },
  makesOffer: [
    "Carbon Fiber UD Fabric",
    "Carbon Fiber Woven Fabric",
    "Spread Tow Carbon Fiber Fabric",
    "Carbon Fiber Multiaxial NCF Fabric",
    "Carbon Aramid Hybrid Jacquard Fabric",
    "Aramid Fabric",
    "Pultruded Carbon Fiber Plate for Structural Reinforcement",
    "Carbon Fiber Prepreg Fabric",
    "3K Carbon Fiber Laminate Sheet",
    "3K Surface Carbon Fiber Tube",
    "Pultruded Carbon Fiber Tube",
    "Milled Carbon Fiber Powder",
    "Chopped Carbon Fiber",
    "Custom Carbon Fiber Products",
    "Carbon Fiber Yarn and Tow",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  url: siteConfig.url,
  name: "FRP HOME",
  publisher: {
    "@id": absoluteUrl("/#organization"),
  },
  inLanguage: "en",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {ga4MeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ga4MeasurementId}');
              `}
            </Script>
          </>
        ) : null}
        <Script id="conversion-click-tracking" strategy="afterInteractive">
          {`
            (function () {
              function sendEvent(eventName, params) {
                if (typeof window.gtag === "function") {
                  window.gtag("event", eventName, params || {});
                }
              }

              document.addEventListener("click", function (event) {
                var target = event.target;
                if (!target || !target.closest) return;
                var link = target.closest("a");
                if (!link) return;

                var href = link.getAttribute("href") || "";
                var absoluteHref = link.href || href;

                if (href.indexOf("https://wa.me/") === 0 || href.indexOf("wa.me/") >= 0) {
                  sendEvent("whatsapp_click", { link_url: absoluteHref });
                } else if (href.indexOf("mailto:") === 0) {
                  sendEvent("email_click", { link_url: href });
                } else if (href.indexOf("/catalog") >= 0 || link.hasAttribute("download")) {
                  sendEvent("catalog_download", { link_url: absoluteHref });
                }
              });
            })();
          `}
        </Script>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema]) }}
        />
      </body>
    </html>
  );
}
