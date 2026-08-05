import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowRight, CheckCircle2, ClipboardList, FileText, Ruler, Settings2 } from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";
import { ProductImageZoom } from "@/components/product-image-zoom";
import { ProductVideo } from "@/components/product-video";
import { RfqFallbackForm } from "@/components/rfq-fallback-form";
import { Eyebrow, PageHero, SectionHeading } from "@/components/ui";
import { applicationBreadcrumbSchema, getApplicationPage } from "@/lib/application-pages";
import { hreflangLocales, type Locale } from "@/lib/i18n/config";
import {
  getLocalizedApplicationContent,
  getLocalizedProductContent,
  localizedCatalogContent,
  localizedContactContent,
  localizedHomeContent,
  localizedProductsPageContent,
  translateLabel,
  translateSpecText,
} from "@/lib/i18n/page-content";
import { isPhaseOneApplicationSlug, isPhaseOneProductSlug } from "@/lib/i18n/phase-one";
import { phaseOneLocalePath } from "@/lib/i18n/phase-one-paths";
import {
  getRfqPrefillMessage,
  getUiCopy,
  translateProductFamily,
  translateRfqFieldLabel,
  translateRfqTypeLabel,
} from "@/lib/i18n/ui-copy";
import { productCatalog, getProductBySlug, type ProductCatalogItem } from "@/lib/product-catalog";
import { getProductDocumentId, getProductDocuments } from "@/lib/product-documents";
import { createProductResourceSchemas } from "@/lib/product-resource-schema";
import { createProductVideoSchema, getProductVideo } from "@/lib/product-videos";
import { priorityDiscoveryRoutes } from "@/lib/priority-discovery";
import { productFamilies } from "@/lib/product-families";
import {
  absoluteUrl,
  createB2bProductPageSchema,
  createPageMetadata,
  localizedJsonLdUrl,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { rfqProductTypes } from "@/lib/site-taxonomy";
import {
  getAutomotiveTechnicalGuides,
  getStrengtheningTechnicalGuides,
  technicalArticles,
} from "@/lib/technical-articles";

type LocalizedPageProps = {
  locale: Exclude<Locale, "en">;
};

const tdsDownloadCopy: Record<Exclude<Locale, "en">, { title: string; note: string; action: string }> = {
  es: { title: "Documentos técnicos para descargar", note: "Documento técnico en inglés. Confirme la especificación y los documentos del lote en la cotización.", action: "Descargar TDS" },
  "pt-br": { title: "Documentos técnicos para baixar", note: "Documento técnico em inglês. Confirme a especificação e os documentos do lote na cotação.", action: "Baixar TDS" },
  ru: { title: "Технические документы для скачивания", note: "Технический документ на английском языке. Подтвердите спецификацию и документы партии при запросе цены.", action: "Скачать TDS" },
  ar: { title: "مستندات فنية للتنزيل", note: "المستند الفني باللغة الإنجليزية. يرجى تأكيد المواصفة ووثائق الدفعة عند طلب السعر.", action: "تنزيل TDS" },
  fr: { title: "Documents techniques à télécharger", note: "Document technique en anglais. Confirmez la spécification et les documents de lot lors de la demande de prix.", action: "Télécharger la TDS" },
  ko: { title: "기술 문서 다운로드", note: "영문 기술 문서입니다. 견적 시 사양과 배치 문서를 확인해 주세요.", action: "TDS 다운로드" },
  pl: { title: "Dokumenty techniczne do pobrania", note: "Dokument techniczny w języku angielskim. Potwierdź specyfikację i dokumenty partii w zapytaniu.", action: "Pobierz TDS" },
  tr: { title: "İndirilebilir teknik belgeler", note: "Teknik belge İngilizcedir. Teklif sırasında spesifikasyonu ve parti belgelerini doğrulayın.", action: "TDS indir" },
  uk: { title: "Технічні документи для завантаження", note: "Технічний документ англійською мовою. Підтвердьте специфікацію та документи партії в запиті.", action: "Завантажити TDS" },
  vi: { title: "Tài liệu kỹ thuật để tải xuống", note: "Tài liệu kỹ thuật bằng tiếng Anh. Vui lòng xác nhận thông số và tài liệu lô hàng khi hỏi giá.", action: "Tải TDS" },
  th: { title: "เอกสารเทคนิคสำหรับดาวน์โหลด", note: "เอกสารเทคนิคเป็นภาษาอังกฤษ โปรดยืนยันข้อมูลจำเพาะและเอกสารล็อตเมื่อขอราคา", action: "ดาวน์โหลด TDS" },
};

const englishGuideCopy: Record<Exclude<Locale, "en">, { eyebrow: string; title: string; note: string; action: string }> = {
  es: {
    eyebrow: "Guías de compra",
    title: "Guías técnicas relacionadas en inglés",
    note: "Compare opciones y prepare una RFQ más completa. Los valores finales se confirman en la cotización y los documentos del producto.",
    action: "Leer guía en inglés",
  },
  "pt-br": {
    eyebrow: "Guias de compra",
    title: "Guias técnicas relacionadas em inglês",
    note: "Compare opções e prepare uma RFQ mais completa. Os valores finais são confirmados na cotação e nos documentos do produto.",
    action: "Ler guia em inglês",
  },
  ru: {
    eyebrow: "Руководства для закупки",
    title: "Связанные технические руководства на английском языке",
    note: "Сравните варианты и подготовьте более полный RFQ. Окончательные значения подтверждаются в предложении и документации на продукцию.",
    action: "Открыть руководство на английском",
  },
  ar: {
    eyebrow: "أدلة الشراء",
    title: "أدلة فنية مرتبطة باللغة الإنجليزية",
    note: "قارن الخيارات وجهز طلب عرض سعر أكثر اكتمالاً. يتم تأكيد القيم النهائية في عرض السعر ووثائق المنتج.",
    action: "قراءة الدليل بالإنجليزية",
  },
  fr: {
    eyebrow: "Guides d'achat",
    title: "Guides techniques associés en anglais",
    note: "Comparez les options et préparez une RFQ plus complète. Les valeurs finales sont confirmées dans l'offre et les documents produit.",
    action: "Lire le guide en anglais",
  },
  ko: {
    eyebrow: "구매 가이드",
    title: "관련 영문 기술 가이드",
    note: "옵션을 비교하고 더 완전한 RFQ를 준비하십시오. 최종 값은 견적서와 제품 문서에서 확인됩니다.",
    action: "영문 가이드 보기",
  },
  pl: {
    eyebrow: "Poradniki zakupowe",
    title: "Powiązane poradniki techniczne w języku angielskim",
    note: "Porównaj opcje i przygotuj pełniejsze RFQ. Wartości końcowe są potwierdzane w ofercie i dokumentacji produktu.",
    action: "Przeczytaj poradnik po angielsku",
  },
  tr: {
    eyebrow: "Satın alma rehberleri",
    title: "İngilizce ilgili teknik rehberler",
    note: "Seçenekleri karşılaştırın ve daha eksiksiz bir RFQ hazırlayın. Nihai değerler teklif ve ürün belgelerinde doğrulanır.",
    action: "İngilizce rehberi oku",
  },
  uk: { eyebrow: "Посібники для закупівлі", title: "Пов’язані технічні посібники англійською", note: "Порівняйте варіанти та підготуйте повніший RFQ. Остаточні значення підтверджуються в пропозиції та документах на продукт.", action: "Відкрити посібник англійською" },
  vi: { eyebrow: "Hướng dẫn mua hàng", title: "Hướng dẫn kỹ thuật liên quan bằng tiếng Anh", note: "So sánh các lựa chọn và chuẩn bị RFQ đầy đủ hơn. Giá trị cuối cùng được xác nhận trong báo giá và tài liệu sản phẩm.", action: "Đọc hướng dẫn tiếng Anh" },
  th: { eyebrow: "คู่มือการจัดซื้อ", title: "คู่มือเทคนิคที่เกี่ยวข้องภาษาอังกฤษ", note: "เปรียบเทียบตัวเลือกและเตรียม RFQ ให้ครบถ้วนขึ้น ค่าขั้นสุดท้ายยืนยันในใบเสนอราคาและเอกสารผลิตภัณฑ์", action: "อ่านคู่มือภาษาอังกฤษ" },
};

const featuredProductSlugs = priorityDiscoveryRoutes.map((route) => route.productSlug);

const priorityProductsCopy: Record<Exclude<Locale, "en">, { eyebrow: string; title: string; note: string }> = {
  es: {
    eyebrow: "Productos prioritarios",
    title: "Rutas de compra para seis grupos principales.",
    note: "Empiece por el producto correspondiente y confirme especificación, cantidad, proceso, destino, aplicación final y documentos requeridos en la RFQ.",
  },
  "pt-br": {
    eyebrow: "Produtos prioritários",
    title: "Rotas de compra para seis grupos principais.",
    note: "Comece pelo produto relevante e confirme especificação, quantidade, processo, destino, aplicação final e documentos necessários na RFQ.",
  },
  ru: {
    eyebrow: "Приоритетные продукты",
    title: "Закупочные маршруты по шести ключевым группам.",
    note: "Начните с нужного продукта и укажите в RFQ спецификацию, количество, процесс, страну назначения, конечное применение и требуемые документы.",
  },
  ar: {
    eyebrow: "المنتجات ذات الأولوية",
    title: "مسارات شراء لست مجموعات رئيسية.",
    note: "ابدأ بالمنتج المناسب، ثم أكد في طلب عرض السعر المواصفة والكمية وعملية التصنيع والوجهة والاستخدام النهائي والمستندات المطلوبة.",
  },
  fr: {
    eyebrow: "Produits prioritaires",
    title: "Parcours d'achat pour six groupes principaux.",
    note: "Commencez par le produit concerné, puis précisez dans la RFQ la spécification, la quantité, le procédé, la destination, l'application finale et les documents requis.",
  },
  ko: {
    eyebrow: "우선 제품",
    title: "6개 핵심 제품군을 위한 구매 경로.",
    note: "관련 제품에서 시작하여 RFQ에 사양, 수량, 공정, 목적지, 최종 용도 및 필요한 문서를 명시하십시오.",
  },
  pl: {
    eyebrow: "Produkty priorytetowe",
    title: "Ścieżki zakupowe dla sześciu głównych grup.",
    note: "Zacznij od odpowiedniego produktu, a następnie określ w RFQ specyfikację, ilość, proces, miejsce docelowe, zastosowanie końcowe i wymagane dokumenty.",
  },
  tr: {
    eyebrow: "Öncelikli ürünler",
    title: "Altı ana ürün grubu için satın alma yolları.",
    note: "İlgili ürünle başlayın ve RFQ içinde spesifikasyon, miktar, proses, varış noktası, nihai kullanım ve gerekli belgeleri belirtin.",
  },
  uk: { eyebrow: "Пріоритетні продукти", title: "Закупівельні маршрути для шести ключових груп.", note: "Почніть із потрібного продукту та вкажіть у RFQ специфікацію, кількість, процес, країну призначення, кінцеве використання й потрібні документи." },
  vi: { eyebrow: "Sản phẩm ưu tiên", title: "Lộ trình mua hàng cho sáu nhóm chính.", note: "Bắt đầu với sản phẩm phù hợp và xác nhận thông số, số lượng, quy trình, nơi đến, ứng dụng cuối cùng và tài liệu cần thiết trong RFQ." },
  th: { eyebrow: "ผลิตภัณฑ์สำคัญ", title: "เส้นทางจัดซื้อสำหรับผลิตภัณฑ์หลักหกกลุ่ม", note: "เริ่มจากผลิตภัณฑ์ที่เกี่ยวข้องและระบุข้อมูลจำเพาะ ปริมาณ กระบวนการ ปลายทาง การใช้งานปลายทาง และเอกสารที่ต้องการใน RFQ" },
};

const featuredApplicationSlugs = [
  "automotive-carbon-fiber-parts",
  "civil-uav-drone-components",
  "plastic-resin-reinforcement",
  "structural-strengthening",
] as const;

function localizedLink(href: string, locale: Locale) {
  return phaseOneLocalePath(href, locale);
}

function localizedProduct(product: ProductCatalogItem, locale: Exclude<Locale, "en">) {
  const translation = getLocalizedProductContent(locale, product.slug);
  return {
    name: translation?.name ?? product.name,
    shortName: translation?.shortName ?? product.shortName,
    category: translation?.category ?? product.category,
    description: translation?.description ?? product.description,
    heroCopy: translation?.heroCopy ?? product.heroCopy,
    intro: translation?.intro ?? product.intro,
    applications: translation?.applications ?? product.applications,
    faqs: translation?.faqs ?? product.faqs,
    seo: translation?.seo ?? product.seo,
  };
}

function inferRfqType(product: ProductCatalogItem) {
  const source = `${product.name} ${product.category}`.toLowerCase();

  if (product.slug === "carbon-fiber-multiaxial-ncf-fabric") return "multiaxial-ncf";
  if (product.slug === "3k-carbon-fiber-laminate-sheet") return "cfrp-part";
  if (product.slug === "carbon-fiber-ud-fabric") return "ud-fabric";
  if (product.slug === "spread-tow-carbon-fiber-fabric") return "spread-tow-fabric";
  if (product.slug === "carbon-fiber-yarn-and-tow") return "yarn-tow";
  if (product.slug === "prepreg-carbon-fiber-materials") return "prepreg";
  if (product.slug === "structural-strengthening-system") return "structural-strengthening";
  if (source.includes("chopped") || source.includes("milled") || source.includes("powder")) return "chopped-powder";
  if (source.includes("prepreg")) return "prepreg";
  if (source.includes("yarn") || source.includes("tow")) return "yarn-tow";
  if (source.includes("structural") || source.includes("strengthening")) return "structural-strengthening";
  if (source.includes("tube") || source.includes("sheet") || source.includes("laminate") || source.includes("custom")) return "cfrp-part";
  return "woven-fabric";
}

export function createLocalizedHomeMetadata(locale: Exclude<Locale, "en">): Metadata {
  const content = localizedHomeContent[locale];
  return createPageMetadata({
    title: content.seo.title,
    description: content.seo.description,
    keywords: content.seo.keywords,
    path: "/",
    image: "/images/home/home-yarn-creel-hero-gray.jpg",
    locale,
    localized: true,
  });
}

export function LocalizedHomePage({ locale }: LocalizedPageProps) {
  const content = localizedHomeContent[locale];
  const copy = getUiCopy(locale);
  const hasDetailedTranslatedSpecs = locale === "es" || locale === "pt-br";
  const featuredProducts = featuredProductSlugs
    .map((slug) => productCatalog.find((product) => product.slug === slug))
    .filter((product) => product !== undefined);
  const priorityProductsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${localizedJsonLdUrl("/", locale)}#priority-products`,
    name: content.sections.productTitle,
    inLanguage: hreflangLocales[locale],
    numberOfItems: featuredProducts.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: featuredProducts.map((product, index) => {
      const localized = localizedProduct(product, locale);
      return {
        "@type": "ListItem",
        position: index + 1,
        name: localized.name,
        url: localizedJsonLdUrl(`/products/${product.slug}`, locale),
      };
    }),
  };

  return (
    <>
      <section className="b2b-hero">
        <div className="site-shell b2b-hero-grid">
          <div className="b2b-hero-copy">
            <h1>{content.h1}</h1>
            <p>{content.copy}</p>
            <div className="hero-actions">
              <a href="#applications" className="button button-blue">
                {content.primaryCta} <ArrowRight size={18} />
              </a>
              <Link href={localizedLink("/contact", locale)} className="button button-light-outline" prefetch={false}>
                {content.secondaryCta} <ArrowRight size={18} />
              </Link>
              <Link href={localizedLink("/catalog", locale)} className="button button-light-outline" prefetch={false}>
                {content.catalogCta} <FileText size={18} />
              </Link>
            </div>
            <div className="hero-material-rail" aria-label={content.heroMeta.title}>
              {content.materialRail.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="b2b-hero-media">
            <Image
              src="/images/home/home-yarn-creel-hero-gray.jpg"
              alt={`${content.h1} - FRP HOME`}
              fill
              priority
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 900px) calc(100vw - 26px), 52vw"
            />
            <div className="hero-media-table">
              <span>{content.heroMeta.title}</span>
              <dl>
                <div><dt>{content.heroMeta.format}</dt><dd>{content.heroMeta.formatValue}</dd></div>
                <div><dt>{content.heroMeta.process}</dt><dd>{content.heroMeta.processValue}</dd></div>
                <div><dt>{content.heroMeta.review}</dt><dd>{content.heroMeta.reviewValue}</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-product-series" data-priority-products>
        <div className="site-shell">
          <div className="home-section-heading">
            <div>
              <Eyebrow>{content.sections.productEyebrow}</Eyebrow>
              <h2>{content.sections.productTitle}</h2>
            </div>
            <p>{content.sections.productCopy}</p>
          </div>
          <div className="series-grid">
            {featuredProducts.map((product, index) => {
              const localized = localizedProduct(product, locale);
              return (
                <article
                  className="series-card"
                  key={product.slug}
                  data-priority-product-slug={product.slug}
                >
                  <Link href={localizedLink(`/products/${product.slug}`, locale)} className="series-image">
                    <Image src={product.image} alt={localized.name} fill sizes="(max-width: 760px) calc(100vw - 26px), 33vw" />
                    <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  </Link>
                  <div className="series-body">
                    <h3>{localized.name}</h3>
                    <p>{localized.description}</p>
                    <dl>
                      {hasDetailedTranslatedSpecs
                        ? product.specs.slice(0, 3).map((spec) => (
                            <div key={spec.label}>
                              <dt>{translateLabel(locale, spec.label)}</dt>
                              <dd>{translateSpecText(locale, spec.value)}</dd>
                            </div>
                          ))
                        : <div><dt>{copy.common.specifications}</dt><dd>{localized.heroCopy}</dd></div>}
                    </dl>
                    <Link href={localizedLink(`/products/${product.slug}`, locale)} className="text-link">
                      {copy.common.viewProductPage} <ArrowRight size={17} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-soft finder-section" id="applications">
        <div className="site-shell finder-grid">
          <div>
            <Eyebrow>{content.sections.applicationEyebrow}</Eyebrow>
            <h2>{content.sections.applicationTitle}</h2>
            <p>{content.sections.applicationCopy}</p>
            <div className="application-finder-list">
              {featuredApplicationSlugs.map((slug) => {
                const page = getApplicationPage(slug);
                const localized = page ? getLocalizedApplicationContent(locale, slug) : undefined;
                if (!page || !localized) return null;
                return (
                  <Link href={localizedLink(`/applications/${slug}`, locale)} key={slug}>
                    <Image src={page.image} alt="" width={72} height={54} />
                    <span>
                      <strong>{localized.title}</strong>
                      <small>{localized.quickAnswer}</small>
                    </span>
                    <ArrowRight size={17} />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="finder-feature-panel">
            <Image
              src="/images/products/3k-carbon-fiber-laminate-stack.webp"
              alt={content.sections.processTitle}
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
            />
            <div>
              <span>{copy.common.quickAnswer}</span>
              <h3>{content.sections.processTitle}</h3>
              <p>{content.sections.processCopy}</p>
            </div>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priorityProductsSchema) }}
      />
    </>
  );
}

export function createLocalizedProductsMetadata(locale: Exclude<Locale, "en">): Metadata {
  const content = localizedProductsPageContent[locale];
  return createPageMetadata({
    title: content.seo.title,
    description: content.seo.description,
    path: "/products",
    image: "/images/composite-materials-range-products.webp",
    locale,
    localized: true,
  });
}

export function LocalizedProductsPage({ locale }: LocalizedPageProps) {
  const content = localizedProductsPageContent[locale];
  const copy = getUiCopy(locale);
  const hasDetailedTranslatedSpecs = locale === "es" || locale === "pt-br";
  const priorityCopy = priorityProductsCopy[locale];
  const priorityProducts = priorityDiscoveryRoutes
    .map((route) => productCatalog.find((product) => product.slug === route.productSlug))
    .filter((product) => product !== undefined);
  const priorityProductsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${localizedJsonLdUrl("/products", locale)}#priority-products`,
    name: priorityCopy.title,
    inLanguage: hreflangLocales[locale],
    numberOfItems: priorityProducts.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: priorityProducts.map((product, index) => {
      const localized = localizedProduct(product, locale);
      return {
        "@type": "ListItem",
        position: index + 1,
        name: localized.name,
        url: localizedJsonLdUrl(`/products/${product.slug}`, locale),
      };
    }),
  };

  return (
    <>
      <PageHero
        className="products-page-hero"
        index="02 / 07"
        eyebrow={content.eyebrow}
        title={content.title}
        copy={content.copy}
        image="/images/composite-materials-range-products.webp"
      />
      <section className="section section-soft" data-priority-products>
        <div className="site-shell">
          <SectionHeading
            eyebrow={priorityCopy.eyebrow}
            title={priorityCopy.title}
            copy={priorityCopy.note}
          />
          <div className="priority-path-grid">
            {priorityProducts.map((product) => {
              const localized = localizedProduct(product, locale);
              return (
                <article
                  className="priority-path-card"
                  data-priority-product-slug={product.slug}
                  key={product.slug}
                >
                  <span>{localized.category}</span>
                  <h2>{localized.name}</h2>
                  <p>{localized.heroCopy}</p>
                  <Link
                    className="button button-blue"
                    href={localizedLink(`/products/${product.slug}`, locale)}
                    prefetch={false}
                  >
                    {copy.common.viewProductPage} <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="site-shell">
          <div className="products-directory-intro" id="product-catalog">
            <SectionHeading
              eyebrow={content.completePortfolio}
              title={content.completeTitle}
              copy={content.completeCopy}
            />
            <div className="products-directory-actions">
              <Link href="#product-catalog-list" className="button button-dark">
                {copy.common.viewProducts} <ArrowRight size={17} />
              </Link>
              <Link href={localizedLink("/contact", locale)} className="button button-outline">
                {copy.common.requestQuote} <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="product-category-stack" id="product-catalog-list">
            {productFamilies.map((family, groupIndex) => {
              const localizedFamily = translateProductFamily(locale, family.title, family.description);
              const groupProducts = family.items
                .map((item) => item.href.split("/").pop())
                .filter((slug): slug is string => Boolean(slug && isPhaseOneProductSlug(slug)))
                .filter((slug, index, array) => array.indexOf(slug) === index)
                .map((slug) => productCatalog.find((product) => product.slug === slug))
                .filter((product) => product !== undefined);

              if (!groupProducts.length) return null;

              return (
                <section className="product-category-section" id={family.href.split("#")[1]} key={family.title}>
                  <div className="product-category-heading">
                    <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                    <div>
                      <h2>{localizedFamily.title}</h2>
                      <p>{localizedFamily.description}</p>
                    </div>
                    <div className="product-family-summary">
                      <dl>
                        <div>
                          <dt>{content.keyProducts}</dt>
                          <dd>{groupProducts.slice(0, 4).map((product) => localizedProduct(product, locale).name).join(", ")}</dd>
                        </div>
                        <div>
                          <dt>{content.commonApplications}</dt>
                          <dd>{Array.from(new Set(groupProducts.flatMap((product) => localizedProduct(product, locale).applications))).slice(0, 5).join(", ")}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div className="product-directory-grid">
                    {groupProducts.map((product) => {
                      const localized = localizedProduct(product, locale);
                      return (
                        <article className="directory-product-card" key={product.slug}>
                          <div className="directory-product-image-placeholder">
                            <Image src={product.image} alt={localized.name} fill sizes="(max-width: 760px) 100vw, 24vw" />
                          </div>
                          <div className="directory-product-body">
                            <div className="product-category">{localized.category}</div>
                            <h3>{localized.name}</h3>
                            <p>{localized.description}</p>
                            <div className="directory-spec-summary">
                              <span>{copy.common.specifications}</span>
                              <dl>
                                {hasDetailedTranslatedSpecs
                                  ? product.specs.slice(0, 3).map((spec) => (
                                      <div key={spec.label}>
                                        <dt>{translateLabel(locale, spec.label)}</dt>
                                        <dd>{translateSpecText(locale, spec.value)}</dd>
                                      </div>
                                    ))
                                  : <div><dt>{localized.category}</dt><dd>{localized.heroCopy}</dd></div>}
                              </dl>
                            </div>
                            <Link href={localizedLink(`/products/${product.slug}`, locale)} className="text-link">
                              {copy.common.viewProductPage} <ArrowRight size={17} />
                            </Link>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priorityProductsSchema) }}
      />
    </>
  );
}

export function createLocalizedContactMetadata(locale: Exclude<Locale, "en">): Metadata {
  const content = localizedContactContent[locale];
  return createPageMetadata({
    title: content.seo.title,
    description: content.seo.description,
    path: "/contact",
    image: "/images/composite-materials-range.png",
    locale,
    localized: true,
  });
}

export function LocalizedContactPage({ locale }: LocalizedPageProps) {
  const content = localizedContactContent[locale];
  const copy = getUiCopy(locale);
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: content.title,
    url: localizedJsonLdUrl("/contact", locale),
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: siteConfig.url,
      email: siteConfig.email,
      telephone: siteConfig.phone,
    },
  };

  return (
    <>
      <PageHero
        index="07 / 07"
        eyebrow={content.eyebrow}
        title={content.title}
        copy={content.copy}
      />
      <section className="section">
        <div className="site-shell contact-layout">
          <aside className="contact-aside">
            <h2>{content.asideTitle}</h2>
            <p>{content.asideCopy}</p>
            <div className="contact-methods">
              <a className="contact-method" href={siteConfig.emailHref}>
                <span><small>{translateLabel(locale, "Email")}</small><strong dir="ltr">{siteConfig.email}</strong></span>
              </a>
              <a className="contact-method" href={siteConfig.phoneHref}>
                <span><small>{translateLabel(locale, "Phone")}</small><strong dir="ltr">{siteConfig.phone}</strong></span>
              </a>
              <a className="contact-method" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                <span><small>{translateLabel(locale, "WhatsApp")}</small><strong dir="ltr">{siteConfig.whatsapp}</strong></span>
              </a>
              <div className="contact-method">
                <span><small>{content.location}</small><strong>{content.locationValue}</strong></span>
              </div>
              <div className="contact-method">
                <span><small>{content.response}</small><strong>{copy.common.usuallyOneBusinessDay}</strong></span>
              </div>
            </div>
          </aside>
          <Suspense fallback={<RfqFallbackForm locale={locale} sourcePage={`/${locale}/contact`} />}>
            <InquiryForm locale={locale} />
          </Suspense>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
    </>
  );
}

export function createLocalizedCatalogMetadata(locale: Exclude<Locale, "en">): Metadata {
  const content = localizedCatalogContent[locale];
  return createPageMetadata({
    title: content.seo.title,
    description: content.seo.description,
    path: "/catalog",
    image: "/images/catalog/frphome/woven-twill.webp",
    locale,
    localized: true,
  });
}

export function LocalizedCatalogPage({ locale }: LocalizedPageProps) {
  const content = localizedCatalogContent[locale];
  const copy = getUiCopy(locale);

  return (
    <>
      <PageHero
        index="Catalog"
        eyebrow={content.eyebrow}
        title={content.title}
        copy={content.copy}
        image="/images/catalog/frphome/woven-twill.webp"
      >
        <div className="hero-actions">
          <Link href={localizedLink("/products", locale)} className="button button-blue">
            {copy.common.viewProducts} <ArrowRight size={18} />
          </Link>
          <Link href={localizedLink("/contact", locale)} className="button button-outline">
            {copy.common.requestQuote} <ArrowRight size={18} />
          </Link>
        </div>
      </PageHero>
      <section className="section">
        <div className="site-shell product-highlight-grid">
          {content.cards.map(([title, text]) => (
            <article key={title}>
              <span>{title}</span>
              <strong>{text}</strong>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function createLocalizedProductMetadata(locale: Exclude<Locale, "en">, slug: string): Metadata {
  const product = getProductBySlug(slug);
  const content = product ? getLocalizedProductContent(locale, slug) : undefined;

  if (!product || !content) {
    return { title: "Product Not Found" };
  }

  return createPageMetadata({
    title: content.seo.title,
    description: content.seo.description,
    keywords: content.seo.keywords,
    path: `/products/${slug}`,
    image: product.image,
    locale,
    localized: true,
  });
}

export function LocalizedProductDetailPage({ locale, slug }: LocalizedPageProps & { slug: string }) {
  if (!isPhaseOneProductSlug(slug)) notFound();
  const product = getProductBySlug(slug);
  const content = product ? getLocalizedProductContent(locale, slug) : undefined;

  if (!product || !content) notFound();

  const copy = getUiCopy(locale);
  const hasDetailedTranslatedSpecs = locale === "es" || locale === "pt-br";
  const activeRfqType = rfqProductTypes.find((type) => type.value === inferRfqType(product)) ?? rfqProductTypes[1];
  const relatedProducts = productCatalog
    .filter((item) => item.slug !== product.slug)
    .filter((item) => isPhaseOneProductSlug(item.slug))
    .slice(0, 4);
  const productImageSlots = product.gallery?.length ? product.gallery : [product.image];
  const downloadableDocuments = getProductDocuments(product.slug);
  const relatedGuides = featuredProductSlugs.includes(
    product.slug as (typeof featuredProductSlugs)[number],
  )
    ? technicalArticles
        .filter((article) => article.recommendedProducts.includes(product.slug))
        .sort((a, b) =>
          (b.reviewedAt ?? b.publishedAt ?? "").localeCompare(
            a.reviewedAt ?? a.publishedAt ?? "",
          ),
        )
        .slice(0, 3)
    : [];
  const firstSpecTable = product.tds.tables[0];
  const inquiryHref = localizedLink(
    `/contact?product=${encodeURIComponent(product.name)}&message=${encodeURIComponent(
      getRfqPrefillMessage(locale, content.name),
    )}`,
    locale,
  );
  const productUrl = localizedJsonLdUrl(`/products/${slug}`, locale);
  const productVideo = getProductVideo(product.slug, locale);
  const productVideoSchema = productVideo
    ? createProductVideoSchema(productVideo, productUrl, locale)
    : undefined;
  const productResources = createProductResourceSchemas({
    productUrl,
    productName: content.name,
    documents: downloadableDocuments,
    guides: relatedGuides,
    documentsListName: tdsDownloadCopy[locale].title,
    guidesListName: englishGuideCopy[locale].title,
  });
  const productPageSchema = createB2bProductPageSchema({
    name: content.name,
    description: content.description,
    image: product.image,
    url: productUrl,
    sku: product.tds.codePrefix,
    locale,
    subjectOf: productResources.subjectOf,
  });
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: translateLabel(locale, "Home"), item: localizedJsonLdUrl("/", locale) },
      { "@type": "ListItem", position: 2, name: translateLabel(locale, "Products"), item: localizedJsonLdUrl("/products", locale) },
      { "@type": "ListItem", position: 3, name: content.name, item: productUrl },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <Link href={inquiryHref} className="sticky-rfq-button" rel="nofollow">
        {copy.common.requestQuote} <ArrowRight size={17} />
      </Link>

      <section className="product-template-hero">
        <div className="site-shell">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href={localizedLink("/", locale)}>{translateLabel(locale, "Home")}</Link>
            <span>/</span>
            <Link href={localizedLink("/products", locale)}>{translateLabel(locale, "Products")}</Link>
            <span>/</span>
            <span>{content.name}</span>
          </nav>

          <div className="product-template-grid">
            <div className="product-template-copy">
              <span className="section-index">{translateLabel(locale, "Product")}</span>
              <h1>{content.name}</h1>
              <p className="product-definition">{content.description}</p>
              <div className="product-template-actions">
                <Link href={inquiryHref} className="button button-blue" rel="nofollow">
                  {copy.common.requestQuote} <ArrowRight size={17} />
                </Link>
                <Link href="/technical-center" hrefLang="en" className="button button-outline">
                  {copy.common.technicalCenter} (EN) <FileText size={17} />
                </Link>
              </div>
            </div>

            <ProductImageZoom src={product.image} alt={content.name} priority sizes="(max-width: 900px) 100vw, 44vw" />
          </div>
        </div>
      </section>

      <section className="section product-page-body">
        <div className="site-shell product-page-grid">
          <aside className="product-anchor-rail">
            <strong>{copy.common.overview}</strong>
            {[
              [copy.common.quickAnswer, "#quick-answer"],
              [copy.common.specifications, "#specifications"],
              [copy.common.overview, "#overview"],
              ...(productVideo ? [[productVideo.eyebrow, "#production-video"]] : []),
              [copy.common.applications, "#applications"],
              ["RFQ", "#rfq-info"],
              ...(downloadableDocuments.length > 0 ? [[copy.common.documents, "#documents"]] : []),
              ...(relatedGuides.length > 0 ? [[englishGuideCopy[locale].eyebrow, "#technical-guides"]] : []),
              [copy.common.faq, "#faq"],
            ].map(([label, href]) => (
              <a href={href} key={href}>{label}</a>
            ))}
          </aside>

          <div className="product-content-stack">
            <section className="product-detail-card quick-answer-card" id="quick-answer">
              <div>
                <Eyebrow>{copy.common.quickAnswer}</Eyebrow>
                <h2>{content.shortName}</h2>
                <p>{content.heroCopy}</p>
              </div>
              <dl className="quick-answer-grid">
                <div><dt>{translateLabel(locale, "Product type")}</dt><dd>{content.category}</dd></div>
                {hasDetailedTranslatedSpecs
                  ? product.specs.map((spec) => (
                      <div key={spec.label}><dt>{translateLabel(locale, spec.label)}</dt><dd>{translateSpecText(locale, spec.value)}</dd></div>
                    ))
                  : <div><dt>{copy.common.specifications}</dt><dd>{content.heroCopy}</dd></div>}
                <div><dt>{copy.common.documents}</dt><dd>{copy.common.documentsByScope}</dd></div>
                <div><dt>{copy.common.endUseReview}</dt><dd>{copy.common.complianceNotice}</dd></div>
              </dl>
            </section>

            <section className="product-detail-card" id="specifications">
              {hasDetailedTranslatedSpecs ? (
                <>
                  <SectionHeading
                    eyebrow={copy.common.specifications}
                    title={translateSpecText(locale, firstSpecTable.title)}
                    copy={translateSpecText(locale, product.tds.note)}
                  />
                  <div className="table-wrap">
                    <table className="technical-table">
                      <thead>
                        <tr>
                          {firstSpecTable.columns.map((column) => <th key={column}>{translateSpecText(locale, column)}</th>)}
                        </tr>
                      </thead>
                      <tbody>
                        {firstSpecTable.rows.map((row) => (
                          <tr key={row.join("|")}>
                            {row.map((cell, index) => <td key={`${cell}-${index}`}>{translateSpecText(locale, cell)}</td>)}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              ) : (
                <SectionHeading eyebrow={copy.common.specifications} title={content.name} copy={content.heroCopy} />
              )}
            </section>

            <section className="product-detail-card" id="overview">
              <SectionHeading eyebrow={copy.common.overview} title={content.shortName} />
              <div className="product-overview-grid">
                <div>
                  {content.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <div className="product-gallery-strip" aria-label={content.name}>
                  {productImageSlots.slice(0, product.slug === "chopped-carbon-fiber" ? 6 : 4).map((image, index) => (
                    <div key={image}>
                      <Image src={image} alt={`${content.name} ${index + 1}`} fill sizes="(max-width: 760px) 50vw, 12vw" />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {productVideo ? <ProductVideo video={productVideo} /> : null}

            <section className="product-detail-card" id="applications">
              <SectionHeading eyebrow={copy.common.applications} title={content.category} />
              <div className="product-application-grid">
                {content.applications.map((application) => (
                  <div key={application}>
                    <CheckCircle2 size={18} />
                    <span>{application}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="product-detail-card" id="rfq-info">
              <SectionHeading
                eyebrow="RFQ"
                title={translateRfqTypeLabel(locale, activeRfqType.label)}
                copy={copy.common.brandAvailabilityNotice}
              />
              <div className="rfq-required-grid">
                {activeRfqType.fields.map((field) => (
                  <div key={field.name}>
                    <ClipboardList size={18} />
                    <span>{translateRfqFieldLabel(locale, field.label)}</span>
                  </div>
                ))}
                <div><ClipboardList size={18} /><span>{copy.rfq.endUse}</span></div>
                <div><ClipboardList size={18} /><span>{copy.rfq.quantity}</span></div>
                <div><ClipboardList size={18} /><span>{copy.rfq.destinationCountry}</span></div>
              </div>
            </section>

            {downloadableDocuments.length > 0 ? (
              <section className="product-detail-card" id="documents">
                <SectionHeading
                  eyebrow={copy.common.documents}
                  title={tdsDownloadCopy[locale].title}
                  copy={tdsDownloadCopy[locale].note}
                />
                <div className="tds-download-list">
                  {downloadableDocuments.map((document) => (
                    <a
                      className="tds-download-card"
                      data-analytics-event="tds_download"
                      data-product-slug={product.slug}
                      data-document-title={document.title}
                      data-document-id={getProductDocumentId(document)}
                      download
                      href={document.href}
                      key={document.href}
                    >
                      <FileText size={23} />
                      <span>
                        <strong>{document.type === "SPEC" ? `Download ${document.type}` : tdsDownloadCopy[locale].action}</strong>
                        <small>{document.title}</small>
                        <small>{document.revision} · English · {document.fileSize}</small>
                      </span>
                      <ArrowRight size={18} />
                    </a>
                  ))}
                </div>
              </section>
            ) : null}

            {relatedGuides.length > 0 ? (
              <section className="product-detail-card" id="technical-guides">
                <SectionHeading
                  eyebrow={englishGuideCopy[locale].eyebrow}
                  title={englishGuideCopy[locale].title}
                  copy={englishGuideCopy[locale].note}
                />
                <div className="application-detail-list">
                  {relatedGuides.map((guide) => (
                    <Link
                      href={`/technical-center/${guide.slug}`}
                      hrefLang="en"
                      key={guide.slug}
                    >
                      <span>
                        <strong>{guide.title}</strong>
                        <small>{englishGuideCopy[locale].action}</small>
                      </span>
                      <ArrowRight size={17} />
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

            <section className="product-detail-card product-faq-section" id="faq">
              <SectionHeading eyebrow={copy.common.faq} title={content.shortName} />
              <div className="product-faq-grid">
                {content.faqs.map((faq) => (
                  <article key={faq.question}>
                    <h2>{faq.question}</h2>
                    <p>{faq.answer}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="product-detail-card">
              <div className="section-title-row">
                <div>
                  <Eyebrow>{copy.common.relatedProducts}</Eyebrow>
                  <h2>{copy.common.viewProducts}</h2>
                </div>
                <Link href={localizedLink("/products", locale)} className="text-link">
                  {copy.common.viewAll} <ArrowRight size={17} />
                </Link>
              </div>
              <div className="related-product-grid">
                {relatedProducts.map((related) => {
                  const relatedContent = localizedProduct(related, locale);
                  return (
                    <Link href={localizedLink(`/products/${related.slug}`, locale)} key={related.slug}>
                      <Image src={related.image} alt={relatedContent.name} fill sizes="(max-width: 760px) 50vw, 14vw" />
                      <span>{relatedContent.name}</span>
                    </Link>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="section product-rfq-section">
        <div className="site-shell product-rfq-grid">
          <div>
            <Eyebrow>RFQ</Eyebrow>
            <h2>{copy.common.requestQuote}: {content.shortName}</h2>
            <p>{copy.common.complianceNotice}</p>
            <div className="tds-meta-grid">
              <div><FileText size={21} /><span><strong>TDS</strong><small>{copy.common.documents}</small></span></div>
              <div><Ruler size={21} /><span><strong>{translateLabel(locale, "Spec")}</strong><small>{copy.common.specifications}</small></span></div>
              <div><Settings2 size={21} /><span><strong>{translateLabel(locale, "Review")}</strong><small>{copy.common.endUseReview}</small></span></div>
            </div>
          </div>
          <Suspense fallback={<RfqFallbackForm productName={product.name} productType={activeRfqType.value} locale={locale} sourcePage={`/${locale}/products/${product.slug}`} />}>
            <InquiryForm
              initialProduct={product.name}
              initialProductType={activeRfqType.value}
              locale={locale}
            />
          </Suspense>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            productPageSchema,
            breadcrumbSchema,
            faqSchema,
            ...(productVideoSchema ? [productVideoSchema] : []),
            ...productResources.schemas,
          ]),
        }}
      />
    </>
  );
}

export function createLocalizedApplicationMetadata(locale: Exclude<Locale, "en">, slug: string): Metadata {
  const page = getApplicationPage(slug);
  const content = page ? getLocalizedApplicationContent(locale, slug) : undefined;

  if (!page || !content) return { title: "Application Not Found" };

  return createPageMetadata({
    title: content.seo.title,
    description: content.seo.description,
    path: `/applications/${slug}`,
    image: page.image,
    keywords: content.seo.keywords,
    locale,
    localized: true,
  });
}

export function LocalizedApplicationDetailPage({ locale, slug }: LocalizedPageProps & { slug: string }) {
  if (!isPhaseOneApplicationSlug(slug)) notFound();
  const page = getApplicationPage(slug);
  const content = page ? getLocalizedApplicationContent(locale, slug) : undefined;

  if (!page || !content) notFound();

  const copy = getUiCopy(locale);
  const relatedProducts = page.relatedProducts
    .map((productSlug) => productCatalog.find((product) => product.slug === productSlug))
    .filter((product) => product !== undefined)
    .filter((product) => isPhaseOneProductSlug(product.slug));
  const relatedGuides = page.slug === "structural-strengthening"
    ? getStrengtheningTechnicalGuides()
    : page.slug === "automotive-carbon-fiber-parts"
      ? getAutomotiveTechnicalGuides()
      : [];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${localizedJsonLdUrl(`/applications/${slug}`, locale)}#webpage`,
    name: content.title,
    description: content.description,
    url: localizedJsonLdUrl(`/applications/${slug}`, locale),
  };
  const breadcrumb = applicationBreadcrumbSchema(page);
  breadcrumb.itemListElement = [
    { "@type": "ListItem", position: 1, name: translateLabel(locale, "Home"), item: localizedJsonLdUrl("/", locale) },
    { "@type": "ListItem", position: 2, name: copy.nav.applications, item: absoluteUrl("/applications") },
    { "@type": "ListItem", position: 3, name: content.title, item: localizedJsonLdUrl(`/applications/${slug}`, locale) },
  ];

  return (
    <>
      <PageHero
        index="Application"
        eyebrow={copy.nav.applications}
        title={content.title}
        copy={content.quickAnswer}
        image={page.image}
        visualLabel={`${content.title} material selection image`}
      />

      <section className="section">
        <div className="site-shell article-layout">
          <aside className="product-anchor-rail">
            <strong>{copy.common.overview}</strong>
            <a href="#why">{copy.common.quickAnswer}</a>
            <a href="#materials">{copy.common.relatedProducts}</a>
            <a href="#specifications">{copy.common.specifications}</a>
            <a href="#selection">{copy.common.overview}</a>
            <a href="#rfq">RFQ</a>
            {relatedGuides.length > 0 ? <a href="#technical-guides">{englishGuideCopy[locale].eyebrow}</a> : null}
            <a href="#faq">{copy.common.faq}</a>
          </aside>

          <div className="article-content-stack">
            <section className="product-detail-card quick-answer-card">
              <div>
                <div className="eyebrow">{copy.common.quickAnswer}</div>
                <h2>{content.title}</h2>
                <p>{content.quickAnswer}</p>
              </div>
            </section>

            <section className="product-detail-card" id="why">
              <SectionHeading eyebrow={copy.common.quickAnswer} title={content.description} />
              <div className="product-application-grid">
                {content.why.map((item) => (
                  <div key={item}><CheckCircle2 size={18} /><span>{item}</span></div>
                ))}
              </div>
            </section>

            <section className="product-detail-card" id="materials">
              <SectionHeading eyebrow={copy.common.relatedProducts} title={copy.common.viewProducts} />
              <div className="application-material-grid">
                {content.recommendedMaterials.map((material) => (
                  <Link href={localizedLink(material.href, locale)} key={material.name}>
                    <strong>{material.name}</strong>
                    <span>{material.note}</span>
                    <ArrowRight size={16} />
                  </Link>
                ))}
              </div>
            </section>

            <section className="product-detail-card" id="specifications">
              <SectionHeading eyebrow={copy.common.specifications} title={content.title} />
              <div className="table-wrap">
                <table className="technical-table">
                  <thead><tr><th>{translateLabel(locale, "Item")}</th><th>{translateLabel(locale, "Typical value")}</th></tr></thead>
                  <tbody>
                    {content.commonSpecifications.map((row) => (
                      <tr key={row.join("|")}><td>{row[0]}</td><td>{row[1]}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="product-detail-card" id="selection">
              <SectionHeading eyebrow={copy.common.overview} title={content.title} />
              <div className="choice-grid">
                {content.selectionGuide.map((item, index) => (
                  <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>
                ))}
              </div>
            </section>

            <section className="product-detail-card" id="rfq">
              <SectionHeading eyebrow="RFQ" title={copy.common.requestQuote} copy={copy.common.complianceNotice} />
              <div className="rfq-required-grid">
                {content.rfqDetails.map((item) => (
                  <div key={item}><ClipboardList size={18} /><span>{item}</span></div>
                ))}
              </div>
            </section>

            <section className="product-detail-card">
              <div className="section-title-row">
                <div>
                  <div className="eyebrow">{copy.common.relatedProducts}</div>
                  <h2>{copy.common.viewProducts}</h2>
                </div>
                <Link href={localizedLink("/products", locale)} className="text-link">
                  {copy.common.viewAll} <ArrowRight size={17} />
                </Link>
              </div>
              <div className="related-product-grid">
                {relatedProducts.map((product) => {
                  const localized = localizedProduct(product, locale);
                  return (
                    <Link href={localizedLink(`/products/${product.slug}`, locale)} key={product.slug}>
                      <Image src={product.image} alt={localized.name} fill sizes="(max-width: 760px) 50vw, 14vw" />
                      <span>{localized.name}</span>
                    </Link>
                  );
                })}
              </div>
            </section>

            {relatedGuides.length > 0 ? (
              <section className="product-detail-card" id="technical-guides">
                <SectionHeading
                  eyebrow={englishGuideCopy[locale].eyebrow}
                  title={englishGuideCopy[locale].title}
                  copy={englishGuideCopy[locale].note}
                />
                <div className="application-detail-list">
                  {relatedGuides.map((guide) => (
                    <Link
                      href={`/technical-center/${guide.slug}`}
                      hrefLang="en"
                      key={guide.slug}
                    >
                      <span>
                        <strong>{guide.title}</strong>
                        <small>{englishGuideCopy[locale].action}</small>
                      </span>
                      <ArrowRight size={17} />
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

            <section className="product-detail-card product-faq-section" id="faq">
              <SectionHeading eyebrow={copy.common.faq} title={content.title} />
              <div className="product-faq-grid">
                {content.faqs.map((faq) => (
                  <article key={faq.question}><h2>{faq.question}</h2><p>{faq.answer}</p></article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([webPageSchema, breadcrumb, faqSchema]) }}
      />
    </>
  );
}
