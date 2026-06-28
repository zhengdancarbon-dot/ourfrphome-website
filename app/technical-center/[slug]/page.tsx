import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ClipboardList } from "lucide-react";
import { InquiryBand, PageHero, SectionHeading } from "@/components/ui";
import { productCatalog } from "@/lib/product-catalog";
import { createPageMetadata } from "@/lib/seo";
import {
  articleBreadcrumbSchema,
  articleStructuredData,
  getTechnicalArticle,
  technicalArticles,
} from "@/lib/technical-articles";

type TechnicalArticleProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return technicalArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: TechnicalArticleProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getTechnicalArticle(slug);

  if (!article) {
    return { title: "Technical Article Not Found" };
  }

  return createPageMetadata({
    title: article.title,
    description: article.description,
    path: `/technical-center/${article.slug}`,
    image: article.image,
    keywords: [
      "carbon fiber technical guide",
      "carbon fiber material comparison",
      "carbon fiber selection guide",
      article.title,
    ],
  });
}

export default async function TechnicalArticlePage({ params }: TechnicalArticleProps) {
  const { slug } = await params;
  const article = getTechnicalArticle(slug);

  if (!article) notFound();

  const recommendedProducts = article.recommendedProducts
    .map((productSlug) => productCatalog.find((product) => product.slug === productSlug))
    .filter((product) => product !== undefined);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <PageHero
        index="Technical guide"
        eyebrow="Technical Center"
        title={article.title}
        copy={article.quickAnswer}
        image={article.image}
        visualLabel={`${article.title} technical guide image`}
      />

      <section className="section">
        <div className="site-shell article-layout">
          <aside className="product-anchor-rail">
            <strong>Article sections</strong>
            <a href="#definition">Definition</a>
            <a href="#comparison">Comparison table</a>
            <a href="#selection">Selection advice</a>
            <a href="#applications">Applications</a>
            <a href="#specifications">Specifications</a>
            <a href="#rfq">RFQ information</a>
            <a href="#faq">FAQ</a>
          </aside>

          <div className="article-content-stack">
            <section className="product-detail-card quick-answer-card">
              <div>
                <div className="eyebrow">Quick Answer</div>
                <h2>{article.title} in one minute.</h2>
                <p>{article.quickAnswer}</p>
              </div>
            </section>

            <section className="product-detail-card" id="definition">
              <SectionHeading eyebrow="Definition" title="What the terms mean." />
              <p className="article-lede">{article.definition}</p>
            </section>

            <section className="product-detail-card" id="comparison">
              <SectionHeading eyebrow="Comparison table" title="Key differences for material selection." />
              <div className="table-wrap">
                <table className="technical-table">
                  <thead>
                    <tr>
                      {article.comparison.columns.map((column) => (
                        <th key={column}>{column}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {article.comparison.rows.map((row) => (
                      <tr key={row.join("|")}>
                        {row.map((cell, index) => (
                          <td key={`${cell}-${index}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="product-detail-card" id="selection">
              <SectionHeading eyebrow="Selection advice" title="How engineers and buyers should choose." />
              <div className="choice-grid">
                {article.selectionAdvice.map((item, index) => (
                  <article key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="product-detail-card" id="applications">
              <SectionHeading eyebrow="Common applications" title="Where this comparison matters." />
              <div className="product-application-grid">
                {article.applications.map((item) => (
                  <div key={item}>
                    <ClipboardList size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="product-detail-card" id="specifications">
              <SectionHeading eyebrow="Common specifications" title="Typical values to confirm." />
              <div className="table-wrap">
                <table className="technical-table">
                  <thead>
                    <tr>
                      <th>Specification</th>
                      <th>Typical options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {article.specifications.map((row) => (
                      <tr key={row.join("|")}>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="product-detail-card">
              <div className="section-title-row">
                <div>
                  <div className="eyebrow">Recommended products</div>
                  <h2>Product pages to compare next.</h2>
                </div>
                <Link href="/products" className="text-link">
                  Product center <ArrowRight size={17} />
                </Link>
              </div>
              <div className="related-product-grid">
                {recommendedProducts.map((product) => (
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

            <section className="product-detail-card" id="rfq">
              <SectionHeading
                eyebrow="RFQ information"
                title="Details needed before quotation."
                copy="Clear RFQ information helps avoid wrong material selection and repeated emails."
              />
              <div className="rfq-required-grid">
                {article.rfqInformation.map((item) => (
                  <div key={item}>
                    <ClipboardList size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="product-detail-card product-faq-section" id="faq">
              <SectionHeading eyebrow="FAQ" title="Common technical questions." />
              <div className="product-faq-grid">
                {article.faqs.map((faq) => (
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
          __html: JSON.stringify([
            articleStructuredData(article),
            articleBreadcrumbSchema(article),
            faqSchema,
          ]),
        }}
      />
    </>
  );
}
