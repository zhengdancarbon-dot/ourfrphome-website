import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FileText,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";
import { Eyebrow } from "@/components/ui";
import { productCatalog } from "@/lib/product-catalog";
import { createPageMetadata } from "@/lib/seo";
import {
  complianceNotice,
  factoryImageSections,
  featuredProductSlugs,
  materialApplications,
  manufacturingProcesses,
  productSeries,
  qualityDocuments,
  technicalGuides,
} from "@/lib/site-taxonomy";

export const metadata: Metadata = createPageMetadata({
  title: "Carbon Fiber Materials & CFRP Solutions for Global Composite Industries",
  description:
    "Carbon fiber yarn and tow, woven carbon fiber fabric, spread tow fabric, UD fabric, prepreg materials, chopped and milled carbon fiber, CFRP profiles and structural strengthening systems for global composite industries.",
  keywords: [
    "carbon fiber materials",
    "CFRP solutions",
    "woven carbon fiber fabric",
    "carbon fiber yarn and tow",
    "carbon fiber prepreg",
    "chopped carbon fiber",
    "CFRP profiles",
    "structural strengthening system",
  ],
  path: "/",
  image: "/images/generated/3k-twill-carbon-fiber-gloss.png",
});

const featuredProducts = featuredProductSlugs
  .map((slug) => productCatalog.find((product) => product.slug === slug))
  .filter((product) => product !== undefined);

const whyWorkWithUs = [
  {
    icon: ShieldCheck,
    title: "Specification-first sourcing",
    copy: "We start with fiber format, weight, width, process, application and documents before quoting.",
  },
  {
    icon: ClipboardCheck,
    title: "Material range alignment",
    copy: "One RFQ can cover reinforcements, upstream tow, prepregs, additives, profiles and CFRP parts.",
  },
  {
    icon: FileText,
    title: "TDS / SDS / COA support",
    copy: "Documentation availability is confirmed by product scope, order specification and batch.",
  },
  {
    icon: PackageCheck,
    title: "Export packing context",
    copy: "Roll, carton, pallet and component packing details can be reviewed before shipment.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="b2b-hero">
        <div className="site-shell b2b-hero-grid">
          <div className="b2b-hero-copy">
            <h1>Carbon Fiber Materials & CFRP Solutions for Global Composite Industries</h1>
            <p>
              Carbon fiber yarn and tow, woven carbon fiber fabric, spread tow
              fabric, UD fabric, prepreg materials, chopped and milled carbon
              fiber, carbon fiber powder, CFRP profiles and structural
              strengthening systems.
            </p>
            <div className="hero-actions">
              <Link href="/applications" className="button button-blue">
                Find Materials by Application <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="button button-light-outline">
                Request a Quote <ArrowRight size={18} />
              </Link>
              <Link href="/catalog" className="button button-light-outline">
                Download Product Catalog <FileText size={18} />
              </Link>
            </div>
            <div className="hero-material-rail" aria-label="Material scope">
              {["Yarn & Tow", "Woven Fabric", "Prepreg", "Chopped / Powder", "CFRP Profiles", "Strengthening"].map(
                (item) => (
                  <span key={item}>{item}</span>
                ),
              )}
            </div>
          </div>

          <div className="b2b-hero-media">
            <Image
              src="/images/generated/3k-twill-carbon-fiber-gloss.png"
              alt="Glossy 3K twill carbon fiber fabric close-up for composite manufacturing"
              fill
              priority
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 900px) 100vw, 52vw"
            />
            <div className="hero-media-table">
              <span>Material selection starts with</span>
              <dl>
                <div><dt>Format</dt><dd>tow / fabric / prepreg / profile</dd></div>
                <div><dt>Process</dt><dd>lay-up / infusion / autoclave / pultrusion</dd></div>
                <div><dt>Review</dt><dd>end use / documents / destination</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-product-series">
        <div className="site-shell">
          <div className="home-section-heading">
            <div>
              <Eyebrow>Core product series</Eyebrow>
              <h2>Carbon fiber supply chain coverage without catalog clutter.</h2>
            </div>
            <p>
              Product families are organized for engineers and sourcing teams:
              reinforcements, upstream tow, prepregs, additives, CFRP profiles
              and structural strengthening systems.
            </p>
          </div>
          <div className="series-grid">
            {productSeries.map((series, index) => (
              <article className="series-card" key={series.title}>
                <Link href={series.href} className="series-image" aria-label={series.title}>
                  <Image src={series.image} alt={`${series.title} product image`} fill sizes="(max-width: 760px) 100vw, 33vw" />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </Link>
                <div className="series-body">
                  <h3>{series.title}</h3>
                  <p>{series.description}</p>
                  <ul>
                    {series.items.slice(0, 6).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <dl>
                    {series.specs.map((spec) => (
                      <div key={spec}>
                        <dt>Spec</dt>
                        <dd>{spec}</dd>
                      </div>
                    ))}
                  </dl>
                  <Link href={series.href} className="text-link">
                    View series <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft finder-section">
        <div className="site-shell finder-grid">
          <div>
            <Eyebrow>Find materials by application</Eyebrow>
            <h2>Start from the part, not the product code.</h2>
            <p>
              Select the end use first, then narrow the material architecture
              by weight, process, surface requirement and qualification plan.
            </p>
            <div className="application-finder-list">
              {materialApplications.map((application) => (
                <Link href={application.href} key={application.name}>
                  <Image src={application.image} alt="" width={72} height={54} />
                  <span>
                    <strong>{application.name}</strong>
                    <small>{application.recommended}</small>
                  </span>
                  <ArrowRight size={17} />
                </Link>
              ))}
            </div>
          </div>
          <div className="finder-feature-panel">
            <Image
              src="/images/products/3k-carbon-fiber-laminate-stack.webp"
              alt="Carbon fiber laminate stack for automotive and drone composite parts"
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
            />
            <div>
              <span>Recommended pathway</span>
              <h3>Application to process to material format to RFQ details</h3>
              <p>
                We link each application to practical material families and
                product-specific RFQ fields, including end use and destination
                country for review-sensitive items.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-home-section">
        <div className="site-shell">
          <div className="home-section-heading">
            <div>
              <Eyebrow>Find materials by manufacturing process</Eyebrow>
              <h2>Match reinforcement format to how the part is made.</h2>
            </div>
            <p>
              Process context changes the right fiber form, sizing, resin
              system, packaging and documentation. These guides connect RFQs
              with the manufacturing route.
            </p>
          </div>
          <div className="process-grid">
            {manufacturingProcesses.map((process) => (
              <Link href={process.href} className="process-card" key={process.name}>
                <Image src={process.image} alt={`${process.name} carbon fiber process`} fill sizes="(max-width: 760px) 100vw, 25vw" />
                <span>
                  <strong>{process.name}</strong>
                  <small>{process.recommended}</small>
                </span>
                <ArrowRight size={17} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section featured-products-section">
        <div className="site-shell">
          <div className="section-title-row">
            <div>
              <Eyebrow>Featured products</Eyebrow>
              <h2>High-demand carbon fiber material pages.</h2>
            </div>
            <Link href="/products" className="text-link">
              View all products <ArrowRight size={17} />
            </Link>
          </div>
          <div className="featured-product-grid">
            {featuredProducts.map((product) => (
              <article className="featured-product-card" key={product.slug}>
                <div className="featured-product-image">
                  <Image src={product.image} alt={product.visualLabel} fill sizes="(max-width: 760px) 100vw, 25vw" />
                </div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <dl>
                  {product.specs.slice(0, 4).map((spec) => (
                    <div key={spec.label}>
                      <dt>{spec.label}</dt>
                      <dd>{spec.value}</dd>
                    </div>
                  ))}
                </dl>
                <Link href={`/products/${product.slug}`} className="button button-outline">
                  View product details <ArrowRight size={17} />
                </Link>
              </article>
            ))}
          </div>
          <p className="compliance-line">{complianceNotice}</p>
        </div>
      </section>

      <section className="why-work-section">
        <div className="site-shell why-work-grid">
          <div>
            <Eyebrow>Why work with us</Eyebrow>
            <h2>Practical B2B support for carbon fiber sourcing.</h2>
          </div>
          <div className="why-work-list">
            {whyWorkWithUs.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <Icon size={24} strokeWidth={1.6} />
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section technical-guides-section">
        <div className="site-shell">
          <div className="section-title-row">
            <div>
              <Eyebrow>Technical guides</Eyebrow>
              <h2>Selection guidance for engineers and buyers.</h2>
            </div>
            <Link href="/technical-center" className="text-link">
              View all guides <ArrowRight size={17} />
            </Link>
          </div>
          <div className="guide-grid">
            {technicalGuides.map((guide) => (
              <article className="guide-card" key={guide.title}>
                <div className="guide-image">
                  <Image src={guide.image} alt={`${guide.title} guide image`} fill sizes="(max-width: 760px) 100vw, 25vw" />
                </div>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <Link href={guide.href} className="text-link">
                  Read guide <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quality-document-section">
        <div className="site-shell quality-document-grid">
          <div>
            <Eyebrow>Quality and documentation</Eyebrow>
            <h2>Documents are tied to product scope and confirmed orders.</h2>
            <p>
              We avoid unsupported certification claims. Available files depend
              on material family, specification, batch and order agreement.
            </p>
            <Link href="/quality-control" className="text-link text-link-light">
              Learn about quality <ArrowRight size={17} />
            </Link>
          </div>
          <div className="document-table">
            {qualityDocuments.map((document) => (
              <div key={document.type}>
                <FileText size={24} />
                <span>
                  <strong>{document.type}</strong>
                  <small>{document.name}</small>
                </span>
                <p>{document.description}</p>
                <CheckCircle2 size={21} />
              </div>
            ))}
          </div>
        </div>
        <div className="site-shell">
          <p className="compliance-line compliance-line-dark">{complianceNotice}</p>
        </div>
      </section>

      <section className="section factory-section">
        <div className="site-shell">
          <div className="section-title-row">
            <div>
              <Eyebrow>Factory / warehouse / packaging</Eyebrow>
              <h2>Product handling matters before the quote becomes a shipment.</h2>
            </div>
            <Factory size={36} strokeWidth={1.3} />
          </div>
          <div className="factory-image-grid">
            {factoryImageSections.map((item) => (
              <figure key={item.title}>
                <Image src={item.image} alt={`${item.title} for carbon fiber supply`} fill sizes="(max-width: 760px) 100vw, 25vw" />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-rfq-section" id="rfq">
        <div className="site-shell home-rfq-grid">
          <div className="home-rfq-copy">
            <Eyebrow>Request a quote</Eyebrow>
            <h2>Send a product-specific RFQ with end-use context.</h2>
            <p>
              The form changes by product type so you can provide the details
              engineers need: tow size, weave, resin system, fiber length,
              dimensions, project area, documents and destination country.
            </p>
            <ul>
              <li>End Use / Final Application is included for compliance review.</li>
              <li>TDS / SDS / COA requests can be stated before quotation.</li>
              <li>Drawings and prior specifications can be uploaded.</li>
            </ul>
          </div>
          <Suspense fallback={<div className="form-loading">Loading RFQ form...</div>}>
            <InquiryForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
