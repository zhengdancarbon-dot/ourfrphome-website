import type { Metadata } from "next";
import { Suspense } from "react";
import { AlertTriangle, CheckCircle2, ClipboardList } from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";
import { RfqFallbackForm } from "@/components/rfq-fallback-form";
import { PageHero, SectionHeading } from "@/components/ui";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Compliance & End-use Review",
  description:
    "End-use and destination review for selected high-performance carbon fiber materials, prepregs, yarns, tow, CFRP components and related products before quotation or shipment.",
  path: "/compliance-end-use-review",
  image: "/images/composite-materials-range.png",
  keywords: [
    "carbon fiber compliance review",
    "carbon fiber end use review",
    "prepreg compliance",
    "carbon fiber yarn tow end use",
  ],
});

const reviewTriggers = [
  "High-performance carbon fiber",
  "Prepreg carbon fiber materials",
  "Carbon fiber yarn and tow",
  "Aerospace-related applications",
  "Pressure vessel applications",
  "Civil UAV / drone components",
  "dual-use sensitive applications",
];

const requiredFields = [
  "End Use / Final Application",
  "Destination Country",
  "End User Type",
  "Product type and grade",
  "Quantity and shipment plan",
  "Required documents",
];

const compliancePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": absoluteUrl("/compliance-end-use-review#webpage"),
  name: "Compliance & End-use Review",
  url: absoluteUrl("/compliance-end-use-review"),
  description:
    "End-use and destination review for selected carbon fiber materials before quotation or shipment.",
};

export default function ComplianceEndUseReviewPage() {
  return (
    <>
      <PageHero
        index="Compliance"
        eyebrow="End-use review"
        title="Compliance & End-use Review"
        copy="Some high-performance carbon fiber materials, prepregs, yarns, tow, CFRP components and related products may require end-use and end-user review before quotation or shipment."
        image="/images/composite-materials-range.png"
        visualLabel="Carbon fiber materials prepared for compliance and end-use review"
      />

      <section className="section">
        <div className="site-shell content-grid-two">
          <div className="product-detail-card">
            <SectionHeading
              eyebrow="Review scope"
              title="When additional information may be requested."
              copy="We may request application details, destination country and end-use declaration for compliance purposes."
            />
            <div className="rfq-required-grid">
              {reviewTriggers.map((item) => (
                <div key={item}>
                  <AlertTriangle size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="product-detail-card">
            <SectionHeading
              eyebrow="RFQ fields"
              title="Information needed for review."
              copy="Clear end-use context helps us decide whether a quotation can proceed and what documents may be required."
            />
            <div className="rfq-required-grid">
              {requiredFields.map((item) => (
                <div key={item}>
                  <ClipboardList size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="site-shell product-rfq-grid">
          <div>
            <div className="eyebrow">Compliance note</div>
            <h2>We focus on civil, industrial and commercial composite applications.</h2>
            <p>
              FRP HOME focuses on civil, industrial and commercial composite
              applications. If a product, destination or application requires
              further review, we may request additional buyer and end-use
              information before quotation or shipment.
            </p>
            <div className="tds-meta-grid">
              <div><CheckCircle2 size={21} /><span><strong>End use</strong><small>Final application required</small></span></div>
              <div><CheckCircle2 size={21} /><span><strong>Destination</strong><small>Country review where needed</small></span></div>
              <div><CheckCircle2 size={21} /><span><strong>Documents</strong><small>TDS / SDS / COA by scope</small></span></div>
            </div>
          </div>
          <Suspense fallback={<RfqFallbackForm productType="yarn-tow" />}>
            <InquiryForm />
          </Suspense>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(compliancePageSchema) }}
      />
    </>
  );
}
