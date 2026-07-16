from reportlab.lib import colors
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    NextPageTemplate,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)
from reportlab.pdfgen.canvas import Canvas
from reportlab.lib.utils import ImageReader
from math import cos, sin, pi
import os


OUT = os.path.abspath("output/pdf/FRP-HOME-300gsm-Biaxial-Carbon-Fabric-TDS.pdf")
PAGE_W, PAGE_H = A4

INK = HexColor("#18212A")
SLATE = HexColor("#52606D")
MUTED = HexColor("#768390")
ORANGE = HexColor("#F27A1A")
ORANGE_DARK = HexColor("#C9580B")
PALE_ORANGE = HexColor("#FFF3E9")
PALE = HexColor("#F4F6F7")
GRID = HexColor("#D6DCE1")
WHITE = colors.white

pdfmetrics.registerFont(TTFont("Arial", "/System/Library/Fonts/Supplemental/Arial.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Bold", "/System/Library/Fonts/Supplemental/Arial Bold.ttf"))
pdfmetrics.registerFont(TTFont("ArialUnicode", "/System/Library/Fonts/Supplemental/Arial Unicode.ttf"))


def P(text, style):
    return Paragraph(text, style)


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name="BodyZD", fontName="Arial", fontSize=8.6, leading=12.2,
    textColor=INK, spaceAfter=4,
))
styles.add(ParagraphStyle(
    name="SmallZD", fontName="Arial", fontSize=7.25, leading=9.6,
    textColor=SLATE,
))
styles.add(ParagraphStyle(
    name="TinyZD", fontName="Arial", fontSize=6.6, leading=8.4,
    textColor=MUTED,
))
styles.add(ParagraphStyle(
    name="SectionZD", fontName="Arial-Bold", fontSize=10.2, leading=12,
    textColor=INK, spaceBefore=6, spaceAfter=5,
))
styles.add(ParagraphStyle(
    name="TableZD", fontName="Arial", fontSize=7.4, leading=9.2,
    textColor=INK,
))
styles.add(ParagraphStyle(
    name="TableBoldZD", fontName="Arial-Bold", fontSize=7.4, leading=9.2,
    textColor=INK,
))
styles.add(ParagraphStyle(
    name="TableHeadZD", fontName="Arial-Bold", fontSize=7.3, leading=8.8,
    textColor=WHITE, alignment=TA_LEFT,
))
styles.add(ParagraphStyle(
    name="CoverTitleZD", fontName="Arial-Bold", fontSize=25, leading=27,
    textColor=INK,
))
styles.add(ParagraphStyle(
    name="CoverSubZD", fontName="Arial", fontSize=12.2, leading=16,
    textColor=SLATE,
))
styles.add(ParagraphStyle(
    name="VariantTitleZD", fontName="Arial-Bold", fontSize=19, leading=22,
    textColor=INK,
))
styles.add(ParagraphStyle(
    name="ChineseZD", fontName="ArialUnicode", fontSize=8.2, leading=10,
    textColor=SLATE,
))


def draw_brand(canvas: Canvas, x, y, scale=1.0, dark=False):
    canvas.saveState()
    color = WHITE if dark else INK
    canvas.setStrokeColor(ORANGE)
    canvas.setLineWidth(2.6 * scale)
    canvas.roundRect(x, y - 9 * scale, 23 * scale, 18 * scale, 4 * scale, stroke=1, fill=0)
    canvas.setFont("Arial-Bold", 12 * scale)
    canvas.setFillColor(ORANGE)
    canvas.drawCentredString(x + 11.5 * scale, y - 3.2 * scale, "FH")
    canvas.setFillColor(color)
    canvas.setFont("Arial-Bold", 11.5 * scale)
    canvas.drawString(x + 30 * scale, y + 1.2 * scale, "FRP HOME")
    canvas.setFont("Arial", 6.5 * scale)
    canvas.setFillColor(WHITE if dark else SLATE)
    canvas.drawString(x + 30 * scale, y - 7.3 * scale, "CARBON & COMPOSITE MATERIALS")
    canvas.restoreState()


def draw_header_footer(canvas: Canvas, doc):
    canvas.saveState()
    canvas.setFillColor(INK)
    canvas.rect(0, PAGE_H - 18 * mm, PAGE_W, 18 * mm, fill=1, stroke=0)
    draw_brand(canvas, 14 * mm, PAGE_H - 9 * mm, scale=0.78, dark=True)
    canvas.setFillColor(WHITE)
    canvas.setFont("Arial-Bold", 7.4)
    canvas.drawRightString(PAGE_W - 14 * mm, PAGE_H - 7.2 * mm, "TECHNICAL DATA SHEET")
    canvas.setFont("Arial", 6.7)
    canvas.setFillColor(HexColor("#CBD3D9"))
    canvas.drawRightString(PAGE_W - 14 * mm, PAGE_H - 11.1 * mm, "FRPH-TDS-CBX300-EN-R01")

    canvas.setStrokeColor(GRID)
    canvas.setLineWidth(0.5)
    canvas.line(14 * mm, 14 * mm, PAGE_W - 14 * mm, 14 * mm)
    canvas.setFont("Arial", 6.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(14 * mm, 9.5 * mm, "ZHEJIANG FRPHOME NEW MATERIAL CO., LTD.  |  www.myfrphome.com")
    canvas.drawRightString(PAGE_W - 14 * mm, 9.5 * mm, f"REV 01  |  16 JUL 2026  |  PAGE {doc.page}")
    canvas.restoreState()


def draw_cover(canvas: Canvas, doc):
    canvas.saveState()
    canvas.setFillColor(INK)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    # Subtle carbon-like diagonal grid.
    canvas.setStrokeColor(HexColor("#25313B"))
    canvas.setLineWidth(0.5)
    step = 18 * mm
    for i in range(-12, 20):
        x = i * step
        canvas.line(x, 0, x + PAGE_H, PAGE_H)
        canvas.line(x, PAGE_H, x + PAGE_H, 0)

    canvas.setFillColor(ORANGE)
    canvas.rect(0, 0, 8 * mm, PAGE_H, fill=1, stroke=0)
    draw_brand(canvas, 20 * mm, PAGE_H - 28 * mm, scale=1.15, dark=True)

    canvas.setFillColor(WHITE)
    canvas.setFont("Arial-Bold", 29)
    canvas.drawString(20 * mm, PAGE_H - 78 * mm, "TECHNICAL")
    canvas.drawString(20 * mm, PAGE_H - 90 * mm, "DATA SHEET")
    canvas.setFillColor(ORANGE)
    canvas.rect(20 * mm, PAGE_H - 99 * mm, 38 * mm, 2.2 * mm, fill=1, stroke=0)

    canvas.setFillColor(WHITE)
    canvas.setFont("Arial-Bold", 17)
    canvas.drawString(20 * mm, PAGE_H - 120 * mm, "300 GSM BIAXIAL")
    canvas.drawString(20 * mm, PAGE_H - 130 * mm, "CARBON FIBER FABRIC")
    canvas.setFont("Arial", 10.5)
    canvas.setFillColor(HexColor("#CED6DC"))
    canvas.drawString(20 * mm, PAGE_H - 142 * mm, "Non-crimp reinforcement | +45/-45 and 0/90")

    # Product information card.
    card_x, card_y, card_w, card_h = 20 * mm, 47 * mm, PAGE_W - 38 * mm, 57 * mm
    canvas.setFillColor(HexColor("#202B34"))
    canvas.roundRect(card_x, card_y, card_w, card_h, 4 * mm, fill=1, stroke=0)
    labels = [
        ("SUPPLIER / BRAND", "ZHEJIANG FRPHOME NEW MATERIAL CO., LTD."),
        ("DOCUMENT ID", "FRPH-TDS-CBX300-EN-R01"),
        ("PRODUCT CODES", "FRPH-CBX300-X  |  FRPH-CBX300-B"),
        ("ISSUE", "REVISION 01  |  16 JULY 2026"),
    ]
    yy = card_y + card_h - 13 * mm
    for label, value in labels:
        canvas.setFont("Arial-Bold", 6.5)
        canvas.setFillColor(ORANGE)
        canvas.drawString(card_x + 8 * mm, yy, label)
        canvas.setFont("Arial", 8.8)
        canvas.setFillColor(WHITE)
        canvas.drawString(card_x + 39 * mm, yy, value)
        yy -= 10.5 * mm

    canvas.setFont("ArialUnicode", 8.5)
    canvas.setFillColor(HexColor("#C5CED5"))
    canvas.drawString(20 * mm, 29 * mm, "浙江福昊新材料有限公司")
    canvas.setFont("Arial", 7.2)
    canvas.drawRightString(PAGE_W - 18 * mm, 29 * mm, "CUSTOMER TECHNICAL INFORMATION")
    canvas.restoreState()


def make_table(data, widths, header=True, row_heights=None, font_size=7.4):
    cooked = []
    for r, row in enumerate(data):
        cooked.append([
            cell if hasattr(cell, "wrap") else P(str(cell), styles["TableHeadZD"] if header and r == 0 else styles["TableZD"])
            for cell in row
        ])
    tbl = Table(cooked, colWidths=widths, rowHeights=row_heights, repeatRows=1 if header else 0, hAlign="LEFT")
    commands = [
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 4.2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4.2),
        ("GRID", (0, 0), (-1, -1), 0.45, GRID),
    ]
    if header:
        commands.extend([
            ("BACKGROUND", (0, 0), (-1, 0), INK),
            ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ])
        start = 1
    else:
        start = 0
    for r in range(start, len(data)):
        commands.append(("BACKGROUND", (0, r), (-1, r), WHITE if (r - start) % 2 == 0 else PALE))
    tbl.setStyle(TableStyle(commands))
    return tbl


def info_strip(items):
    cells = []
    for label, value in items:
        cells.append(P(f"<font color='#F27A1A'><b>{label}</b></font><br/><font size='10'><b>{value}</b></font>", styles["BodyZD"]))
    t = Table([cells], colWidths=[(PAGE_W - 28 * mm) / len(cells)] * len(cells), rowHeights=[18 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PALE_ORANGE),
        ("BOX", (0, 0), (-1, -1), 0.6, HexColor("#F4C8A6")),
        ("INNERGRID", (0, 0), (-1, -1), 0.6, HexColor("#F4C8A6")),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
    ]))
    return t


def section_title(text):
    return KeepTogether([
        Spacer(1, 3),
        Table([[P(text.upper(), styles["SectionZD"]) ]], colWidths=[PAGE_W - 28 * mm], style=TableStyle([
            ("LINEBELOW", (0, 0), (-1, -1), 1.1, ORANGE),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ])),
        Spacer(1, 4),
    ])


def variant_page(code, orientation, description, layer_a, layer_b, application_note):
    flow = []
    flow.append(Spacer(1, 2 * mm))
    flow.append(P(f"300 GSM {orientation} BIAXIAL", styles["VariantTitleZD"]))
    flow.append(P("CARBON FIBER NON-CRIMP FABRIC", styles["CoverSubZD"]))
    flow.append(Spacer(1, 3 * mm))
    flow.append(info_strip([
        ("PRODUCT CODE", code),
        ("ORIENTATION", orientation),
        ("NOMINAL TOTAL", "308 g/m2"),
        ("STANDARD WIDTH", "1270 mm"),
    ]))
    flow.append(Spacer(1, 4 * mm))
    flow.append(P(description, styles["BodyZD"]))

    flow.append(section_title("Article construction"))
    construction = [
        ["Layer", "Direction", "Areal weight", "Tolerance", "Material"],
        ["2", layer_a, "150 g/m2", "+/- 5%", "Continuous carbon fiber"],
        ["1", layer_b, "150 g/m2", "+/- 5%", "Continuous carbon fiber"],
        ["Stitch", "Warp-knit", "Approx. 8 g/m2", "Nominal", "Polyester 75D"],
        ["Total", "-", "308 g/m2", "+/- 5%", "Dry reinforcement"],
    ]
    flow.append(make_table(construction, [20 * mm, 29 * mm, 37 * mm, 30 * mm, 66 * mm]))

    flow.append(section_title("Physical and construction data"))
    physical = [
        ["Property", "Unit", "Nominal value", "Tolerance / note"],
        ["Carbon fiber areal weight", "g/m2", "300", "+/- 5%"],
        ["Total fabric areal weight", "g/m2", "308", "+/- 5%"],
        ["Fiber orientation", "degree", orientation, "+/- 1 degree"],
        ["Carbon fiber grade", "-", "SYT45S-12K", "Alternate grade by agreement"],
        ["Tow size", "filaments", "12,000", "12K"],
        ["Stitch construction", "-", "Tricot warp-knit", "E5 gauge"],
        ["Nominal stitch length", "mm", "Approx. 3.0", "Production nominal"],
        ["Standard fabric width", "mm", "1270", "+/- 10 mm"],
        ["Standard roll length", "m", "50", "+/- 1 m"],
        ["Approx. net roll weight", "kg", "19.6", "Nominal"],
        ["Color", "-", "Black", "Visual"],
    ]
    flow.append(make_table(physical, [63 * mm, 25 * mm, 43 * mm, 51 * mm]))

    flow.append(section_title("Functional guidance"))
    flow.append(P(application_note, styles["BodyZD"]))
    flow.append(P("Recommended processes: vacuum infusion, VARTM, RTM, wet lay-up, prepreg conversion, compression molding and autoclave processing. Final process parameters must be established for the selected resin system and component design.", styles["BodyZD"]))
    flow.append(Spacer(1, 2 * mm))
    flow.append(P("Note: Values are nominal product specifications unless a tolerance is explicitly stated. Dry-fabric data must not be interpreted as finished-laminate mechanical performance.", styles["SmallZD"]))
    return flow


doc = BaseDocTemplate(
    OUT,
    pagesize=A4,
    leftMargin=14 * mm,
    rightMargin=14 * mm,
    topMargin=23 * mm,
    bottomMargin=18 * mm,
    title="300 GSM Biaxial Carbon Fiber Fabric Technical Data Sheet",
    author="Zhejiang FRPHome New Material Co., Ltd.",
    subject="Technical data for +45/-45 and 0/90 carbon fiber non-crimp fabrics",
)

content_frame = Frame(
    14 * mm,
    18 * mm,
    PAGE_W - 28 * mm,
    PAGE_H - 41 * mm,
    id="content",
    leftPadding=0,
    rightPadding=0,
    topPadding=0,
    bottomPadding=0,
)
cover_frame = Frame(0, 0, PAGE_W, PAGE_H, id="cover", showBoundary=0)
doc.addPageTemplates([
    PageTemplate(id="Cover", frames=[cover_frame], onPage=draw_cover),
    PageTemplate(id="Body", frames=[content_frame], onPage=draw_header_footer),
])

story = [NextPageTemplate("Body"), PageBreak()]

# Page 2: overview
story.extend([
    Spacer(1, 2 * mm),
    P("300 GSM BIAXIAL CARBON FIBER FABRIC", styles["VariantTitleZD"]),
    P("Product family overview", styles["CoverSubZD"]),
    Spacer(1, 4 * mm),
    P("FRP HOME 300 GSM biaxial fabrics are stitched non-crimp reinforcements made from two balanced layers of continuous 12K carbon fiber. The straight, non-interlaced fiber architecture is designed for efficient load transfer, controlled orientation and good resin impregnation in structural composite processing.", styles["BodyZD"]),
    Spacer(1, 2 * mm),
    info_strip([
        ("REINFORCEMENT", "12K carbon"),
        ("CARBON WEIGHT", "300 g/m2"),
        ("TOTAL WEIGHT", "308 g/m2"),
        ("ROLL FORMAT", "1270 mm x 50 m"),
    ]),
    section_title("Product selection"),
    make_table([
        ["Product code", "Fiber orientation", "Layer split", "Recommended load function"],
        ["FRPH-CBX300-X", "+45 / -45", "150 / 150 g/m2", "Shear, torsion and off-axis reinforcement"],
        ["FRPH-CBX300-B", "0 / 90", "150 / 150 g/m2", "Balanced longitudinal and transverse reinforcement"],
    ], [38 * mm, 36 * mm, 42 * mm, 66 * mm]),
    section_title("Product description"),
    P("The two carbon layers are held in position by lightweight polyester stitching. This construction minimizes fiber crimp and supports stable handling during cutting, lay-up and molding. The +45/-45 version is intended primarily for in-plane shear and torsional loading. The 0/90 version provides balanced reinforcement along the principal roll and transverse directions.", styles["BodyZD"]),
    section_title("Matrix compatibility"),
    P("Typical compatible thermoset matrices include epoxy, vinyl ester, unsaturated polyester, polyurethane and phenolic systems. Compatibility between fiber sizing, stitching yarn and the selected matrix should be validated under the customer's actual processing conditions before serial production.", styles["BodyZD"]),
    section_title("Typical applications"),
    make_table([
        ["Market", "Representative uses"],
        ["Mobility", "Automotive structures, civil UAV components, lightweight panels"],
        ["Marine", "Hull, deck, stiffener, tube and shell reinforcement"],
        ["Industrial", "Composite molds, machine structures, profiles and enclosures"],
        ["Sports and leisure", "Bicycle, board, paddle, protective and performance components"],
    ], [43 * mm, 139 * mm]),
    Spacer(1, 3 * mm),
    P("Orientation convention: 0 degree is parallel to the roll length; 90 degree is transverse to the roll length. Directional labels refer to the nominal fiber placement in the dry fabric.", styles["SmallZD"]),
    PageBreak(),
])

story.extend(variant_page(
    "FRPH-CBX300-X",
    "+45 / -45",
    "FRPH-CBX300-X consists of two balanced continuous-carbon layers positioned at +45 degrees and -45 degrees relative to the roll direction. The construction is optimized for drape and off-axis reinforcement while maintaining the fibers in a substantially straight, non-crimp state.",
    "-45 degree",
    "+45 degree",
    "The +45/-45 architecture is particularly suitable for components governed by in-plane shear, torsion, load transfer around openings and combined loading. Laminate performance depends on resin, fiber volume fraction, cure cycle and manufacturing quality.",
))
story.append(PageBreak())

story.extend(variant_page(
    "FRPH-CBX300-B",
    "0 / 90",
    "FRPH-CBX300-B consists of two balanced continuous-carbon layers positioned at 0 degrees and 90 degrees. The 0-degree layer runs parallel to the roll length and the 90-degree layer runs across the roll width, providing balanced reinforcement in the principal directions.",
    "0 degree",
    "90 degree",
    "The 0/90 architecture is particularly suitable for plates, panels, shells, tubes and profiles that require balanced stiffness and strength in the principal longitudinal and transverse directions.",
))
story.append(PageBreak())

# Page 5: common technical notes
story.extend([
    Spacer(1, 2 * mm),
    P("COMMON TECHNICAL INFORMATION", styles["VariantTitleZD"]),
    P("Fiber data, inspection, packaging and use", styles["CoverSubZD"]),
    section_title("Typical carbon fiber properties"),
    P("The values below are typical supplier data for SYT45S-12K carbon fiber. They are not mechanical properties of the dry fabric or a finished laminate.", styles["BodyZD"]),
    make_table([
        ["Property", "Unit", "Typical value", "Data basis"],
        ["Filament count", "-", "12,000", "Fiber designation"],
        ["Linear density", "tex", "800", "Fiber supplier typical"],
        ["Tensile strength", "MPa", "4,500", "Fiber supplier typical"],
        ["Tensile modulus", "GPa", "230", "Fiber supplier typical"],
        ["Elongation at break", "%", "1.9", "Fiber supplier typical"],
        ["Fiber density", "g/cm3", "1.79", "Fiber supplier typical"],
        ["Nominal filament diameter", "micrometer", "7", "Fiber supplier typical"],
    ], [54 * mm, 27 * mm, 38 * mm, 63 * mm]),
    section_title("Inspection and reference methods"),
    make_table([
        ["Inspection item", "Reference method / control"],
        ["Fabric areal weight", "ISO 3374 or equivalent controlled internal method"],
        ["Carbon fiber linear density", "ISO 1889 or fiber supplier certificate of analysis"],
        ["Carbon fiber tensile properties", "ISO 10618 or fiber supplier certificate of analysis"],
        ["Fabric width and roll length", "Calibrated internal measurement"],
        ["Fiber orientation", "Controlled optical / template inspection"],
        ["Surface and stitching quality", "Visual inspection against agreed acceptance criteria"],
    ], [68 * mm, 114 * mm]),
    section_title("Packaging, storage and handling"),
    P("Each roll is wound on a rigid cardboard core, protected with film or a moisture-resistant bag, and identified with product code, batch number, roll number, width, length, net weight and production date. Store indoors in the original package, dry and away from direct sunlight, heat sources and chemicals. Support rolls to prevent crushing or telescoping. When moved from cold storage, allow the unopened roll to reach workshop temperature before use to reduce moisture condensation and electrostatic handling issues.", styles["BodyZD"]),
    section_title("Quality and order confirmation"),
    P("The fabric is supplied with controlled fiber distribution and stitching, free from severe distortion, abnormal folds and continuous broken-tow defects. Minor cosmetic variations that do not affect processing or structural performance may be accepted under the agreed quality specification. Fiber grade, stitch construction, width, roll length, packaging and any customer-specific tolerances should be confirmed on the purchase order or product specification.", styles["BodyZD"]),
    section_title("Technical disclaimer"),
    P("The information in this Technical Data Sheet is provided in good faith and represents nominal or typical values at the date of issue. It does not constitute a warranty of finished-part performance. Composite properties depend on resin selection, fiber volume fraction, laminate design, processing method, cure cycle, environmental conditioning and manufacturing quality. The customer is responsible for testing and confirming product suitability, safety and regulatory compliance for the intended application. Zhejiang FRPHome New Material Co., Ltd. may update this document as product specifications develop.", styles["SmallZD"]),
    Spacer(1, 5 * mm),
    Table([
        [P("TECHNICAL CONTACT", styles["TableHeadZD"]), P("ZHEJIANG FRPHOME NEW MATERIAL CO., LTD.", styles["TableHeadZD"])],
        [P("Email", styles["TableBoldZD"]), P("info@hntzxcl.com", styles["TableZD"])],
        [P("Phone", styles["TableBoldZD"]), P("+86 188 5739 7371", styles["TableZD"])],
        [P("Website", styles["TableBoldZD"]), P("www.myfrphome.com", styles["TableZD"])],
        [P("Location", styles["TableBoldZD"]), P("Haining, Zhejiang, China", styles["TableZD"])],
    ], colWidths=[43 * mm, 139 * mm], style=TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), INK),
        ("BACKGROUND", (0, 1), (0, -1), PALE_ORANGE),
        ("GRID", (0, 0), (-1, -1), 0.45, GRID),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ])),
])

doc.build(story)
print(OUT)
