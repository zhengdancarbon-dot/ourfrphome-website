/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import {
  Boxes,
  Building2,
  CarFront,
  Check,
  CircleDot,
  ClipboardCheck,
  Compass,
  Construction,
  Factory,
  FileCheck2,
  Gauge,
  Globe2,
  HardHat,
  Layers3,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  Plane,
  ScanLine,
  Settings2,
  Ship,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Target,
  Workflow,
  Wrench,
} from "lucide-react";
import productsJson from "@/src/data/products.json";
import { siteConfig } from "@/lib/site-config";
import {
  CatalogPage,
  DataTable,
  DividerPage,
  ImagePlaceholder,
  PageFooter,
  PageHeader,
  ProductPage,
  RfqBand,
  SectionTitle,
  type CatalogProduct,
} from "./catalog-components";
import { CatalogToolbar } from "./catalog-toolbar";
import styles from "./catalog.module.css";

export const metadata: Metadata = {
  title: "Digital Carbon Fiber Product Catalog",
  description:
    "A4 digital catalog for FRP HOME covering carbon fiber fabrics, prepregs, plates, tubes, yarn, chopped fiber, hybrid fabrics and composite accessories.",
};

const products = productsJson as CatalogProduct[];

function getProduct(id: string) {
  const product = products.find((item) => item.id === id);
  if (!product) {
    throw new Error(`Missing catalog product data: ${id}`);
  }
  return product;
}

const woven = getProduct("woven-fabric");
const ud = getProduct("ud-fabric");
const multiaxial = getProduct("multiaxial-ncf");
const spreadTow = getProduct("spread-tow");
const prepreg = getProduct("prepreg");
const tubes = getProduct("tubes");
const yarn = getProduct("yarn-roving");
const chopped = getProduct("chopped-fiber");
const hybrid = getProduct("hybrid-fabrics");
const accessories = getProduct("accessories");

const contents = [
  ["Company", "Company Profile", "03"],
  ["Company", "Manufacturing Capability", "04"],
  ["Overview", "Product Overview", "05"],
  ["Overview", "Application Fields", "06"],
  ["Materials", "Woven / UD / NCF / Spread Tow", "07-12"],
  ["Materials", "Carbon Fiber Prepreg", "13"],
  ["Profiles", "Carbon Fiber Plates", "14-16"],
  ["Profiles", "Carbon Fiber Tubes", "17-18"],
  ["Fibers", "Yarn / Roving / Chopped Fiber", "19-20"],
  ["Hybrid", "Aramid / Hybrid / TPU Fabrics", "21-22"],
  ["Support", "Accessories / Custom Products", "23-24"],
  ["Operations", "Quality / Packing / Customization", "25-28"],
  ["Inquiry", "RFQ Guide / Selection Matrix / Contact", "29-31"],
];

const selectionRows = [
  ["Woven fabric", "Wet layup / infusion / prepregging", "Balanced skins and visible surfaces", "Tow, weight, weave, width"],
  ["UD fabric", "Wet layup / pultrusion / lamination", "Directional stiffness and strengthening", "Weight, fiber, width"],
  ["Multiaxial NCF", "Infusion / RTM / large layup", "Multi-directional structures", "Angles, layer weight, width"],
  ["Prepreg", "Autoclave / hot press / vacuum bagging", "Controlled resin and repeatable molding", "Fiber, resin, cure, storage"],
  ["Plates", "Bonding / CNC / assembly", "Strengthening and precision parts", "Thickness, size, finish, machining"],
  ["Tubes", "Assembly / bonding / structural use", "Lightweight beams and visible tubes", "Process, OD/ID, wall, finish"],
  ["Yarn / tow", "Weaving / winding / pultrusion", "Downstream conversion", "Tow size, grade, sizing"],
  ["Chopped fiber", "Compounding / injection molding", "Reinforced and conductive plastics", "Length, sizing, packing"],
];

function Feature({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Factory;
  title: string;
  text: string;
}) {
  return (
    <article className={styles.feature}>
      <Icon aria-hidden="true" />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function ProcessStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className={styles.processStep}>
      <span>{number}</span>
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default function CatalogPageRoute() {
  return (
    <div className={`${styles.catalogRoot} catalog-root`}>
      <CatalogToolbar />
      <main className={styles.catalogStack}>
        <CatalogPage page={1} dark className={styles.coverPage}>
          <div className={styles.coverTexture} />
          <div className={styles.coverBrand}>
            <img src="/images/brand/frphome-logo-white.png" alt="FRP HOME 福昊" />
          </div>
          <div className={styles.coverCopy}>
            <div className={styles.orangeRule} />
            <h1>
              Carbon Fiber
              <span>Materials</span>
            </h1>
            <p>For Composite Manufacturing</p>
          </div>
          <div className={styles.coverVisual}>
            <img
              className={styles.coverHeroImage}
              src="/images/catalog/frphome/woven-twill.webp"
              alt="FRP HOME twill carbon fiber woven fabric"
            />
          </div>
          <div className={styles.coverMeta}>
            <span>Zhejiang FRPHome New Material Co., Ltd. / 浙江福昊新材料有限公司</span>
            <span>
              Digital Catalog <b>2026</b>
            </span>
          </div>
        </CatalogPage>

        <CatalogPage page={2} dark className={styles.positionPage}>
          <PageHeader page={2} label="Composite Material Supply" dark />
          <div className={styles.positionBody}>
            <p className={styles.positionLead}>
              From reinforcement fiber to finished composite profiles, FRP HOME helps industrial
              buyers specify, source and customize carbon fiber materials.
            </p>
            <div className={styles.positionGrid}>
              <div className={styles.positionStatement}>
                <span>Material platform</span>
                <h2>A connected range for composite production.</h2>
                <p>
                  Fabrics, prepregs, plates, tubes, yarn, short fiber and process accessories are
                  organized around practical B2B specification and export supply.
                </p>
              </div>
              <ImagePlaceholder
                label="Carbon fiber product family"
                imageSrc="/images/composite-materials-range-products.webp"
                imageAlt="FRP HOME carbon fiber material product range"
                dark
                className={styles.positionImage}
              />
            </div>
            <div className={styles.positionRail}>
              {["Fabrics", "Prepregs", "Plates", "Tubes", "Fibers", "Accessories"].map((item, index) => (
                <div key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
          <PageFooter page={2} dark />
        </CatalogPage>

        <CatalogPage page={3} label="Company Profile">
          <div className={styles.pageBody}>
            <SectionTitle
              code="Company / 01"
              title="Company Profile"
              copy="Composite material supply from Haining, Zhejiang, China."
            />
            <div className={styles.companyGrid}>
              <div className={styles.companyCopy}>
                <p className={styles.leadCopy}>
                  Zhejiang FRPHome New Material Co., Ltd. supplies carbon fiber reinforcement materials
                  and composite products for industrial buyers, distributors and OEM manufacturers.
                </p>
                <p className={styles.companyChinese}>浙江福昊新材料有限公司 · FRP HOME 福昊</p>
                <p>
                  The product range covers woven and unidirectional carbon fabrics, multiaxial NCF,
                  prepreg, plates, tubes, yarn and roving, chopped fiber, aramid/hybrid fabrics,
                  process accessories and drawing-based composite products.
                </p>
                <p>
                  Our commercial process focuses on specification confirmation, realistic technical
                  communication, sample approval, export packing and repeat supply.
                </p>
                <div className={styles.companyFacts}>
                  <div>
                    <span>Location</span>
                    <strong>Haining, Zhejiang, China</strong>
                  </div>
                  <div>
                    <span>Business model</span>
                    <strong>International B2B material supply</strong>
                  </div>
                  <div>
                    <span>Positioning</span>
                    <strong>One-stop composite material partner</strong>
                  </div>
                </div>
              </div>
              <ImagePlaceholder
                label="FRP HOME carbon fabric production"
                imageSrc="/images/catalog/frphome/ud-production.webp"
                imageAlt="Carbon fiber fabric production equipment"
              />
            </div>
            <div className={styles.editorialBand}>
              <strong>Publication note</strong>
              <p>
                Equipment count and annual capacity stated in the 2023 catalog remain subject to
                company confirmation before final release.
              </p>
            </div>
          </div>
          <PageFooter page={3} />
        </CatalogPage>

        <CatalogPage page={4} label="Manufacturing Capability">
          <div className={styles.pageBody}>
            <SectionTitle
              code="Company / 02"
              title="Manufacturing Capability"
              copy="Production and converting capabilities arranged around product format and customer specification."
            />
            <div className={styles.capabilityGrid}>
              <Feature icon={Factory} title="Weaving & braiding" text="Woven, UD and selected hybrid reinforcement formats." />
              <Feature icon={Layers3} title="Multilayer materials" text="Stitched orientation structures and laminate build-up by project." />
              <Feature icon={Gauge} title="Pultrusion" text="Continuous carbon plates, tubes and profiles with strong axial alignment." />
              <Feature icon={Snowflake} title="Prepreg handling" text="Resin-system, storage and shipment requirements confirmed by specification." />
              <Feature icon={Wrench} title="Finishing & CNC" text="Sheet cutting, drilling, tube cutting and custom part review." />
              <Feature icon={PackageCheck} title="Export preparation" text="Roll, sheet, tube, pallet and temperature-sensitive packing plans." />
            </div>
            <div className={styles.twoImageGrid}>
              <ImagePlaceholder
                label="Carbon fiber production equipment"
                imageSrc="/images/catalog/frphome/ud-production.webp"
                imageAlt="FRP HOME carbon fiber fabric production equipment"
              />
              <ImagePlaceholder
                label="UD carbon fiber fabric rolls"
                imageSrc="/images/catalog/frphome/ud-rolls.webp"
                imageAlt="FRP HOME unidirectional carbon fiber fabric rolls"
              />
            </div>
            <div className={styles.smallPrint}>
              Exact machine count, nameplate capacity and available process windows are confirmed
              during final catalog review and project quotation.
            </div>
          </div>
          <PageFooter page={4} />
        </CatalogPage>

        <CatalogPage page={5} label="Product Overview">
          <div className={styles.pageBody}>
            <SectionTitle
              code="Directory"
              title="Product Overview"
              copy="A practical material range for reinforcement, molding, profiles, compounds and custom composite parts."
            />
            <div className={styles.contentsGrid}>
              {contents.map(([group, title, page]) => (
                <div className={styles.contentsRow} key={`${title}-${page}`}>
                  <span>{group}</span>
                  <strong>{title}</strong>
                  <b>{page}</b>
                </div>
              ))}
            </div>
            <div className={styles.overviewStrip}>
              <ImagePlaceholder label="Insert complete product family image here" code="IMG-05" />
              <div>
                <strong>Standard supply + custom review</strong>
                <p>
                  Final availability, tolerance, MOQ, lead time and documents are confirmed in the
                  quotation.
                </p>
              </div>
            </div>
          </div>
          <PageFooter page={5} />
        </CatalogPage>

        <CatalogPage page={6} label="Application Fields">
          <div className={styles.pageBody}>
            <SectionTitle
              code="Applications"
              title="Built Around the End Process"
              copy="Material selection starts with load direction, molding method, surface requirement, production volume and commercial target."
            />
            <div className={styles.applicationHero}>
              <ImagePlaceholder label="Insert carbon composite application montage here" code="IMG-06" />
            </div>
            <div className={styles.applicationGrid}>
              <Feature icon={CarFront} title="Automotive" text="Panels, trim, structural parts and lightweight assemblies." />
              <Feature icon={Target} title="Sports equipment" text="Rods, boards, frames and performance components." />
              <Feature icon={Ship} title="Marine" text="Masts, hull panels, paddles and water-sports products." />
              <Feature icon={Construction} title="Construction" text="Externally bonded strengthening and infrastructure repair." />
              <Feature icon={Plane} title="Drones & UAV" text="Frames, tubes, plates and mapping or inspection equipment." />
              <Feature icon={Settings2} title="Industrial" text="Automation, fixtures, machine parts and composite housings." />
            </div>
          </div>
          <PageFooter page={6} />
        </CatalogPage>

        <DividerPage
          page={7}
          number="01"
          title="Carbon Fiber Woven Fabric"
          copy="Balanced reinforcement, stable handling and recognizable carbon surface patterns."
          placeholder="Insert woven carbon fabric macro image here"
          items={["3K / 6K / 12K", "Plain / twill / satin", "1000 / 1270 / 1500 mm", "50 / 100 m rolls"]}
          imageSrc="/images/catalog/frphome/woven-twill.webp"
          imageAlt="Twill carbon fiber woven fabric"
        />

        <ProductPage
          page={8}
          product={woven}
          code="FRPH-WF"
          tableColumns={["Product", "Tow", "Weight", "Weave", "Width", "Roll"]}
          tableRows={[
            ["FRPH-WF3K200T", "3K", "200 g/m²", "2×2 twill", "1000 / 1270 / 1500 mm", "50 / 100 m"],
            ["FRPH-WF3K240T", "3K", "240 g/m²", "2×2 twill", "1000 / 1270 mm", "50 / 100 m"],
            ["FRPH-WF6K300", "6K", "300 g/m²", "Plain / twill", "1000 / 1270 mm", "50 / 100 m"],
            ["FRPH-WF12K300", "12K", "300 g/m²", "Plain / twill", "1000 / 1270 mm", "50 / 100 m"],
            ["FRPH-WF12K400T", "12K", "400 g/m²", "2×2 twill", "1000 / 1270 / 1500 mm", "50 / 100 m"],
            ["FRPH-WF12K600T", "12K", "600 g/m²", "2×2 twill", "1000 / 1270 mm", "50 m"],
          ]}
          imageSrc="/images/catalog/frphome/woven-twill.webp"
          imageAlt="Twill carbon fiber woven fabric supplied by FRP HOME"
          note="Values are common catalog configurations. Final construction, tolerance, fiber source and packing are confirmed by order."
        />

        <DividerPage
          page={9}
          number="02"
          title="UD Carbon Fiber Fabric"
          copy="Fiber placed in the principal load direction for efficient tensile reinforcement."
          placeholder="Insert UD carbon fiber roll image here"
          items={["200 / 300 / 450 / 600 g/m²", "12K / 24K", "1000 mm or custom width", "Structural and industrial use"]}
          imageSrc="/images/catalog/frphome/ud-rolls.webp"
          imageAlt="Unidirectional carbon fiber fabric rolls"
        />

        <ProductPage
          page={10}
          product={ud}
          code="FRPH-UD"
          tableColumns={["Product", "Weight", "Fiber", "Direction", "Width", "Typical use"]}
          tableRows={[
            ["FRPH-UD200", "200 g/m²", "12K / 24K", "0°", "1000 mm / custom", "Light directional layers"],
            ["FRPH-UD300", "300 g/m²", "12K / 24K", "0°", "1000 mm / custom", "Reinforcement / plates"],
            ["FRPH-UD450", "450 g/m²", "12K / 24K", "0°", "1000 mm / custom", "Industrial laminates"],
            ["FRPH-UD600", "600 g/m²", "12K / 24K", "0°", "1000 mm / custom", "Heavy build-up"],
          ]}
          imageSrc="/images/catalog/frphome/ud-rolls.webp"
          imageAlt="FRP HOME unidirectional carbon fiber fabric rolls"
          note="Final binder, stitching, roll length and width tolerance depend on the selected construction."
        />

        <ProductPage
          page={11}
          product={multiaxial}
          code="FRPH-NCF"
          tableColumns={["Construction", "Orientation", "Weight", "Width", "Primary function"]}
          tableRows={[
            ["Biaxial", "+45° / -45°", "300 / 600 g/m²", "1270 mm / custom", "Shear and torsion"],
            ["Biaxial", "0° / 90°", "300 / 600 g/m²", "1270 mm / custom", "Balanced panels"],
            ["Triaxial", "0° / +45° / -45°", "Custom", "1270 mm / custom", "Multi-load shells"],
            ["Quadraxial", "0° / +45° / 90° / -45°", "Custom", "1270 mm / custom", "Multi-directional layup"],
          ]}
          imageSrc="/images/products/carbon-fiber-multiaxial-ncf-fabric.webp"
          imageAlt="Carbon fiber multiaxial non-crimp fabric"
          note="Layer distribution, stitching yarn and architecture are engineered by project."
        />

        <ProductPage
          page={12}
          product={spreadTow}
          code="FRPH-ST"
          tableColumns={["Option", "Construction", "Weight", "Width", "Surface", "Review item"]}
          tableRows={[
            ["Lightweight", "Spread tow", "By project", "Custom", "Fine checker", "Tow and areal weight"],
            ["Cosmetic", "Spread tow", "By project", "Custom", "Visual grade", "Pattern consistency"],
            ["Structural", "Spread tow", "By project", "Custom", "Low crimp", "Laminate process"],
          ]}
          imageSrc="/images/catalog/frphome/spread-tow.webp"
          imageAlt="FRP HOME spread tow carbon fiber fabric"
          note="Spread-tow availability depends on tow, spreading width, weave construction and MOQ."
        />

        <ProductPage
          page={13}
          product={prepreg}
          code="FRPH-PP"
          tableColumns={["Product", "Reinforcement", "Fiber weight", "Resin", "Storage", "Process"]}
          tableRows={[
            ["UD prepreg 200", "UD carbon", "200 g/m²", "35-40% typical", "-18°C typical", "Press / autoclave"],
            ["UD prepreg 300", "UD carbon", "300 g/m²", "35-40% typical", "-18°C typical", "Press / autoclave"],
            ["3K twill prepreg", "3K woven", "200 g/m²", "35-40% typical", "-18°C typical", "Vacuum / autoclave"],
            ["12K prepreg", "12K woven or UD", "By order", "By system", "By system", "Composite molding"],
          ]}
          imageSrc="/images/catalog/frphome/prepreg-roll.webp"
          imageAlt="Carbon fiber prepreg roll"
          note="Storage temperature, shelf life, cure profile and shipping method must follow the selected resin-system TDS."
        />

        <DividerPage
          page={14}
          number="03"
          title="Carbon Fiber Plates"
          copy="Pultruded strengthening profiles and laminated sheets for structural and precision applications."
          placeholder="Insert stacked carbon fiber plate image here"
          items={["0.5-30 mm", "Pultruded / laminated / CNC", "Matte / glossy / woven surface", "Custom size and machining"]}
          imageSrc="/images/catalog/frphome/plate-sheets.webp"
          imageAlt="Carbon fiber laminate plates"
        />

        <CatalogPage page={15} label="Pultruded Carbon Fiber Plates">
          <div className={styles.pageBody}>
            <SectionTitle
              code="FRPH-CP"
              title="Pultruded Strengthening Plates"
              copy="Axially reinforced CFRP profiles for externally bonded structural strengthening systems."
            />
            <div className={styles.productHeroGrid}>
              <ImagePlaceholder
                label="Pultruded carbon fiber strengthening plate"
                imageSrc="/images/catalog/frphome/plate-pultruded.webp"
                imageAlt="Pultruded carbon fiber strengthening plate"
              />
              <aside className={styles.productSummary}>
                <h3>Specification focus</h3>
                <ul className={styles.checkList}>
                  <li><Check /> Thickness and width</li>
                  <li><Check /> Length or coil format</li>
                  <li><Check /> Bonding surface condition</li>
                  <li><Check /> Compatible adhesive system</li>
                  <li><Check /> Project engineering basis</li>
                </ul>
              </aside>
            </div>
            <DataTable
              columns={["Thickness", "Common width", "Format", "Surface", "Typical application"]}
              rows={[
                ["1.2 mm", "50 / 80 / 100 / 120 mm", "Roll or straight", "Sanded / peel-ply by order", "General strengthening"],
                ["1.4 mm", "50 / 80 / 100 / 120 / 150 mm", "Roll or straight", "Bonding surface by order", "Construction systems"],
                ["2.0 mm", "50 / 80 / 100 / 120 mm", "By review", "Bonding surface by order", "Higher area stiffness"],
                ["3.0 mm", "50 / 80 / 100 mm", "Straight length", "Bonding surface by order", "Heavy reinforcement"],
                ["Custom", "By project", "By project", "By project", "Special structural use"],
              ]}
            />
            <div className={styles.warningBox}>
              <HardHat />
              <p>
                Structural design, substrate assessment, adhesive selection and design values must be
                approved by the project engineer. Supplier data alone is not a structural design.
              </p>
            </div>
            <RfqBand />
          </div>
          <PageFooter page={15} />
        </CatalogPage>

        <CatalogPage page={16} label="Laminated & CNC Plates">
          <div className={styles.pageBody}>
            <SectionTitle
              code="FRPH-LP"
              title="Laminated & CNC Carbon Plates"
              copy="Cured carbon-fiber sheets for machined parts, frames, fixtures and visible composite panels."
            />
            <div className={styles.splitHero}>
              <ImagePlaceholder
                label="Carbon fiber laminate sheet stack"
                imageSrc="/images/catalog/frphome/plate-sheets.webp"
                imageAlt="FRP HOME carbon fiber laminate sheets"
              />
              <ImagePlaceholder
                label="CNC carbon fiber plate parts"
                imageSrc="/images/products/custom-cnc-carbon-fiber-plates.webp"
                imageAlt="CNC machined carbon fiber plates"
              />
            </div>
            <DataTable
              columns={["Type", "Thickness", "Surface", "Size", "Processing"]}
              rows={[
                ["Thin laminate", "0.5-1.0 mm", "3K twill / plain", "Standard / custom", "Cutting by review"],
                ["General sheet", "1.5-3.0 mm", "Matte / glossy", "Standard / custom", "CNC / drilling"],
                ["Structural sheet", "4-10 mm", "Woven / mixed layup", "Custom", "CNC / edge finish"],
                ["Heavy plate", "10-30 mm", "By layup", "Project-specific", "Drawing review"],
              ]}
            />
            <div className={styles.optionGrid}>
              {["Sheet thickness", "Panel dimensions", "Inner layup", "Surface finish", "Hole pattern", "Packing protection"].map(
                (item) => (
                  <div key={item}>
                    <CircleDot />
                    <span>{item}</span>
                  </div>
                ),
              )}
            </div>
            <RfqBand message="Send a DXF, STEP file or dimensioned drawing for machined carbon plate quotation." />
          </div>
          <PageFooter page={16} />
        </CatalogPage>

        <DividerPage
          page={17}
          number="04"
          title="Carbon Fiber Tubes"
          copy="Roll-wrapped, pultruded and custom tube formats for visual and structural assemblies."
          placeholder="Insert carbon fiber tube range image here"
          items={["Round / square / profiles", "OD / ID / wall customized", "Matte / glossy", "Cutting and drilling by review"]}
          imageSrc="/images/catalog/frphome/tube-range.webp"
          imageAlt="Carbon fiber tube range"
        />

        <ProductPage
          page={18}
          product={tubes}
          code="FRPH-CT"
          tableColumns={["Tube type", "Primary fiber", "Surface", "Dimensions", "Typical use"]}
          tableRows={[
            ["Roll-wrapped", "Woven + UD layup", "3K matte / glossy", "OD / ID / wall custom", "Visible structural parts"],
            ["Pultruded", "Mainly axial", "Black smooth / sanded", "Profile by die", "Industrial beams and supports"],
            ["Square / profile", "Process-dependent", "Matte / custom", "By drawing", "Frames and assemblies"],
            ["Custom tube", "Engineered layup", "By requirement", "By drawing", "Project-specific components"],
          ]}
          imageSrc="/images/catalog/frphome/tube-range.webp"
          imageAlt="FRP HOME pultruded carbon fiber tube range"
          note="Tube performance depends on layup, diameter, wall thickness, process and load direction."
        />

        <ProductPage
          page={19}
          product={yarn}
          code="FRPH-CFY"
          tableColumns={["Tow", "Grade position", "Sizing", "Package", "Downstream process"]}
          tableRows={[
            ["3K / 6K", "Fine tow / high-strength options", "By process", "Spool", "Woven fabric / prepreg"],
            ["12K", "T300 / T700 / high-strength", "By matrix", "Spool / carton", "Weaving / pultrusion"],
            ["24K / 25K", "Industrial and high-strength options", "By matrix", "Supplier standard", "Pultrusion / winding"],
            ["48K", "Large-tow industrial option", "By process", "Supplier standard", "Industrial conversion"],
          ]}
          note="Brand, grade, export terms and batch availability must be confirmed before quotation."
        />

        <ProductPage
          page={20}
          product={chopped}
          code="FRPH-CCF"
          tableColumns={["Grade", "Length", "Sizing", "Packing", "Typical use"]}
          tableRows={[
            ["FRPH-CCF3", "3 mm", "By matrix", "Bag / carton", "Fine polymer compounds"],
            ["FRPH-CCF5", "5 mm", "By matrix", "Bag / carton", "Conductive plastics"],
            ["FRPH-CCF6", "6 mm", "By matrix", "Bag / carton", "Injection molding"],
            ["FRPH-CCF10", "10 mm", "By matrix", "Bag / drum", "Higher reinforcement demand"],
            ["Custom", "By review", "By review", "By order", "Special composite formulations"],
          ]}
          imageSrc="/images/catalog/frphome/chopped-fiber.webp"
          imageAlt="FRP HOME chopped carbon fiber"
          note="Customer compounding trials are recommended to confirm feeding, dispersion and final properties."
        />

        <ProductPage
          page={21}
          product={hybrid}
          code="FRPH-HYB"
          tableColumns={["Type", "Fiber combination", "Weave", "Color", "Typical use"]}
          tableRows={[
            ["Aramid fabric", "Para-aramid", "Plain / twill", "Natural yellow", "Impact and abrasion layers"],
            ["Carbon/aramid", "Carbon + aramid", "Plain / twill", "Black / yellow", "Hybrid skins"],
            ["Colored hybrid", "Carbon + colored fiber", "Pattern by review", "Red / blue / custom", "Decorative parts"],
            ["Jacquard", "Carbon or hybrid", "Custom pattern", "By yarn", "Premium visible surfaces"],
          ]}
          imageSrc="/images/catalog/frphome/hybrid-blue.webp"
          imageAlt="Blue and black carbon aramid hybrid fabric"
          note="Use branded fiber names only when the actual supplied fiber brand is confirmed."
        />

        <CatalogPage page={22} label="TPU & Composite Surface Fabrics">
          <div className={styles.pageBody}>
            <SectionTitle
              code="FRPH-SF"
              title="TPU & Composite Surface Fabrics"
              copy="Flexible, decorative and functional surface materials reviewed against the customer’s forming and bonding process."
            />
            <div className={styles.surfaceGrid}>
              <ImagePlaceholder
                label="Composite surface fabric"
                imageSrc="/images/catalog/frphome/composite-surface.webp"
                imageAlt="Decorative composite surface fabric"
              />
              <div className={styles.surfaceCopy}>
                <h3>Project-led specification</h3>
                <p>
                  The old catalog shows TPU and composite surface fabrics but provides no verified
                  construction or processing data. This product group remains available for inquiry
                  and sample review.
                </p>
                <ul className={styles.checkList}>
                  <li><Check /> Substrate and surface material</li>
                  <li><Check /> Thickness or areal weight</li>
                  <li><Check /> Backing and bonding method</li>
                  <li><Check /> Heat-forming window</li>
                  <li><Check /> Color, texture and visual target</li>
                </ul>
              </div>
            </div>
            <div className={styles.sampleCallout}>
              <Sparkles />
              <div>
                <strong>Sample confirmation recommended</strong>
                <p>Share the end product, process temperature and required surface appearance.</p>
              </div>
            </div>
            <RfqBand />
          </div>
          <PageFooter page={22} />
        </CatalogPage>

        <ProductPage
          page={23}
          product={accessories}
          code="FRPH-ACC"
          tableColumns={["Accessory", "Primary function", "Key selection point", "Packing"]}
          tableRows={[
            ["Epoxy adhesive", "Composite bonding", "Substrate / cure / strength requirement", "Kit / pail"],
            ["CFRP plate adhesive", "Structural plate bonding", "System compatibility", "Kit"],
            ["Release film / paper", "Part and prepreg release", "Temperature / perforation", "Roll"],
            ["Bagging film", "Vacuum enclosure", "Temperature / elongation", "Roll"],
            ["Peel ply", "Surface preparation", "Fiber / weave / temperature", "Roll"],
            ["Glass / basalt fabric", "Complementary reinforcement", "Weight / weave / width", "Roll"],
          ]}
          note="Accessory compatibility must be confirmed against resin, cure temperature and manufacturing process."
        />

        <CatalogPage page={24} label="Custom Composite Products">
          <div className={styles.pageBody}>
            <SectionTitle
              code="FRPH-OEM"
              title="Custom Composite Products"
              copy="Drawing-based review for CNC plates, tube assemblies, molded parts and finished carbon components."
            />
            <div className={styles.customHero}>
              <ImagePlaceholder
                label="Custom carbon fiber products"
                imageSrc="/images/products/custom-cnc-carbon-fiber-plates.webp"
                imageAlt="Custom CNC machined carbon fiber products"
              />
              <div className={styles.customInputs}>
                <h3>Useful inquiry inputs</h3>
                {["Dimensioned drawing", "DXF / STEP / CAD file", "Material or layup target", "Surface finish", "Tolerance", "Annual quantity"].map(
                  (item, index) => (
                    <div key={item}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{item}</strong>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className={styles.processRail}>
              <ProcessStep number="01" title="Review" text="Drawing, application and material requirement." />
              <ProcessStep number="02" title="Sample" text="Tooling and prototype route where required." />
              <ProcessStep number="03" title="Approve" text="Dimensions, finish and packing confirmed." />
              <ProcessStep number="04" title="Produce" text="Batch production and inspection." />
            </div>
            <RfqBand message="Custom parts are quoted after drawing and feasibility review." />
          </div>
          <PageFooter page={24} />
        </CatalogPage>

        <CatalogPage page={25} label="Quality Control">
          <div className={styles.pageBody}>
            <SectionTitle
              code="Operations / 01"
              title="Quality Control"
              copy="Inspection points are matched to product format, approved specification and order requirements."
            />
            <div className={styles.qualityFlow}>
              <Feature icon={ShieldCheck} title="Incoming material" text="Supplier, grade, lot and visible condition review." />
              <Feature icon={ScanLine} title="In-process checks" text="Areal weight, width, construction, dimensions and appearance." />
              <Feature icon={ClipboardCheck} title="Final release" text="Specification, quantity, label, documents and packing review." />
            </div>
            <div className={styles.splitHero}>
              <ImagePlaceholder label="Insert fabric inspection image here" code="IMG-25A" />
              <ImagePlaceholder label="Insert dimensional measurement image here" code="IMG-25B" />
            </div>
            <div className={styles.qualityList}>
              {[
                "Areal weight and width",
                "Roll length and edge condition",
                "Weave or fiber orientation",
                "Plate thickness and flatness",
                "Tube dimensions and surface finish",
                "Prepreg resin-system checks by specification",
                "Packing and label confirmation",
                "Non-conformance communication",
              ].map((item) => (
                <div key={item}>
                  <Check />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <PageFooter page={25} />
        </CatalogPage>

        <CatalogPage page={26} label="Traceability & Documents">
          <div className={styles.pageBody}>
            <SectionTitle
              code="Operations / 02"
              title="Traceability & Documents"
              copy="Document support follows product scope, confirmed specification and commercial agreement."
            />
            <div className={styles.documentGrid}>
              <Feature icon={Target} title="Product code" text="Links the quoted material to the approved specification." />
              <Feature icon={CircleDot} title="Batch / roll ID" text="Supports production and shipment traceability where applicable." />
              <Feature icon={FileCheck2} title="TDS support" text="Product data issued for the selected material and revision." />
              <Feature icon={ClipboardCheck} title="COA support" text="Available according to product, batch and order agreement." />
              <Feature icon={PackageCheck} title="Packing list" text="Quantity, package count, dimensions and shipment references." />
              <Feature icon={Globe2} title="Export documents" text="Invoice, origin and other documents by destination and order." />
            </div>
            <ImagePlaceholder label="Insert roll labels, batch records and document image here" code="IMG-26" />
            <div className={styles.editorialBand}>
              <strong>No document inflation</strong>
              <p>
                Certificates, compliance marks and test reports are shown only when authentic,
                current and applicable to the supplied product.
              </p>
            </div>
          </div>
          <PageFooter page={26} />
        </CatalogPage>

        <CatalogPage page={27} label="Export Packing">
          <div className={styles.pageBody}>
            <SectionTitle
              code="Operations / 03"
              title="Export Packing"
              copy="Protection is selected around material format, destination, handling risk and shipment method."
            />
            <div className={styles.packingGrid}>
              <div>
                <ImagePlaceholder label="Insert roll packing image here" code="IMG-27A" />
                <h3>Fabric & prepreg rolls</h3>
                <p>Core support, PE protection, cartons, pallets and cold-chain review where required.</p>
              </div>
              <div>
                <ImagePlaceholder label="Insert plate and tube packing image here" code="IMG-27B" />
                <h3>Plates, tubes & parts</h3>
                <p>Surface protection, reinforced cartons, pallets or wooden cases by size and route.</p>
              </div>
            </div>
            <div className={styles.logisticsRail}>
              {[
                ["01", "Protect", "Moisture, crushing, scratches and contamination"],
                ["02", "Identify", "Product code, batch, quantity and buyer reference"],
                ["03", "Confirm", "Packing photos and package data by request"],
                ["04", "Ship", "Express, air, LCL, FCL or agreed route"],
              ].map(([number, title, text]) => (
                <ProcessStep number={number} title={title} text={text} key={number} />
              ))}
            </div>
          </div>
          <PageFooter page={27} />
        </CatalogPage>

        <CatalogPage page={28} label="Customization Ability">
          <div className={styles.pageBody}>
            <SectionTitle
              code="Operations / 04"
              title="Customization Ability"
              copy="Customization works best when the commercial and technical target is defined before sampling."
            />
            <div className={styles.customizationFlow}>
              <ProcessStep number="01" title="Define" text="Application, process, dimensions and quantity." />
              <ProcessStep number="02" title="Specify" text="Fiber, weight, weave, resin, finish and tolerance." />
              <ProcessStep number="03" title="Sample" text="Trial material or prototype where required." />
              <ProcessStep number="04" title="Approve" text="Confirm specification, packing and acceptance points." />
              <ProcessStep number="05" title="Repeat" text="Production supply against the approved reference." />
            </div>
            <div className={styles.customizationMatrix}>
              {[
                ["Fabric", "Tow / weight / weave / width / roll"],
                ["Prepreg", "Reinforcement / resin / content / cure / backing"],
                ["Plate", "Thickness / size / layup / finish / CNC"],
                ["Tube", "Process / OD / ID / wall / length / finish"],
                ["Short fiber", "Length / sizing / moisture / packing"],
                ["Custom part", "Material / drawing / tolerance / finish / quantity"],
              ].map(([group, variables]) => (
                <div key={group}>
                  <strong>{group}</strong>
                  <span>{variables}</span>
                </div>
              ))}
            </div>
            <div className={styles.sampleCallout}>
              <Compass />
              <div>
                <strong>Best starting point</strong>
                <p>Send a current specification, drawing, sample photo or end-use description.</p>
              </div>
            </div>
          </div>
          <PageFooter page={28} />
        </CatalogPage>

        <CatalogPage page={29} label="Request a Quotation">
          <div className={styles.pageBody}>
            <SectionTitle
              code="Inquiry / 01"
              title="How to Request a Quotation"
              copy="A complete inquiry helps us confirm feasibility, specification, MOQ, lead time, packing and price faster."
            />
            <div className={styles.rfqChecklist}>
              {[
                ["Product family", "Woven / UD / prepreg / plate / tube / yarn / chopped fiber / other"],
                ["Specification", "Weight, weave, width, thickness, dimensions, fiber, resin or finish"],
                ["Quantity", "Trial quantity, first order and expected repeat demand"],
                ["Application & process", "What the material becomes and how it will be processed"],
                ["Destination", "Country, city, preferred Incoterm and shipment method"],
                ["Required documents", "TDS, COA, labels, inspection items and packing requirements"],
              ].map(([title, text], index) => (
                <div key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.quoteTemplate}>
              <h3>Copy into your inquiry</h3>
              <p>
                Product: ______ &nbsp; Specification: ______ &nbsp; Quantity: ______
              </p>
              <p>
                Application/process: ______ &nbsp; Destination: ______ &nbsp; Required date: ______
              </p>
            </div>
            <div className={styles.contactBand}>
              <Mail />
              <strong>
                <a href={siteConfig.emailHref}>{siteConfig.email}</a>
              </strong>
              <Phone />
              <strong>
                <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
                {" / "}
                <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </strong>
            </div>
          </div>
          <PageFooter page={29} />
        </CatalogPage>

        <CatalogPage page={30} label="Product Selection Matrix">
          <div className={styles.pageBody}>
            <SectionTitle
              code="Inquiry / 02"
              title="Product Selection Matrix"
              copy="Use this page as a starting point. Final material selection remains application- and process-specific."
            />
            <DataTable
              compact
              columns={["Product family", "Common process", "Selection purpose", "Main variables"]}
              rows={selectionRows}
            />
            <div className={styles.selectionNotes}>
              <div>
                <ShieldCheck />
                <strong>Engineering review</strong>
                <p>Load-bearing and safety-critical parts require the buyer’s qualified engineering approval.</p>
              </div>
              <div>
                <Workflow />
                <strong>Process trial</strong>
                <p>Resin compatibility, forming, dispersion and machining should be confirmed by trial.</p>
              </div>
              <div>
                <PackageCheck />
                <strong>Commercial confirmation</strong>
                <p>MOQ, lead time, tolerance, documents and packing are defined in the quotation.</p>
              </div>
            </div>
            <RfqBand message="Send your application and process if the correct material group is not obvious." />
          </div>
          <PageFooter page={30} />
        </CatalogPage>

        <CatalogPage page={31} label="Contact">
          <div className={styles.pageBody}>
            <SectionTitle
              code="Inquiry / 03"
              title="Let’s Build the Right Material Specification"
              copy="Contact the export team with your product, process, quantity and destination."
            />
            <div className={styles.contactGrid}>
              <div className={styles.contactDetails}>
                <div>
                  <Building2 />
                  <span>Company</span>
                  <strong>Zhejiang FRPHome New Material Co., Ltd. / 浙江福昊新材料有限公司</strong>
                </div>
                <div>
                  <Mail />
                  <span>Email</span>
                  <strong>
                    <a href={siteConfig.emailHref}>{siteConfig.email}</a>
                  </strong>
                </div>
                <div>
                  <Phone />
                  <span>Phone / WhatsApp</span>
                  <strong>
                    <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
                    {" / "}
                    <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                      WhatsApp
                    </a>
                  </strong>
                </div>
                <div>
                  <Globe2 />
                  <span>Website</span>
                  <strong>{siteConfig.url.replace(/^https?:\/\//, "")}</strong>
                </div>
                <div>
                  <MapPin />
                  <span>Location</span>
                  <strong>{siteConfig.location}</strong>
                </div>
              </div>
              <div className={styles.qrPlaceholder}>
                <Boxes />
                <strong>INSERT CONFIRMED QR CODE</strong>
                <span>Website or WhatsApp destination</span>
              </div>
            </div>
            <ImagePlaceholder label="Insert export team, factory or location image here" code="IMG-29" />
            <div className={styles.contactReminder}>
              Confirm the legal address, active sales contacts and QR destination before final
              publication.
            </div>
          </div>
          <PageFooter page={31} />
        </CatalogPage>

        <CatalogPage page={32} dark className={styles.backCover}>
          <div className={styles.coverTexture} />
          <div className={styles.backCoverInner}>
            <div className={styles.coverBrand}>
              <img src="/images/brand/frphome-logo-white.png" alt="FRP HOME 福昊" />
            </div>
            <h2>Materials shaped around your composite process.</h2>
            <div className={styles.backContact}>
              <a href={siteConfig.emailHref}>{siteConfig.email}</a>
              <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
              <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <span>{siteConfig.url.replace(/^https?:\/\//, "")}</span>
              <span>{siteConfig.location}</span>
            </div>
            <div className={styles.backLine} />
            <p>Zhejiang FRPHome New Material Co., Ltd. / 浙江福昊新材料有限公司</p>
          </div>
        </CatalogPage>
      </main>
    </div>
  );
}
