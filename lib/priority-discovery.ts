export type PriorityDiscoveryRoute = {
  productSlug: string;
  label: string;
  title: string;
  description: string;
  guideSlugs: string[];
};

export const priorityDiscoveryRoutes: PriorityDiscoveryRoute[] = [
  {
    productSlug: "carbon-fiber-multiaxial-ncf-fabric",
    label: "Multiaxial NCF",
    title: "Select carbon NCF architecture and prepare the RFQ",
    description:
      "Compare documented biaxial and quadraxial constructions, then confirm direction, weight, width, stitching, process and quantity.",
    guideSlugs: [
      "300gsm-vs-600gsm-biaxial-carbon-ncf",
      "biaxial-vs-triaxial-vs-quadriaxial-carbon-ncf",
      "carbon-fiber-multiaxial-ncf-rfq-checklist",
    ],
  },
  {
    productSlug: "3k-carbon-fiber-laminate-sheet",
    label: "3K Laminate Sheet",
    title: "Define 3K plate thickness, finish and CNC scope",
    description:
      "Separate visible 3K laminate requirements from structural pultruded plate and prepare a drawing-led sheet or CNC quotation.",
    guideSlugs: [
      "carbon-fiber-plate-thickness-selection-guide",
      "3k-carbon-fiber-plate-cnc-rfq-guide",
      "matte-vs-glossy-3k-carbon-fiber-sheet",
    ],
  },
  {
    productSlug: "fiber-optic-cable-drum",
    label: "Fiber Optic Cable Drum",
    title: "Define internal pay-off configuration and prepare the RFQ",
    description:
      "Start with the required fiber length and short, mid or long series, then confirm integration, destination, packing and final civil or industrial application.",
    guideSlugs: [
      "fiber-optic-cable-drum-rfq-checklist",
    ],
  },
  {
    productSlug: "carbon-fiber-yarn-and-tow",
    label: "Yarn & Tow",
    title: "Specify tow size, source grade and conversion process",
    description:
      "Use the documented 12K supply reference while keeping grade, sizing, bobbin, process, quantity and traceability explicit in the RFQ.",
    guideSlugs: [
      "carbon-fiber-tow-rfq-checklist",
      "carbon-fiber-tow-size-guide-1k-50k",
      "carbon-fiber-yarn-vs-tow-vs-roving",
    ],
  },
  {
    productSlug: "carbon-fiber-ud-fabric",
    label: "Strengthening UD Fabric",
    title: "Compare documented 200gsm and 300gsm UD references",
    description:
      "Review dry-fabric construction and RFQ fields without treating gsm or nominal dry thickness as cured-system design values.",
    guideSlugs: [
      "200gsm-vs-300gsm-ud-carbon-fiber-fabric",
      "300gsm-ud-carbon-fiber-fabric-rfq-guide",
      "ud-carbon-fiber-fabric-vs-woven-carbon-fiber-fabric",
    ],
  },
  {
    productSlug: "structural-strengthening-system",
    label: "CFRP Strengthening",
    title: "Choose between pultruded plate and UD fabric systems",
    description:
      "Connect the 1.2 mm plate and UD fabric references to substrate, adhesive, dimensions, engineering responsibility and document needs.",
    guideSlugs: [
      "1-2-mm-pultruded-cfrp-strengthening-plate-rfq-guide",
      "cfrp-plate-vs-carbon-fiber-fabric-for-structural-strengthening",
      "cfrp-strengthening-material-rfq-checklist",
    ],
  },
  {
    productSlug: "carbon-fiber-woven-fabric",
    label: "3K Woven Fabric",
    title: "Select 3K woven construction and prepare the fabric RFQ",
    description:
      "Confirm tow, weave, areal weight, width, roll format, resin process and visible-surface requirements using the verified 200gsm reference.",
    guideSlugs: [
      "3k-200gsm-carbon-fiber-fabric-selection-rfq-guide",
      "plain-vs-twill-carbon-fiber-fabric",
      "how-to-choose-carbon-fiber-fabric-by-gsm",
    ],
  },
];
