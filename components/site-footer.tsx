"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Building2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { defaultLocale, getLocaleFromPathname, localeLocationLabels } from "@/lib/i18n/config";
import { isPhaseOneLocalizedPath, phaseOneLocalePath } from "@/lib/i18n/phase-one-paths";
import { getUiCopy } from "@/lib/i18n/ui-copy";
import { navItems } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const copy = getUiCopy(locale);
  const navLabelByHref = new Map([
    ["/", copy.nav.home],
    ["/products", copy.nav.products],
    ["/applications", copy.nav.applications],
    ["/processes", copy.nav.processes],
    ["/technical-center", copy.nav.technicalCenter],
    ["/quality-control", copy.nav.quality],
    ["/about", copy.nav.about],
    ["/contact", copy.nav.contact],
  ]);
  const navigationLabel = (href: string, fallback: string) => {
    const label = navLabelByHref.get(href) ?? fallback;
    return locale !== defaultLocale && !isPhaseOneLocalizedPath(href) ? `${label} (EN)` : label;
  };

  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div className="footer-brand">
          <Link href={phaseOneLocalePath("/", locale)} className="brand brand-light">
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
          <p>{copy.footer.description}</p>
          <LanguageSwitcher />
        </div>
        <div>
          <h3>{copy.footer.company}</h3>
          <div className="footer-links">
            {navItems.slice(1, 5).map((item) => (
              <Link href={phaseOneLocalePath(item.href, locale)} hrefLang={locale !== defaultLocale && !isPhaseOneLocalizedPath(item.href) ? "en" : undefined} key={item.href}>
                {navigationLabel(item.href, item.label)}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3>{copy.footer.support}</h3>
          <div className="footer-links">
            {navItems.slice(5).map((item) => (
              <Link href={phaseOneLocalePath(item.href, locale)} hrefLang={locale !== defaultLocale && !isPhaseOneLocalizedPath(item.href) ? "en" : undefined} key={item.href}>
                {navigationLabel(item.href, item.label)}
              </Link>
            ))}
            <Link href={phaseOneLocalePath("/contact", locale)}>
              {copy.footer.requestSample} <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
        <div className="footer-contact">
          <h3>{copy.footer.contact}</h3>
          <p>
            <Building2 size={16} /> {siteConfig.companyName}
          </p>
          <p>
            <MapPin size={16} /> {localeLocationLabels[locale]}
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
