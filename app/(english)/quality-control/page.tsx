import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, ClipboardCheck, Eye, FileText, Microscope, PackageCheck, Ruler, ScanLine, ShieldCheck } from "lucide-react";
import { CheckList, InquiryBand, PageHero, SectionHeading } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Carbon Fiber Material Quality Control",
  description:
    "See quality controls for carbon fiber composite materials, including incoming fiber checks, fabric inspection, batch traceability and export release review.",
  keywords: [
    "carbon fiber fabric manufacturer",
    "carbon fiber cloth supplier",
    "carbon fiber prepreg China",
    "UD carbon fiber fabric",
    "multiaxial carbon fabric",
    "carbon fiber composite materials",
    "carbon fiber fabric quality control",
    "carbon fiber batch traceability",
  ],
  path: "/quality-control",
  image: "/images/home/frphome-weaving-line.jpg",
});

const controls = [
  { icon: ShieldCheck, title: "Incoming Material Inspection", copy: "Supplier, fiber grade, sizing, lot number and visual condition are checked against the approved requirement." },
  { icon: ScanLine, title: "Areal Weight and Width Checking", copy: "Fabric weight and roll width are reviewed against the confirmed specification and typical tolerance range." },
  { icon: Eye, title: "Roll Length and Surface Inspection", copy: "Roll length, core condition, edge quality, contamination, wrinkles and broken yarn are visually reviewed." },
  { icon: Microscope, title: "Prepreg Resin Content / Storage Check", copy: "For prepreg specifications, resin content, backing condition, storage and handling requirements can be reviewed by order scope." },
  { icon: Ruler, title: "CFRP Tube / Sheet Dimension Check", copy: "Tube diameter, wall thickness, sheet thickness, flatness, edge condition and surface finish are checked where applicable." },
  { icon: PackageCheck, title: "Packing Photo Confirmation", copy: "Packing photos can be shared before shipment so buyers can review roll, pallet, carton or crate condition." },
  { icon: ClipboardCheck, title: "Batch Traceability", copy: "Batch, roll label, product code, specification, quantity and packing references can be retained according to order agreement." },
  { icon: FileText, title: "Sample TDS / COA Preview", copy: "Sample document previews explain expected document scope without replacing official batch files." },
  { icon: BadgeCheck, title: "Packing and Shipping Examples", copy: "Website examples show typical export packing and loading practice with customer information removed." },
];

const qualityAssets = [
  {
    title: "Areal weight and input review",
    image: "/images/quality/quality-areal-weight-check.jpg",
    copy: "Used as a visual reference for material input and yarn preparation checks.",
  },
  {
    title: "Width and warp preparation",
    image: "/images/quality/quality-width-check.jpg",
    copy: "Production setup and width-related checks are confirmed against order requirements.",
  },
  {
    title: "Roll inspection before packing",
    image: "/images/quality/quality-roll-inspection.jpg",
    copy: "Roll surface, roll build, label and packing condition can be reviewed before shipment.",
  },
  {
    title: "Prepreg handling reference",
    image: "/images/quality/quality-prepreg-storage.jpg",
    copy: "Prepreg storage and handling requirements follow the product TDS and order scope.",
  },
  {
    title: "CFRP sheet dimension check",
    image: "/images/quality/quality-cfrp-dimension-check.jpg",
    copy: "Dimension checks are matched to sheet, plate, tube or custom part requirements.",
  },
  {
    title: "Packing photo confirmation",
    image: "/images/quality/quality-packing-photo.jpg",
    copy: "Packing photos can be provided before dispatch for buyer confirmation.",
  },
  {
    title: "Sample TDS preview",
    image: "/images/quality/sample-tds-preview.jpg",
    copy: "A preview example only. Official TDS content depends on product specification.",
  },
  {
    title: "Sample COA preview",
    image: "/images/quality/sample-coa-preview.jpg",
    copy: "A preview example only. Official COA content depends on batch and order agreement.",
  },
  {
    title: "Warehouse packaging example",
    image: "/images/quality/warehouse-packaging.jpg",
    copy: "Pallet and container examples use cleaned website images with customer details removed.",
  },
];

export default function QualityControlPage() {
  return (
    <>
      <PageHero
        index="05 / 07"
        eyebrow="Quality control"
        title="Consistency is designed into the process."
        copy="Quality begins with controlled inputs and continues through production, inspection, documentation and packing. Inspection plans are matched to material type and customer requirements."
        image="/images/home/frphome-weaving-line.jpg"
      />
      <section className="section">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Inspection flow"
            title="Checks at the points where variation matters."
            copy="Our goal is simple: make the delivered roll or component match the approved requirement and keep the relevant batch information accessible."
          />
          <div className="quality-grid">
            {controls.map((control, index) => {
              const Icon = control.icon;
              return (
                <article className="quality-card" key={control.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Icon size={28} strokeWidth={1.4} />
                  <h3>{control.title}</h3>
                  <p>{control.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="site-shell content-grid-two">
          <div className="content-image">
            <Image
              src="/images/home/frphome-yarn-creel-detail.jpg"
              alt="Carbon fabric under controlled production"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="content-copy">
            <h2>Customer-specific control plans.</h2>
            <p>
              For repeat programs, inspection requirements can be agreed during
              qualification and reflected in order documentation.
            </p>
            <CheckList
              items={[
                "Approved sample or specification as the release baseline",
                "Defined test method and frequency where required",
                "Roll and batch identification for traceability",
                "Areal weight, width and roll length inspection records where applicable",
                "Resin content and volatile content checks for prepreg where specified",
                "Surface finish inspection for plates and tubes",
                "COA, TDS and packing list support by agreement",
                "Non-conformance communication and corrective action process",
              ]}
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Trust assets"
            title="Real review points buyers can ask us to document."
            copy="These examples show the type of production, packing and document context we can discuss. They are not unsupported certification claims or a substitute for official batch documents."
          />
          <div className="quality-asset-grid">
            {qualityAssets.map((asset) => (
              <article className="quality-asset-card" key={asset.title}>
                <div>
                  <Image
                    src={asset.image}
                    alt={`${asset.title} for carbon fiber material quality control`}
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                  />
                </div>
                <h3>{asset.title}</h3>
                <p>{asset.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <InquiryBand />
    </>
  );
}
