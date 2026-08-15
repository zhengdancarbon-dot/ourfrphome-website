import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenText, FileCheck2, FileText, FlaskConical, Ruler } from "lucide-react";
import { InquiryBand, PageHero, SectionHeading } from "@/components/ui";
import { productCatalog, type ProductCatalogItem } from "@/lib/product-catalog";
import { getProductDocumentId, productDocuments, type ProductDocument } from "@/lib/product-documents";
import { priorityDiscoveryRoutes } from "@/lib/priority-discovery";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Carbon Fiber Product Data Sheets by Material Family",
  description:
    "Carbon fiber product data sheets by material family, including typical TDS information for carbon fabrics, prepregs, plates, tubes, yarn, chopped fiber and milled carbon fiber powder.",
  keywords: [
    "carbon fiber fabric manufacturer",
    "carbon fiber cloth supplier",
    "carbon fiber prepreg China",
    "UD carbon fiber fabric",
    "multiaxial carbon fabric",
    "carbon fiber composite materials",
    "carbon fiber fabric specifications",
    "carbon fiber technical data",
  ],
  path: "/technical-resources",
  image: "/images/composite-materials-range.png",
});

const resources = [
  { icon: FileText, title: "Product Data Sheets", copy: "Construction, weight, width, fiber and recommended process information." },
  { icon: FileCheck2, title: "Certificates of Analysis", copy: "Batch-specific inspection results available according to product scope." },
  { icon: FlaskConical, title: "Resin & Cure Guidance", copy: "Indicative mixing, cure, storage and handling recommendations." },
  { icon: Ruler, title: "Tolerance Reference", copy: "Typical controls for areal weight, width, roll length and appearance." },
  { icon: BookOpenText, title: "Storage & Handling", copy: "Practical guidance for dry reinforcement, prepreg and resin systems." },
  { icon: FileCheck2, title: "Packing Documents", copy: "Commercial invoice, packing list, labels and supporting export files." },
];

const tdsDisclaimer =
  "Typical values are provided for material selection and RFQ preparation only. Final values should be confirmed according to order specification, production batch, test method and official COA and TDS documents.";

type PriorityDocumentEntry = {
  document: ProductDocument;
  products: ProductCatalogItem[];
};

const priorityDocuments: PriorityDocumentEntry[] = [];

for (const route of priorityDiscoveryRoutes) {
  const product = productCatalog.find((item) => item.slug === route.productSlug);
  if (!product) continue;

  for (const document of productDocuments.filter((item) => item.productSlug === route.productSlug)) {
    const existing = priorityDocuments.find((entry) => entry.document.href === document.href);
    if (existing) {
      if (!existing.products.some((item) => item.slug === product.slug)) existing.products.push(product);
    } else {
      priorityDocuments.push({ document, products: [product] });
    }
  }
}

const priorityDocumentSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${absoluteUrl("/technical-resources")}#verified-priority-documents`,
  name: "Verified technical documents for priority carbon fiber products",
  inLanguage: "en",
  numberOfItems: priorityDocuments.length,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  itemListElement: priorityDocuments.map(({ document, products }, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "DigitalDocument",
      "@id": absoluteUrl(document.href),
      name: document.title,
      encodingFormat: "application/pdf",
      inLanguage: "en",
      url: absoluteUrl(document.href),
      about: products.map((product) => ({
        "@type": "Product",
        name: product.name,
        url: absoluteUrl(`/products/${product.slug}`),
      })),
    },
  })),
};

export default function TechnicalResourcesPage() {
  return (
    <>
      <PageHero
        index="04 / 07"
        eyebrow="Technical resources"
        title="Carbon Fiber Product Data Sheets by Material Family"
        copy="Use these indicative ranges to frame your inquiry. Product-specific technical data, tolerances and test methods are confirmed during quotation and sample approval."
      />
      <section className="section">
        <div className="site-shell">
          <div className="technical-note">
            {tdsDisclaimer}
          </div>
          <SectionHeading
            eyebrow="Documentation"
            title="Information your engineering and quality teams can use."
            copy="Documentation availability varies by material family and specification. Contact us with a product code or target requirement for the correct revision."
          />
          <div className="resource-grid">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <article className="resource-card" key={resource.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Icon size={27} strokeWidth={1.4} />
                  <h3>{resource.title}</h3>
                  <p>{resource.copy}</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-link">
                    Request document <ArrowRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" data-priority-document-library>
        <div className="site-shell">
          <SectionHeading
            eyebrow="Verified downloads"
            title="Published technical documents for priority product groups."
            copy="These English PDF files are published from reviewed source records. Confirm the final order specification, revision, batch documents and test requirements in the RFQ."
          />
          <div className="tds-library-grid">
            {priorityDocuments.map(({ document, products }) => (
              <article
                className="tds-library-card"
                key={document.href}
                data-document-href={document.href}
                data-document-type={document.type}
              >
                <div><FileText size={28} /><span>{document.type}</span></div>
                <h2>{document.title}</h2>
                <p>{document.specification}</p>
                <dl>
                  <div><dt>Revision</dt><dd>{document.revision}</dd></div>
                  <div><dt>Language</dt><dd>{document.language}</dd></div>
                  <div><dt>File</dt><dd>PDF · {document.fileSize}</dd></div>
                  <div>
                    <dt>Related product</dt>
                    <dd>{products.map((product) => product.name).join(" / ")}</dd>
                  </div>
                </dl>
                <div className="tds-library-actions">
                  <a
                    className="button button-blue"
                    data-analytics-event="tds_download"
                    data-product-slug={document.productSlug}
                    data-related-product-slugs={products.map((product) => product.slug).join(",")}
                    data-document-title={document.title}
                    data-document-type={document.type}
                    data-document-id={getProductDocumentId(document)}
                    download
                    href={document.href}
                  >
                    Download {document.type} <ArrowRight size={16} />
                  </a>
                  {products.map((product) => (
                    <Link className="text-link" href={`/products/${product.slug}`} key={product.slug}>
                      {product.shortName} <ArrowRight size={16} />
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="site-shell">
          <SectionHeading
            eyebrow="TDS index"
            title="Carbon Fiber Product Data Sheets by Material Family"
            copy="Each product page includes a Typical Technical Data Sheet section for RFQ preparation. Final values are confirmed by order specification, production batch, test method and official COA and TDS documents."
          />
          <div className="table-wrap technical-index-table-wrap">
            <table className="technical-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Code prefix</th>
                  <th>Key specification</th>
                  <th>Page</th>
                </tr>
              </thead>
              <tbody>
                {productCatalog.map((product) => (
                  <tr key={product.slug}>
                    <td>{product.name}</td>
                    <td>{product.tds.codePrefix}</td>
                    <td>{product.specs.map((spec) => `${spec.label}: ${spec.value}`).join(" | ")}</td>
                    <td>
                      <a href={`/products/${product.slug}`} className="text-link">
                        View Typical TDS <ArrowRight size={16} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="tds-disclaimer">
            {tdsDisclaimer}
          </p>
        </div>
      </section>

      <section className="section section-soft technical-guide-section">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Indicative selection guide"
            title="Start with format, load direction and process."
          />
          <div className="table-wrap">
            <table className="technical-table">
              <thead>
                <tr>
                  <th>Material format</th>
                  <th>Primary benefit</th>
                  <th>Typical weight</th>
                  <th>Common process</th>
                  <th>Typical use</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Woven carbon fabric</td><td>Balanced handling and visual finish</td><td>3K 200 g/m² twill documented; other constructions by review</td><td>Layup / Infusion / Prepreg</td><td>Panels and shells</td></tr>
                <tr><td>UD carbon fabric</td><td>Maximum directional performance</td><td>300 g/m² documented; other constructions by review</td><td>Layup / Pultrusion</td><td>Directional reinforcement strips and profiles</td></tr>
                <tr><td>Carbon Fiber Multiaxial NCF Fabric</td><td>Efficient multi-directional layup</td><td>300 / 600 g/m² documented; other formats by review</td><td>Infusion / RTM</td><td>Large structures</td></tr>
                <tr><td>Carbon Fiber Prepreg Fabric</td><td>Controlled resin and fiber content</td><td>WP-L5100 TDS: UD 30-250; woven 200-480 g/m² dry fiber</td><td>Autoclave / OOA</td><td>Controlled laminate parts and composite panels</td></tr>
                <tr><td>Aramid fabric</td><td>Impact and abrasion resistance</td><td>110–600 g/m² typical</td><td>Layup / Infusion</td><td>Protective laminates</td></tr>
              </tbody>
            </table>
          </div>
          <p className="tds-disclaimer">
            {tdsDisclaimer}
          </p>
        </div>
      </section>
      <InquiryBand />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priorityDocumentSchema) }}
      />
    </>
  );
}
