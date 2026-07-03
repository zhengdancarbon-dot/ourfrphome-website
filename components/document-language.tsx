"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { getLocaleFromPathname, hreflangLocales } from "@/lib/i18n/config";

export function DocumentLanguage() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = hreflangLocales[getLocaleFromPathname(pathname)];
  }, [pathname]);

  return null;
}
