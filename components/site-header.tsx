"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { productFamilies } from "@/lib/product-families";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const isProductsActive = pathname === "/products" || pathname.startsWith("/products/");

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="site-shell utility-inner">
          <span>Carbon Fiber Materials & CFRP Solutions</span>
          <span className="utility-meta">B2B composite material supply</span>
        </div>
      </div>
      <input
        id="mobile-nav-toggle"
        className="mobile-nav-toggle"
        type="checkbox"
        aria-label="Toggle mobile navigation"
      />
      <div className="site-shell nav-row">
        <Link href="/" className="brand" aria-label="FRP HOME home">
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
                  <Link href={item.href} className={isProductsActive ? "active" : ""}>
                    <span>{item.label}</span>
                    <ChevronDown size={14} strokeWidth={1.8} />
                  </Link>
                  <div className="product-dropdown" aria-label="Product menu">
                    <div className="product-dropdown-head">
                      <strong>Products by Material Family</strong>
                      <span>Choose by reinforcement, upstream tow, prepreg, additive, profile or strengthening system.</span>
                    </div>
                    <div className="product-dropdown-grid">
                      {productFamilies.map((family) => (
                        <div className="product-mega-family" key={family.title}>
                          <Link href={family.href} className="product-mega-family-title">
                            <span>{family.title}</span>
                            <small>{family.description}</small>
                          </Link>
                          <div className="product-mega-links">
                            {family.items.slice(0, 9).map((product) => (
                              <Link
                                href={product.href}
                                key={`${family.title}-${product.label}`}
                                className={pathname === product.href ? "active" : ""}
                              >
                                {product.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? "active" : ""}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="button button-dark nav-cta">
          Request a Quote <ArrowUpRight size={16} strokeWidth={1.8} />
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
                    href={item.href}
                    className={isProductsActive ? "active" : ""}
                  >
                    {item.label}
                  </Link>
                  <div className="mobile-product-links">
                    {productFamilies.map((family) => (
                      <div className="mobile-product-family" key={family.title}>
                        <Link href={family.href}>
                          {family.title}
                        </Link>
                        {family.items.slice(0, 6).map((product) => (
                          <Link
                            href={product.href}
                            key={`${family.title}-${product.label}`}
                            className={pathname === product.href ? "active" : ""}
                          >
                            {product.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? "active" : ""}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className="button button-dark">
            Request a Quote <ArrowUpRight size={16} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
