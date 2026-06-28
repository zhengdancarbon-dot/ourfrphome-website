import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ClipboardList } from "lucide-react";
import { InquiryBand, PageHero, SectionHeading } from "@/components/ui";
import {
  applicationBreadcrumbSchema,
  applicationPages,
  getApplicationPage,
} from "@/lib/application-pages";
import { productCatalog } from "@/lib/product-catalog";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

type ApplicationPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return applicationPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: ApplicationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getApplicationPage(slug);

  if (!page) {
    return { title: "Application Not Found" };
  }

  return createPageMetadata({
    title: page.title,
    description: page.description,
    path: `/applications/${page.slug}`,
    image: page.image,
    keywords: [
      "carbon fiber applications",
      "carbon fiber material selection",
      "CFRP material supplier",
      page.title,
    ],
  });
}

export default async function ApplicationDetailPage({ params }: ApplicationPageProps) {
  const { slug } = await params;
  const page = getApplicationPage(slug);

  if (!page) notFound();

  const relatedProducts = page.relatedProducts
    .map((productSlug) => productCatalog.find((product) => product.slug === productSlug))
    .filter((product) => product !== undefined);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl(`/applications/${page.slug}#webpage`),
    name: page.title,
    description: page.description,
    url: absoluteUrl(`/applications/${page.slug}`),
  };

  return (
    <>
      <PageHero
        index="Application"
        eyebrow="Application guide"
        title={page.title}
        copy={page.quickAnswer}
        image={page.image}
        visualLabel={`${page.title} material selection image`}
      />

      <section className="section">
        <div className="site-shell article-layout">
          <aside className="product-anchor-rail">
            <strong>On this page</strong>
            <a href="#why">Why carbon fiber</a>
            <a href="#materials">Recommended materials</a>
            <a href="#specifications">Specifications</a>
            <a href="#selection">Selection guide</a>
            <a href="#rfq">RFQ details</a>
            <a href="#faq">FAQ</a>
          </aside>

          <div className="article-content-stack">
            <section className="product-detail-card quick-answer-card">
              <div>
                <div className="eyebrow">Quick Answer</div>
                <h2>Material shortlist for this application.</h2>
                <p>{page.quickAnswer}</p>
              </div>
            </section>

            <section className="product-detail-card" id="why">
              <SectionHeading
                eyebrow="Why carbon fiber is used"
                title="Where the material advantage comes from."
              />
              <div className="product-application-grid">
                {page.why.map((item) => (
                  <div key={item}>
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="product-detail-card" id="materials">
              <SectionHeading
                eyebrow="Recommended materials"
                title="Start selection from these product families."
              />
              <div className="application-material-grid">
                {page.recommendedMaterials.map((material) => (
                  <Link href={material.href} key={material.name}>
                    <strong>{material.name}</strong>
                    <span>{material.note}</span>
                    <ArrowRight size={16} />
                  </Link>
                ))}
              </div>
            </section>

            <section className="product-detail-card" id="specifications">
              <SectionHeading
                eyebrow="Common specifications"
                title="Typical details to confirm before quotation."
              />
              <div className="table-wrap">
                <table className="technical-table">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Typical options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {page.commonSpecifications.map((row) => (
                      <tr key={row.join("|")}>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="product-detail-card" id="selection">
              <SectionHeading eyebrow="Selection guide" title="How to choose the starting material." />
              <div className="choice-grid">
                {page.selectionGuide.map((item, index) => (
                  <article key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="product-detail-card" id="rfq">
              <SectionHeading
                eyebrow="RFQ information required"
                title="Prepare these details for a faster quotation."
              />
              <div className="rfq-required-grid">
                {page.rfqDetails.map((item) => (
                  <div key={item}>
                    <ClipboardList size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="product-detail-card">
              <div className="section-title-row">
                <div>
                  <div className="eyebrow">Related products</div>
                  <h2>Product pages linked to this application.</h2>
                </div>
                <Link href="/products" className="text-link">
                  View all products <ArrowRight size={17} />
                </Link>
              </div>
              <div className="related-product-grid">
                {relatedProducts.map((product) => (
                  <Link href={`/products/${product.slug}`} key={product.slug}>
                    <Image
                      src={product.image}
                      alt={product.visualLabel}
                      fill
                      sizes="(max-width: 760px) 50vw, 14vw"
                    />
                    <span>{product.name}</span>
                  </Link>
                ))}
              </div>
            </section>

            <section className="product-detail-card product-faq-section" id="faq">
              <SectionHeading eyebrow="FAQ" title="Common application questions." />
              <div className="product-faq-grid">
                {page.faqs.map((faq) => (
                  <article key={faq.question}>
                    <h2>{faq.question}</h2>
                    <p>{faq.answer}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <InquiryBand />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webPageSchema, applicationBreadcrumbSchema(page), faqSchema]),
        }}
      />
    </>
  );
}
