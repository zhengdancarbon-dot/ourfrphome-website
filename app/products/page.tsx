import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, ImagePlus } from "lucide-react";
import { InquiryBand, PageHero, SectionHeading } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import { products } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Carbon Fiber Composite Materials Product Center",
  description:
    "Browse carbon fiber UD fabric, woven carbon fabric, multiaxial NCF fabric, prepreg fabric, pultruded plates, carbon tubes, chopped fiber, milled carbon fiber powder, yarn and tow, and custom carbon fiber products.",
  keywords: [
    "carbon fiber fabric manufacturer",
    "carbon fiber cloth supplier",
    "carbon fiber prepreg China",
    "UD carbon fiber fabric",
    "multiaxial carbon fabric",
    "carbon fiber composite materials",
    "carbon fiber products supplier",
    "pultruded carbon fiber plate",
    "3K carbon fiber tube",
    "chopped carbon fiber",
    "carbon fiber yarn and tow supplier",
  ],
  path: "/products",
  image: "/images/composite-materials-range-products.webp",
});

const productGroups = [
  {
    title: "Carbon Fiber Reinforcements",
    description:
      "Dry UD, woven, spread tow and multiaxial carbon fiber reinforcements for lamination, infusion, construction strengthening and composite manufacturing.",
    slugs: [
      "carbon-fiber-ud-fabric",
      "carbon-fiber-woven-fabric",
      "spread-tow-carbon-fiber-fabric",
      "carbon-fiber-multiaxial-ncf-fabric",
    ],
  },
  {
    title: "Carbon Fiber Prepreg Fabrics",
    description:
      "Controlled resin-content carbon fiber prepreg materials for repeatable laminate quality and molded composite parts.",
    slugs: ["carbon-fiber-prepreg-fabric"],
  },
  {
    title: "Carbon Fiber Plates & Laminates",
    description:
      "Pultruded structural plates and 3K carbon fiber laminate sheets for reinforcement, CNC cutting, FPV drone frames, RC model parts, panels and finished components.",
    slugs: [
      "pultruded-carbon-fiber-plate-structural-reinforcement",
      "3k-carbon-fiber-laminate-sheet",
    ],
  },
  {
    title: "Carbon Fiber Tubes",
    description:
      "3K surface tubes and pultruded carbon fiber tubes for visual parts, rods, commercial drone components, agricultural drone parts, supports and industrial profiles.",
    slugs: ["3k-surface-carbon-fiber-tube", "pultruded-carbon-fiber-tube"],
  },
  {
    title: "Carbon Fiber Yarn and Tow",
    description:
      "Continuous carbon fiber yarn and tow options for weaving, prepregging, pultrusion, filament winding and braiding, with experience supporting dual-use item export license application documents.",
    slugs: ["carbon-fiber-yarn-and-tow"],
  },
  {
    title: "Chopped and Milled Carbon Fiber",
    description:
      "Short carbon fiber and milled carbon fiber powder for compounding, conductivity, friction materials and resin modification.",
    slugs: ["chopped-carbon-fiber", "milled-carbon-fiber-powder"],
  },
  {
    title: "Aramid and Hybrid Fabrics",
    description:
      "Aramid, carbon aramid hybrid and jacquard fabrics for impact-resistant laminates, decorative surfaces and custom composite skins.",
    slugs: ["aramid-fabric", "carbon-fiber-hybrid-jacquard-fabric"],
  },
  {
    title: "Custom Carbon Fiber Products",
    description:
      "Custom carbon fiber parts, CNC plates, civil UAV frames, FPV drone frames, molded components, tube assemblies and composite products based on drawings or samples.",
    slugs: ["custom-carbon-fiber-products"],
  },
];

const productMap = new Map(products.map((product) => [product.slug, product]));
const heroTeasers = [
  { title: "Carbon fabrics", detail: "UD, woven, spread tow and multiaxial reinforcements" },
  { title: "Prepreg materials", detail: "Controlled resin content for repeatable laminates" },
  { title: "CFRP components", detail: "Plates, tubes, CNC parts and custom composite products" },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        className="products-page-hero"
        index="02 / 07"
        eyebrow="Product center"
        title="Carbon fiber materials and products for export."
        copy="Select from UD fabric, woven carbon fabric, multiaxial NCF fabric, prepreg fabric, aramid fabric, structural reinforcement CFRP plates, carbon tubes, 3K laminate sheets, milled carbon fiber powder, chopped fiber, yarn and tow, and custom carbon products."
        image="/images/composite-materials-range-products.webp"
      >
        <div className="product-hero-teasers" aria-label="Featured product families">
          {heroTeasers.map((item) => (
            <Link href="#product-catalog-list" key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.detail}</span>
            </Link>
          ))}
        </div>
      </PageHero>
      <section className="section">
        <div className="site-shell">
          <div className="products-directory-intro" id="product-catalog">
            <div>
              <SectionHeading
                eyebrow="Complete portfolio"
                title="Carbon fiber composite materials by category."
                copy="We supply carbon fiber fabrics, prepregs, pultruded plates, tubes, carbon fiber yarn, chopped fiber, milled carbon fiber powder, aramid fabrics and customized composite products for industrial, sports, automotive, marine, construction and composite manufacturing applications."
              />
            </div>
            <div className="products-directory-actions">
              <Link href="#product-catalog-list" className="button button-dark">
                View Products <ArrowRight size={17} />
              </Link>
              <Link href="/contact" className="button button-outline">
                Request a Quote <ArrowRight size={17} />
              </Link>
              <Link href="/technical-center" className="button button-outline">
                Download TDS <FileText size={17} />
              </Link>
            </div>
          </div>

          <div className="product-category-stack" id="product-catalog-list">
            {productGroups.map((group, groupIndex) => {
              const groupProducts = group.slugs
                .map((slug) => productMap.get(slug))
                .filter((product) => product !== undefined);

              return (
                <section className="product-category-section" key={group.title}>
                  <div className="product-category-heading">
                    <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                    <div>
                      <h2>{group.title}</h2>
                      <p>{group.description}</p>
                    </div>
                  </div>

                  <div className="product-directory-grid">
                    {groupProducts.map((product) => (
                      <article className="directory-product-card" key={product.slug}>
                        <div className="directory-product-image-placeholder">
                          {!product.image.includes("placeholder") ? (
                            <Image
                              src={product.image}
                              alt={product.visualLabel}
                              fill
                              sizes="(max-width: 760px) 100vw, 24vw"
                            />
                          ) : (
                            <>
                              <ImagePlus size={28} strokeWidth={1.4} aria-hidden="true" />
                              <span>{product.visualLabel}</span>
                            </>
                          )}
                        </div>
                        <div className="directory-product-body">
                          <div className="product-category">{product.category}</div>
                          <h3>{product.name}</h3>
                          <p>{product.description}</p>
                          <div className="directory-spec-summary">
                            <span>Main specification range</span>
                            <dl>
                              {product.specs.slice(0, 3).map((spec) => (
                                <div key={spec.label}>
                                  <dt>{spec.label}</dt>
                                  <dd>{spec.value}</dd>
                                </div>
                              ))}
                            </dl>
                          </div>
                          <Link href={product.detailHref ?? "/products"} className="text-link">
                            View product page <ArrowRight size={17} />
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
      <InquiryBand />
    </>
  );
}
