"use client";

import { FileText, Grid2X2, Printer } from "lucide-react";
import styles from "./catalog.module.css";

export function CatalogToolbar() {
  function printCatalog() {
    window.print();
  }

  function jumpToContents() {
    document.getElementById("catalog-page-5")?.scrollIntoView({ behavior: "auto" });
  }

  function jumpToRfqGuide() {
    document.getElementById("catalog-page-29")?.scrollIntoView({ behavior: "auto" });
  }

  return (
    <div className={styles.catalogToolbar}>
      <div>
        <strong>FRP HOME Digital Catalog</strong>
        <span>32-page A4 working draft</span>
      </div>
      <div className={styles.toolbarActions}>
        <button type="button" onClick={jumpToContents}>
          <Grid2X2 aria-hidden="true" />
          Contents
        </button>
        <button type="button" onClick={printCatalog}>
          <Printer aria-hidden="true" />
          Print / Save PDF
        </button>
        <button type="button" onClick={jumpToRfqGuide}>
          <FileText aria-hidden="true" />
          RFQ Guide
        </button>
      </div>
    </div>
  );
}
