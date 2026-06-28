import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";
import { RfqFallbackForm } from "@/components/rfq-fallback-form";
import { PageHero } from "@/components/ui";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Carbon Fiber Fabric Manufacturer",
  description:
    "Contact FRP HOME for quotations on carbon fiber cloth, UD carbon fiber fabric, carbon fiber prepreg, multiaxial fabric and composite materials from China.",
  keywords: [
    "carbon fiber fabric manufacturer",
    "carbon fiber cloth supplier",
    "carbon fiber prepreg China",
    "UD carbon fiber fabric",
    "multiaxial carbon fabric",
    "carbon fiber composite materials",
    "carbon fiber fabric quotation",
    "carbon fiber supplier contact",
  ],
  path: "/contact",
  image: "/images/composite-materials-range.png",
});

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact FRP HOME",
  url: absoluteUrl("/contact"),
  mainEntity: {
    "@type": "Organization",
    name: siteConfig.companyName,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        index="07 / 07"
        eyebrow="Contact FRP HOME"
        title="Send Us Your Material Requirements."
        copy="The more details you share, the faster we can review feasibility, confirm specifications and prepare a practical quotation."
      />
      <section className="section">
        <div className="site-shell contact-layout">
          <aside className="contact-aside">
            <h2>Talk to our export team.</h2>
            <p>
              For the fastest response, include your product, specification,
              target process, application, quantity and destination.
            </p>
            <div className="contact-methods">
              <a className="contact-method" href={siteConfig.emailHref}>
                <Mail size={20} /><span><small>Email</small><strong>{siteConfig.email}</strong></span>
              </a>
              <a className="contact-method" href={siteConfig.phoneHref}>
                <Phone size={20} /><span><small>Phone</small><strong>{siteConfig.phone}</strong></span>
              </a>
              <a className="contact-method" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle size={20} /><span><small>WhatsApp</small><strong>{siteConfig.whatsapp}</strong></span>
              </a>
              <div className="contact-method">
                <MapPin size={20} /><span><small>Location</small><strong>{siteConfig.location}</strong></span>
              </div>
              <div className="contact-method">
                <Clock3 size={20} /><span><small>Response</small><strong>Usually within one business day</strong></span>
              </div>
            </div>
          </aside>
          <Suspense fallback={<RfqFallbackForm />}>
            <InquiryForm />
          </Suspense>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
    </>
  );
}
