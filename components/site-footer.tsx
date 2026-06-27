import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { navItems } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand brand-light">
            <Image
              src="/images/brand/frphome-logo-original.jpg"
              alt="FRP HOME 福昊"
              width={54}
              height={54}
              className="brand-logo-square"
            />
            <span className="brand-copy">
              <strong>FRP HOME</strong>
              <small>NEW MATERIALS</small>
            </span>
          </Link>
          <p>
            Reinforcement materials and composite solutions built for stable
            production, repeatable performance and global delivery.
          </p>
        </div>
        <div>
          <h3>Company</h3>
          <div className="footer-links">
            {navItems.slice(1, 5).map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3>Support</h3>
          <div className="footer-links">
            {navItems.slice(5).map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact">
              Request a sample <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>
            <Building2 size={16} /> {siteConfig.companyName}
          </p>
          <p>
            <MapPin size={16} /> {siteConfig.location}
          </p>
          <p>
            <Mail size={16} />
            <a href={siteConfig.emailHref}>{siteConfig.email}</a>
          </p>
          <p>
            <Phone size={16} />
            <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
          </p>
          <p>
            <MessageCircle size={16} />
            <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp {siteConfig.whatsapp}
            </a>
          </p>
        </div>
      </div>
      <div className="site-shell footer-bottom">
        <span>© {new Date().getFullYear()} Zhejiang FRPHome New Material Co., Ltd. / 浙江福昊新材料有限公司</span>
        <span>FRP HOME / 福昊</span>
      </div>
    </footer>
  );
}
