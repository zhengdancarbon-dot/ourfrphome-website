import type { Metadata } from "next";
import Image from "next/image";
import { InquiryBand, PageHero, SectionHeading } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import { materialApplications, slugifyAnchor } from "@/lib/site-taxonomy";

export const metadata: Metadata = createPageMetadata({
  title: "Carbon Fiber Composite Material Applications",
  description:
    "Explore carbon fiber composite materials for automotive, marine, sports equipment, construction reinforcement and general composite manufacturing applications.",
  keywords: [
    "carbon fiber fabric manufacturer",
    "carbon fiber cloth supplier",
    "carbon fiber prepreg China",
    "UD carbon fiber fabric",
    "multiaxial carbon fabric",
    "carbon fiber composite materials",
    "carbon fiber applications",
    "construction reinforcement carbon fiber",
  ],
  path: "/applications",
  image: "/images/composite-applications.png",
});

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        index="03 / 07"
        eyebrow="Application engineering"
        title="Performance begins with material architecture."
        copy="Fiber orientation, areal weight, resin choice and processing method must work as one system. We help customers narrow the material format before testing and production validation."
        image="/images/composite-materials-range-products.webp"
      />
      <section className="section">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Industries served"
            title="Lightweight structures across demanding markets."
            copy="Our materials support visual laminates, primary and secondary structures, impact-resistant systems, repair work and high-throughput composite processes."
          />
          <div className="application-detail-grid">
            {materialApplications.map((application, index) => (
              <article className="application-detail" id={slugifyAnchor(application.name)} key={application.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{application.name}</h3>
                <p>{application.description}</p>
                <small>{application.recommended}</small>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="site-shell content-grid-two">
          <div className="content-copy">
            <h2>From requirement to material shortlist.</h2>
            <p>
              Share your manufacturing process, load case, surface requirement,
              target temperature, laminate thickness and annual demand. We can
              then recommend practical starting points for qualification.
            </p>
            <p>
              Final material selection remains subject to customer testing,
              design verification and applicable industry standards.
            </p>
          </div>
          <div className="content-image">
            <Image
              src="/images/products/custom-cnc-carbon-fiber-plates.webp"
              alt="CNC cut carbon fiber composite plates for industrial applications"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
      <InquiryBand />
    </>
  );
}
