"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { getLocaleFromPathname, hreflangLocales } from "@/lib/i18n/config";

export function DocumentLanguage() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = getLocaleFromPathname(pathname);
    document.documentElement.lang = hreflangLocales[locale];
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [pathname]);

  return null;
}
