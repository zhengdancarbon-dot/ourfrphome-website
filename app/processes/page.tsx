import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { InquiryBand, PageHero, SectionHeading } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import { factoryImageSections, manufacturingProcesses } from "@/lib/site-taxonomy";

export const metadata: Metadata = createPageMetadata({
  title: "Carbon Fiber Manufacturing Processes and Material Selection",
  description:
    "Compare carbon fiber materials by manufacturing process, including wet lay-up, vacuum infusion, prepreg autoclave molding, compression molding, pultrusion, filament winding, weaving, CNC machining and plastic compounding.",
  keywords: [
    "carbon fiber manufacturing process",
    "wet lay-up carbon fiber",
    "vacuum infusion carbon fiber",
    "carbon fiber prepreg autoclave",
    "pultruded carbon fiber",
    "filament winding carbon fiber tow",
    "CFRP CNC machining",
  ],
  path: "/processes",
  image: "/images/home/home-dornier-loom-hero.jpg",
});

const comparisonRows = manufacturingProcesses.map((process) => ({
  process: process.name,
  material: process.recommended,
  rfq: process.rfqDetails?.join(" · ") ?? "Process, application, dimensions, quantity and destination country",
}));

export default function ProcessesPage() {
  return (
    <>
      <PageHero
        index="04 / 08"
        eyebrow="Processes"
        title="Choose carbon fiber materials by manufacturing route."
        copy="The same fiber can behave differently in lay-up, infusion, prepreg molding, pultrusion, winding, machining or compounding. Start with the process to narrow material format and RFQ details."
        image="/images/home/home-dornier-loom-hero.jpg"
      />

      <section className="section">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Process finder"
            title="Manufacturing process to material shortlist."
            copy="Use these routes as a first-pass selection guide before engineering validation, sampling and production qualification."
          />
          <div className="process-directory-grid">
            {manufacturingProcesses.map((process) => (
              <article className="process-directory-card" id={process.href.split("#")[1]} key={process.name}>
                <div className="process-directory-image">
                  <Image src={process.image} alt={`${process.name} process visual`} fill sizes="(max-width: 760px) 100vw, 33vw" />
                </div>
                <h2>{process.name}</h2>
                <p>{process.description}</p>
                <div>
                  <CheckCircle2 size={17} />
                  <span>{process.recommended}</span>
                </div>
                {process.rfqDetails && (
                  <div className="process-rfq-mini">
                    <strong>RFQ details</strong>
                    <ul>
                      {process.rfqDetails.slice(0, 6).map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <Link href="/contact" className="text-link">
                  Send process RFQ <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Production equipment"
            title="Weaving, creel and warp preparation scenes."
            copy="Equipment photos help sourcing and engineering teams understand the production route behind dry carbon fiber fabric before sampling or scale-up."
          />
          <div className="factory-image-grid">
            {factoryImageSections.map((item) => (
              <figure key={item.title}>
                <Image
                  src={item.image}
                  alt={`${item.title} for carbon fiber manufacturing process selection`}
                  fill
                  sizes="(max-width: 760px) 100vw, 25vw"
                />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Comparison table"
            title="RFQ details change by process."
            copy="The form on the RFQ page captures product-specific fields; use this table to prepare the process context."
          />
          <div className="table-wrap">
            <table className="technical-table">
              <thead>
                <tr>
                  <th>Process</th>
                  <th>Typical material starting point</th>
                  <th>RFQ details to prepare</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.process}>
                    <td>{row.process}</td>
                    <td>{row.material}</td>
                    <td>{row.rfq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <InquiryBand />
    </>
  );
}
