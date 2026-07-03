"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { getLocaleFromPathname, getUnlocalizedPath } from "@/lib/i18n/config";
import { phaseOneLocalePath } from "@/lib/i18n/phase-one-paths";
import { getUiCopy, translateProductFamily, translateProductLink } from "@/lib/i18n/ui-copy";
import { productFamilies } from "@/lib/product-families";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const currentPath = getUnlocalizedPath(pathname);
  const copy = getUiCopy(locale);
  const isProductsActive = currentPath === "/products" || currentPath.startsWith("/products/");
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

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="site-shell utility-inner">
          <span>{copy.utility.title}</span>
          <span className="utility-meta">{copy.utility.meta}</span>
        </div>
      </div>
      <input
        id="mobile-nav-toggle"
        className="mobile-nav-toggle"
        type="checkbox"
        aria-label="Toggle mobile navigation"
      />
      <div className="site-shell nav-row">
        <Link href={phaseOneLocalePath("/", locale)} className="brand" aria-label="FRP HOME home">
          <Image
            src="/images/brand/frphome-logo-original.jpg"
            alt="FRP HOME 福昊"
            width={54}
            height={54}
            className="brand-logo-square"
            priority
          />
          <span className="brand-copy">
            <strong>FRP HOME</strong>
            <small>NEW MATERIALS</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            if (item.href === "/products") {
              return (
                <div className="nav-dropdown" key={item.href}>
                  <Link href={phaseOneLocalePath(item.href, locale)} className={isProductsActive ? "active" : ""}>
                    <span>{navLabelByHref.get(item.href) ?? item.label}</span>
                    <ChevronDown size={14} strokeWidth={1.8} />
                  </Link>
                  <div className="product-dropdown" aria-label="Product menu">
                    <div className="product-dropdown-head">
                      <strong>{copy.productMenu.title}</strong>
                      <span>{copy.productMenu.description}</span>
                    </div>
                    <div className="product-dropdown-grid">
                      {productFamilies.map((family) => {
                        const localizedFamily = translateProductFamily(locale, family.title, family.description);
                        return (
                        <div className="product-mega-family" key={family.title}>
                          <Link href={phaseOneLocalePath(family.href, locale)} className="product-mega-family-title">
                            <span>{localizedFamily.title}</span>
                            <small>{localizedFamily.description}</small>
                          </Link>
                          <div className="product-mega-links">
                            {family.items.slice(0, 9).map((product) => (
                              <Link
                                href={phaseOneLocalePath(product.href, locale)}
                                key={`${family.title}-${product.label}`}
                                className={currentPath === product.href ? "active" : ""}
                              >
                                {translateProductLink(locale, product.label)}
                              </Link>
                            ))}
                          </div>
                        </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={phaseOneLocalePath(item.href, locale)}
                className={currentPath === item.href ? "active" : ""}
              >
                {navLabelByHref.get(item.href) ?? item.label}
              </Link>
            );
          })}
        </nav>

        <LanguageSwitcher compact />

        <Link href={phaseOneLocalePath("/contact", locale)} className="button button-dark nav-cta">
          {copy.common.requestQuote} <ArrowUpRight size={16} strokeWidth={1.8} />
        </Link>

        <label
          htmlFor="mobile-nav-toggle"
          className="menu-button"
          aria-label="Toggle navigation"
          role="button"
        >
          <Menu className="menu-icon-open" size={24} />
          <X className="menu-icon-close" size={24} />
        </label>
      </div>

      <nav className="mobile-nav" aria-label="Mobile navigation">
        <div className="site-shell">
          {navItems.map((item) => {
            if (item.href === "/products") {
              return (
                <div className="mobile-product-menu" key={item.href}>
                  <Link
                    href={phaseOneLocalePath(item.href, locale)}
                    className={isProductsActive ? "active" : ""}
                  >
                    {navLabelByHref.get(item.href) ?? item.label}
                  </Link>
                  <div className="mobile-product-links">
                    {productFamilies.map((family) => {
                      const localizedFamily = translateProductFamily(locale, family.title, family.description);
                      return (
                      <div className="mobile-product-family" key={family.title}>
                        <Link href={phaseOneLocalePath(family.href, locale)}>
                          {localizedFamily.title}
                        </Link>
                        {family.items.slice(0, 6).map((product) => (
                          <Link
                            href={phaseOneLocalePath(product.href, locale)}
                            key={`${family.title}-${product.label}`}
                            className={currentPath === product.href ? "active" : ""}
                          >
                            {translateProductLink(locale, product.label)}
                          </Link>
                        ))}
                      </div>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={phaseOneLocalePath(item.href, locale)}
                className={currentPath === item.href ? "active" : ""}
              >
                {navLabelByHref.get(item.href) ?? item.label}
              </Link>
            );
          })}
          <LanguageSwitcher />
          <Link href={phaseOneLocalePath("/contact", locale)} className="button button-dark">
            {copy.common.requestQuote} <ArrowUpRight size={16} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
