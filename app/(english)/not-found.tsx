import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The requested FRP HOME page could not be found. Browse carbon fiber composite materials or contact our team for product support.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFoundPage() {
  return (
    <>
      <PageHero
        index="404"
        eyebrow="Page not found"
        title="This page is not available."
        copy="The link may be outdated, or the product page may have moved. You can return to the product center or send us your material requirement directly."
      />
      <section className="section">
        <div className="site-shell content-grid-two">
          <div className="content-copy">
            <h2>Find the right carbon fiber material.</h2>
            <p>
              Browse UD fabric, woven carbon fabric, prepreg, plates, tubes,
              yarn, chopped fiber, milled fiber powder and custom composite
              products from the product center.
            </p>
          </div>
          <div className="content-copy">
            <Link href="/products" className="button button-dark">
              View Products <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="text-link product-back-link">
              Contact Sales <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
