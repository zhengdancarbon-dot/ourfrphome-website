import type { Metadata } from "next";
import Image from "next/image";
import { CheckList, InquiryBand, PageHero, SectionHeading } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Our Carbon Fiber Materials Company",
  description:
    "Learn about Zhejiang FRPHome New Material Co., Ltd., a China-based carbon fiber fabric manufacturer and carbon fiber cloth supplier serving global composite manufacturers.",
  keywords: [
    "carbon fiber fabric manufacturer",
    "carbon fiber cloth supplier",
    "carbon fiber prepreg China",
    "UD carbon fiber fabric",
    "multiaxial carbon fabric",
    "carbon fiber composite materials",
    "carbon fiber manufacturer China",
  ],
  path: "/about",
  image: "/images/factory-production-line.png",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="01 / 07"
        eyebrow="About FRP HOME"
        title="Material discipline. Manufacturing focus."
        copy="Zhejiang FRPHome New Material Co., Ltd. develops and supplies reinforcement materials for composite manufacturers that need stable specifications, responsive support and export-ready execution."
        image="/images/factory-production-line.png"
      />

      <section className="section">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Company profile"
            title="A practical partner for advanced composite production."
            copy="Operating under the FRP HOME / 福昊 brand, we combine textile manufacturing experience with an expanding portfolio of carbon fiber, aramid, glass fiber, resin and cured composite products."
          />
          <div className="content-grid-two">
            <div className="content-copy">
              <h3>Built around the realities of production.</h3>
              <p>
                Our customers range from specialist workshops and distributors
                to established component manufacturers. They rely on clear
                specifications, material consistency, dependable communication
                and packaging that survives international transit.
              </p>
              <p>
                We support standard products as well as selected customization
                in weave, areal weight, width, fiber grade, surface finish,
                resin system and packing format.
              </p>
            </div>
            <div className="content-copy">
              <h3>What customers can expect.</h3>
              <CheckList
                items={[
                  "Direct communication with an experienced export and technical team",
                  "Trial quantities and scale-up support for production programs",
                  "Batch records and inspection documentation based on product scope",
                  "Consolidated supply across multiple reinforcement categories",
                  "Flexible sea, air and courier shipment arrangements",
                ]}
              />
            </div>
          </div>
          <div className="stat-grid">
            <div><strong>9</strong><span>Core material families in one portfolio</span></div>
            <div><strong>Multi</strong><span>Fiber, fabric, prepreg, resin and cured composite formats</span></div>
            <div><strong>B2B</strong><span>Focused on manufacturers, distributors and project buyers</span></div>
            <div><strong>Global</strong><span>Export packing and international logistics support</span></div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="site-shell content-grid-two">
          <div className="content-image">
            <Image
              src="/images/products/carbon-fiber-ud-fabric-factory.webp"
              alt="Carbon fiber fabric production line at Zhejiang FRPHome New Material Co., Ltd."
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="content-copy">
            <h2>One supplier. Multiple reinforcement technologies.</h2>
            <p>
              Consolidating dry fabric, prepreg, yarn, resin and cured profiles
              can reduce sourcing complexity and improve technical alignment
              across a composite program.
            </p>
            <CheckList
              items={[
                "Woven, unidirectional and non-crimp reinforcement",
                "Thermoset prepreg and compatible epoxy systems",
                "Carbon, aramid and glass fiber options",
                "Sheets, plates, tubes and selected finished profiles",
                "Custom conversion, slitting and roll preparation",
              ]}
            />
          </div>
        </div>
      </section>
      <InquiryBand />
    </>
  );
}
