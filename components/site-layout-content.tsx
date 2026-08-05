import Script from "next/script";
import { DocumentLanguage } from "@/components/document-language";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { activeLocales, hreflangLocales } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site-config";
import { absoluteUrl } from "@/lib/seo";

const ga4MeasurementId =
  process.env.GA4_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
const yandexMetricaIdValue =
  process.env.YANDEX_METRICA_ID || process.env.NEXT_PUBLIC_YANDEX_METRICA_ID;
const yandexMetricaId = /^\d+$/.test(yandexMetricaIdValue?.trim() || "")
  ? yandexMetricaIdValue?.trim()
  : undefined;

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

type SiteLayoutContentProps = Readonly<{
  children: React.ReactNode;
}>;

export function SiteLayoutContent({ children }: SiteLayoutContentProps) {
  return (
    <body>
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
              "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term",
              "gclid", "gbraid", "wbraid", "msclkid", "yclid"
            ];
            function sendEvent(eventName, params) {
              if (typeof window.gtag === "function") window.gtag("event", eventName, params || {});
              if (yandexCounterId && typeof window.ym === "function") window.ym(yandexCounterId, "reachGoal", eventName, params || {});
            }
            window.frpTrackEvent = sendEvent;
            function currentLocale() {
              var segment = (window.location.pathname || "/").split("/").filter(Boolean)[0] || "en";
              var locales = ${JSON.stringify(activeLocales)};
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
                if (query) window.sessionStorage.setItem(attributionSessionKey, query);
                else query = window.sessionStorage.getItem(attributionSessionKey) || "";
              } catch (_) {}
              return query;
            }
            function eventContext(element, attributionQuery) {
              var sourcePage = (window.location.pathname || "/") + (attributionQuery ? "?" + attributionQuery : "");
              return {
                product_id: element && element.getAttribute("data-product-id") || undefined,
                product_family: element && element.getAttribute("data-product-family") || undefined,
                locale: currentLocale(),
                page_type: document.body.getAttribute("data-page-type") || undefined,
                canonical_path: window.location.pathname || "/",
                document_id: element && element.getAttribute("data-document-id") || undefined,
                source_page: sourcePage
              };
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
              var attributionQuery = currentAttributionQuery();
              var explicitEvent = link.getAttribute("data-analytics-event");
              var params = eventContext(link, attributionQuery);
              params.link_url = absoluteHref;
              params.document_title = link.getAttribute("data-document-title") || undefined;
              params.document_id = link.getAttribute("data-document-id") || params.document_id;
              params.product_id = link.getAttribute("data-product-slug") || params.product_id;
              if (explicitEvent) sendEvent(explicitEvent, withAttribution(params, attributionQuery));
              else if (href.indexOf("https://wa.me/") === 0 || href.indexOf("wa.me/") >= 0) sendEvent("whatsapp_click", withAttribution(params, attributionQuery));
              else if (href.indexOf("mailto:") === 0) sendEvent("email_click", withAttribution(params, attributionQuery));
              else if (href.indexOf("tel:") === 0) sendEvent("phone_click", withAttribution(params, attributionQuery));
              else if (href.indexOf("/catalog") >= 0 || link.hasAttribute("download")) sendEvent("catalog_download", withAttribution(params, attributionQuery));
            });
            document.addEventListener("play", function (event) {
              var video = event.target;
              if (!video || video.tagName !== "VIDEO") return;
              sendEvent("video_play", withAttribution(Object.assign(eventContext(video, currentAttributionQuery()), {
                video_src: video.currentSrc || video.getAttribute("src") || undefined
              }), currentAttributionQuery()));
            }, true);
            var scrollSent = false;
            window.addEventListener("scroll", function () {
              if (scrollSent) return;
              var root = document.documentElement;
              if (root.scrollHeight <= root.clientHeight) return;
              if ((root.scrollTop + root.clientHeight) / root.scrollHeight >= 0.75) {
                scrollSent = true;
                sendEvent("scroll_75", withAttribution(eventContext(null, currentAttributionQuery()), currentAttributionQuery()));
              }
            }, { passive: true });
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
  );
}
