import { ArrowRight } from "lucide-react";
import { MAX_ATTACHMENT_SIZE_MB } from "@/lib/inquiry-validation";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { getUiCopy, translateRfqFieldLabel, translateRfqPlaceholder, translateRfqTypeLabel } from "@/lib/i18n/ui-copy";
import { rfqProductTypes } from "@/lib/site-taxonomy";
import { siteConfig } from "@/lib/site-config";

export function RfqFallbackForm({
  productName,
  productType = "woven-fabric",
  message,
  locale = defaultLocale,
  sourcePage,
}: {
  productName?: string;
  productType?: string;
  message?: string;
  locale?: Locale;
  sourcePage?: string;
}) {
  const activeType =
    rfqProductTypes.find((type) => type.value === productType) ?? rfqProductTypes[1];
  const copy = getUiCopy(locale);
  const specificationValue = productName && productName !== activeType.label ? productName : "";
  const fallbackSourcePage = sourcePage ?? (locale === defaultLocale ? "/contact" : `/${locale}/contact`);

  return (
    <form
      className="inquiry-form rfq-form rfq-fallback-form"
      action="/api/inquiry"
      method="post"
      encType="multipart/form-data"
    >
      <input name="product" type="hidden" value={activeType.label} />
      <input name="locale" type="hidden" value={locale} />
      <input name="sourcePage" type="hidden" value={fallbackSourcePage} />
      <div className="rfq-fallback-head">
        <strong>{copy.rfq.requestQuote}</strong>
        <span>{copy.rfq.fallbackIntro}</span>
      </div>

      <div className="form-grid">
        <label>
          <span>{copy.rfq.name}</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>{copy.rfq.company}</span>
          <input name="company" type="text" autoComplete="organization" required />
        </label>
        <label>
          <span>{copy.rfq.email}</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>{copy.rfq.whatsapp}</span>
          <input name="whatsapp" type="tel" autoComplete="tel" />
        </label>
        <label>
          <span>{copy.rfq.country}</span>
          <input name="country" type="text" autoComplete="country-name" />
        </label>
        <label>
          <span>{copy.rfq.destinationCountry}</span>
          <input name="destinationCountry" type="text" autoComplete="country-name" />
        </label>
        <label>
          <span>{copy.rfq.endUse}</span>
          <input name="application" type="text" required />
        </label>
        <label>
          <span>{copy.rfq.quantity}</span>
          <input name="quantity" type="text" />
        </label>
        <label>
          <span>{copy.rfq.requiredDocuments}</span>
          <input
            name="requiredDocuments"
            type="text"
            placeholder={translateRfqPlaceholder(locale, "TDS / SDS / COA / packing photos")}
          />
        </label>
        <label>
          <span>{copy.rfq.requiredSpecification}</span>
          <input name="requiredSpecification" type="text" defaultValue={specificationValue} />
        </label>
      </div>

      <div className="rfq-dynamic-panel">
        <h3>{translateRfqTypeLabel(locale, activeType.label)} {copy.rfq.details}</h3>
        <div className="form-grid">
          {activeType.fields.map((field) => (
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
          />
          <small className="field-help">
            {copy.rfq.fileHelp.replace("{size}", String(MAX_ATTACHMENT_SIZE_MB))}
          </small>
        </label>
        <label>
          <span>{copy.rfq.message}</span>
          <textarea
            name="message"
            rows={6}
            required
            defaultValue={message}
            placeholder={copy.rfq.messagePlaceholder}
          />
        </label>
      </div>

      <div className="rfq-compliance-note">
        <strong>{copy.rfq.endUseReview}</strong>
        <span>{copy.common.complianceNotice}</span>
        <small>
          {copy.rfq.urgentSupport
            .replace("{email}", siteConfig.email)
            .replace("{whatsapp}", siteConfig.whatsapp)}
        </small>
      </div>

      <div className="form-footer">
        <p>{copy.rfq.submitNote}</p>
        <button className="button button-dark" type="submit">
          {copy.rfq.submit} <ArrowRight size={18} />
        </button>
      </div>
    </form>
  );
}
