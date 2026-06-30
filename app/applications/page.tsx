import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InquiryBand, PageHero, SectionHeading } from "@/components/ui";
import { applicationPages } from "@/lib/application-pages";
import { createPageMetadata } from "@/lib/seo";

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
            {applicationPages.map((application, index) => (
              <article className="application-detail application-link-card" key={application.slug}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{application.title.replace("Carbon Fiber Materials for ", "")}</h3>
                <p>{application.description}</p>
                <small>{application.recommendedMaterials.map((material) => material.name).slice(0, 3).join(" · ")}</small>
                <Link href={`/applications/${application.slug}`} className="text-link">
                  View application guide <ArrowRight size={16} />
                </Link>
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
              src="/images/products/custom-carbon-fiber-cnc-panels-hero.webp"
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
