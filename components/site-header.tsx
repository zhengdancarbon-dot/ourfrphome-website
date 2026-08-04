"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { defaultLocale, getLocaleFromPathname, getUnlocalizedPath, type Locale } from "@/lib/i18n/config";
import { isPhaseOneLocalizedPath, phaseOneLocalePath } from "@/lib/i18n/phase-one-paths";
import { getUiCopy, translateProductFamily, translateProductLink } from "@/lib/i18n/ui-copy";
import { productFamilies } from "@/lib/product-families";
import { navItems } from "@/lib/site-data";

const mobileMenuLabels = {
  en: { open: "Open main menu", close: "Close main menu" },
  es: { open: "Abrir menú principal", close: "Cerrar menú principal" },
  "pt-br": { open: "Abrir menu principal", close: "Fechar menu principal" },
  ru: { open: "Открыть главное меню", close: "Закрыть главное меню" },
  ar: { open: "فتح القائمة الرئيسية", close: "إغلاق القائمة الرئيسية" },
  fr: { open: "Ouvrir le menu principal", close: "Fermer le menu principal" },
  ko: { open: "기본 메뉴 열기", close: "기본 메뉴 닫기" },
  pl: { open: "Otwórz menu główne", close: "Zamknij menu główne" },
  tr: { open: "Ana menüyü aç", close: "Ana menüyü kapat" },
  uk: { open: "Відкрити головне меню", close: "Закрити головне меню" },
  vi: { open: "Mở menu chính", close: "Đóng menu chính" },
  th: { open: "เปิดเมนูหลัก", close: "ปิดเมนูหลัก" },
} satisfies Record<Locale, { open: string; close: string }>;

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpenPath, setMobileOpenPath] = useState<string | null>(null);
  const mobileOpen = mobileOpenPath === pathname;
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
  const navigationLabel = (href: string, fallback: string) => {
    const label = navLabelByHref.get(href) ?? fallback;
    return locale !== defaultLocale && !isPhaseOneLocalizedPath(href) ? `${label} (EN)` : label;
  };
  const visibleFamilyItems = (
    items: (typeof productFamilies)[number]["items"],
    limit: number,
  ) => {
    if (locale === defaultLocale) return items.slice(0, limit);

    const localizedItems = items.filter((product) => isPhaseOneLocalizedPath(product.href));
    const firstItemByHref = new Map<string, (typeof items)[number]>();
    localizedItems.forEach((product) => {
      if (!firstItemByHref.has(product.href)) firstItemByHref.set(product.href, product);
    });
    return Array.from(firstItemByHref.values()).slice(0, limit);
  };

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="site-shell utility-inner">
          <span>{copy.utility.title}</span>
          <span className="utility-meta">{copy.utility.meta}</span>
        </div>
      </div>
      <div className="site-shell nav-row">
        <Link href={phaseOneLocalePath("/", locale)} className="brand">
          <Image
            src="/images/brand/frphome-logo-original.jpg"
            alt=""
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

        <nav className="desktop-nav" aria-label={copy.utility.title}>
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
                        const visibleItems = visibleFamilyItems(family.items, 9);
                        if (!visibleItems.length) return null;
                        const familyHref = locale === defaultLocale || isPhaseOneLocalizedPath(family.href)
                          ? family.href
                          : "/products";
                        return (
                        <div className="product-mega-family" key={family.title}>
                          <Link href={phaseOneLocalePath(familyHref, locale)} className="product-mega-family-title">
                            <span>{localizedFamily.title}</span>
                            <small>{localizedFamily.description}</small>
                          </Link>
                          <div className="product-mega-links">
                            {visibleItems.map((product) => (
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
                hrefLang={locale !== defaultLocale && !isPhaseOneLocalizedPath(item.href) ? "en" : undefined}
                className={currentPath === item.href ? "active" : ""}
              >
                {navigationLabel(item.href, item.label)}
              </Link>
            );
          })}
        </nav>

        <LanguageSwitcher compact />

        <Link href={phaseOneLocalePath("/contact", locale)} className="button button-dark nav-cta">
          {copy.common.requestQuote} <ArrowUpRight size={16} strokeWidth={1.8} />
        </Link>

        <button
          type="button"
          className="menu-button"
          aria-label={mobileOpen ? mobileMenuLabels[locale].close : mobileMenuLabels[locale].open}
          aria-controls="mobile-navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpenPath((openPath) => openPath === pathname ? null : pathname)}
        >
          <Menu className="menu-icon-open" size={24} />
          <X className="menu-icon-close" size={24} />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav${mobileOpen ? " mobile-nav-open" : ""}`}
        aria-label={copy.utility.title}
      >
        <div className="site-shell">
          {navItems.map((item) => {
            if (item.href === "/products") {
              return (
                <details className="mobile-product-menu" key={item.href} open={isProductsActive || undefined}>
                  <summary className={isProductsActive ? "active" : ""}>
                    <span>{navLabelByHref.get(item.href) ?? item.label}</span>
                    <ChevronDown size={16} strokeWidth={1.8} aria-hidden="true" />
                  </summary>
                  <div className="mobile-product-links">
                    <Link
                      href={phaseOneLocalePath(item.href, locale)}
                      className="mobile-view-all-products"
                    >
                      {copy.common.viewProducts}
                    </Link>
                    {productFamilies.map((family) => {
                      const localizedFamily = translateProductFamily(locale, family.title, family.description);
                      const visibleItems = visibleFamilyItems(family.items, 6);
                      if (!visibleItems.length) return null;
                      const familyHref = locale === defaultLocale || isPhaseOneLocalizedPath(family.href)
                        ? family.href
                        : "/products";
                      return (
                      <div className="mobile-product-family" key={family.title}>
                        <Link href={phaseOneLocalePath(familyHref, locale)}>
                          {localizedFamily.title}
                        </Link>
                        {visibleItems.map((product) => (
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
                </details>
              );
            }

            return (
              <Link
                key={item.href}
                href={phaseOneLocalePath(item.href, locale)}
                hrefLang={locale !== defaultLocale && !isPhaseOneLocalizedPath(item.href) ? "en" : undefined}
                className={currentPath === item.href ? "active" : ""}
              >
                {navigationLabel(item.href, item.label)}
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
