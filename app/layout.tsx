import type { Metadata } from "next";
import Script from "next/script";
import { DocumentLanguage } from "@/components/document-language";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { activeLocales, hreflangLocales } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site-config";
import { absoluteUrl, titleWithBrand } from "@/lib/seo";
import "./globals.css";

const defaultTitle = "FRP HOME | Carbon Fiber Fabric Manufacturer in China";
const defaultDescription =
  "Zhejiang FRPHome New Material Co., Ltd. manufactures carbon fiber fabric, UD fabric, prepreg and composite reinforcement materials with stable supply, custom specifications, technical support and export packing.";
const ga4MeasurementId =
  process.env.GA4_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
const yandexMetricaIdValue =
  process.env.YANDEX_METRICA_ID || process.env.NEXT_PUBLIC_YANDEX_METRICA_ID;
const yandexMetricaId = /^\d+$/.test(yandexMetricaIdValue?.trim() || "")
  ? yandexMetricaIdValue?.trim()
  : undefined;
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
  ...(googleSiteVerification || bingSiteVerification || yandexSiteVerification
    ? { verification }
    : {}),
};

const documentLanguageScript = `
  (function () {
    var path = window.location.pathname;
    var locales = ${JSON.stringify(Object.fromEntries(activeLocales.map((locale) => [locale, hreflangLocales[locale]])))};
    var segment = path.split("/").filter(Boolean)[0] || "en";
    var locale = Object.prototype.hasOwnProperty.call(locales, segment) ? segment : "en";
    var lang = locales[locale];
    document.documentElement.lang = lang;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  })();
`;

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
    availableLanguage: [...activeLocales.map((locale) => hreflangLocales[locale]), "zh"],
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
  inLanguage: activeLocales.map((locale) => hreflangLocales[locale]),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <Script id="document-language" strategy="beforeInteractive">
          {documentLanguageScript}
        </Script>
        <DocumentLanguage />
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
        {yandexMetricaId ? (
          <>
            <Script id="yandex-metrica-init" strategy="afterInteractive">
              {`
                (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);
                })(window,document,"script","https://mc.yandex.ru/metrika/tag.js?id=${yandexMetricaId}","ym");
                ym(${yandexMetricaId},"init",{ssr:true,clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:false});
              `}
            </Script>
            <noscript
              dangerouslySetInnerHTML={{
                __html: `<div><img src="https://mc.yandex.ru/watch/${yandexMetricaId}" style="position:absolute;left:-9999px" alt="" /></div>`,
              }}
            />
          </>
        ) : null}
        <Script id="conversion-click-tracking" strategy="afterInteractive">
          {`
            (function () {
              var yandexCounterId = ${yandexMetricaId || "null"};
              var attributionSessionKey = "frp-home-rfq-attribution";
              var attributionParameterNames = [
                "utm_source",
                "utm_medium",
                "utm_campaign",
                "utm_content",
                "utm_term",
                "gclid",
                "msclkid",
                "yclid"
              ];

              function sendEvent(eventName, params) {
                if (typeof window.gtag === "function") {
                  window.gtag("event", eventName, params || {});
                }
                if (yandexCounterId && typeof window.ym === "function") {
                  window.ym(yandexCounterId, "reachGoal", eventName, params || {});
                }
              }

              window.frpTrackEvent = sendEvent;

              function currentLocale() {
                var path = window.location.pathname || "/";
                var locales = ${JSON.stringify(activeLocales)};
                var segment = path.split("/").filter(Boolean)[0] || "en";
                return locales.indexOf(segment) >= 0 ? segment : "en";
              }

              function currentAttributionQuery() {
                var current = new URLSearchParams(window.location.search || "");
                var attribution = new URLSearchParams();

                attributionParameterNames.forEach(function (name) {
                  var value = (current.get(name) || "").trim();
                  if (value) attribution.set(name, value.slice(0, 120));
                });

                var query = attribution.toString();

                try {
                  if (query) {
                    window.sessionStorage.setItem(attributionSessionKey, query);
                  } else {
                    query = window.sessionStorage.getItem(attributionSessionKey) || "";
                  }
                } catch (_) {}

                return query;
              }

              function withAttribution(params, attributionQuery) {
                var attributed = Object.assign({}, params);
                var attribution = new URLSearchParams(attributionQuery || "");

                attributionParameterNames.forEach(function (name) {
                  var value = attribution.get(name);
                  if (value) attributed[name] = value;
                });

                return attributed;
              }

              document.addEventListener("click", function (event) {
                var target = event.target;
                if (!target || !target.closest) return;
                var link = target.closest("a");
                if (!link) return;

                var href = link.getAttribute("href") || "";
                var absoluteHref = link.href || href;

                var locale = currentLocale();
                var attributionQuery = currentAttributionQuery();
                var sourcePage = (window.location.pathname || "/") +
                  (attributionQuery ? "?" + attributionQuery : "");
                var explicitEvent = link.getAttribute("data-analytics-event");

                if (explicitEvent) {
                  sendEvent(explicitEvent, withAttribution({
                    link_url: absoluteHref,
                    locale: locale,
                    source_page: sourcePage,
                    product_slug: link.getAttribute("data-product-slug") || undefined,
                    document_title: link.getAttribute("data-document-title") || undefined
                  }, attributionQuery));
                } else if (href.indexOf("https://wa.me/") === 0 || href.indexOf("wa.me/") >= 0) {
                  sendEvent("whatsapp_click", withAttribution({ link_url: absoluteHref, locale: locale, source_page: sourcePage }, attributionQuery));
                } else if (href.indexOf("mailto:") === 0) {
                  sendEvent("email_click", withAttribution({ link_url: href, locale: locale, source_page: sourcePage }, attributionQuery));
                } else if (href.indexOf("/catalog") >= 0 || link.hasAttribute("download")) {
                  sendEvent("catalog_download", withAttribution({ link_url: absoluteHref, locale: locale, source_page: sourcePage }, attributionQuery));
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
