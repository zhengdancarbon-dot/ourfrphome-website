"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, products } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isProductsActive = pathname === "/products" || pathname.startsWith("/products/");

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="site-shell utility-inner">
          <span>Carbon Fiber Materials & CFRP Solutions</span>
          <span className="utility-meta">B2B composite material supply</span>
        </div>
      </div>
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
                      <strong>Product Center</strong>
                      <span>Find carbon fiber materials by product family.</span>
                    </div>
                    <div className="product-dropdown-grid">
                      {products.map((product) => (
                        <Link
                          href={product.detailHref ?? "/products"}
                          key={product.slug}
                          className={pathname === product.detailHref ? "active" : ""}
                        >
                          <span>{product.name}</span>
                          <small>{product.category}</small>
                        </Link>
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

        <button
          type="button"
          className="menu-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <div className="site-shell">
            {navItems.map((item) => {
              if (item.href === "/products") {
                return (
                  <div className="mobile-product-menu" key={item.href}>
                    <Link
                      href={item.href}
                      className={isProductsActive ? "active" : ""}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                    <div className="mobile-product-links">
                      {products.map((product) => (
                        <Link
                          href={product.detailHref ?? "/products"}
                          key={product.slug}
                          className={pathname === product.detailHref ? "active" : ""}
                          onClick={() => setOpen(false)}
                        >
                          {product.name}
                        </Link>
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
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact" className="button button-dark" onClick={() => setOpen(false)}>
              Request a Quote <ArrowUpRight size={16} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
