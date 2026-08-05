import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenText, FileCheck2, FileText, FlaskConical, Ruler } from "lucide-react";
import { InquiryBand, PageHero, SectionHeading } from "@/components/ui";
import { productCatalog } from "@/lib/product-catalog";
import { getProductDocumentId, productDocuments } from "@/lib/product-documents";
import { priorityDiscoveryRoutes } from "@/lib/priority-discovery";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { qualityDocuments } from "@/lib/site-taxonomy";
import { technicalArticles } from "@/lib/technical-articles";

export const metadata: Metadata = createPageMetadata({
  title: "Carbon Fiber Technical Center and Material Selection Guides",
  description:
    "Technical center for carbon fiber product data sheets, material selection guides, prepreg handling, CFRP machining, process selection and documentation requests.",
  keywords: [
    "carbon fiber technical center",
    "carbon fiber product data sheet",
    "carbon fiber material selection",
    "carbon fiber prepreg handling",
    "CFRP machining guide",
  ],
  path: "/technical-center",
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

const technicalCenterSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${absoluteUrl("/technical-center")}#collection`,
  name: "Carbon Fiber Technical Center and Material Selection Guides",
  description:
    "Technical center for carbon fiber product data sheets, material selection guides, prepreg handling, CFRP machining, process selection and documentation requests.",
  url: absoluteUrl("/technical-center"),
  inLanguage: "en",
  mainEntity: {
    "@type": "ItemList",
    "@id": `${absoluteUrl("/technical-center")}#technical-article-list`,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: technicalArticles.length,
    itemListElement: technicalArticles.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: guide.title,
      item: absoluteUrl(`/technical-center/${guide.slug}`),
    })),
  },
};

export default function TechnicalCenterPage() {
  return (
    <>
      <PageHero
        index="05 / 08"
        eyebrow="Technical Center"
        title="Carbon fiber data, documents and selection guidance."
        copy="Use this center to compare product data, prepare RFQs, request TDS / SDS / COA files and connect material choices to manufacturing processes."
        image="/images/composite-materials-range.png"
      />

      <section className="section section-soft">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Priority buyer pathways"
            title="Move from product selection to a complete RFQ."
            copy="Start with the relevant commercial page, then use the connected guides and verified documents to define the order. Published references do not replace final specification, batch documentation or application engineering review."
          />
          <div className="priority-path-grid">
            {priorityDiscoveryRoutes.map((route) => {
              const product = productCatalog.find((item) => item.slug === route.productSlug);
              const guides = route.guideSlugs.flatMap((slug) => {
                const guide = technicalArticles.find((item) => item.slug === slug);
                return guide ? [guide] : [];
              });

              return (
                <article className="priority-path-card" key={route.productSlug}>
                  <span>{route.label}</span>
                  <h2>{route.title}</h2>
                  <p>{route.description}</p>
                  {product ? (
                    <Link className="button button-blue" href={`/products/${product.slug}`}>
                      View {product.name} <ArrowRight size={16} />
                    </Link>
                  ) : null}
                  <div className="priority-path-links" aria-label={`${route.label} buyer guides`}>
                    {guides.map((guide) => (
                      <Link className="text-link" href={`/technical-center/${guide.slug}`} key={guide.slug}>
                        {guide.title} <ArrowRight size={16} />
                      </Link>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Technical guides"
            title="Practical guides for material selection."
            copy="Guides summarize common selection factors. Final material approval should be based on customer testing, process validation and official documents."
          />
          <div className="guide-grid guide-grid-large">
            {technicalArticles.map((guide) => (
              <article className="guide-card" key={guide.slug}>
                <div className="guide-image">
                  <Image src={guide.image} alt={`${guide.title} guide image`} fill sizes="(max-width: 760px) 100vw, 25vw" />
                </div>
                <h2>{guide.title}</h2>
                <p>{guide.description}</p>
                <Link href={`/technical-center/${guide.slug}`} className="text-link">
                  Read guide <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Documentation"
            title="Request documents by product family and specification."
            copy="Documentation availability varies by material family, batch and order agreement."
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
          <div className="document-mini-grid technical-document-strip">
            {qualityDocuments.map((document) => (
              <article key={document.type}>
                <FileText size={22} />
                <strong>{document.type}</strong>
                <span>{document.name}</span>
                <p>{document.description}</p>
              </article>
            ))}
          </div>
          <div className="products-directory-actions">
            <Link
              className="button button-blue"
              data-priority-document-hub-link="technical-center"
              href="/technical-resources"
            >
              Browse verified technical documents <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="tds-library">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Downloadable TDS library"
            title="Verified product data sheets."
            copy="These files are prepared from available product records. Confirm the exact grade, construction, tolerance and batch document requirements in your RFQ."
          />
          <div className="tds-library-grid">
            {productDocuments.map((document) => {
              const product = productCatalog.find((item) => item.slug === document.productSlug);
              return (
                <article className="tds-library-card" key={`${document.productSlug}-${document.href}`}>
                  <div><FileText size={28} /><span>{document.type}</span></div>
                  <h2>{document.title}</h2>
                  <p>{document.specification}</p>
                  <dl>
                    <div><dt>Revision</dt><dd>{document.revision}</dd></div>
                    <div><dt>Language</dt><dd>{document.language}</dd></div>
                    <div><dt>File</dt><dd>PDF · {document.fileSize}</dd></div>
                  </dl>
                  <div className="tds-library-actions">
                    <a
                      className="button button-blue"
                      data-analytics-event="tds_download"
                      data-product-slug={document.productSlug}
                      data-document-title={document.title}
                      data-document-type={document.type}
                      data-document-id={getProductDocumentId(document)}
                      download
                      href={document.href}
                    >
                      Download {document.type} <ArrowRight size={16} />
                    </a>
                    {product ? (
                      <Link className="text-link" href={`/products/${product.slug}`}>
                        Product page <ArrowRight size={16} />
                      </Link>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <SectionHeading
            eyebrow="TDS index"
            title="Carbon fiber product data by material family."
            copy="Product pages include typical technical tables for RFQ preparation. Final values are confirmed by order specification, production batch, test method and official COA / TDS files."
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
                      <Link href={`/products/${product.slug}`} className="text-link">
                        View data <ArrowRight size={16} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <InquiryBand />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(technicalCenterSchema) }}
      />
    </>
  );
}
