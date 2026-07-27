import type { ProductDocument } from "@/lib/product-documents";
import type { TechnicalArticle } from "@/lib/technical-articles";
import { absoluteUrl } from "@/lib/seo";

type ProductResourceSchemaOptions = {
  productUrl: string;
  productName: string;
  documents: ProductDocument[];
  guides: TechnicalArticle[];
  documentsListName: string;
  guidesListName: string;
};

export function createProductResourceSchemas({
  productUrl,
  productName,
  documents,
  guides,
  documentsListName,
  guidesListName,
}: ProductResourceSchemaOptions) {
  const productReference = { "@id": `${productUrl}#product` };
  const documentItems = documents.map((document, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "DigitalDocument",
      "@id": `${productUrl}#technical-document-${index + 1}`,
      name: document.title,
      description: document.specification,
      url: absoluteUrl(document.href),
      encodingFormat: "application/pdf",
      inLanguage: document.language === "English" ? "en" : document.language,
      genre:
        document.type === "SPEC"
          ? "Product specification and RFQ guide"
          : "Technical data sheet",
      about: productReference,
      isPartOf: { "@id": `${productUrl}#webpage` },
    },
  }));
  const guideItems = guides.map((guide, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Article",
      "@id": `${absoluteUrl(`/technical-center/${guide.slug}`)}#article`,
      name: guide.title,
      description: guide.description,
      url: absoluteUrl(`/technical-center/${guide.slug}`),
      inLanguage: "en",
      about: productReference,
    },
  }));

  const schemas = [
    ...(documentItems.length
      ? [
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": `${productUrl}#technical-documents`,
            name: documentsListName,
            description: `${productName} technical documents available from this product page.`,
            numberOfItems: documentItems.length,
            itemListElement: documentItems,
          },
        ]
      : []),
    ...(guideItems.length
      ? [
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": `${productUrl}#buyer-guides`,
            name: guidesListName,
            description: `Buyer guides related to ${productName}.`,
            numberOfItems: guideItems.length,
            itemListElement: guideItems,
          },
        ]
      : []),
  ];

  return {
    schemas,
    subjectOf: [
      ...(documentItems.length ? [{ "@id": `${productUrl}#technical-documents` }] : []),
      ...(guideItems.length ? [{ "@id": `${productUrl}#buyer-guides` }] : []),
    ],
  };
}
