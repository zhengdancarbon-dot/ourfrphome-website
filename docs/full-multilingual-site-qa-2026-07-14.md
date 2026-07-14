# FRP HOME 全语言网站 QA 报告

日期：2026-07-14（2026-07-15 补充真实 RFQ 投递与 Preview 等价浏览器验收）
分支：`codex/i18n-full-site-qa`
生产域名：`https://www.myfrphome.com`
Preview：`https://ourfrphome-website-git-codex-i18n-full-site-qa-zhendgan.vercel.app`
发布状态：Preview `READY`；未合并主分支；未部署生产

## 1. 结论

本次审计覆盖 English、Español、Português BR、Русский、العربية、Français、한국어、Polski、Türkçe。

- sitemap 共 171 个 URL：English 43 个，其余 8 种语言各 16 个。
- 171/171 页面本地生产构建返回 200。
- title、H1、canonical、hreflang、图片 alt 和内部链接自动检查全部通过。
- 64 个本地化产品页的 Product、FAQPage、BreadcrumbList Schema 通过。
- 32 个本地化应用页的 WebPage/Application、FAQPage、BreadcrumbList Schema 通过。
- `/en` 与未翻译的本地化路由保持 404，没有英文自动回退页。
- 桌面 Products mega menu、手机菜单、语言切换、RTL、图片放大和 RFQ 校验已完成浏览器验收。
- Preview 构建已完成；当前自动化环境无法读取受保护的 Vercel Preview DOM，因此使用同一分支、同一生产构建完成 Playwright 等价验收。九种语言的真实 RFQ 邮件投递已通过本地生产构建和 Preview RFQ 环境完成。

## 2. 已发现并修复的问题

| 严重级别 | 问题 | 修复结果 | 主要文件 |
| --- | --- | --- | --- |
| Blocker | RU/AR/FR/KO/PL/TR 内容未接入，构建失败 | 六种语言 16 个 Phase 1 页面全部接线，构建恢复 | `lib/i18n/extended-page-content.ts`, `lib/i18n/page-content.ts` |
| High | 九种语言横向排列导致桌面和手机拥挤 | 改为原生可访问下拉菜单，显示当前语言和 9 个可用语言 | `components/language-switcher.tsx`, `app/globals.css` |
| High | 手机主菜单默认展开完整产品树 | Products 改为折叠式 `details/summary`，默认只显示顶层导航 | `components/site-header.tsx`, `app/globals.css` |
| High | 阿拉伯语 Contact 页横向宽度超过 10,000px | honeypot 改为 clip 隐藏，不再使用负 10,000px 定位；复测宽度 390/390 | `app/globals.css` |
| High | 阿拉伯语缺少 RTL，根布局只识别旧语言 | 九种语言设置正确 `lang`；AR 设置 `dir=rtl`；表单、邮箱、电话和技术值保持自然方向 | `app/layout.tsx`, `components/document-language.tsx`, `app/globals.css` |
| High | 本地化页可能链接到未翻译内容且没有提示 | 只本地化已发布路由；必须返回英文的链接增加 `(EN)` 与 `hrefLang=en` | `components/site-header.tsx`, `components/site-footer.tsx`, `components/localized-pages.tsx` |
| Medium | 新语言 RFQ 产品类型和规格字段存在英文占位 | 补齐产品类型、动态规格字段、校验、CTA、合规与文件上传文案 | `lib/i18n/extended-ui-copy.ts`, `components/inquiry-form.tsx` |
| Medium | 本地化 Products 菜单重复列出同一路由的英文规格变体 | 按 href 去重并使用本地化主产品名 | `components/site-header.tsx`, `lib/i18n/extended-ui-copy.ts` |
| Medium | RU/AR/FR/KO/PL/TR 首页 title/H1 由两个短句直接拼接，出现句号重复和语序不自然 | 为六种语言设置完整、自然的首页主标题，并完成桌面和手机复测 | `lib/i18n/extended-page-content.ts` |
| Medium | 图片放大读屏标签只有英文，弹窗背景可滚动 | 九语种 aria-label；弹窗打开时锁定 body 滚动 | `components/product-image-zoom.tsx` |
| Medium | GA4 locale、Organization/WebSite Schema 只覆盖 EN/ES/PT-BR | 扩展至 9 种语言，事件继续携带 locale | `app/layout.tsx`, `components/inquiry-form.tsx` |
| Low | 旧文档仍称 RU/TR 未发布 | 加历史状态提示并更新九语种监控模板 | `docs/*.md` |
| Low | Catalog 仍出现未经当前文件支持的产能措辞 | 删除旧的 annual capacity 引用，改为需当前公司确认和文件支持 | `app/catalog/page.tsx` |

## 3. 自动化 URL 审计

| 检查项 | 结果 |
| --- | ---: |
| sitemap HTTP 状态 | 200 |
| sitemap URL 总数 | 171 |
| English | 43 |
| Español | 16 |
| Português BR | 16 |
| Русский | 16 |
| العربية | 16 |
| Français | 16 |
| 한국어 | 16 |
| Polski | 16 |
| Türkçe | 16 |
| 非 200 页面 | 0 |
| 缺少 title | 0 |
| 缺少 H1 | 0 |
| canonical 不匹配 | 0 |
| hreflang 不完整 | 0 |
| 图片缺少 alt 的页面 | 0 |
| 内部 404 链接 | 0 |
| 重复 `FRP HOME` title | 0 |
| 唯一图片源 | 99 |
| 失败图片源 | 0 |

每个本地化页面组均包含：

- `en`
- `es`
- `pt-BR`
- `ru`
- `ar`
- `fr`
- `ko`
- `pl`
- `tr`
- `x-default` 指向英文根页面

## 4. 负向路由检查

| 路由 | 预期 | 结果 |
| --- | ---: | ---: |
| `/en` | 404 | 404 |
| `/en/products` | 404 | 404 |
| `/ru/not-translated` | 404 | 404 |
| `/ar/technical-center` | 404 | 404 |
| `/tr/about` | 404 | 404 |

## 5. 语言与技术参数

- ES 页面未检测到明显 PT-BR 混入。
- PT-BR 页面未检测到明显 ES 混入。
- RU/AR/FR/KO/PL/TR 未检测到 `Request a Quote`、`Quick Answer`、`End-use review`、`Submit RFQ` 或 `Loading RFQ form` 等可见英文 UI 残留。
- 明确返回英文资料页的导航保留本地化名称并标记 `(EN)`。
- `3K`、`12K`、`T300`、`T700`、`UD`、`CFRP`、`PAN`、`8x8mm`、`10x10mm` 保持原样。
- `spread tow`、`tow`、`prepreg`、`CFRP` 等行业词在适合的语言中作为技术术语保留。

## 6. 视觉与交互 QA

桌面基准：1440x900。手机基准：390x844。

已验证模板：

- Home
- Products
- Contact / RFQ
- Catalog
- Product detail
- Application detail

重点结果：

- 9 个语言首页在桌面端逐页通过：HTTP 200、title/H1、`lang`/`dir`、图片、首屏宽度和控制台均正常。
- 40 个本地化模板页通过：8 种本地化语言分别覆盖 Products、Contact、Catalog、产品详情和应用详情；canonical 自引用且每组有 9 种语言加 `x-default`。
- 9 个语言首页在手机端逐页通过：宽度 390/390，无横向滚动、破图、错误覆盖层或控制台错误。
- Arabic Home 和 Contact 正确 RTL，无横向滚动。
- Polish 长标题在桌面和手机端均未溢出。
- 桌面 Products mega menu 左右边界为 130px / 1310px，完整位于 1440px 视口内，左列不再被遮挡。
- 手机 Products 默认折叠；展开后 15 个唯一入口，无重复 href，宽度 390/390。
- 手机语言菜单有 9 个入口和 1 个当前语言标记，无横向滚动。
- 产品图片放大弹窗可通过按钮打开、关闭按钮和 Escape 关闭；背景滚动已锁定。
- Contact/RFQ 文件字段接受 PDF、DOC/DOCX、XLS/XLSX、JPG/PNG、DXF、STEP/STP。
- 阿拉伯语空表单校验显示 5 个本地化错误，没有发出网络请求。

## 7. SEO 与 Schema

- robots.txt：允许公开抓取，禁止 `/api/`，引用 `https://www.myfrphome.com/sitemap.xml`。
- sitemap 仅使用 `https://www.myfrphome.com`。
- canonical 和 OpenGraph URL 使用生产域名。
- Product、FAQPage、BreadcrumbList 和应用页 WebPage/Application Schema 均保留本地化名称与 URL。
- Organization/WebSite Schema 的 `availableLanguage` / `inLanguage` 覆盖九种语言。
- `/internal-sales-link-guide` 保持 `noindex, nofollow`，且不在 sitemap 中。

## 8. RFQ 与分析

代码检查结果：

- `/api/inquiry` 使用 Vercel Node.js runtime。
- API 响应结构未改变。
- Resend 对 429/瞬时错误最多重试 2 次，等待 1000ms 和 2500ms。
- 验证错误和缺少环境变量不会重试。
- 邮件正文包含 `Locale` 和 `Source Page`，并生成完整生产 URL。
- GA4 继续记录 `rfq_submit`、`whatsapp_click`、`email_click`、`catalog_download`，事件携带 locale。

Preview 环境变量（不显示值）：

| 变量 | 状态 | 影响 |
| --- | --- | --- |
| `RESEND_API_KEY` | PRESENT | RFQ 必需 |
| `INQUIRY_TO_EMAIL` | PRESENT | RFQ 必需 |
| `INQUIRY_FROM_EMAIL` | PRESENT | RFQ 必需 |
| `GSC_VERIFICATION_CODE` | PRESENT | 搜索验证 |
| `GA4_MEASUREMENT_ID` | MISSING | Preview 分析事件不可在 GA4 后台验证 |
| `BING_VERIFICATION_CODE` | MISSING | Preview Bing 验证不可确认 |

真实 RFQ 投递测试于 2026-07-15 执行，收件地址为 `info@hntzxcl.com`。每封邮件使用对应 locale 和 Contact source URL；提交间隔约 3.5 秒，未触发 Resend rate limit，也未出现重试或投递错误。

| 语言 | Locale | Source Page | API 结果 |
| --- | --- | --- | --- |
| English | `en` | `/contact` | 200, `{ "ok": true }` |
| Español | `es` | `/es/contact` | 200, `{ "ok": true }` |
| Português BR | `pt-br` | `/pt-br/contact` | 200, `{ "ok": true }` |
| Русский | `ru` | `/ru/contact` | 200, `{ "ok": true }` |
| العربية | `ar` | `/ar/contact` | 200, `{ "ok": true }` |
| Français | `fr` | `/fr/contact` | 200, `{ "ok": true }` |
| 한국어 | `ko` | `/ko/contact` | 200, `{ "ok": true }` |
| Polski | `pl` | `/pl/contact` | 200, `{ "ok": true }` |
| Türkçe | `tr` | `/tr/contact` | 200, `{ "ok": true }` |

API 接受结果已确认。收件箱中的邮件正文仍需人工抽查 `Locale`、`Source Page` 和完整 `Submitted from` URL 的显示，因为自动化环境无权读取该外部邮箱。

## 9. 构建结果

| 命令 | 结果 |
| --- | --- |
| `pnpm lint` | PASS |
| `pnpm build` | PASS |
| Next.js TypeScript check | PASS |
| Static page generation | PASS, 180 pages |

## 10. Preview 状态

- Git 分支：`codex/i18n-full-site-qa`
- Preview 跟踪分支：`codex/i18n-full-site-qa`
- Vercel deployment state：`READY`
- 稳定分支 Preview URL：`https://ourfrphome-website-git-codex-i18n-full-site-qa-zhendgan.vercel.app`
- 当前自动化环境访问结果：Vercel Preview Protection / 网络超时，无法完成外网 DOM smoke test。
- 同分支生产构建 Playwright 等价 smoke test：通过；覆盖 9 个桌面首页、40 个本地化模板页、9 个手机首页及核心交互。

## 11. 剩余风险与上线前动作

1. 受保护 Preview 的外网 DOM 尚无法由当前自动化环境直接读取；合并前建议在已登录 Vercel 的普通浏览器中快速确认稳定 Preview URL 可打开。
2. 在收件箱抽查九封测试邮件，确认正文显示对应 locale、source URL 和完整生产 URL。
3. Preview 的 `GA4_MEASUREMENT_ID`、`BING_VERIFICATION_CODE` 当前缺失；它们不阻断 RFQ，但阻断 Preview 分析/搜索验证码验证。
4. Preview 批准前不要合并主分支，不要部署生产。
5. 生产批准后再向 Google Search Console 和 Bing Webmaster Tools 重新提交 171 URL sitemap。

## 12. 内容与合规检查

- 未新增未经证明的认证、官方授权、年产能、测试报告或客户案例。
- 未新增军事、武器化无人机、导弹或作战用途措辞。
- 最终用途和最终用户审查语言在九种语言中保持有效。
