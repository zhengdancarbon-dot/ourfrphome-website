import type { Metadata } from "next";
import Image from "next/image";
import { ClipboardCheck, Container, FileCheck2, PackageCheck, Ship, Truck, Warehouse } from "lucide-react";
import { CheckList, InquiryBand, PageHero, SectionHeading } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Carbon Fiber Fabric Packaging & Shipping",
  description:
    "Export packaging and shipping support for carbon fiber fabric, UD fabric, prepreg, multiaxial carbon fabric and other composite materials from China.",
  keywords: [
    "carbon fiber fabric manufacturer",
    "carbon fiber cloth supplier",
    "carbon fiber prepreg China",
    "UD carbon fiber fabric",
    "multiaxial carbon fabric",
    "carbon fiber composite materials",
    "carbon fiber fabric export packing",
    "carbon fiber shipping China",
  ],
  path: "/packaging-shipping",
  image: "/images/logistics/palletized-rolls-warehouse-clean.jpg",
});

const logistics = [
  { icon: PackageCheck, title: "Roll packing", copy: "Fabric rolls are packed on paper tubes with PE film protection and carton packing." },
  { icon: Warehouse, title: "Moisture protection", copy: "Prepreg and moisture-sensitive materials use sealed protection based on shipment route." },
  { icon: Container, title: "Pallet packing", copy: "Pallets, plywood cases or reinforced cartons are used for bulk rolls, plates and tubes." },
  { icon: ClipboardCheck, title: "Labeling", copy: "Labels can include product code, batch number, specification, quantity and buyer reference." },
  { icon: FileCheck2, title: "Packing photos", copy: "Packing photos can be provided before shipment for buyer confirmation." },
  { icon: Truck, title: "Express and truck shipment", copy: "Express, truck and courier shipment can be arranged for samples and urgent orders." },
  { icon: Ship, title: "Air and sea freight", copy: "Air freight, LCL sea freight and FCL shipment are supported for export orders." },
  { icon: FileCheck2, title: "Export documents", copy: "Invoice, packing list, CO, TDS and COA can be prepared by request and product scope." },
];

const shipmentPhotos = [
  {
    title: "Palletized rolls before shipment",
    image: "/images/logistics/palletized-rolls-warehouse-clean.jpg",
  },
  {
    title: "Container loading with protected pallets",
    image: "/images/logistics/container-loading-pallets-clean.jpg",
  },
  {
    title: "Container staging before dispatch",
    image: "/images/logistics/container-staged-inside-clean.jpg",
  },
];

export default function PackagingShippingPage() {
  return (
    <>
      <PageHero
        index="06 / 07"
        eyebrow="Packaging & shipping"
        title="Protected from our factory to yours."
        copy="Composite materials can be sensitive to crushing, moisture, contamination and temperature. Packing is selected around product format, shipment method and destination."
        image="/images/logistics/palletized-rolls-warehouse-clean.jpg"
      />
      <section className="section">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Export execution"
            title="Packing designed around material risk."
            copy="Final packing plans are confirmed by product, roll dimensions, total quantity and transport route."
          />
          <div className="logistics-grid">
            {logistics.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="logistics-card" key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Icon size={28} strokeWidth={1.4} />
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Shipment photo review"
            title="Pallet and container loading photos before dispatch."
            copy="Packing photos can be reviewed before shipment. Customer and order references are removed from website examples."
          />
          <div className="factory-image-grid logistics-photo-grid">
            {shipmentPhotos.map((item) => (
              <figure key={item.title}>
                <Image
                  src={item.image}
                  alt={`${item.title} for carbon fiber material export packing`}
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
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
            eyebrow="Typical workflow"
            title="From order confirmation to delivery."
          />
          <div className="process-grid">
            {["Specification check", "Production scheduling", "Final inspection", "Export packing", "Document preparation", "Shipment & tracking"].map((step, index) => (
              <div key={step}>
                <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
                <p>{index < 5 ? "Confirmed before the next release step." : "Tracking shared after carrier collection."}</p>
              </div>
            ))}
          </div>
          <div className="content-copy logistics-detail-list">
            <h3>Practical packing details.</h3>
            <CheckList
              items={[
                "Roll packing with paper tube, PE film protection and carton packing",
                "Pallet packing or plywood case protection for plates, tubes and bulk orders",
                "Moisture protection for prepreg and sensitive composite materials",
                "Labeling by product code, batch number, specification and quantity",
                "Packing photos before shipment when requested",
                "Air, sea, truck and express shipment support",
                "Export documents: invoice, packing list, CO, TDS and COA by request",
              ]}
            />
          </div>
        </div>
      </section>
      <InquiryBand />
    </>
  );
}
