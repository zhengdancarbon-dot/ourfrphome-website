import type { Metadata } from "next";
import Image from "next/image";
import { CheckList, InquiryBand, PageHero, SectionHeading } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import { brandAvailabilityNotice, factoryImageSections } from "@/lib/site-taxonomy";

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
  image: "/images/home/home-clean-weaving-room.jpg",
});

const companyScope = [
  {
    title: "Who We Are",
    copy:
      "FRP HOME is a composite material supplier and conversion partner combining carbon fiber fabric production, selected material sourcing, CFRP profile supply and export execution.",
  },
  {
    title: "What We Manufacture / Convert",
    copy:
      "We focus on woven carbon fabric, UD fabric, selected hybrid fabrics, roll preparation, slitting, packing and selected conversion support for composite buyers.",
  },
  {
    title: "What We Source / Supply",
    copy:
      "We can discuss carbon fiber yarn and tow, prepreg materials, chopped or milled carbon fiber, CFRP plates, tubes and custom parts by customer requirement.",
  },
  {
    title: "Our Material Families",
    copy:
      "The portfolio covers reinforcements, upstream yarn and tow, prepregs, short fiber additives, CFRP profiles, structural strengthening materials and custom composite products.",
  },
  {
    title: "Export Support",
    copy:
      "We support RFQ review, product matching, packing photos, export documents by order scope, air and sea shipment coordination, and repeat-order communication.",
  },
  {
    title: "Factory / Warehouse / Packaging Photos",
    copy:
      "Website photos use real production, warehouse and shipment scenes where available. Customer, order and pallet reference information is removed from public examples.",
  },
];

const claimBoundaries = [
  "We do not claim official authorization for selected brand carbon fiber yarn and tow unless separately stated.",
  "We do not publish unsupported certification, test equipment or standard claims when the document is not available.",
  "We provide material supply and technical data support, but final design approval remains with the customer's qualified engineering team.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="01 / 07"
        eyebrow="About FRP HOME"
        title="Material discipline. Manufacturing focus."
        copy="Zhejiang FRPHome New Material Co., Ltd. develops and supplies reinforcement materials for composite manufacturers that need stable specifications, responsive support and export-ready execution."
        image="/images/home/home-clean-weaving-room.jpg"
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
        <div className="site-shell">
          <SectionHeading
            eyebrow="Operating scope"
            title="Clear boundaries make sourcing easier."
            copy="Buyers need to know what we make, what we source, what we support and what we will not over-claim."
          />
          <div className="about-scope-grid">
            {companyScope.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="site-shell content-grid-two">
          <div className="content-image">
            <Image
              src="/images/home/home-dornier-loom-hero.jpg"
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

      <section className="section">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Factory equipment"
            title="Real production scenes for carbon fiber fabric supply."
            copy="Review the weaving, creel and warp preparation environment behind our dry carbon fiber fabric supply before sampling, qualification or program scale-up."
          />
          <div className="factory-image-grid">
            {factoryImageSections.slice(0, 4).map((item) => (
              <figure key={item.title}>
                <Image
                  src={item.image}
                  alt={`${item.title} at Zhejiang FRPHome New Material Co., Ltd.`}
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
        <div className="site-shell content-grid-two">
          <div className="content-copy">
            <h2>What We Do Not Claim</h2>
            <p>
              We keep public wording conservative so buyers can separate
              confirmed supply capability from claims that require official
              authorization, test reports or project engineering approval.
            </p>
            <CheckList items={claimBoundaries} />
          </div>
          <div className="claim-boundary-card">
            <span>Brand yarn and tow sourcing note</span>
            <p>
              For selected brand carbon fiber yarn and tow, we may supply or
              source materials according to customer requirements.
            </p>
            <strong>{brandAvailabilityNotice}</strong>
          </div>
        </div>
      </section>
      <InquiryBand />
    </>
  );
}
