export type CarbonFabricVariant = {
  slug: string;
  name: string;
  code: string;
  description: string;
  specifications: { label: string; value: string }[];
  applications: string[];
};

export const carbonFabricVariants: CarbonFabricVariant[] = [
  {
    slug: "3k-200gsm-twill-carbon-fiber-fabric",
    name: "3K 200 g/m² Twill Carbon Fiber Fabric",
    code: "FRPH-CF-3K200T",
    description:
      "A lightweight 3K woven carbon fabric with a balanced 2×2 twill construction. It offers good drape, a consistent visual pattern and practical handling for cosmetic and structural laminates.",
    specifications: [
      { label: "Areal Weight", value: "200 g/m² (typical)" },
      { label: "Fiber Type", value: "3K carbon fiber, standard modulus" },
      { label: "Weave Type", value: "2×2 Twill" },
      { label: "Available Width", value: "1,000 / 1,270 / 1,500 mm; custom width available" },
      { label: "Roll Length", value: "100 m standard; custom roll length by order" },
      { label: "MOQ", value: "100 m² per specification; trial quantity subject to confirmation" },
      { label: "Packing", value: "Rolled on tube, PE film protected, export carton" },
    ],
    applications: [
      "Automotive interior and exterior panels",
      "Sports equipment",
      "Marine components",
      "Decorative carbon laminates",
      "General composite molding",
    ],
  },
  {
    slug: "3k-245gsm-twill-carbon-fiber-fabric",
    name: "3K 245 g/m² Twill Carbon Fiber Fabric",
    code: "FRPH-CF-3K245T",
    description:
      "A medium-weight 3K twill fabric with increased fiber coverage compared with 200 g/m² cloth. It is suited to parts requiring a familiar carbon appearance with additional laminate build per layer.",
    specifications: [
      { label: "Areal Weight", value: "245 g/m² (typical)" },
      { label: "Fiber Type", value: "3K carbon fiber, standard modulus" },
      { label: "Weave Type", value: "2×2 Twill" },
      { label: "Available Width", value: "1,000 / 1,270 mm; other widths by confirmation" },
      { label: "Roll Length", value: "100 m standard; custom roll length by order" },
      { label: "MOQ", value: "100 m² per specification; trial quantity subject to confirmation" },
      { label: "Packing", value: "Rolled on tube, PE film protected, export carton" },
    ],
    applications: [
      "Automotive body and trim parts",
      "Marine panels and accessories",
      "Sporting goods",
      "Composite covers and housings",
      "Visual surface laminates",
    ],
  },
  {
    slug: "12k-400gsm-carbon-fiber-fabric",
    name: "12K 400 g/m² Carbon Fiber Fabric",
    code: "FRPH-CF-12K400",
    description:
      "A heavier 12K woven reinforcement designed for faster laminate build and efficient fiber placement. It is commonly considered for larger parts and production where fewer fabric layers are preferred.",
    specifications: [
      { label: "Areal Weight", value: "400 g/m² (typical)" },
      { label: "Fiber Type", value: "12K carbon fiber, standard modulus" },
      { label: "Weave Type", value: "Plain or Twill, according to order specification" },
      { label: "Available Width", value: "1,000 / 1,270 / 1,500 mm; custom width available" },
      { label: "Roll Length", value: "50 or 100 m, subject to specification" },
      { label: "MOQ", value: "100 m² per specification; production MOQ confirmed by width" },
      { label: "Packing", value: "Rolled on reinforced tube, PE film, export carton or pallet" },
    ],
    applications: [
      "Large composite panels",
      "Marine structures",
      "Automotive structural parts",
      "Industrial covers and enclosures",
      "Construction reinforcement systems",
    ],
  },
  {
    slug: "12k-600gsm-carbon-fiber-fabric",
    name: "12K 600 g/m² Carbon Fiber Fabric",
    code: "FRPH-CF-12K600",
    description:
      "A high-areal-weight 12K carbon fabric for building laminate thickness efficiently. The heavier construction is intended for robust composite components, reinforcement layers and larger molded structures.",
    specifications: [
      { label: "Areal Weight", value: "600 g/m² (typical)" },
      { label: "Fiber Type", value: "12K carbon fiber, standard modulus" },
      { label: "Weave Type", value: "Plain or Twill, according to order specification" },
      { label: "Available Width", value: "1,000 / 1,270 mm; custom width subject to production review" },
      { label: "Roll Length", value: "50 m standard; other lengths by confirmation" },
      { label: "MOQ", value: "100 m² per specification; production MOQ confirmed by width" },
      { label: "Packing", value: "Rolled on reinforced tube, PE film, export carton or pallet" },
    ],
    applications: [
      "Heavy-duty composite laminates",
      "Marine and industrial structures",
      "Construction strengthening systems",
      "Large molded components",
      "Tooling and reinforcement layers",
    ],
  },
];
