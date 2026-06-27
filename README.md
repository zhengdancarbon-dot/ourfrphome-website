# FRP HOME B2B Website

English B2B website for Zhejiang FRPHome New Material Co., Ltd. / FRP HOME, built
with Next.js App Router, React, TypeScript and Tailwind CSS.

## Local development

1. Install Node.js 20.9 or newer.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a local environment file:

   ```bash
   cp .env.example .env.local
   ```

4. Replace the example domain, email, phone and WhatsApp values in `.env.local`.
5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000).

## Production check

```bash
npm run build
npm run start
```

## Digital product catalog

The first working carbon-fiber product catalog is available at:

```text
http://localhost:3000/catalog
```

The catalog is built as 32 separate A4 pages. Product data is stored in
`src/data/products.json`, while the layout and print rules are in
`app/catalog/`.

### Preview

1. Start the development server with `npm run dev`.
2. Open `http://localhost:3000/catalog`.
3. Use the floating toolbar to jump to the contents or RFQ guide.

### Export to PDF

1. Open the catalog in Chrome or Edge.
2. Click **Print / Save PDF**.
3. Select **Save as PDF**.
4. Use A4 paper, portrait orientation, 100% scale and zero margins.
5. Enable background graphics so graphite pages and orange accents are retained.

The print stylesheet removes the screen toolbar and page shadows, keeps each
catalog page at exactly 210 × 297 mm, and inserts a page break after every page.

### Catalog working files

- `docs/old-catalog-content-audit.md` — audit of the 2023 reference catalog.
- `docs/new-catalog-outline.md` — approved 32-page information architecture.
- `docs/catalog-image-placeholders.md` — replacement photography checklist.
- `docs/design-concepts/` — generated visual direction references.
- `src/data/products.json` — reusable product-group data.
- `app/catalog/catalog.module.css` — screen and print CSS.

Before final publication, replace every labeled image placeholder and confirm
company capacity, equipment count, legal address, contact information, product
availability and all technical values.

## Before launch

- Confirm product ranges, tolerances, fiber grades, MOQ and lead times.
- Replace `public/images` with approved factory and product photography if needed.
- Follow [PRODUCTION_DEPLOYMENT.md](./PRODUCTION_DEPLOYMENT.md) to configure
  Vercel, the production domain and inquiry email delivery.
