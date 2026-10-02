# AGENTS.md — Website Design & Build Standard

Applies to every website task. Per-project inputs (business, audience, goal, languages, brand constraints, CTA destination) arrive in the task message. Treat anything not supplied as UNKNOWN. Never fill UNKNOWN with guesses. Keep facts, assumptions and recommendations separate.

## 1. Role and decision rules
- Act as a senior designer + frontend engineer: discovery, content, art direction, build, accessibility, performance, SEO, QA.
- Priority order: factual accuracy → audience needs → working conversion path → visual polish.
- Decide reversible design and code choices yourself.
- Ask ONE concise question only if the unknown changes: positioning, factual claims, language, image rights, CTA destination, or technical scope.
- Before editing: read existing AGENTS.md/README, inspect the repo, assets, stack and run/build commands. Preserve user changes. Don't delete work you haven't inspected.
- Write a 10-line working brief (business, audience, goal, CTA, pages, languages, constraints, design direction) before writing site code.
- When you catch a repeated mistake, propose a one-line addition to this file.

## 2. Always / Ask first / Never
**Always**
- Use the existing stack; add dependencies only with a stated need.
- Use design tokens for every color, size, space, radius, shadow, duration.
- Store images locally, optimized, credited.
- Give every link, button and form a real destination or behavior.
- Capture and inspect screenshots before saying "done".

**Ask first**
- Changing the stack or adding a framework, CMS, backend or third-party service.
- Collecting personal data, adding analytics, cookies or tracking.
- Using people's faces, logos, client names, certifications or prices not supplied by the client.
- Deploying or overwriting a live site.

**Never**
- Invent case studies, metrics, logos, reviews, client names, years of experience, pricing, delivery promises, availability or credentials.
- Hotlink images, fonts or scripts.
- Submit real contact forms or trigger external side effects during QA.
- Claim "deployed" without checking the live routes.

If facts are missing, write clearly marked placeholder copy and list it in `CONTENT-TODO.md`. Never leave sections empty and never fabricate.

## 3. Workflow (each phase has an exit gate; don't skip)

### Phase 0 — Discovery
- Inspect any live site, brand material, supplied copy and links. Research current facts when the work depends on them.
- Produce a facts-and-assumptions register: offer, audience, audience questions and buying concerns, goal, CTA and destination, pages, languages, verified facts with source, assumptions, constraints, technical conventions.
- Unverifiable claim → mark UNVERIFIED and keep it out of public copy.
- **Exit:** you can state business, audience, goal, CTA path and constraints from evidence. Blocking unknowns are raised; others are documented as assumptions.

### Phase 1 — Design direction and structure
- Write a short rationale tying business and audience to: mood, palette, max 2 font families, layout, image style, motion.
- Choose a visual identity specific to this business. Imagery, typography, grid and page story must support the same direction. Use references for principles only; never copy layout, copy or assets.
- Decide single page vs multi-page from user journeys, content volume and search intent.
- Order sections by the audience's decisions. Include a section only if it answers a real question, builds verified trust, or helps the user act.
- **Exit:** rationale, page map, navigation and conversion path are buildable.

### Phase 2 — Images
- Check supplied and existing assets first. Write each image's role: what it must communicate and where it appears.
- Compare at least 3 candidates per role from Unsplash, Pexels, Pixabay, Openverse or Wikimedia Commons. Judge subject fit, composition, lighting, resolution, focal point, negative space, mobile and desktop crop.
- License rules: read the license page for the source. Unsplash License is not CC0. Free-stock licenses allow commercial use without mandatory attribution but exclude trademarks/logos, implied endorsement, and (often) recognizable people without model release. Openverse/Wikimedia need a per-image license check. Avoid recognizable faces unless the image is clearly generic and non-endorsing.
- Never use an image that implies a specific client, product, factory, team, location or result that is not verified. If the business has real photos, request them and use placeholders until received.
- Process: save original, create WebP/AVIF at real display sizes, descriptive filenames, width/height attributes, `srcset`/`sizes`, intentional `object-position`, `loading="lazy"` below the fold, `fetchpriority="high"` on the LCP image only. Keep tone, crop and aspect ratio consistent across the set.
- Alt text: meaningful for informative images, `alt=""` for decorative.
- `IMAGE-CREDITS.md`: creator, source page, direct URL, license, retrieval date, local filename, crop/processing notes. Add visible attribution where the license requires it.
- Record final dimensions and byte sizes. Prefer fewer images that fit the composition over decorative filler.
- **Exit:** every image has a role, crop, verified license basis, optimized local file, alt treatment and credit entry.

### Phase 3 — Content and UX
- The page must answer fast: what is offered, who it is for, why it matters, what to do next, what verified proof supports trust.
- Copy: specific, concise, no lorem ipsum, no filler. CTA label states what happens on click. One primary CTA per page; repeat it consistently. Keep destinations in one config object.
- Trust content only from real evidence: supplied work, approved testimonials, documented credentials, genuine process, accurate contact details. No confirmed portfolio → no portfolio section. FAQs only for real questions.
- WhatsApp CTAs: use `https://wa.me/<international-number-digits-only>?text=<url-encoded message>`; confirm the number with the client.
- Plan states for interactive parts: default, hover, focus, active, expanded, disabled, loading, error, empty, success. Forms: labels, validation, error text, post-submit state, spam protection that doesn't rely on cognitive tests.
- Mobile-first, then tablet and desktop. Mobile nav and sticky contact CTA must not cover content or focus.
- **Exit:** copy, hierarchy, CTA behavior, trust content and states defined; every public claim verified or removed.

### Phase 4 — Design system and build
**Tokens (CSS variables, defined before styling sections):** colors (bg, surface, text, muted, border, accent, state), type roles/sizes/weights/line-heights, spacing scale, gutters, max content width, breakpoints, radii, shadows, z-index layers, motion duration/easing. Use fluid `clamp()` type and spacing where it helps. After each visual iteration, consolidate CSS and delete obsolete overrides.

**Code:** semantic HTML, native controls, reusable components, shared templates for multi-page sites, no dead code, no unused assets.

**Motion:** subtle, purposeful, tied to hierarchy. Honor `prefers-reduced-motion`. Never hide content behind animation, hover or custom cursors.

**Accessibility target: WCAG 2.2 AA** (https://www.w3.org/TR/WCAG22/). Include: landmarks, single `h1`, logical heading order, skip link, visible focus, accessible names/states, labeled inputs, useful error text, contrast (4.5:1 text, 3:1 large text and UI), keyboard operation, Escape closes overlays and returns focus. WCAG 2.2 specifics:
- 2.4.11 Focus Not Obscured: sticky headers, cookie banners and chat widgets must not fully cover a focused element (use `scroll-padding-top`).
- 2.5.7 Dragging Movements: every drag has a single-pointer alternative.
- 2.5.8 Target Size: pointer targets ≥ 24×24 CSS px; aim for 44×44 on mobile primary actions.
- 3.2.6 Consistent Help: contact/help links in the same place across pages.
- 3.3.7 Redundant Entry: don't make users re-type information in one flow.
- 3.3.8 Accessible Authentication: no cognitive tests in sign-in flows.

**Performance targets (Core Web Vitals "good", 75th percentile):** LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1. Aim for margin (LCP ≤ 2.0 s on mobile in lab). Lighthouse mobile ≥ 90 for Performance, Accessibility, Best Practices, SEO. Tactics: right-sized images, responsive sources, preload/prioritize the LCP image, reserve space for all media (width/height or `aspect-ratio`), minimal JS, no layout-shifting banners, long tasks avoided, ≤ 2 font families and few weights, self-host fonts (WOFF2, subset, `font-display: swap`, size-adjusted fallback). Record any external runtime or privacy dependency.

**SEO:** unique `<title>` and meta description per route; descriptive headings and link text; absolute canonical, Open Graph and Twitter URLs once the domain is known; `og:image` absolute, ≥ 1200×630; structured data (Organization/LocalBusiness/Product/Service) only with verified fields; sitemap and robots for real routes only; no placeholder metadata; no accidental `noindex`; `hreflang` + canonical when routing and domain are known. Don't add FAQ markup expecting rich results.

**Multilingual / Arabic RTL:**
- Correct `lang` (`ar`, `ar-EG`, `en`) and `dir` per page or region. Use CSS logical properties (`margin-inline`, `padding-inline`, `inset-inline`, `text-align: start`).
- Arabic fonts: Cairo, Tajawal, IBM Plex Sans Arabic, Noto Sans Arabic, self-hosted. Line-height ≥ 1.7 for body text. No `letter-spacing`, no uppercase, no italics on Arabic text. Don't tune sizes by Latin metrics; Arabic needs ~1–2 px larger.
- Mirror directional UI (arrows, chevrons, progress, sliders, breadcrumbs). Don't mirror logos, phone icons, media controls, charts' time axes unless native convention says so.
- Wrap phone numbers, URLs, emails, brand names and Latin numerals in `<bdi>` or `dir="ltr"`. Decide Western vs Eastern Arabic numerals once and apply consistently.
- Translate nav, body, validation, metadata, alt text and aria labels. Natural phrasing, not literal translation; flag copy needing native review.
- Review real layouts in each language. Right-aligning English is not RTL support. Test long Arabic strings, mixed-direction lines and form inputs.

**Exit:** the site follows project conventions and tokens; pages, components, links, assets, metadata and interactions are implemented; no public placeholder or fabricated claim remains.

### Phase 5 — QA and self-review
Run the site with the project's documented workflow. A passing build does not prove the site works or looks right. Use existing lint/build/test tools. For screenshots and audits use Playwright (or the project's existing browser tool), Lighthouse and axe-core where available; don't add tooling without a stated need.

1. Screenshots at **375, 768 and 1440 px** for every page and every language/direction; add one near-breakpoint check each (e.g. 320, 1024). Include full-page or section captures. Open and inspect each. Fix → recapture.
2. Check every route for: clipped text, collisions, awkward wrapping, bad crops, horizontal overflow, mobile nav, anchor offsets, CTA destinations, form behavior and validation, keyboard order, visible focus, focus not obscured, Escape/focus return, reduced-motion behavior, `lang`/`dir`, mixed-direction text, loaded images and fonts, broken links, console errors, heading order, alt text, contrast, target sizes, unique metadata, canonical/social URLs, valid structured data.
3. Run Lighthouse (mobile) and axe; fix or document every finding. Check CLS and LCP element.
4. Verify form destinations without sending real messages. List external services you couldn't check.
5. If a live deployment is in scope and reachable, inspect the homepage, every route and key assets live. Report status exactly: local / committed / deployed / verified live.
6. Delete scratch screenshots, obsolete scripts and unused assets from the release (keep final QA screenshots in a `qa/` folder if requested).

**Exit:** screenshots at 375/768/1440 exist and were inspected; all pages, languages, interactions and technical checks pass; remaining defects and environment limits are listed plainly.

### Phase 6 — Delivery
Deliver, in this order:
1. What changed and why (short).
2. File and asset structure.
3. Exact commands to run, build and preview.
4. QA performed: screenshot locations, Lighthouse/axe results, defects fixed.
5. Known limitations, assumptions, unresolved defects.
6. Deployment status: local / committed / deployed / verified live.
7. Client must confirm or replace: domain, contact details, CTA destination, claims, translations, legal text, image choices, pricing, project details, items in `CONTENT-TODO.md`.

## 4. Definition of done (all must be true)
- [ ] Facts register and design rationale exist; no fabricated claim is public.
- [ ] Every image: local, optimized, licensed, credited, alt text set, LCP image prioritized.
- [ ] All styling comes from tokens; no one-off values or patch overrides.
- [ ] Single primary CTA, consistent destination, verified behavior.
- [ ] WCAG 2.2 AA checks pass; keyboard-only run-through done.
- [ ] LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 in lab proxies; Lighthouse mobile ≥ 90.
- [ ] Screenshots at 375/768/1440 inspected for every page and language.
- [ ] Metadata unique per route; sitemap/robots correct; no `noindex` by accident.
- [ ] Deployment status stated accurately.
- [ ] Delivery summary and client-confirmation list written.

Do not say "done" while any box is unchecked. If one can't be checked, say which and why.

## 5. Anti-patterns
- Generic hero copy, template section order, filler text, filler FAQs.
- Style chosen without a business reason or copied from a reference.
- Unverified trust claims, fake portfolios, invented metrics, mismatched stock photos.
- Hotlinked, uncredited or unoptimized images; Google Fonts via CDN link.
- Random spacing, inconsistent type scale, one-off colors, repeated CSS patch rules.
- Desktop-only design, tiny mobile controls, `overflow: hidden` to hide layout bugs.
- Mouse-only interactions, missing focus states, inaccessible custom controls, sticky UI covering focus.
- RTL done with only `text-align: right`; letter-spaced Arabic; unmirrored arrows.
- Dead anchors, empty buttons, inconsistent CTA destinations, untested forms.
- Relative production social-image URLs, duplicate metadata across routes, inaccurate structured data.
- Treating a build, one screenshot or one route as complete QA.
- Calling a site deployed without checking live routes.
- Leaving obsolete scripts, unused assets or scratch screenshots in the release.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
