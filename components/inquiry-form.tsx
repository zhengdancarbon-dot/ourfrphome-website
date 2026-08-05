"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import {
  MAX_ATTACHMENT_SIZE_MB,
  validateInquiryPayload,
  type InquiryField,
  type InquiryErrors,
} from "@/lib/inquiry-validation";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import {
  getUiCopy,
  translateRfqFieldLabel,
  translateRfqPlaceholder,
  translateRfqTypeLabel,
} from "@/lib/i18n/ui-copy";
import { products } from "@/lib/site-data";
import { productSeoRegistryById } from "@/lib/seo/product-registry";
import { rfqProductTypes } from "@/lib/site-taxonomy";
import { siteConfig } from "@/lib/site-config";
import {
  createAttributedSourcePage,
  getAttributionEventParameters,
  getAttributionQuery,
} from "@/lib/utm-attribution";

type Status = "idle" | "submitting" | "success" | "error";

const fieldValidationMessages: Record<Locale, string> = {
  en: "Please check this field.",
  es: "Revise este campo.",
  "pt-br": "Verifique este campo.",
  ru: "Проверьте это поле.",
  ar: "يرجى التحقق من هذا الحقل.",
  fr: "Vérifiez ce champ.",
  ko: "이 항목을 확인해 주세요.",
  pl: "Sprawdź to pole.",
  tr: "Lütfen bu alanı kontrol edin.",
  uk: "Перевірте це поле.",
  vi: "Vui lòng kiểm tra trường này.",
  th: "โปรดตรวจสอบช่องนี้",
};

const attributionSessionKey = "frp-home-rfq-attribution";

function localizeInquiryErrors(errors: InquiryErrors, locale: Locale) {
  return Object.fromEntries(
    Object.keys(errors).map((field) => [field, fieldValidationMessages[locale]]),
  ) as InquiryErrors;
}

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

function trackRfqEvent(
  eventName: "rfq_view" | "rfq_start" | "rfq_submit",
  productType: string,
  productName: string,
  locale: Locale,
  sourcePage: string,
) {
  const analytics = window as Window & {
    frpTrackEvent?: (eventName: string, params: Record<string, unknown>) => void;
    gtag?: (...args: unknown[]) => void;
  };
  const product = products.find((item) => item.name === productName);
  const registryEntry = product ? productSeoRegistryById[product.slug] : undefined;
  const params = {
    product_id: product?.slug,
    product_family: registryEntry?.family ?? productType,
    page_type: "rfq",
    locale,
    source_page: sourcePage,
    ...getAttributionEventParameters(sourcePage),
  };

  if (analytics.frpTrackEvent) {
    analytics.frpTrackEvent(eventName, params);
  } else {
    analytics.gtag?.("event", eventName, params);
  }
}

export function InquiryForm({
  initialProduct,
  initialProductType,
  locale = defaultLocale,
}: {
  initialProduct?: string;
  initialProductType?: string;
  locale?: Locale;
} = {}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentAttributionQuery = getAttributionQuery(searchParams);
  const [persistedAttributionQuery, setPersistedAttributionQuery] = useState("");
  const copy = getUiCopy(locale);
  const selectedProduct = searchParams.get("product") ?? initialProduct ?? "";
  const initialMessage = searchParams.get("message") ?? "";
  const [productType, setProductType] = useState(
    initialProductType ?? inferProductType(selectedProduct),
  );
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<InquiryErrors>({});
  const hasTrackedView = useRef(false);
  const hasTrackedStart = useRef(false);
  const sourcePage = createAttributedSourcePage(
    pathname || "/contact",
    currentAttributionQuery || persistedAttributionQuery,
  );

  useEffect(() => {
    let nextAttributionQuery = "";

    try {
      if (currentAttributionQuery) {
        sessionStorage.setItem(attributionSessionKey, currentAttributionQuery);
        nextAttributionQuery = currentAttributionQuery;
      } else {
        nextAttributionQuery = sessionStorage.getItem(attributionSessionKey) || "";
      }
    } catch {
      nextAttributionQuery = "";
    }

    const timeoutId = window.setTimeout(
      () => setPersistedAttributionQuery(nextAttributionQuery),
      0,
    );

    return () => window.clearTimeout(timeoutId);
  }, [currentAttributionQuery]);

  useEffect(() => {
    if (hasTrackedView.current) return;
    hasTrackedView.current = true;
    trackRfqEvent("rfq_view", productType, selectedProduct, locale, sourcePage);
  }, [locale, productType, selectedProduct, sourcePage]);

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
      setErrors(localizeInquiryErrors(validation.errors, locale));
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
        setErrors(result.errors
          ? localizeInquiryErrors(result.errors as InquiryErrors, locale)
          : { form: copy.rfq.errorCopy });
        setStatus("idle");
        return;
      }
      trackRfqEvent(
        "rfq_submit",
        activeProductType.label,
        selectedProductDetail,
        locale,
        sourcePage,
      );
      form.reset();
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function handleFormStart() {
    if (hasTrackedStart.current) return;
    hasTrackedStart.current = true;
    trackRfqEvent("rfq_start", activeProductType.label, selectedProductDetail, locale, sourcePage);
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={34} />
        <h3>{copy.rfq.successTitle}</h3>
        <p>{copy.rfq.successCopy}</p>
        <button type="button" className="text-link" onClick={() => setStatus("idle")}>
          {copy.rfq.sendAnother} <ArrowRight size={16} />
        </button>
      </div>
    );
  }

  return (
    <form className="inquiry-form rfq-form" onFocusCapture={handleFormStart} onSubmit={handleSubmit} encType="multipart/form-data" noValidate>
      <input name="product" type="hidden" value={activeProductType.label} readOnly />
      <input name="locale" type="hidden" value={locale} readOnly />
      <input name="sourcePage" type="hidden" value={sourcePage} readOnly />
      <div className="rfq-type-select" aria-label={copy.rfq.productType}>
        <span>{copy.rfq.productType}</span>
        <div className="rfq-type-grid" role="group" aria-label={copy.rfq.productType}>
          {rfqProductTypes.map((type) => (
            <button
              type="button"
              className={type.value === productType ? "active" : ""}
              key={type.value}
              onClick={() => setProductType(type.value)}
            >
              {translateRfqTypeLabel(locale, type.label)}
            </button>
          ))}
        </div>
        <FieldError field="product" error={errors.product} />
      </div>

      <div className="form-grid">
        <label>
          <span>{copy.rfq.name}</span>
          <input name="name" type="text" autoComplete="name" required {...fieldAttributes("name")} />
          <FieldError field="name" error={errors.name} />
        </label>
        <label>
          <span>{copy.rfq.company}</span>
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
          <span>{copy.rfq.email}</span>
          <input name="email" type="email" autoComplete="email" required {...fieldAttributes("email")} />
          <FieldError field="email" error={errors.email} />
        </label>
        <label>
          <span>{copy.rfq.whatsapp}</span>
          <input name="whatsapp" type="tel" autoComplete="tel" {...fieldAttributes("whatsapp")} />
          <FieldError field="whatsapp" error={errors.whatsapp} />
        </label>
        <label>
          <span>{copy.rfq.country}</span>
          <input
            name="country"
            type="text"
            autoComplete="country-name"
            placeholder={copy.rfq.country}
            {...fieldAttributes("country")}
          />
          <FieldError field="country" error={errors.country} />
        </label>
        <label>
          <span>{copy.rfq.destinationCountry}</span>
          <input
            name="destinationCountry"
            type="text"
            autoComplete="country-name"
            placeholder={copy.rfq.destinationCountry}
            {...fieldAttributes("destinationCountry")}
          />
          <FieldError field="destinationCountry" error={errors.destinationCountry} />
        </label>
        <label>
          <span>{copy.rfq.endUse}</span>
          <input
            name="application"
            type="text"
            placeholder={copy.rfq.endUse}
            {...fieldAttributes("application")}
          />
          <FieldError field="application" error={errors.application} />
        </label>
        <label>
          <span>{copy.rfq.quantity}</span>
          <input
            name="quantity"
            type="text"
            placeholder={copy.rfq.quantity}
            {...fieldAttributes("quantity")}
          />
          <FieldError field="quantity" error={errors.quantity} />
        </label>
        <label>
          <span>{copy.rfq.requiredDocuments}</span>
          <input
            name="requiredDocuments"
            type="text"
            placeholder={translateRfqPlaceholder(locale, "TDS / SDS / COA / packing photos")}
            {...fieldAttributes("requiredDocuments")}
          />
          <FieldError field="requiredDocuments" error={errors.requiredDocuments} />
        </label>
        <label>
          <span>{copy.rfq.requiredSpecification}</span>
          <input
            name="requiredSpecification"
            type="text"
            defaultValue={selectedProductDetail}
            placeholder={copy.rfq.requiredSpecification}
            {...fieldAttributes("requiredSpecification")}
          />
          <FieldError field="requiredSpecification" error={errors.requiredSpecification} />
        </label>
      </div>

      <div className="rfq-dynamic-panel">
        <h3>{translateRfqTypeLabel(locale, activeProductType.label)} {copy.rfq.details}</h3>
        <div className="form-grid">
          {activeProductType.fields.map((field) => (
            <label key={field.name}>
              <span>{translateRfqFieldLabel(locale, field.label)}</span>
              <input name={field.name} type="text" placeholder={translateRfqPlaceholder(locale, field.placeholder)} />
            </label>
          ))}
        </div>
      </div>

      <div className="form-grid form-grid-tail">
        <label>
          <span>{copy.rfq.fileUpload}</span>
          <input
            name="attachment"
            type="file"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.dxf,.step,.stp"
            {...fieldAttributes("attachment")}
          />
          <small className="field-help">
            {copy.rfq.fileHelp.replace("{size}", String(MAX_ATTACHMENT_SIZE_MB))}
          </small>
          <FieldError field="attachment" error={errors.attachment} />
        </label>
        <label>
          <span>{copy.rfq.message}</span>
          <textarea
            name="message"
            rows={6}
            required
            defaultValue={initialMessage}
            placeholder={copy.rfq.messagePlaceholder}
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
        <strong>{copy.rfq.endUseReview}</strong>
        <span>{copy.common.complianceNotice}</span>
        <small>{copy.common.brandAvailabilityNotice}</small>
      </div>

      <div className="form-footer">
        <p>{copy.rfq.submitNote}</p>
        <button className="button button-dark" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              {copy.rfq.sending} <LoaderCircle className="spin" size={18} />
            </>
          ) : (
            <>
              {copy.rfq.submit} <ArrowRight size={18} />
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
          {copy.rfq.errorCopy} {siteConfig.email}.
        </p>
      )}
    </form>
  );
}
