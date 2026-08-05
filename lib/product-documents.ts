export type ProductDocument = {
  productSlug: string;
  type: "TDS" | "SDS" | "COA" | "SPEC";
  title: string;
  specification: string;
  language: string;
  revision: string;
  href: string;
  fileSize: string;
};

export const productDocuments: ProductDocument[] = [
  {
    productSlug: "carbon-fiber-woven-fabric",
    type: "TDS",
    title: "3K 200gsm Twill Carbon Fiber Fabric",
    specification: "3K, 200 g/m², twill weave, 1000-1500 mm width",
    language: "English",
    revision: "Rev. 01 / 2026-07",
    href: "/downloads/tds/FRP-HOME-3K-200gsm-Twill-Carbon-Fiber-Fabric-TDS.pdf",
    fileSize: "67 KB",
  },
  {
    productSlug: "carbon-fiber-ud-fabric",
    type: "TDS",
    title: "300gsm UD Carbon Fiber Fabric",
    specification: "300 g/m² unidirectional reinforcement, 100-500 mm width",
    language: "English",
    revision: "Rev. 01 / 2026-07",
    href: "/downloads/tds/FRP-HOME-300gsm-UD-Carbon-Fiber-Fabric-TDS.pdf",
    fileSize: "67 KB",
  },
  {
    productSlug: "carbon-fiber-ud-fabric",
    type: "TDS",
    title: "200gsm UD Carbon Fiber Strengthening Fabric Supply Reference",
    specification: "200 g/m², 0° UD, 0.111 mm nominal dry-fiber thickness",
    language: "English",
    revision: "Rev. 01 / 2026-07",
    href: "/downloads/tds/FRP-HOME-200gsm-UD-Carbon-Fiber-Strengthening-Supply-TDS.pdf",
    fileSize: "68 KB",
  },
  {
    productSlug: "structural-strengthening-system",
    type: "TDS",
    title: "300gsm UD Carbon Fiber Fabric for Strengthening",
    specification: "300 g/m² unidirectional reinforcement for structural system review",
    language: "English",
    revision: "Rev. 01 / 2026-07",
    href: "/downloads/tds/FRP-HOME-300gsm-UD-Carbon-Fiber-Fabric-TDS.pdf",
    fileSize: "67 KB",
  },
  {
    productSlug: "structural-strengthening-system",
    type: "TDS",
    title: "200gsm UD Carbon Fiber Strengthening Fabric Supply Reference",
    specification: "200 g/m², 0° UD, 0.111 mm nominal dry-fiber thickness",
    language: "English",
    revision: "Rev. 01 / 2026-07",
    href: "/downloads/tds/FRP-HOME-200gsm-UD-Carbon-Fiber-Strengthening-Supply-TDS.pdf",
    fileSize: "68 KB",
  },
  {
    productSlug: "structural-strengthening-system",
    type: "TDS",
    title: "1.2 mm Pultruded CFRP Strengthening Plate",
    specification: "1.2 mm pultruded CFRP plate; source model ZCP1.2",
    language: "English",
    revision: "Rev. 01 / 2026-07",
    href: "/downloads/tds/FRP-HOME-1.2mm-Pultruded-CFRP-Strengthening-Plate-TDS.pdf",
    fileSize: "67 KB",
  },
  {
    productSlug: "carbon-fiber-multiaxial-ncf-fabric",
    type: "TDS",
    title: "300gsm Biaxial Carbon Fiber Fabric",
    specification: "+45° / -45° and 0° / 90° constructions",
    language: "English",
    revision: "Rev. 01 / 2026-07",
    href: "/downloads/tds/FRP-HOME-300gsm-Biaxial-Carbon-Fabric-TDS.pdf",
    fileSize: "113 KB",
  },
  {
    productSlug: "carbon-fiber-multiaxial-ncf-fabric",
    type: "TDS",
    title: "600gsm +45/-45 Biaxial Carbon NCF",
    specification: "600 g/m² carbon basis, balanced +45° / -45°, 1270 mm × 50 m",
    language: "English",
    revision: "Rev. 01 / 2026-07",
    href: "/downloads/tds/FRP-HOME-600gsm-PlusMinus45-Biaxial-Carbon-NCF-TDS.pdf",
    fileSize: "68 KB",
  },
  {
    productSlug: "carbon-fiber-multiaxial-ncf-fabric",
    type: "TDS",
    title: "400gsm 0/+45/90/-45 Quadraxial Carbon NCF Supply Reference",
    specification: "400 g/m² carbon basis, four 100 g/m² layers, 408 g/m² total dry fabric",
    language: "English",
    revision: "Rev. 01 / 2026-07",
    href: "/downloads/tds/FRP-HOME-400gsm-Quadraxial-Carbon-NCF-Supply-TDS.pdf",
    fileSize: "68 KB",
  },
  {
    productSlug: "carbon-fiber-yarn-and-tow",
    type: "TDS",
    title: "High Strength 12K Carbon Fiber Tow",
    specification: "Supplier-grade reference for ZDCF 55T-12K continuous tow",
    language: "English",
    revision: "Rev. 01 / 2026-07",
    href: "/downloads/tds/FRP-HOME-High-Strength-12K-Carbon-Fiber-Tow-Supply-TDS.pdf",
    fileSize: "67 KB",
  },
  {
    productSlug: "prepreg-carbon-fiber-materials",
    type: "TDS",
    title: "Carbon Fiber Prepreg - WP-L5100 System",
    specification: "UD and woven carbon prepreg with WP-L5100 epoxy resin",
    language: "English",
    revision: "Rev. 01 / 2026-07",
    href: "/downloads/tds/FRP-HOME-WP-L5100-Carbon-Fiber-Prepreg-TDS.pdf",
    fileSize: "67 KB",
  },
  {
    productSlug: "milled-carbon-fiber-powder",
    type: "TDS",
    title: "300 Mesh Milled Carbon Fiber Powder",
    specification: "PAN-based carbon fiber powder, 300 mesh nominal grade",
    language: "English",
    revision: "Rev. 01 / 2026-07",
    href: "/downloads/tds/FRP-HOME-300-Mesh-Milled-Carbon-Fiber-Powder-TDS.pdf",
    fileSize: "67 KB",
  },
  {
    productSlug: "3k-carbon-fiber-laminate-sheet",
    type: "SPEC",
    title: "3K Carbon Fiber Laminate Sheet Product Specification & RFQ Guide",
    specification: "3K twill surface, finish, thickness, layup and CNC order-review checklist",
    language: "English",
    revision: "Rev. 01 / 2026-07",
    href: "/downloads/specifications/FRP-HOME-3K-Carbon-Fiber-Laminate-Sheet-RFQ-Specification-Guide.pdf",
    fileSize: "68 KB",
  },
];

export function getProductDocuments(productSlug: string) {
  return productDocuments.filter((document) => document.productSlug === productSlug);
}

export function getProductDocumentId(document: ProductDocument) {
  return `${document.productSlug}:${document.type}:${document.href.split("/").pop()}`;
}
