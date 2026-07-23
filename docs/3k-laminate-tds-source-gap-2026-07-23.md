# 3K Carbon Fiber Laminate Sheet TDS Source-Gap Audit

Date: 2026-07-23

Product route: `/products/3k-carbon-fiber-laminate-sheet`

Status: no formal 3K laminate-sheet TDS can be published from the current source library

## Decision

Keep the current downloadable document classified as `SPEC`:

- `FRP-HOME-3K-Carbon-Fiber-Laminate-Sheet-RFQ-Specification-Guide.pdf`

Do not rename the guide, a pultruded-plate TDS, or a strengthening-plate test report as a 3K laminate-sheet TDS. The current website copy correctly treats thickness, tolerance, inner layup, finish, panel size and CNC geometry as order-confirmation items.

## Sources Inspected

| Source | Evidence found | Classification | 3K laminate TDS use |
| --- | --- | --- | --- |
| `ZCP1.2 carbon fiber laminate .pdf` and related 1.2 mm files | Pultruded CFRP laminate for externally bonded structural strengthening | Strengthening plate | Not applicable |
| `正旦1.2mm 碳板.pdf` | 1.2 mm strengthening plate with civil-engineering properties | Strengthening plate | Not applicable |
| `检测报告/1.4mm carbon fiber plate.pdf` | Report `WT2025B03C00235E`; 1.4 mm strip plate tested against `GB 50728-2011` strengthening-material requirements | Strengthening plate test report | Not applicable |
| `ZCP1.4 carbon fiber laminate.pdf` and high-strength variant | Pultruded external reinforcement for concrete, timber and masonry | Strengthening plate | Not applicable |
| `ZCP3.0 carbon fiber laminate.pdf` | Pultruded structural-strengthening laminate | Strengthening plate | Not applicable |
| `ZCP5.0 carbon fiber laminate 45.pdf` and related files | Pultruded structural-strengthening laminate | Strengthening plate | Not applicable |
| `国兴5mm生产检验报告.docx` | 35K pultruded plate production inspection record | Industrial pultruded plate | Not applicable |
| `2023CarbonZD.pdf` | General brochure; carbon-board section describes structural-strengthening plate and includes legacy claims | Marketing reference only | Not a product-data source |
| `PRODUCT LIST .pdf` | Lists carbon fabrics and related textile products; no documented 3K laminate-sheet grade | Product list | No supporting data |
| `网站/正旦网站.PDF` | Website-development contract | Administrative document | No technical data |
| Current FRP HOME RFQ guide | Visible 3K twill face and order-review workflow; explicitly excludes unverified values | Buyer specification guide | Valid as `SPEC`, not TDS |

The 1.4 mm report values apply only to the submitted strengthening-plate sample. Its notice also states that results refer only to the samples tested. They must not be transferred to a different laminate construction.

## Evidence Required Before A Formal TDS

A source-backed 3K laminate-sheet TDS requires a matching product record containing at least:

1. Producer or authorized supplier and product code.
2. Confirmation that the product is a cured laminate sheet with a visible 3K woven surface, including whether the surface is on one or two faces.
3. Nominal thickness and tolerance for the documented grade.
4. Standard panel dimensions and dimensional tolerances.
5. Inner reinforcement or layup description sufficient to identify the tested product.
6. Resin system and curing or sheet-production process.
7. Surface finish and inspection basis.
8. Test properties only when tied to the same construction, with test methods, units, specimen scope and report or revision date.
9. CNC or flatness tolerances only when supported by an approved production specification.
10. Packaging, storage and handling instructions for the documented product.
11. Permission to republish or reformat supplier data under the FRP HOME document header.

## Publication Boundary

- Product photographs may show 3K twill appearance but do not prove thickness, layup or mechanical properties.
- A customer drawing or quotation can control an order but does not become a general TDS.
- A strengthening-plate test report must stay with the strengthening-system product route.
- No unverified tensile strength, modulus, density, fiber volume, tolerance or service-temperature value may be added to the 3K laminate page.
- Legacy approval, certification, annual-capacity and customer-use statements are excluded unless separate current evidence is supplied and approved for publication.

## Current Safe Assets

- Commercial page: `/products/3k-carbon-fiber-laminate-sheet`
- Download: `/downloads/specifications/FRP-HOME-3K-Carbon-Fiber-Laminate-Sheet-RFQ-Specification-Guide.pdf`
- Buyer articles:
  - `/technical-center/carbon-fiber-plate-thickness-selection-guide`
  - `/technical-center/3k-carbon-fiber-plate-cnc-rfq-guide`
  - `/technical-center/matte-vs-glossy-3k-carbon-fiber-sheet`
- Separate strengthening evidence:
  - `/downloads/tds/FRP-HOME-1.2mm-Pultruded-CFRP-Strengthening-Plate-TDS.pdf`

## Next Action

Request the matching 3K laminate production sheet or test record using the evidence list above. Until it is received, continue conversion work through the specification guide, drawing review, approved sample and RFQ rather than presenting a formal TDS.
