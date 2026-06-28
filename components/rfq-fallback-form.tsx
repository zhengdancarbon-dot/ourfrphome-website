import { ArrowRight } from "lucide-react";
import { MAX_ATTACHMENT_SIZE_MB } from "@/lib/inquiry-validation";
import { complianceNotice, rfqProductTypes } from "@/lib/site-taxonomy";
import { siteConfig } from "@/lib/site-config";

export function RfqFallbackForm({
  productName,
  productType = "woven-fabric",
  message,
}: {
  productName?: string;
  productType?: string;
  message?: string;
}) {
  const activeType =
    rfqProductTypes.find((type) => type.value === productType) ?? rfqProductTypes[1];
  const specificationValue = productName && productName !== activeType.label ? productName : "";

  return (
    <form
      className="inquiry-form rfq-form rfq-fallback-form"
      action="/api/inquiry"
      method="post"
      encType="multipart/form-data"
    >
      <input name="product" type="hidden" value={activeType.label} />
      <div className="rfq-fallback-head">
        <strong>Request a Quote</strong>
        <span>Basic RFQ form is visible even before JavaScript loads.</span>
      </div>

      <div className="form-grid">
        <label>
          <span>Name *</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Company *</span>
          <input name="company" type="text" autoComplete="organization" required />
        </label>
        <label>
          <span>Email *</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>WhatsApp / Phone</span>
          <input name="whatsapp" type="tel" autoComplete="tel" />
        </label>
        <label>
          <span>Country</span>
          <input name="country" type="text" autoComplete="country-name" />
        </label>
        <label>
          <span>Destination Country</span>
          <input name="destinationCountry" type="text" autoComplete="country-name" />
        </label>
        <label>
          <span>End Use / Final Application *</span>
          <input name="application" type="text" required />
        </label>
        <label>
          <span>Quantity</span>
          <input name="quantity" type="text" />
        </label>
        <label>
          <span>Required Documents</span>
          <input name="requiredDocuments" type="text" placeholder="TDS / SDS / COA / packing photos" />
        </label>
        <label>
          <span>Target Product / Specification</span>
          <input name="requiredSpecification" type="text" defaultValue={specificationValue} />
        </label>
      </div>

      <div className="rfq-dynamic-panel">
        <h3>{activeType.label} details</h3>
        <div className="form-grid">
          {activeType.fields.map((field) => (
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
          />
          <small className="field-help">
            Drawing, specification or previous TDS. Max {MAX_ATTACHMENT_SIZE_MB} MB.
          </small>
        </label>
        <label>
          <span>Message *</span>
          <textarea
            name="message"
            rows={6}
            required
            defaultValue={message}
            placeholder="Please include material format, process, target application, compliance context and deadline."
          />
        </label>
      </div>

      <div className="rfq-compliance-note">
        <strong>End-use review</strong>
        <span>{complianceNotice}</span>
        <small>For urgent quotation support, email {siteConfig.email} or send WhatsApp {siteConfig.whatsapp}.</small>
      </div>

      <div className="form-footer">
        <p>Submit to the secure inquiry endpoint, or send the same details by email.</p>
        <button className="button button-dark" type="submit">
          Submit RFQ <ArrowRight size={18} />
        </button>
      </div>
    </form>
  );
}
