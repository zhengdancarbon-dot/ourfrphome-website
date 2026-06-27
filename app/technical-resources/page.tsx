import type { Metadata } from "next";
import { ArrowRight, BookOpenText, FileCheck2, FileText, FlaskConical, Ruler } from "lucide-react";
import { InquiryBand, PageHero, SectionHeading } from "@/components/ui";
import { productCatalog } from "@/lib/product-catalog";
import { createPageMetadata } from "@/lib/seo";
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
                <tr><td>Woven carbon fabric</td><td>Balanced handling and visual finish</td><td>80–600 g/m² typical</td><td>Layup / Infusion / Prepreg</td><td>Panels and shells</td></tr>
                <tr><td>UD carbon fabric</td><td>Maximum directional performance</td><td>100–800 g/m² typical</td><td>Layup / Pultrusion</td><td>Directional reinforcement strips and profiles</td></tr>
                <tr><td>Carbon Fiber Multiaxial NCF Fabric</td><td>Efficient multi-directional layup</td><td>200–1200 g/m² typical</td><td>Infusion / RTM</td><td>Large structures</td></tr>
                <tr><td>Carbon Fiber Prepreg Fabric</td><td>Controlled resin and fiber content</td><td>80–600 g/m² typical</td><td>Autoclave / OOA</td><td>Controlled laminate parts and composite panels</td></tr>
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
    </>
  );
}
