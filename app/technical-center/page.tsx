import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenText, FileCheck2, FileText, FlaskConical, Ruler } from "lucide-react";
import { InquiryBand, PageHero, SectionHeading } from "@/components/ui";
import { productCatalog } from "@/lib/product-catalog";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import { qualityDocuments, technicalGuides } from "@/lib/site-taxonomy";
import { siteConfig } from "@/lib/site-config";

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

const articleSchema = technicalGuides.map((guide) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.title,
  description: guide.description,
  image: absoluteUrl(guide.image),
  url: absoluteUrl(guide.href),
  author: {
    "@type": "Organization",
    name: siteConfig.companyName,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.companyName,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/images/brand/frphome-logo-original.jpg"),
    },
  },
}));

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

      <section className="section">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Technical guides"
            title="Practical guides for material selection."
            copy="Guides summarize common selection factors. Final material approval should be based on customer testing, process validation and official documents."
          />
          <div className="guide-grid guide-grid-large">
            {technicalGuides.map((guide) => (
              <article className="guide-card" id={guide.href.split("#")[1]} key={guide.title}>
                <div className="guide-image">
                  <Image src={guide.image} alt={`${guide.title} guide image`} fill sizes="(max-width: 760px) 100vw, 25vw" />
                </div>
                <h2>{guide.title}</h2>
                <p>{guide.description}</p>
                <Link href="/contact" className="text-link">
                  Ask for guidance <ArrowRight size={16} />
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
