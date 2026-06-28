import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CopyCheck, ExternalLink } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/ui";

type SalesLinkGroup = {
  title: string;
  description: string;
  links: { label: string; href: string; note: string }[];
};

export const metadata: Metadata = {
  title: "Internal Sales Link Guide",
  description:
    "Internal FRP HOME sales link guide for sharing product, application, technical and RFQ pages with international buyers.",
  robots: {
    index: false,
    follow: false,
  },
};

const salesLinkGroups: SalesLinkGroup[] = [
  {
    title: "Automotive Customers",
    description: "Use this set for visible CFRP, molded parts, trim panels, brackets and appearance-driven automotive projects.",
    links: [
      { label: "Automotive Carbon Fiber Parts", href: "/applications/automotive-carbon-fiber-parts", note: "Application landing page." },
      { label: "3K Twill Carbon Fiber Fabric", href: "/products/carbon-fiber-woven-fabric", note: "Classic visible carbon fabric." },
      { label: "Spread Tow Carbon Fiber Fabric", href: "/products/spread-tow-carbon-fiber-fabric", note: "Flat premium checker surface." },
      { label: "Carbon Fiber Sheet / Plate", href: "/products/3k-carbon-fiber-laminate-sheet", note: "CNC and panel stock." },
      { label: "Custom CFRP Parts", href: "/products/custom-carbon-fiber-products", note: "Drawing-based parts and assemblies." },
      { label: "Request a Quote", href: "/contact", note: "Send specifications, drawings and quantities." },
    ],
  },
  {
    title: "Civil UAV / Drone Customers",
    description: "Use only civil and commercial terms when sharing drone-related pages.",
    links: [
      { label: "Civil UAV / Drone Components", href: "/applications/civil-uav-drone-components", note: "Civil UAV material guide." },
      { label: "Carbon Fiber Sheet / Plate", href: "/products/3k-carbon-fiber-laminate-sheet", note: "Frames, arms and panels." },
      { label: "Carbon Fiber Tube", href: "/products/3k-surface-carbon-fiber-tube", note: "Visible lightweight tube structures." },
      { label: "Carbon Fiber Rod", href: "/products/pultruded-carbon-fiber-tube", note: "Pultruded profiles and rods by review." },
      { label: "Spread Tow Carbon Fiber Fabric", href: "/products/spread-tow-carbon-fiber-fabric", note: "Thin visual skins." },
      { label: "Custom CFRP Parts", href: "/products/custom-carbon-fiber-products", note: "CNC parts from drawings." },
      { label: "Request a Quote", href: "/contact", note: "Ask for end use, destination and drawings." },
    ],
  },
  {
    title: "Plastic & Resin Reinforcement Customers",
    description: "Use this set for compounding, resin modification, conductive compounds and functional fillers.",
    links: [
      { label: "Plastic & Resin Reinforcement", href: "/applications/plastic-resin-reinforcement", note: "Application landing page." },
      { label: "Chopped Carbon Fiber", href: "/products/chopped-carbon-fiber", note: "Short fiber reinforcement." },
      { label: "Milled Carbon Fiber Powder", href: "/products/milled-carbon-fiber-powder", note: "Fine fibrous powder." },
      { label: "Carbon Fiber Powder", href: "/products/milled-carbon-fiber-powder", note: "Canonical powder product page." },
      { label: "Chopped vs Milled Carbon Fiber Powder", href: "/technical-center/chopped-carbon-fiber-vs-milled-carbon-fiber-powder", note: "Comparison article." },
      { label: "Request a Quote", href: "/contact", note: "Ask for resin system, length or mesh, and performance target." },
    ],
  },
  {
    title: "Composite Factory Customers",
    description: "Use this set for factories making fabrics, prepregs, molded parts, pultruded profiles and downstream composites.",
    links: [
      { label: "Carbon Fiber Yarn & Tow", href: "/products/carbon-fiber-yarn-and-tow", note: "Upstream yarn, tow and precursor materials." },
      { label: "Woven Carbon Fiber Fabric", href: "/products/carbon-fiber-woven-fabric", note: "Dry woven reinforcement." },
      { label: "UD Carbon Fiber Fabric", href: "/products/carbon-fiber-ud-fabric", note: "Directional reinforcement." },
      { label: "Prepreg Carbon Fiber Materials", href: "/products/prepreg-carbon-fiber-materials", note: "Controlled resin material series." },
      { label: "Carbon Fiber Yarn vs Tow vs Roving", href: "/technical-center/carbon-fiber-yarn-vs-tow-vs-roving", note: "Terminology article." },
      { label: "Request a Quote", href: "/contact", note: "Ask for process, grade, sizing, quantity and end use." },
    ],
  },
  {
    title: "Structural Strengthening Customers",
    description: "Use this set for contractors, distributors and civil reinforcement material buyers.",
    links: [
      { label: "Structural Strengthening System", href: "/products/structural-strengthening-system", note: "System material page." },
      { label: "UD Carbon Fiber Fabric for Structural Strengthening", href: "/products/carbon-fiber-ud-fabric", note: "Directional strengthening fabric." },
      { label: "Pultruded Carbon Fiber Plate", href: "/products/structural-strengthening-system", note: "CFRP laminate within the system page." },
      { label: "Structural Epoxy Resin", href: "/products/structural-strengthening-system", note: "Epoxy resin within the system page." },
      { label: "CFRP Plate vs Carbon Fiber Fabric", href: "/technical-center/cfrp-plate-vs-carbon-fiber-fabric-for-structural-strengthening", note: "Selection article." },
      { label: "Request a Quote", href: "/contact", note: "Ask for structure type, project area, material and documents." },
    ],
  },
];

export default function InternalSalesLinkGuidePage() {
  return (
    <>
      <PageHero
        index="Internal"
        eyebrow="Sales enablement"
        title="Internal Sales Link Guide"
        copy="Use these link sets when sharing FRP HOME pages with international buyers. Match links to the customer's application, then guide them to the RFQ page with the right specification questions."
      />

      <section className="section">
        <div className="site-shell">
          <SectionHeading
            eyebrow="How to use"
            title="Share application context first, then product and RFQ links."
            copy="This page is intentionally noindex. It is for sales-team workflow, not a public SEO landing page."
          />
          <div className="guide-grid-large">
            {salesLinkGroups.map((group) => (
              <article className="guide-card" key={group.title}>
                <CopyCheck size={24} strokeWidth={1.6} />
                <h2>{group.title}</h2>
                <p>{group.description}</p>
                <div className="sales-link-list">
                  {group.links.map((link) => (
                    <Link href={link.href} key={`${group.title}-${link.href}-${link.label}`}>
                      <span>
                        <strong>{link.label}</strong>
                        <small>{link.note}</small>
                      </span>
                      <ExternalLink size={16} />
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inquiry-band">
        <div className="site-shell inquiry-band-grid">
          <div>
            <span className="eyebrow">RFQ handoff</span>
            <h2>Always ask for end use, destination country and required documents.</h2>
          </div>
          <p>
            For sensitive or high-performance materials, collect final application details before quotation.
            Do not imply brand authorization unless a separate written authorization is provided.
          </p>
          <Link href="/contact" className="button button-light">
            Open RFQ Page <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
