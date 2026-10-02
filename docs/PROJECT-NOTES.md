# VIREN Pharma website — working brief and design plan

## 10-line working brief
1. Business: fictional pharmaceutical and healthcare company focused on development, manufacturing, and distribution.
2. Audience: healthcare professionals, patients/consumers, business partners, and job applicants across Egypt and the wider MENA region.
3. Goal: establish corporate credibility, help visitors understand the portfolio and capabilities, and support future inquiries and recruitment.
4. Primary CTA: “Explore products” → `/products`; product-information requests lead to `/contact` with the selected product prefilled.
5. Pages: Home, About, Products with seven product detail pages, Science & Innovation, Manufacturing, Quality, Healthcare Professionals, News & Insights with four article pages, Careers with five role pages, and Contact.
6. Language: English for this first build, based on the supplied English brief; Arabic/RTL support remains an assumption to confirm before a regional launch.
7. Constraints: every company, product, statistic, article, facility, and job is fictional; no clinical instructions, real ingredient claims, real submission backend, account system, analytics, or external tracking.
8. CTA behavior: browsing stays internal; inquiry forms show a local demo success state and transmit or save no personal information.
9. Technical direction: Next.js App Router, TypeScript, Tailwind CSS, and Motion for React; content lives in structured data modules.
10. Design direction: quiet scientific editorial design—warm white, deep ink, cool mineral gray, and a restrained medical blue; original vector imagery and precise, reduced-motion-aware transitions.

## Facts-and-assumptions register

| Topic | Supplied / verified for this fictional brief | Assumption or implementation decision |
| --- | --- | --- |
| Offer | VIREN Pharma develops, manufactures, and distributes healthcare products; four business areas are pharmaceuticals, consumer health, medical products, and R&D. | Use only the supplied positioning and illustrative portfolio in public copy. |
| Audience | Healthcare professionals, patients/consumers, partners, and potential employees. | Provide distinct paths through products, professional resources, partnership contact, and careers. |
| Company context | Fictional company; Cairo, Egypt headquarters; intended markets are Egypt, the Middle East, and North Africa. | Display a persistent concept/demo notice so fictional identity and content cannot be mistaken for a real provider. |
| Goals | Corporate identity, trust, portfolio discovery, capability explanation, professional resources, partnerships, hiring, and qualified inquiries. | Product browsing is the primary homepage action; secondary actions are context-specific. |
| CTA and destination | “Explore Our Products” is supplied. | Route to `/products`; product inquiries route to `/contact` with a prefilled inquiry type/product. Contact submissions remain local demo interactions. |
| Pages | Eleven main page types plus product details, article details, and job details. | Implement all as App Router routes from shared layouts and structured data. |
| Language | Supplied copy is English. | English-only for this build. Arabic translation and RTL review need confirmation and native copy review. |
| Supplied facts | Tagline “Advancing Better Health.”; five named fictional sample products; illustrative stats 18+ years, 42+ products, 6 markets, and 3 facilities. | Mark the portfolio and metrics as fictional/demo content on every route. Two extra portfolio entries only demonstrate category/filter states; confirm, replace, or remove them before release. |
| Unverified fields | Domain, direct contact details, active ingredients, pack sizes, safety information, licenses/certifications, facility proof, real roles/news, and approved legal text were not supplied. | Omit real-world claims and actionable medical guidance. The concept portfolio uses clearly fictional formulation/packaging labels only. List launch replacements in `CONTENT-TODO.md`. |
| Technical conventions | No repository or pre-existing stack was present; the brief specifies Next.js, TypeScript, Tailwind CSS, and Framer Motion. | Use the current Motion for React package/API (`motion` / `motion/react`) and official Tailwind Next.js setup; no backend or extra service. |
| External dependencies | No third-party analytics, form destination, CMS, or auth was requested. | No external runtime services, tracking, cookies, or data transmission. Production domain-dependent metadata activates only when configured. |

## Design rationale
A pharmaceutical audience needs quick orientation and calm, legible information. The site uses an editorial grid and strong typographic hierarchy to feel established without imitating a hospital or a generic blue SaaS template. Near-black ink and warm white establish contrast; mineral gray supports technical detail; a restrained blue is reserved for interactive and scientific cues. A single sans-serif family keeps the voice precise. Original laboratory still-life vector art avoids implying that VIREN owns an unverified facility or team. Product packs are abstract concept renderings and carry a demo-only label. Motion is slow and subordinate to content, with a reduced-motion path and no information hidden behind animation.

## Information architecture and user journeys

- Home → Products → Product detail → Product information request → Contact demo form.
- Home → Healthcare Professionals → Product search/resources → Contact demo form.
- Home → About → Manufacturing → Quality → Partnership inquiry.
- Home → Careers → Role detail → Careers inquiry form.
- Home → News & Insights → Article detail → Related capabilities/products.

Main navigation groups company pages, portfolio, healthcare professionals, insights, and careers. Contact/help remains visible in the header and footer.

## Component and data architecture

- Shared shell: Header, mobile navigation, concept notice, Footer, breadcrumbs, page hero, section heading, CTA, disclosure/accordion, and icon set.
- Reusable content UI: Product card/grid, filterable product explorer, fictional product-pack illustration, stats, business-area card, process timeline, quality system diagram, article card/grid, job filters/list, and labeled inquiry form.
- Server-rendered pages and data by default. Client code is limited to navigation state, product/job filters, form states, and small motion elements.
- Structured data modules: `site` (including business areas and manufacturing steps), `products`, `articles`, and `careers`.
- Routes: `/`, `/about`, `/products`, `/products/[slug]`, `/science-innovation`, `/manufacturing`, `/quality`, `/healthcare-professionals`, `/news-insights`, `/news-insights/[slug]`, `/careers`, `/careers/[slug]`, `/contact`.

## Image and interaction plan

- Image role: immersive homepage scientific still-life. Three free Unsplash candidates were reviewed; the available photos either depict a specifically described historic USSR lab or a clinical glass pitcher, so they were rejected for mismatch and risk of implying a real facility. Use original local vector artwork instead.
- Supporting visuals are original local SVG diagrams and abstract product-pack illustrations. No remote assets, fonts, or scripts are used at runtime. See `IMAGE-CREDITS.md` for candidate comparison and asset details.
- Product and job search/filter controls have labeled inputs, a reset path, result counts, and empty states. Contact forms validate natively and announce a local-only success/error state. Header and disclosure controls support keyboard focus; Escape closes mobile navigation and returns focus.

## SEO and release limits

Page titles/descriptions are unique. The production domain was not supplied, so canonical, absolute social URLs, and sitemap URLs are enabled only after `NEXT_PUBLIC_SITE_URL` is configured; no placeholder domain is published. `robots.txt` remains crawlable and exposes the sitemap only when a real base URL is set. Replace demo claims, content, product information, and legal/privacy text before a real deployment.
