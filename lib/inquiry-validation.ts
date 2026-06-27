import { productCatalog } from "@/lib/product-catalog";
import { rfqFieldLookup, rfqProductTypes } from "@/lib/site-taxonomy";

export type InquiryValues = {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  product: string;
  country: string;
  quantity: string;
  destinationCountry: string;
  requiredDocuments: string;
  requiredSpecification: string;
  application: string;
  message: string;
  additionalDetails: { label: string; value: string }[];
  attachmentName: string;
  attachmentSize: number;
  attachmentType: string;
  website: string;
};

export type InquiryField = Exclude<keyof InquiryValues, "additionalDetails"> | "attachment";
export type InquiryErrors = Partial<Record<InquiryField | "form", string>>;

export const MAX_ATTACHMENT_SIZE_MB = 4;
export const MAX_ATTACHMENT_SIZE = MAX_ATTACHMENT_SIZE_MB * 1024 * 1024;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedAttachmentExtensions = new Set([
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "jpg",
  "jpeg",
  "png",
  "dxf",
  "step",
  "stp",
]);
const validProductNames = new Set([
  ...rfqProductTypes.map((type) => type.label),
  ...productCatalog.map((product) => product.name),
  "Custom / Other",
]);

const initialValues: InquiryValues = {
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  product: "",
  country: "",
  quantity: "",
  destinationCountry: "",
  requiredDocuments: "",
  requiredSpecification: "",
  application: "",
  message: "",
  additionalDetails: [],
  attachmentName: "",
  attachmentSize: 0,
  attachmentType: "",
  website: "",
};

function cleanValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function hasLength(value: string, min: number, max: number) {
  return value.length >= min && value.length <= max;
}

function fileMeta(value: unknown) {
  if (!value || typeof value !== "object") {
    return { name: "", size: 0, type: "" };
  }

  const maybeFile = value as { name?: unknown; size?: unknown; type?: unknown };
  const name = cleanValue(maybeFile.name);
  const size = typeof maybeFile.size === "number" ? maybeFile.size : 0;
  const type = cleanValue(maybeFile.type);

  return size > 0 ? { name, size, type } : { name: "", size: 0, type: "" };
}

export function normalizeInquiryPayload(input: Record<string, unknown>): InquiryValues {
  const attachment = fileMeta(input.attachment);
  const additionalDetails = Array.from(rfqFieldLookup.entries())
    .map(([, field]) => ({
      label: field.label,
      value: cleanValue(input[field.name]),
    }))
    .filter((detail) => detail.value);

  return {
    ...initialValues,
    name: cleanValue(input.name),
    company: cleanValue(input.company),
    email: cleanValue(input.email),
    whatsapp: cleanValue(input.whatsapp),
    product: cleanValue(input.product),
    country: cleanValue(input.country),
    quantity: cleanValue(input.quantity),
    destinationCountry: cleanValue(input.destinationCountry),
    requiredDocuments: cleanValue(input.requiredDocuments),
    requiredSpecification: cleanValue(input.requiredSpecification),
    application: cleanValue(input.application),
    message: cleanValue(input.message),
    additionalDetails,
    attachmentName: attachment.name,
    attachmentSize: attachment.size,
    attachmentType: attachment.type,
    website: cleanValue(input.website),
  };
}

export function validateInquiryPayload(input: Record<string, unknown>) {
  const values = normalizeInquiryPayload(input);
  const errors: InquiryErrors = {};

  if (!hasLength(values.name, 2, 80)) {
    errors.name = "Please enter your name, 2-80 characters.";
  }

  if (!hasLength(values.company, 2, 120)) {
    errors.company = "Please enter your company name, 2-120 characters.";
  }

  if (!emailPattern.test(values.email) || values.email.length > 120) {
    errors.email = "Please enter a valid business email address.";
  }

  if (values.whatsapp && !hasLength(values.whatsapp, 5, 40)) {
    errors.whatsapp = "Please enter a valid WhatsApp or phone number.";
  }

  if (!values.product) {
    errors.product = "Please select a product.";
  } else if (!validProductNames.has(values.product)) {
    errors.product = "Please choose a valid product from the list.";
  }

  if (values.quantity.length > 120) {
    errors.quantity = "Quantity should be 120 characters or less.";
  }

  if (values.country.length > 80) {
    errors.country = "Country should be 80 characters or less.";
  }

  if (values.destinationCountry.length > 80) {
    errors.destinationCountry = "Destination country should be 80 characters or less.";
  }

  if (values.requiredDocuments.length > 120) {
    errors.requiredDocuments = "Required documents should be 120 characters or less.";
  }

  if (values.requiredSpecification.length > 200) {
    errors.requiredSpecification = "Specification details should be 200 characters or less.";
  }

  if (!hasLength(values.application, 2, 160)) {
    errors.application = "Please include the application or end use, 2-160 characters.";
  }

  if (!hasLength(values.message, 10, 2000)) {
    errors.message = "Please describe your requirement in at least 10 characters.";
  }

  if (values.attachmentSize > MAX_ATTACHMENT_SIZE) {
    errors.attachment = `Attachment should be ${MAX_ATTACHMENT_SIZE_MB} MB or smaller.`;
  }

  if (values.attachmentName) {
    const extension = values.attachmentName.split(".").pop()?.toLowerCase() ?? "";
    if (!allowedAttachmentExtensions.has(extension)) {
      errors.attachment =
        "Use PDF, Word, Excel, JPG, PNG, DXF, STEP or STP files only.";
    }
  }

  if (values.website) {
    errors.form = "The form could not be submitted.";
  }

  return {
    values,
    errors,
    ok: Object.keys(errors).length === 0,
  };
}
