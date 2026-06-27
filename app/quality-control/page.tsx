import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, ClipboardCheck, Eye, Microscope, PackageCheck, ScanLine, ShieldCheck } from "lucide-react";
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
  image: "/images/factory-production-line.png",
});

const controls = [
  { icon: ShieldCheck, title: "Incoming material", copy: "Supplier, fiber grade, sizing, lot and visual condition checks." },
  { icon: ScanLine, title: "Areal weight check", copy: "Fabric weight is checked against the approved specification and typical tolerance range." },
  { icon: ClipboardCheck, title: "Width and roll length inspection", copy: "Roll width, roll length, core condition and label information are reviewed before packing." },
  { icon: Eye, title: "Fabric appearance inspection", copy: "Surface contamination, broken yarn, wrinkles, edge quality and roll build are visually checked." },
  { icon: Microscope, title: "Weave structure check", copy: "Plain, twill, UD and multiaxial constructions are checked against order requirements." },
  { icon: Microscope, title: "Prepreg resin content test", copy: "Resin content and volatile content checks can be arranged for prepreg specifications." },
  { icon: Eye, title: "Plate and tube finish inspection", copy: "Surface finish, edge quality, diameter, thickness and visible defects are reviewed where applicable." },
  { icon: PackageCheck, title: "Packing photo confirmation", copy: "Packing photos can be shared before shipment for buyer confirmation." },
  { icon: BadgeCheck, title: "Document support", copy: "COA, TDS and packing list support are available according to product scope and order agreement." },
];

export default function QualityControlPage() {
  return (
    <>
      <PageHero
        index="05 / 07"
        eyebrow="Quality control"
        title="Consistency is designed into the process."
        copy="Quality begins with controlled inputs and continues through production, inspection, documentation and packing. Inspection plans are matched to material type and customer requirements."
        image="/images/factory-production-line.png"
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
              src="/images/hero-carbon-production.png"
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
      <InquiryBand />
    </>
  );
}
