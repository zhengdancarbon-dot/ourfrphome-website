"use client";

import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import {
  MAX_ATTACHMENT_SIZE_MB,
  validateInquiryPayload,
  type InquiryField,
  type InquiryErrors,
} from "@/lib/inquiry-validation";
import { products } from "@/lib/site-data";
import {
  brandAvailabilityNotice,
  complianceNotice,
  rfqProductTypes,
} from "@/lib/site-taxonomy";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

function fieldErrorId(field: InquiryField) {
  return `inquiry-${field}-error`;
}

function FieldError({ error, field }: { error?: string; field: InquiryField }) {
  return error ? (
    <small className="field-error" id={fieldErrorId(field)}>
      {error}
    </small>
  ) : null;
}

function inferProductType(productName: string) {
  const normalized = productName.toLowerCase();
  const product = products.find((item) => item.name === productName);
  const source = `${normalized} ${product?.category.toLowerCase() ?? ""}`;

  if (product?.slug === "carbon-fiber-ud-fabric") return "ud-fabric";
  if (product?.slug === "spread-tow-carbon-fiber-fabric") return "spread-tow-fabric";
  if (product?.slug === "aramid-fabric" || product?.slug === "carbon-fiber-hybrid-jacquard-fabric") {
    return "aramid-hybrid-fabric";
  }
  if (product?.slug === "carbon-fiber-yarn-and-tow") return "yarn-tow";
  if (product?.slug === "prepreg-carbon-fiber-materials") return "prepreg";
  if (product?.slug === "structural-strengthening-system") {
    return "structural-strengthening";
  }
  if (source.includes("prepreg")) return "prepreg";
  if (source.includes("chopped") || source.includes("milled") || source.includes("powder")) {
    return "chopped-powder";
  }
  if (source.includes("structural") || source.includes("strengthening")) {
    return "structural-strengthening";
  }
  if (source.includes("aramid") || source.includes("hybrid")) return "aramid-hybrid-fabric";
  if (source.includes("ud") || source.includes("unidirectional")) return "ud-fabric";
  if (source.includes("spread tow")) return "spread-tow-fabric";
  if (source.includes("woven") || source.includes("fabric")) {
    return "woven-fabric";
  }
  if (source.includes("yarn") || source.includes("tow")) return "yarn-tow";
  if (
    source.includes("tube") ||
    source.includes("sheet") ||
    source.includes("laminate") ||
    source.includes("custom") ||
    source.includes("finished")
  ) {
    return "cfrp-part";
  }
  return "woven-fabric";
}

function trackRfqSubmit(productType: string, productName: string) {
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("event", "rfq_submit", {
    product_type: productType,
    product_name: productName || productType,
  });
}

export function InquiryForm({ initialProduct }: { initialProduct?: string } = {}) {
  const searchParams = useSearchParams();
  const selectedProduct = searchParams.get("product") ?? initialProduct ?? "";
  const initialMessage = searchParams.get("message") ?? "";
  const [productType, setProductType] = useState(inferProductType(selectedProduct));
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<InquiryErrors>({});

  const activeProductType =
    rfqProductTypes.find((type) => type.value === productType) ?? rfqProductTypes[1];
  const selectedProductDetail =
    selectedProduct && selectedProduct !== activeProductType.label ? selectedProduct : "";

  const fieldAttributes = (field: InquiryField) => {
    const hasError = Boolean(errors[field]);
    return {
      "aria-invalid": hasError || undefined,
      "aria-describedby": hasError ? fieldErrorId(field) : undefined,
    };
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries()) as Record<string, unknown>;
    const validation = validateInquiryPayload(payload);

    if (!validation.ok) {
      setErrors(validation.errors);
      setStatus("idle");
      return;
    }

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        body: formData,
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        setErrors(result.errors ?? { form: result.error ?? "Please check the form and try again." });
        setStatus("idle");
        return;
      }
      trackRfqSubmit(activeProductType.label, selectedProductDetail);
      form.reset();
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={34} />
        <h3>Inquiry received.</h3>
        <p>Thank you. Our export team will review your requirements and reply shortly.</p>
        <button type="button" className="text-link" onClick={() => setStatus("idle")}>
          Send another inquiry <ArrowRight size={16} />
        </button>
      </div>
    );
  }

  return (
    <form className="inquiry-form rfq-form" onSubmit={handleSubmit} encType="multipart/form-data" noValidate>
      <input name="product" type="hidden" value={activeProductType.label} readOnly />
      <div className="rfq-type-select" aria-label="Select product type">
        <span>Product Type *</span>
        <div className="rfq-type-grid" role="list">
          {rfqProductTypes.map((type) => (
            <button
              type="button"
              className={type.value === productType ? "active" : ""}
              key={type.value}
              onClick={() => setProductType(type.value)}
            >
              {type.label}
            </button>
          ))}
        </div>
        <FieldError field="product" error={errors.product} />
      </div>

      <div className="form-grid">
        <label>
          <span>Name *</span>
          <input name="name" type="text" autoComplete="name" required {...fieldAttributes("name")} />
          <FieldError field="name" error={errors.name} />
        </label>
        <label>
          <span>Company *</span>
          <input
            name="company"
            type="text"
            autoComplete="organization"
            required
            {...fieldAttributes("company")}
          />
          <FieldError field="company" error={errors.company} />
        </label>
        <label>
          <span>Email *</span>
          <input name="email" type="email" autoComplete="email" required {...fieldAttributes("email")} />
          <FieldError field="email" error={errors.email} />
        </label>
        <label>
          <span>WhatsApp / Phone</span>
          <input name="whatsapp" type="tel" autoComplete="tel" {...fieldAttributes("whatsapp")} />
          <FieldError field="whatsapp" error={errors.whatsapp} />
        </label>
        <label>
          <span>Country</span>
          <input
            name="country"
            type="text"
            autoComplete="country-name"
            placeholder="Your company country"
            {...fieldAttributes("country")}
          />
          <FieldError field="country" error={errors.country} />
        </label>
        <label>
          <span>Destination Country</span>
          <input
            name="destinationCountry"
            type="text"
            autoComplete="country-name"
            placeholder="Shipment destination"
            {...fieldAttributes("destinationCountry")}
          />
          <FieldError field="destinationCountry" error={errors.destinationCountry} />
        </label>
        <label>
          <span>End Use / Final Application *</span>
          <input
            name="application"
            type="text"
            placeholder="e.g. civil UAV arm, automotive panel, bridge strengthening"
            {...fieldAttributes("application")}
          />
          <FieldError field="application" error={errors.application} />
        </label>
        <label>
          <span>Quantity</span>
          <input
            name="quantity"
            type="text"
            placeholder="e.g. 500 m2 / 200 kg / trial order"
            {...fieldAttributes("quantity")}
          />
          <FieldError field="quantity" error={errors.quantity} />
        </label>
        <label>
          <span>Required Documents</span>
          <input
            name="requiredDocuments"
            type="text"
            placeholder="TDS / SDS / COA / packing photos"
            {...fieldAttributes("requiredDocuments")}
          />
          <FieldError field="requiredDocuments" error={errors.requiredDocuments} />
        </label>
        <label>
          <span>Target Product / Specification</span>
          <input
            name="requiredSpecification"
            type="text"
            defaultValue={selectedProductDetail}
            placeholder="Product name, weight, width, thickness or drawing reference"
            {...fieldAttributes("requiredSpecification")}
          />
          <FieldError field="requiredSpecification" error={errors.requiredSpecification} />
        </label>
      </div>

      <div className="rfq-dynamic-panel">
        <h3>{activeProductType.label} details</h3>
        <div className="form-grid">
          {activeProductType.fields.map((field) => (
            <label key={field.name}>
              <span>{field.label}</span>
              <input name={field.name} type="text" placeholder={field.placeholder} />
            </label>
          ))}
        </div>
      </div>

      <div className="form-grid form-grid-tail">
        <label>
          <span>File Upload</span>
          <input
            name="attachment"
            type="file"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.dxf,.step,.stp"
            {...fieldAttributes("attachment")}
          />
          <small className="field-help">
            Drawing, specification or previous TDS. Max {MAX_ATTACHMENT_SIZE_MB} MB.
          </small>
          <FieldError field="attachment" error={errors.attachment} />
        </label>
        <label>
          <span>Message *</span>
          <textarea
            name="message"
            rows={6}
            required
            defaultValue={initialMessage}
            placeholder="Please include material format, process, target application, compliance context and any deadline."
            {...fieldAttributes("message")}
          />
          <FieldError field="message" error={errors.message} />
        </label>
      </div>

      <label className="form-honeypot" aria-hidden="true">
        <span>Website</span>
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="rfq-compliance-note">
        <strong>End-use review</strong>
        <span>{complianceNotice}</span>
        <small>{brandAvailabilityNotice}</small>
      </div>

      <div className="form-footer">
        <p>By submitting, you agree that we may contact you about this requirement.</p>
        <button className="button button-dark" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              Sending <LoaderCircle className="spin" size={18} />
            </>
          ) : (
            <>
              Submit RFQ <ArrowRight size={18} />
            </>
          )}
        </button>
      </div>
      {errors.form && (
        <p className="form-error" role="alert">
          {errors.form}
        </p>
      )}
      {status === "error" && (
        <p className="form-error" role="alert">
          The form could not be submitted. Please try again or email {siteConfig.email}.
        </p>
      )}
    </form>
  );
}
