import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileText,
  PackageCheck,
  Ruler,
  Settings2,
} from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";
import { RfqFallbackForm } from "@/components/rfq-fallback-form";
import { Eyebrow, SectionHeading } from "@/components/ui";
import { getProductBySlug, productCatalog, type ProductCatalogItem } from "@/lib/product-catalog";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import {
  brandAvailabilityNotice,
  complianceNotice,
  qualityDocuments,
  rfqProductTypes,
} from "@/lib/site-taxonomy";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productCatalog.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return createPageMetadata({
    title: product.seo.title,
    description: product.seo.description,
    keywords: product.seo.keywords,
    path: `/products/${product.slug}`,
    image: product.image,
  });
}

function inferRfqType(product: ProductCatalogItem) {
  const source = `${product.name} ${product.category}`.toLowerCase();

  if (product.slug === "carbon-fiber-ud-fabric") return "ud-fabric";
  if (product.slug === "spread-tow-carbon-fiber-fabric") return "spread-tow-fabric";
  if (product.slug === "aramid-fabric" || product.slug === "carbon-fiber-hybrid-jacquard-fabric") {
    return "aramid-hybrid-fabric";
  }
  if (product.slug === "carbon-fiber-yarn-and-tow") return "yarn-tow";
  if (product.slug === "prepreg-carbon-fiber-materials") return "prepreg";
  if (product.slug === "structural-strengthening-system") {
    return "structural-strengthening";
  }
  if (source.includes("prepreg")) return "prepreg";
  if (source.includes("chopped") || source.includes("milled") || source.includes("powder")) {
    return "chopped-powder";
  }
  if (source.includes("structural") || source.includes("strengthening")) {
    return "structural-strengthening";
  }
  if (source.includes("aramid") || source.includes("hybrid")) return "aramid-hybrid-fabric";
  if (source.includes("spread tow") || source.includes("woven") || source.includes("fabric")) {
    return "woven-fabric";
  }
  if (source.includes("yarn") || source.includes("tow")) return "yarn-tow";
  if (
    source.includes("tube") ||
    source.includes("sheet") ||
    source.includes("laminate") ||
    source.includes("custom") ||
    source.includes("finished")
  ) {
    return "cfrp-part";
  }
  return "woven-fabric";
}

function selectionGuidance(product: ProductCatalogItem) {
  const source = `${product.name} ${product.category}`.toLowerCase();

  if (product.slug === "carbon-fiber-ud-fabric") {
    return [
      "Confirm the main load direction.",
      "Select the required areal weight.",
      "Choose width according to laminate design or strengthening area.",
      "Confirm fiber grade and modulus requirement.",
      "Confirm resin compatibility and processing method.",
      "Confirm whether the application is composite manufacturing or structural strengthening.",
    ];
  }
  if (product.slug === "spread-tow-carbon-fiber-fabric") {
    return [
      "Confirm visible pattern size: 8x8mm, 10x10mm or custom.",
      "Confirm tow size and fiber grade.",
      "Select areal weight according to laminate thickness and appearance requirement.",
      "Confirm width and roll length.",
      "Confirm surface requirement: decorative CFRP, thin laminate, panel skin or prepreg conversion.",
      "Confirm process: wet lay-up, vacuum bagging, compression molding or prepreg conversion.",
    ];
  }
  if (source.includes("prepreg")) {
    return [
      "Confirm reinforcement type: woven, UD or spread tow.",
      "Confirm fiber grade and fabric weight.",
      "Confirm resin system and curing temperature.",
      "Confirm processing method: autoclave, hot press, compression molding or OOA.",
      "Confirm storage and shelf-life requirements.",
      "Confirm final application and destination country.",
    ];
  }
  if (source.includes("chopped") || source.includes("milled") || source.includes("powder")) {
    return [
      "Start with fiber length or powder mesh, sizing type and target resin or plastic.",
      "Confirm the required performance target such as strength, conductivity, wear or dimensional stability.",
      "Share packaging and handling requirements for compounding or resin modification.",
    ];
  }
  if (source.includes("yarn") || source.includes("tow")) {
    return [
      "Specify tow size, grade, sizing, package weight and compatible downstream process.",
      "Use neutral brand requests; availability depends on batch, stock, order quantity and compliance review.",
      "End-use and end-user information may be required before quotation or shipment.",
    ];
  }
  if (
    product.slug === "structural-strengthening-system" ||
    source.includes("structural") ||
    source.includes("strengthening")
  ) {
    return [
      "Identify project type, reinforcement design, target area and required CFRP fabric or plate dimensions.",
      "Confirm whether structural epoxy resin, primer, saturant or plate adhesive is required.",
      "Project suitability should be reviewed by the customer's qualified engineering team.",
    ];
  }
  if (source.includes("tube") || source.includes("sheet") || source.includes("custom")) {
    return [
      "Provide drawings, dimensions, tolerance, surface finish and expected manufacturing process.",
      "Confirm whether the part is visual, structural, machined, molded, roll-wrapped or pultruded.",
      "Attach CAD, DXF, STEP or reference photos when geometry affects quotation.",
    ];
  }
  return [
    "Start with tow size, weave type, areal weight, width, roll length and target process.",
    "Use woven fabric for balanced handling and appearance; use UD when directional reinforcement is required.",
    "Keep spread tow under woven carbon fiber fabric, with a separate spread tow product discussion when needed.",
  ];
}

function recommendedFit(product: ProductCatalogItem) {
  if (product.slug === "carbon-fiber-woven-fabric") {
    return {
      recommended: [
        "Visible CFRP surfaces",
        "Automotive parts",
        "Sports equipment",
        "Civil UAV components",
        "Decorative composite panels",
        "General composite laminates",
      ],
      notRecommended: [
        "Pure one-direction load reinforcement",
        "Applications requiring pre-controlled resin content",
        "Projects without confirmed resin compatibility",
      ],
    };
  }
  if (product.slug === "prepreg-carbon-fiber-materials") {
    return {
      recommended: [
        "Molded CFRP parts",
        "Controlled resin content",
        "Repeatable laminate quality",
        "Autoclave, hot press or compression molding",
      ],
      notRecommended: [
        "Customers without storage control",
        "Simple repair projects where dry fabric and epoxy are easier",
        "Projects without confirmed curing cycle",
      ],
    };
  }
  if (product.slug === "chopped-carbon-fiber" || product.slug === "milled-carbon-fiber-powder") {
    return {
      recommended: [
        "Plastic reinforcement",
        "Nylon modification",
        "Resin reinforcement",
        "Conductive compounds",
        "Friction materials",
      ],
      notRecommended: [
        "Applications requiring continuous fiber strength",
        "Visible woven carbon surface",
        "Structural laminate reinforcement",
      ],
    };
  }
  if (product.slug === "carbon-fiber-ud-fabric") {
    return {
      recommended: [
        "Directional reinforcement",
        "Structural strengthening",
        "Pultrusion feed",
        "Repair laminates",
        "Load-path controlled composite parts",
      ],
      notRecommended: [
        "Balanced visible carbon surfaces",
        "Decorative woven appearance requirements",
        "Applications without confirmed main load direction",
      ],
    };
  }
  if (product.slug === "spread-tow-carbon-fiber-fabric") {
    return {
      recommended: [
        "8x8mm or 10x10mm visible checker surfaces",
        "Decorative CFRP panels",
        "Thin laminate skins",
        "Automotive and sports appearance parts",
      ],
      notRecommended: [
        "Hidden reinforcement where appearance is irrelevant",
        "Pure directional strengthening",
        "Projects without confirmed surface appearance requirement",
      ],
    };
  }
  if (product.slug === "carbon-fiber-yarn-and-tow") {
    return {
      recommended: [
        "Weaving and braiding",
        "Filament winding",
        "Pultrusion",
        "Prepreg production",
        "Chopping or downstream conversion",
      ],
      notRecommended: [
        "Buyers looking for finished woven fabric",
        "Projects without clear process or sizing requirement",
        "Orders without end-use and destination information where review is required",
      ],
    };
  }
  if (product.slug === "structural-strengthening-system") {
    return {
      recommended: [
        "Concrete and bridge strengthening",
        "UD fabric, CFRP plate and epoxy system requests",
        "Externally bonded reinforcement projects",
        "Contractor and distributor material supply",
      ],
      notRecommended: [
        "Decorative CFRP surfaces",
        "Projects without qualified engineering design",
        "Applications where substrate and epoxy compatibility are unknown",
      ],
    };
  }
  return {
    recommended: product.applications.slice(0, 6),
    notRecommended: [
      "Projects without confirmed specification",
      "Applications without process or resin compatibility review",
      "Orders where final use cannot be explained when review is required",
    ],
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const productIndex = productCatalog.findIndex((item) => item.slug === product.slug) + 1;
  const relatedProducts = productCatalog
    .filter((item) => item.slug !== product.slug)
    .sort((a, b) => Number(b.category === product.category) - Number(a.category === product.category))
    .slice(0, 5);
  const activeRfqType =
    rfqProductTypes.find((type) => type.value === inferRfqType(product)) ?? rfqProductTypes[1];
  const fit = recommendedFit(product);
  const productImageSlots = product.gallery?.length ? product.gallery : [product.image];
  const firstSpecTable = product.tds.tables[0];
  const inquiryHref = `/contact?product=${encodeURIComponent(product.name)}&message=${encodeURIComponent(
    `Please quote ${product.name}. My target specification and quantity are below.`,
  )}`;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": absoluteUrl(`/products/${product.slug}#product`),
    name: product.name,
    description: product.description,
    image: absoluteUrl(product.image),
    url: absoluteUrl(`/products/${product.slug}`),
    category: product.category,
    brand: { "@type": "Brand", name: siteConfig.brandName },
    manufacturer: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: siteConfig.url,
    },
    sku: product.tds.codePrefix,
    additionalProperty: product.highlights.map((item) => ({
      "@type": "PropertyValue",
      name: item.label,
      value: item.value,
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: absoluteUrl(`/products/${product.slug}`),
      },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((faq) => ({
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
      <Link href={inquiryHref} className="sticky-rfq-button">
        Request a Quote <ArrowRight size={17} />
      </Link>

      <section className="product-template-hero">
        <div className="site-shell">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/products">Products</Link>
            <span>/</span>
            <span>{product.name}</span>
          </nav>

          <div className="product-template-grid">
            <div className="product-template-copy">
              <span className="section-index">Product / {String(productIndex).padStart(2, "0")}</span>
              <h1>{product.name}</h1>
              <p className="product-definition">{product.description}</p>
              <div className="product-template-actions">
                <Link href={inquiryHref} className="button button-blue">
                  Request a Quote <ArrowRight size={17} />
                </Link>
                <Link href="/technical-center" className="button button-outline">
                  Technical Center <FileText size={17} />
                </Link>
              </div>
            </div>

            <div className="product-template-media">
              <Image
                src={product.image}
                alt={product.visualLabel}
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 900px) 100vw, 44vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section product-page-body">
        <div className="site-shell product-page-grid">
          <aside className="product-anchor-rail">
            <strong>On this page</strong>
            {[
              ["Quick Answer", "#quick-answer"],
              ["Specifications", "#specifications"],
              ["Overview", "#overview"],
              ["Recommended For", "#recommended-for"],
              ["How to Choose", "#how-to-choose"],
              ["RFQ Info", "#rfq-info"],
              ["Documents", "#documents"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <a href={href} key={href}>{label}</a>
            ))}
          </aside>

          <div className="product-content-stack">
            <section className="product-detail-card quick-answer-card" id="quick-answer">
              <div>
                <Eyebrow>Quick Answer</Eyebrow>
                <h2>{product.name} in one minute.</h2>
                <p>{product.heroCopy}</p>
              </div>
              <dl className="quick-answer-grid">
                <div><dt>Product type</dt><dd>{product.category}</dd></div>
                {product.specs.map((spec) => (
                  <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>
                ))}
                <div><dt>Documents</dt><dd>TDS / SDS / COA by product scope and order agreement</dd></div>
                <div><dt>End-use review</dt><dd>{complianceNotice}</dd></div>
              </dl>
            </section>

            <section className="product-detail-card" id="specifications">
              <SectionHeading
                eyebrow="Specification table"
                title={firstSpecTable.title}
                copy={product.tds.note}
              />
              <div className="table-wrap">
                <table className="technical-table">
                  <thead>
                    <tr>
                      {firstSpecTable.columns.map((column) => (
                        <th key={column}>{column}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {firstSpecTable.rows.map((row) => (
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

            <section className="product-detail-card" id="overview">
              <SectionHeading
                eyebrow="Product overview"
                title={`How ${product.shortName} is used.`}
                copy="The overview explains typical buyer context without replacing customer testing, engineering validation or official batch documents."
              />
              <div className="product-overview-grid">
                <div>
                  {product.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="product-gallery-strip" aria-label={`${product.name} product images`}>
                  {productImageSlots.slice(0, 4).map((image, index) => (
                    <div key={image}>
                      <Image
                        src={image}
                        alt={`${product.name} product view ${index + 1}`}
                        fill
                        sizes="(max-width: 760px) 50vw, 12vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="product-detail-card">
              <SectionHeading
                eyebrow="Available specifications"
                title="Common options for RFQ preparation."
              />
              <div className="product-highlight-grid product-highlight-grid-compact">
                {product.highlights.map((item) => (
                  <div key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
              {product.tds.tables.slice(1).map((table) => (
                <div className="table-wrap secondary-spec-table" key={table.title}>
                  <h3>{table.title}</h3>
                  <table className="technical-table">
                    <thead>
                      <tr>{table.columns.map((column) => <th key={column}>{column}</th>)}</tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row) => (
                        <tr key={row.join("|")}>
                          {row.map((cell, index) => <td key={`${cell}-${index}`}>{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </section>

            <section className="product-detail-card">
              <SectionHeading
                eyebrow="Applications"
                title="Where this product is commonly specified."
                copy="Material suitability should be verified through the customer's process, design requirements and application testing."
              />
              <div className="product-application-grid">
                {product.applications.map((application) => (
                  <div key={application}>
                    <CheckCircle2 size={18} />
                    <span>{application}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="product-detail-card" id="recommended-for">
              <SectionHeading
                eyebrow="Recommended For / Not Recommended For"
                title="Match the material to the right buying situation."
                copy="This is a practical shortlist for RFQ preparation. Final suitability depends on customer testing, resin compatibility and engineering validation."
              />
              <div className="recommended-fit-grid">
                <article>
                  <h3>Recommended For</h3>
                  <ul>
                    {fit.recommended.map((item) => (
                      <li key={item}><CheckCircle2 size={16} />{item}</li>
                    ))}
                  </ul>
                </article>
                <article>
                  <h3>Not Recommended For</h3>
                  <ul>
                    {fit.notRecommended.map((item) => (
                      <li key={item}><ClipboardList size={16} />{item}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </section>

            <section className="product-detail-card" id="how-to-choose">
              <SectionHeading
                eyebrow="How to choose this product"
                title="Selection guidance before sampling."
              />
              <div className="choice-grid">
                {selectionGuidance(product).map((item, index) => (
                  <article key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="product-detail-card" id="rfq-info">
              <SectionHeading
                eyebrow="RFQ information required"
                title={`Details requested for ${activeRfqType.label}.`}
                copy={brandAvailabilityNotice}
              />
              <div className="rfq-required-grid">
                {activeRfqType.fields.map((field) => (
                  <div key={field.name}>
                    <ClipboardList size={18} />
                    <span>{field.label}</span>
                  </div>
                ))}
                <div><ClipboardList size={18} /><span>Application / End Use</span></div>
                <div><ClipboardList size={18} /><span>Quantity</span></div>
                <div><ClipboardList size={18} /><span>Destination Country</span></div>
                <div><ClipboardList size={18} /><span>Required Documents</span></div>
              </div>
            </section>

            <section className="product-detail-card documents-card" id="documents">
              <div>
                <Eyebrow>Documents available</Eyebrow>
                <h2>TDS / SDS / COA</h2>
                <p>
                  Document availability depends on material family, specification,
                  order agreement and batch. Final values are confirmed by
                  official documents, not by website examples.
                </p>
              </div>
              <div className="document-mini-grid">
                {qualityDocuments.map((document) => (
                  <article key={document.type}>
                    <FileText size={22} />
                    <strong>{document.type}</strong>
                    <span>{document.name}</span>
                    <p>{document.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="product-detail-card packaging-card">
              <div>
                <Eyebrow>Packaging and shipping</Eyebrow>
                <h2>Confirm packing before shipment.</h2>
                <p>
                  Packing method depends on roll size, component geometry,
                  quantity and destination. Roll protection, cartons, pallets,
                  labels and packing photos can be discussed before shipment.
                </p>
              </div>
              <PackageCheck size={42} strokeWidth={1.4} />
            </section>

            <section className="product-detail-card product-faq-section" id="faq">
              <SectionHeading eyebrow="FAQ" title="Common buyer questions." />
              <div className="product-faq-grid">
                {product.faqs.map((faq) => (
                  <article key={faq.question}>
                    <h2>{faq.question}</h2>
                    <p>{faq.answer}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="product-detail-card">
              <div className="section-title-row">
                <div>
                  <Eyebrow>Related products</Eyebrow>
                  <h2>Compare adjacent material options.</h2>
                </div>
                <Link href="/products" className="text-link">
                  View all <ArrowRight size={17} />
                </Link>
              </div>
              <div className="related-product-grid">
                {relatedProducts.map((related) => (
                  <Link href={`/products/${related.slug}`} key={related.slug}>
                    <Image src={related.image} alt={related.visualLabel} fill sizes="(max-width: 760px) 50vw, 14vw" />
                    <span>{related.name}</span>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="section product-rfq-section">
        <div className="site-shell product-rfq-grid">
          <div>
            <Eyebrow>CTA / RFQ form</Eyebrow>
            <h2>Send us the specification for {product.shortName}.</h2>
            <p>
              Include the selected product type, end use, destination country,
              required documents and any drawings or previous specifications.
            </p>
            <div className="tds-meta-grid">
              <div><FileText size={21} /><span><strong>TDS</strong><small>Typical data by material family</small></span></div>
              <div><Ruler size={21} /><span><strong>Spec</strong><small>Weight, width, process and grade</small></span></div>
              <div><Settings2 size={21} /><span><strong>Review</strong><small>End use and destination where required</small></span></div>
            </div>
          </div>
          <Suspense
            fallback={
              <RfqFallbackForm
                productName={product.name}
                productType={activeRfqType.value}
                message={`Please quote ${product.name}. My target specification and quantity are below.`}
              />
            }
          >
            <InquiryForm initialProduct={product.name} />
          </Suspense>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([productSchema, breadcrumbSchema, faqSchema]) }}
      />
    </>
  );
}
