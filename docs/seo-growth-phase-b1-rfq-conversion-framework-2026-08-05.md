# Phase B-1 Product RFQ Conversion Framework

Status: framework only. The existing form, `/api/inquiry` route, visual design and public form behavior remain unchanged until a separate implementation approval.

## Conversion objective

Ask for the smallest set of technical inputs that lets sales qualify an industrial-material enquiry without forcing the buyer through a project-design workflow. The form must send locale and source URL, retain the existing email delivery/retry behavior, and show a single user-facing success result.

## Shared product RFQ fields

| Field | Purpose | Entry rule |
|---|---|---|
| Material | Identify the product family | Prefill from the source product page; buyer may correct it |
| Weight / thickness | Capture areal weight for fabrics or thickness for sheets/plates | Required when relevant; otherwise show `not specified` |
| Width / dimensions | Make material, panel or plate size quotable | Let product pages label the unit correctly |
| Roll length / part length | Capture roll or cut-length requirement | Optional where a panel/drawing is selected |
| Orientation / weave | Distinguish UD direction, NCF architecture or woven pattern | Preserve technical notation exactly |
| Application | Establish a legitimate material-use context | Never use this field to promise engineering suitability |
| Quantity | Support pricing and packing review | Request amount and unit |
| Delivery country | Supports logistics, document and end-use review | Keep telephone/email direction natural in RTL contexts |

## Product field mapping

| Product | Product-specific questions | Form boundary |
|---|---|---|
| Woven Fabric | tow/areal weight, weave, width, roll, resin process | 3K 200gsm twill can be a documented preset; other constructions remain order review |
| Multiaxial NCF | orientation, total/per-layer gsm, width, roll, stitch/binder, resin process | No automatic structural/process recommendation |
| UD Fabric | gsm, fibre direction, width, roll, resin/adhesive system to be reviewed | Do not calculate resin consumption or provide installation instructions |
| 3K Laminate Sheet | finish, thickness, panel size, drawing, layup request, CNC/edge work, packing | All physical specifications require drawing/order review |
| Yarn & Tow | tow size, source/grade preference, sizing/process, linear density request, bobbin details | Only 12K has a public supply reference; others are enquiry scope |
| Structural Strengthening | fabric/plate route, gsm/thickness, dimensions, bonding surface, system to be reviewed | Project design, adhesive selection and installation require qualified review |

## Implementation constraints for a later approved change

- Reuse the existing `InquiryForm` and the same `/api/inquiry` endpoint. Add product context as a controlled field rather than creating separate public forms.
- Preserve client/server validation, file upload handling, locale and source URL fields, email retry behavior and response shape.
- Use `fieldset`/`legend` for grouped product questions, descriptive labels and `aria-describedby` for evidence-boundary guidance.
- Keep product-specific questions hidden until the source product/context is known. Do not make non-applicable fields required.
- In analytics, emit only normalized metadata: `event_name`, `locale`, `product_slug`, `source_page`, `utm_campaign`, document title and link URL. Never send a name, email, phone, drawing/file name, free-text application or specification into GA4.

## Event and attribution standard

| Event | Required safe parameters | Success condition |
|---|---|---|
| `rfq_view` | locale, product_slug, source_page | Product RFQ panel becomes visible |
| `rfq_start` | locale, product_slug, source_page | Buyer interacts with the form |
| `rfq_submit` | locale, product_slug, source_page, utm_campaign | Server accepted the RFQ; never fire on validation error |
| `tds_download` | locale, product_slug, document_title, link_url | TDS/SPEC link selected |
| `catalog_download` | locale, source_page, link_url | Catalog link selected |
| `email_click` / `whatsapp_click` | locale, source_page, product_slug when known | Click selected |

## QA before any RFQ implementation

1. Test desktop and 390px mobile from EN, RU, TR, AR and PT-BR product pages; Arabic needs RTL focus order and readable technical notation.
2. Confirm both JavaScript and the server-rendered fallback route to Contact/RFQ without a dead end.
3. Submit one spacing-separated test per locale to avoid mail-provider rate limits; verify email includes locale, source URL and product context.
4. Confirm invalid input does not fire `rfq_submit`, successful input fires it once, and no PII reaches analytics.
5. Re-run lint, build, SEO/locale/schema audits and Preview smoke tests; never send an unapproved page change to production.
