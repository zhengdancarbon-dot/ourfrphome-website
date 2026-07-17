from dataclasses import dataclass
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import BaseDocTemplate, Frame, NextPageTemplate, PageBreak, PageTemplate, Paragraph, Spacer, Table, TableStyle


OUT_DIR = Path("output/pdf")
PAGE_W, PAGE_H = A4
INK = HexColor("#18212A")
SLATE = HexColor("#52606D")
MUTED = HexColor("#768390")
ORANGE = HexColor("#F27A1A")
PALE = HexColor("#F4F6F7")
PALE_ORANGE = HexColor("#FFF3E9")
GRID = HexColor("#D6DCE1")
WHITE = colors.white

pdfmetrics.registerFont(TTFont("Arial", "/System/Library/Fonts/Supplemental/Arial.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Bold", "/System/Library/Fonts/Supplemental/Arial Bold.ttf"))

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="BodyFRPH", fontName="Arial", fontSize=8.8, leading=12.4, textColor=INK, spaceAfter=5))
styles.add(ParagraphStyle(name="SmallFRPH", fontName="Arial", fontSize=7.2, leading=9.8, textColor=SLATE))
styles.add(ParagraphStyle(name="TitleFRPH", fontName="Arial-Bold", fontSize=19, leading=22, textColor=INK))
styles.add(ParagraphStyle(name="SubFRPH", fontName="Arial", fontSize=11.5, leading=15, textColor=SLATE))
styles.add(ParagraphStyle(name="SectionFRPH", fontName="Arial-Bold", fontSize=10.2, leading=12, textColor=INK))
styles.add(ParagraphStyle(name="CellFRPH", fontName="Arial", fontSize=7.5, leading=9.4, textColor=INK))
styles.add(ParagraphStyle(name="HeadFRPH", fontName="Arial-Bold", fontSize=7.4, leading=9, textColor=WHITE))


@dataclass
class Sheet:
    filename: str
    document_id: str
    title: str
    subtitle: str
    product_code: str
    summary: str
    quick: list[tuple[str, str]]
    tables: list[tuple[str, list[str], list[list[str]]]]
    applications: list[str]
    handling: list[str]
    source_note: str
    issue_date: str = "16 JULY 2026"
    document_label: str = "TECHNICAL / DATA SHEET"


def p(text, style="BodyFRPH"):
    return Paragraph(text, styles[style])


def draw_brand(canvas, x, y, dark=False):
    canvas.saveState()
    canvas.setStrokeColor(ORANGE)
    canvas.setLineWidth(2.1)
    canvas.roundRect(x, y - 7, 19, 15, 3, stroke=1, fill=0)
    canvas.setFont("Arial-Bold", 10)
    canvas.setFillColor(ORANGE)
    canvas.drawCentredString(x + 9.5, y - 2.8, "FH")
    canvas.setFont("Arial-Bold", 10.5)
    canvas.setFillColor(WHITE if dark else INK)
    canvas.drawString(x + 25, y + 1, "FRP HOME")
    canvas.setFont("Arial", 5.8)
    canvas.setFillColor(HexColor("#CBD3D9") if dark else SLATE)
    canvas.drawString(x + 25, y - 6.3, "CARBON & COMPOSITE MATERIALS")
    canvas.restoreState()


def cover(canvas, doc, sheet):
    canvas.saveState()
    canvas.setFillColor(INK)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    canvas.setStrokeColor(HexColor("#25313B"))
    canvas.setLineWidth(0.45)
    for offset in range(-500, 900, 52):
        canvas.line(offset, 0, offset + PAGE_H, PAGE_H)
    canvas.setFillColor(ORANGE)
    canvas.rect(0, 0, 8 * mm, PAGE_H, fill=1, stroke=0)
    draw_brand(canvas, 20 * mm, PAGE_H - 27 * mm, dark=True)
    canvas.setFillColor(WHITE)
    canvas.setFont("Arial-Bold", 28)
    cover_lines = sheet.document_label.split(" / ")
    canvas.drawString(20 * mm, PAGE_H - 76 * mm, cover_lines[0])
    canvas.drawString(20 * mm, PAGE_H - 88 * mm, cover_lines[1] if len(cover_lines) > 1 else "")
    canvas.setFillColor(ORANGE)
    canvas.rect(20 * mm, PAGE_H - 97 * mm, 38 * mm, 2.2 * mm, fill=1, stroke=0)
    title = Paragraph(sheet.title, ParagraphStyle(name="CoverProduct", fontName="Arial-Bold", fontSize=17, leading=20, textColor=WHITE))
    title.wrapOn(canvas, 150 * mm, 45 * mm)
    title.drawOn(canvas, 20 * mm, PAGE_H - 133 * mm)
    canvas.setFont("Arial", 9.5)
    canvas.setFillColor(HexColor("#CED6DC"))
    canvas.drawString(20 * mm, PAGE_H - 141 * mm, sheet.subtitle)

    x, y, w, h = 20 * mm, 48 * mm, PAGE_W - 38 * mm, 52 * mm
    canvas.setFillColor(HexColor("#202B34"))
    canvas.roundRect(x, y, w, h, 4 * mm, fill=1, stroke=0)
    rows = [
        ("SUPPLIER / BRAND", "ZHEJIANG FRPHOME NEW MATERIAL CO., LTD."),
        ("DOCUMENT ID", sheet.document_id),
        ("PRODUCT CODE", sheet.product_code),
        ("ISSUE", f"REVISION 01  |  {sheet.issue_date}"),
    ]
    yy = y + h - 12 * mm
    for label, value in rows:
        canvas.setFont("Arial-Bold", 6.4)
        canvas.setFillColor(ORANGE)
        canvas.drawString(x + 8 * mm, yy, label)
        canvas.setFont("Arial", 8.5)
        canvas.setFillColor(WHITE)
        canvas.drawString(x + 39 * mm, yy, value)
        yy -= 9.5 * mm
    canvas.setFont("Arial", 7)
    canvas.setFillColor(HexColor("#C5CED5"))
    canvas.drawString(20 * mm, 29 * mm, "www.myfrphome.com  |  info@hntzxcl.com  |  0086-18857397371")
    canvas.restoreState()


def header_footer(canvas, doc, sheet):
    canvas.saveState()
    canvas.setFillColor(INK)
    canvas.rect(0, PAGE_H - 18 * mm, PAGE_W, 18 * mm, fill=1, stroke=0)
    draw_brand(canvas, 14 * mm, PAGE_H - 9 * mm, dark=True)
    canvas.setFillColor(WHITE)
    canvas.setFont("Arial-Bold", 7.4)
    canvas.drawRightString(PAGE_W - 14 * mm, PAGE_H - 7.2 * mm, sheet.document_label.replace(" / ", " "))
    canvas.setFont("Arial", 6.7)
    canvas.setFillColor(HexColor("#CBD3D9"))
    canvas.drawRightString(PAGE_W - 14 * mm, PAGE_H - 11.1 * mm, sheet.document_id)
    canvas.setStrokeColor(GRID)
    canvas.line(14 * mm, 14 * mm, PAGE_W - 14 * mm, 14 * mm)
    canvas.setFont("Arial", 6.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(14 * mm, 9.5 * mm, "ZHEJIANG FRPHOME NEW MATERIAL CO., LTD.  |  www.myfrphome.com")
    canvas.drawRightString(PAGE_W - 14 * mm, 9.5 * mm, f"REV 01  |  {sheet.issue_date}  |  PAGE {doc.page}")
    canvas.restoreState()


def section(title):
    table = Table([[p(title.upper(), "SectionFRPH")]], colWidths=[PAGE_W - 28 * mm])
    table.setStyle(TableStyle([
        ("LINEBELOW", (0, 0), (-1, -1), 1.1, ORANGE),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
    ]))
    return table


def data_table(columns, rows):
    data = [[p(cell, "HeadFRPH") for cell in columns]]
    data.extend([[p(cell, "CellFRPH") for cell in row] for row in rows])
    widths = [(PAGE_W - 28 * mm) / len(columns)] * len(columns)
    table = Table(data, colWidths=widths, repeatRows=1)
    commands = [
        ("BACKGROUND", (0, 0), (-1, 0), INK),
        ("GRID", (0, 0), (-1, -1), 0.45, GRID),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 4.2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4.2),
    ]
    for index in range(1, len(data)):
        commands.append(("BACKGROUND", (0, index), (-1, index), WHITE if index % 2 else PALE))
    table.setStyle(TableStyle(commands))
    return table


def quick_strip(items):
    cells = [p(f"<font color='#F27A1A'><b>{label}</b></font><br/><b>{value}</b>") for label, value in items]
    table = Table([cells], colWidths=[(PAGE_W - 28 * mm) / len(cells)] * len(cells), rowHeights=[18 * mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PALE_ORANGE),
        ("GRID", (0, 0), (-1, -1), 0.6, HexColor("#F4C8A6")),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
    ]))
    return table


def build(sheet):
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    path = OUT_DIR / sheet.filename
    body = Frame(14 * mm, 18 * mm, PAGE_W - 28 * mm, PAGE_H - 41 * mm, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
    blank = Frame(0, 0, PAGE_W, PAGE_H, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
    doc = BaseDocTemplate(str(path), pagesize=A4, leftMargin=14 * mm, rightMargin=14 * mm, topMargin=23 * mm, bottomMargin=18 * mm, title=sheet.title, author="Zhejiang FRPHome New Material Co., Ltd.")
    doc.addPageTemplates([
        PageTemplate(id="cover", frames=[blank], onPage=lambda c, d: cover(c, d, sheet)),
        PageTemplate(id="body", frames=[body], onPage=lambda c, d: header_footer(c, d, sheet)),
    ])
    story = [NextPageTemplate("body"), PageBreak(), Spacer(1, 2 * mm), p(sheet.title, "TitleFRPH"), p(sheet.subtitle, "SubFRPH"), Spacer(1, 3 * mm), p(sheet.summary), quick_strip(sheet.quick)]
    for title, columns, rows in sheet.tables:
        story.extend([Spacer(1, 4 * mm), section(title), Spacer(1, 2 * mm), data_table(columns, rows)])
    story.extend([Spacer(1, 4 * mm), section("Typical applications"), Spacer(1, 2 * mm), p(" • ".join(sheet.applications))])
    story.extend([Spacer(1, 3 * mm), section("Handling and quotation notes"), Spacer(1, 2 * mm), p("<br/>".join(f"• {item}" for item in sheet.handling))])
    story.extend([Spacer(1, 3 * mm), p(f"<b>Data basis:</b> {sheet.source_note}", "SmallFRPH"), Spacer(1, 2 * mm), p("The values in this sheet are typical or nominal reference values, not a batch certificate or finished-laminate design allowables. Final specification, tolerances, test methods, resin compatibility, compliance review and COA requirements must be confirmed in the quotation and order documents.", "SmallFRPH")])
    doc.build(story)
    print(path.resolve())


sheets = [
    Sheet(
        filename="FRP-HOME-3K-200gsm-Twill-Carbon-Fiber-Fabric-TDS.pdf",
        document_id="FRPH-TDS-WCF3K200-EN-R01",
        title="3K 200gsm Twill Carbon Fiber Fabric",
        subtitle="Bidirectional woven carbon reinforcement",
        product_code="FRPH-WCF-3K200-T",
        summary="A balanced 3K woven carbon fiber fabric for visible laminate surfaces and structural composite layups. The 200 g/m2 construction offers a practical combination of drape, handling and resin wet-out for common molding processes.",
        quick=[("FIBER", "3K carbon"), ("WEIGHT", "200 g/m2"), ("WEAVE", "Twill"), ("ROLL", "100 m nominal")],
        tables=[("Nominal product data", ["Property", "Nominal value", "Quotation note"], [
            ["Product style", "TCT-3K-200 source reference", "FRP HOME code shown above"],
            ["Fiber type", "3K carbon fiber", "Confirm grade and sizing"],
            ["Areal weight", "200 g/m2", "Confirm tolerance by order"],
            ["Nominal thickness", "0.20 mm", "Dry-fabric reference"],
            ["Weave pattern", "Twill", "Surface appearance by sample"],
            ["Fiber count", "5 x 5 per 10 mm", "Warp x weft nominal"],
            ["Available width", "1000-1500 mm", "Confirm selected width"],
            ["Nominal roll length", "100 m", "Packing by order"],
        ])],
        applications=["Vacuum infusion", "Wet layup", "Compression molding", "Automotive composite panels", "Sporting goods", "Industrial composite covers"],
        handling=["Keep rolls dry, covered and protected from crushing.", "Approve surface appearance with a sample when the fabric will remain visible.", "Confirm fiber grade, sizing, width, roll length and resin process before ordering."],
        source_note="Prepared from the local 3K 200gsm twill fabric product record supplied for website documentation. Unsupported temperature and end-use claims from the legacy sheet were not carried forward.",
    ),
    Sheet(
        filename="FRP-HOME-300gsm-UD-Carbon-Fiber-Fabric-TDS.pdf",
        document_id="FRPH-TDS-UD300-EN-R01",
        title="300gsm UD Carbon Fiber Fabric",
        subtitle="Unidirectional reinforcement for directional loading",
        product_code="FRPH-UD300",
        summary="A 300 g/m2 unidirectional carbon reinforcement designed to place most of the fiber in the primary load direction. Width options support structural strengthening, pultrusion feed, directional laminate buildup and composite repair.",
        quick=[("DIRECTION", "0 degree UD"), ("WEIGHT", "300 g/m2"), ("THICKNESS", "0.167 mm nominal"), ("WIDTH", "100-500 mm")],
        tables=[("Nominal product data", ["Property", "Nominal value", "Quotation note"], [
            ["Construction", "Unidirectional carbon fiber fabric", "Secondary yarn and backing by order"],
            ["Areal weight", "300 g/m2", "Confirm tolerance by order"],
            ["Nominal thickness", "0.167 mm", "Dry-fabric reference"],
            ["Available width", "100-500 mm", "Slit width by project review"],
            ["Fiber grade", "By confirmed order", "T300 / T700 or alternate grade by review"],
            ["Mechanical properties", "System-dependent", "Confirm fiber, resin, cure and test method"],
        ])],
        applications=["CFRP structural strengthening", "Directional laminate reinforcement", "Pultruded strips and profiles", "Composite repair", "Beam and spar reinforcement"],
        handling=["Store flat or on a supported roll in a dry, clean area.", "Do not use fabric-only data as cured-laminate design allowables.", "State substrate, resin system, design direction, width and required documents in the RFQ."],
        source_note="Prepared from the local 300 g/m2 unidirectional fabric record. Legacy mechanical values were excluded from the published table because the resin system and test methods were not identified.",
    ),
    Sheet(
        filename="FRP-HOME-300-Mesh-Milled-Carbon-Fiber-Powder-TDS.pdf",
        document_id="FRPH-TDS-MCFP300-EN-R01",
        title="300 Mesh Milled Carbon Fiber Powder",
        subtitle="PAN-based carbon fiber powder for compounding",
        product_code="FRPH-MCFP-300",
        summary="Fine PAN-based milled carbon fiber powder for conductive fillers, resin reinforcement, coatings and composite compounding. Dispersion, loading level and performance must be validated in the customer's selected resin and process.",
        quick=[("SIZE", "300 mesh"), ("CARBON", ">=95%"), ("COLOR", "Black"), ("FORM", "Fine powder")],
        tables=[("Typical physical data", ["Property", "Typical value", "Status"], [
            ["Base material", "PAN-based carbon fiber", "Product family"],
            ["Particle size", "300 mesh", "Nominal grade"],
            ["Carbon content", ">=95%", "Typical source value"],
            ["Density", "1.75-1.80 g/cm3", "Typical source range"],
            ["Bulk density", "0.25-0.45 g/cm3", "Typical source range"],
            ["Moisture content", "<=0.5%", "Typical source limit"],
            ["Appearance", "Black fine powder", "Visual"],
            ["Packaging", "Sealed plastic bag; drum or carton", "Confirm net weight"],
        ])],
        applications=["Conductive polymer compounds", "Thermoset and thermoplastic reinforcement", "Coatings", "Friction materials", "Composite fillers"],
        handling=["Avoid dust generation and use suitable industrial hygiene controls.", "Store sealed in a cool, dry and ventilated area.", "Request the applicable SDS and validate dispersion, loading and electrical performance in the final formulation."],
        source_note="Prepared from the local PAN-based 300 mesh carbon fiber powder TDS record. Values are batch-variable reference data and require final order confirmation.",
    ),
    Sheet(
        filename="FRP-HOME-600gsm-PlusMinus45-Biaxial-Carbon-NCF-TDS.pdf",
        document_id="FRPH-TDS-CBX600-45-EN-R01",
        title="600gsm +45/-45 Biaxial Carbon NCF",
        subtitle="Balanced non-crimp reinforcement for shear and torsional loading",
        product_code="FRPH-CBX600-45",
        summary="A heavy, balanced +45/-45 stitched carbon non-crimp fabric with two 300 g/m2 carbon layers. The straight-fiber architecture is intended for efficient shear and torsional reinforcement in vacuum infusion, RTM and other dry-fabric composite processes.",
        quick=[("ARCHITECTURE", "+45 / -45"), ("CARBON WEIGHT", "600 g/m2"), ("WIDTH", "1270 mm"), ("ROLL", "50 m")],
        tables=[
            ("Nominal product data", ["Property", "Nominal / typical value", "Quotation status"], [
                ["Construction", "Balanced biaxial carbon NCF, +45 / -45", "Nominal"],
                ["Carbon fiber areal weight", "600 g/m2", "Nominal; tolerance by order"],
                ["Total dry fabric weight", "Approx. 608-612 g/m2 including stitch yarn", "Typical guidance"],
                ["Layer distribution", "+45: 300 g/m2; -45: 300 g/m2", "Nominal"],
                ["Carbon fiber", "12K preferred; 24K by agreement", "Confirm grade and sizing"],
                ["Stitch yarn", "PES 75D (approx. 83 dtex) or equivalent", "Typical; equivalent by review"],
                ["Stitch gauge / length", "E5; approx. 3.2 mm stitch length", "Typical; customizable"],
                ["Nominal width", "1270 mm", "Tolerance by order"],
                ["Nominal roll length", "50 m", "Confirm usable length and splice policy"],
                ["Indicative dry thickness", "Approx. 0.55-0.85 mm", "Method and pressure dependent"],
                ["Typical moisture control target", "<=0.30% by mass", "Confirm COA requirement"],
            ]),
            ("Theoretical roll quantities", ["Quantity", "Planning value", "Basis"], [
                ["Theoretical area", "63.5 m2", "1.27 m x 50 m"],
                ["Carbon fiber net mass", "38.10 kg", "63.5 m2 x 600 g/m2"],
                ["Dry fabric mass including stitch", "Approx. 38.6-38.9 kg", "Excludes core and packaging"],
            ]),
        ],
        applications=["Shear webs and torsion shells", "Marine and automotive composite structures", "Large infused panels", "Industrial composite tooling", "Sporting goods and structural repair laminates"],
        handling=["Keep rolls sealed, dry, clean and protected from crushing, telescoping and edge damage.", "Control +45/-45 shear distortion during cutting and lay-up; validate permeability and fill time with the selected resin stack.", "Confirm fiber grade, sizing, width tolerance, roll length, splice policy, packaging, COA items and end use before order release.", "Dry-fabric data are not cured-laminate mechanical design allowables; validate the resin, cure, fiber volume and laminate design for the final part."],
        source_note="Prepared from the customer-provided 600 g/m2 +45/-45 biaxial carbon NCF technical record dated 17 July 2026. Source-company branding was removed; nominal and typical construction data were retained with FRP HOME order-confirmation language. This sheet is not a batch certificate or independent test report.",
        issue_date="17 JULY 2026",
    ),
    Sheet(
        filename="FRP-HOME-High-Strength-12K-Carbon-Fiber-Tow-Supply-TDS.pdf",
        document_id="FRPH-TDS-CF12K55-EN-R01",
        title="High Strength 12K Carbon Fiber Tow",
        subtitle="Supplier-grade reference for continuous carbon fiber",
        product_code="FRPH-CF12K55 / source grade ZDCF 55T-12K",
        summary="A high-strength 12K continuous carbon fiber tow offered subject to source-grade and batch availability. The data below are supplier-origin reference values and do not imply FRP HOME manufacture or official brand authorization.",
        quick=[("TOW", "12K"), ("STRENGTH", "5500 MPa typical"), ("MODULUS", "240 GPa typical"), ("SIZING", "Epoxy")],
        tables=[("Supplier-origin reference data", ["Property", "Typical value", "Reference method"], [
            ["Tensile strength", "5500 MPa", "GB/T 3362-2017"],
            ["Elastic modulus", "240 GPa", "GB/T 3362-2017"],
            ["Elongation at break", "2.2%", "GB/T 3362-2017"],
            ["Density", "1.80 g/cm3", "GB/T 30019-2013"],
            ["Linear density", "800 g/km", "GB/T 3362-2017"],
            ["Sizing type", "Epoxy", "Supplier declaration"],
            ["Twist", "Untwisted", "Supplier declaration"],
            ["Nominal bobbin net weight", "4 kg", "Standard source package"],
        ])],
        applications=["Woven carbon fabric", "Prepreg conversion", "Pultrusion", "Pressure vessels", "Automotive composites", "Industrial composite reinforcement"],
        handling=["Store dry, cool and ventilated, away from heat and moisture.", "Confirm source brand, grade, sizing, bobbin format, package and COA before purchase.", "Customer qualification is required for the intended process and end use."],
        source_note="Prepared from the local ZDCF 55T-12K supplier TDS. Source grade and test values remain identified; availability and authorization are not implied and must be confirmed separately.",
    ),
    Sheet(
        filename="FRP-HOME-WP-L5100-Carbon-Fiber-Prepreg-TDS.pdf",
        document_id="FRPH-TDS-PREPL5100-EN-R01",
        title="Carbon Fiber Prepreg - WP-L5100 System",
        subtitle="UD and woven carbon prepreg supply reference",
        product_code="FRPH-PREP-L5100",
        summary="Carbon fiber reinforcement pre-impregnated with a controlled WP-L5100 epoxy resin system. Available constructions require confirmation of reinforcement, dry fiber weight, resin content, width, cure process and storage conditions before quotation.",
        quick=[("RESIN", "WP-L5100 epoxy"), ("FORM", "UD / woven"), ("WIDTH", "1000 mm reference"), ("STORAGE", "-18 C reference")],
        tables=[
            ("Representative prepreg range", ["Construction", "Dry fiber weight", "Resin content", "Approx. total weight"], [
                ["UD carbon", "30-250 g/m2", "33-55% by grade", "67-373 g/m2"],
                ["3K plain / twill", "200 g/m2", "40%", "333 g/m2"],
                ["6K plain / twill / satin", "320-400 g/m2", "40%", "533-667 g/m2"],
                ["12K plain / twill", "400-480 g/m2", "40%", "667-800 g/m2"],
            ]),
            ("Resin and process reference", ["Item", "Condition", "Reference value"], [
                ["Viscosity", "70 C", "17,500-23,500 mPa.s"],
                ["Viscosity", "80 C", "6,500-8,500 mPa.s"],
                ["Gel time", "120 C", "340 s"],
                ["Glass transition temperature", "Cured reference", ">120 C; cure-dependent"],
                ["Fast cure reference", "150 C", "10 min"],
                ["Unopened room-temperature life", "25 C", "Approx. 3 weeks"],
                ["Long-term frozen storage", "-18 C", "Approx. 4 months"],
            ]),
        ],
        applications=["Compression molding", "Autoclave molding", "Sporting goods", "Bicycle components", "Marine components", "Industrial composite parts"],
        handling=["Keep sealed during thawing and open only after reaching room temperature to reduce condensation risk.", "Control cumulative room-temperature exposure and use FIFO management.", "Actual cure cycle, pressure, vacuum, demolding and post-cure must be validated for the part and tooling.", "Request the applicable resin SDS before production use."],
        source_note="Prepared from the local WP-L5100 carbon fiber prepreg technical record dated 2026-06-09. Cure, storage and property values remain reference data and require batch and process confirmation.",
    ),
    Sheet(
        filename="FRP-HOME-3K-Carbon-Fiber-Laminate-Sheet-RFQ-Specification-Guide.pdf",
        document_id="FRPH-SPEC-3K-LAM-EN-R01",
        title="3K Carbon Fiber Laminate Sheet",
        subtitle="Product specification and RFQ guide",
        product_code="FRPH-3K-LAM / ORDER CONFIRMATION REQUIRED",
        summary="A sourcing and quotation guide for cured CFRP laminate sheets with a visible 3K twill surface. This document defines the information required for product review; it is not a batch TDS, test report or structural design certificate.",
        quick=[("SURFACE", "3K twill by order"), ("FINISH", "Matte / glossy"), ("LAYUP", "Project-defined"), ("PROCESS", "Sheet / CNC part")],
        tables=[
            ("Product definition", ["Item", "Available review scope", "Order control"], [
                ["Product format", "Cured CFRP laminate sheet", "Confirm panel or machined part"],
                ["Visible surface", "3K twill carbon fabric", "One or two faces by approved sample"],
                ["Surface finish", "Matte / glossy / sanded / peel-ply", "Confirm face and appearance target"],
                ["Thickness", "Customer-specified", "Final value and tolerance by quotation"],
                ["Panel dimensions", "Customer-specified", "Confirm usable size and edge allowance"],
                ["Inner reinforcement", "Woven / UD / mixed layup by review", "Engineering and process confirmation required"],
                ["CNC processing", "Cutting / drilling / slots / edge finish", "DXF, STEP or dimensioned drawing required"],
                ["Surface protection", "Film or interleaf by order", "Confirm packing and appearance faces"],
            ]),
            ("RFQ checklist", ["Required input", "Buyer information", "Why it is needed"], [
                ["Geometry", "Panel dimensions or CAD drawing", "Material and nesting review"],
                ["Thickness and tolerance", "Nominal value and critical tolerances", "Manufacturing and inspection plan"],
                ["Surface requirement", "3K twill face, matte or glossy", "Appearance and protection plan"],
                ["Machining details", "Holes, slots, countersinks and edges", "CNC process review"],
                ["Commercial context", "Quantity, destination and final application", "Quotation, packing and compliance review"],
            ]),
        ],
        applications=["Industrial panels", "CNC brackets and fixtures", "Equipment covers", "Automotive appearance parts", "Sports and lightweight components"],
        handling=["Use an approved physical sample when gloss, texture or weave alignment is appearance-critical.", "Do not substitute this laminate sheet for pultruded CFRP strengthening plate without qualified engineering review.", "Confirm thickness, tolerance, layup, surface, CNC drawing, quantity, packing, destination and final application before order release."],
        source_note="Prepared from the current FRP HOME 3K laminate product scope and RFQ workflow. The available local 1.2 mm source file describes a pultruded structural-strengthening plate and was deliberately not relabeled as a 3K laminate-sheet TDS.",
        issue_date="17 JULY 2026",
        document_label="PRODUCT SPECIFICATION / & RFQ GUIDE",
    ),
]

for sheet in sheets:
    build(sheet)
