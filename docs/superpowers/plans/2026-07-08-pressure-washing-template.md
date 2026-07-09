# AquaBlast Pressure Washing — Implementation Plan

## Goal
Re-skin `hvac-template` (forked as `pressure-washing-template`, commit
`0061b7b`) into "AquaBlast Pressure Washing", per
`docs/superpowers/specs/2026-07-08-pressure-washing-template-design.md`.

## Method
One task at a time, in order. Before each commit: `npm run typecheck` must
pass. Commit after every task (small, reviewable commits — matches the
established convention across this template family). Use `git add <specific
paths>`, never a bare `git add -A`, except in the final sweep task.

## Global Constraints (identity — see spec for full detail)
- Name: **AquaBlast Pressure Washing** · Tagline: "Central Texas's Trusted
  Pressure Washing & Exterior Cleaning Experts"
- Founded 2015 · Founder/Owner: **Cody Marsh**
- HQ: Waco, TX · Service cities: Waco, Temple, Killeen
- Phone: **(254) 900-8842** · Email: **contact@aquablastpw.com** · Domain:
  **aquablastpw.com**
- Address: **1187 Lake Shore Dr, Waco, TX 76708**
- Trust badges: "Licensed, Bonded & Insured", "5-Star Rated on Google",
  "100% Satisfaction Guarantee — Free Re-Clean If You're Not Happy",
  eco-friendly/soft-wash-safe solutions
- Accent: teal/aqua primary (`$teal #0891b2` / `$lightteal #22c3e6` /
  `$darkteal #0e7490`), replacing HVAC's orange; `$blue` secondary retained

## Slug maps
**Services:** ac-repair→house-washing · duct-cleaning→gutter-cleaning ·
heating→roof-cleaning · indoor-air-quality→deck-fence-cleaning ·
installation→driveway-concrete-cleaning · maintenance→commercial-pressure-washing

**Industries:** automotive→property-management-hoas ·
manufacturing→restaurants-hospitality · oil-gas→retail-commercial-real-estate

**Blog:** signs-ac-needs-replacement-waco-tx→signs-your-siding-needs-a-soft-wash-waco-tx
· how-often-should-you-replace-hvac-filter→how-often-should-you-pressure-wash-your-driveway
· heat-pump-vs-traditional-hvac-texas→soft-washing-vs-pressure-washing-whats-the-difference

---

## Tasks

1. **Brand tokens** — `src/app/globalVariables.scss`: navy+orange → teal-black
   base + teal accent per Global Constraints, keeping token *names*/structure.
   Also fix the hardcoded duplicates that don't read from SCSS: `themeColor`
   in `layout.tsx`'s viewport export, `NextTopLoader` color prop, `PulseLoader`
   color prop (all currently `#f97316`/`#0d1b2a`).

2. **Header & Footer** — `components/GeneralComponents/Header/Header.tsx`,
   `.../Footer/Footer.tsx`: logo text/SVG, `NAV_LINKS`, `MARQUEE_ITEMS`, phone
   `tel:` links, `SERVICE_LINKS`, `LOCAL_AREAS`, `SOCIALS`, address, license
   line, tagline.

3. **Root layout metadata + JSON-LD** — `src/app/layout.tsx`: `metadata`
   (title/description/keywords/OG/twitter), `BASE_URL` → `aquablastpw.com`,
   full `localBusinessSchema` JSON-LD (name/phone/email/founder "Cody
   Marsh"/address/geo/hours/service catalog referencing the new 6 services).

4. **Vendor/infra sweep** — rebrand hardcoded brand literals (business name,
   phone, tagline copy) in: `CookieBanner`, `AboutHero`, `AboutStory`,
   `ContactForms` (Variant1–4), `LocalCitationBlock`, `NearbyAreasHero`,
   `ServiceCardComponent`, `ValueComparison`, `WhyChooseUs`, `WelcomePage`,
   `src/app/api/admin/setup/route.ts`.

5. **Shared PageComponents content fix** — these hardcode trade copy in the
   component body, not via props (known gotcha, don't rely on page-level
   props alone):
   - `TrustBar` — `BADGES` array (e.g. "NATE Certified, 4.9★ Google Rating" →
     pressure-washing-appropriate badges).
   - `CTABanner` — hardcoded eyebrow line + default phone/tel.
   - `ProcessTimeline` — hardcoded intro block ("How It Works" copy).
   - `BlogPreviewGrid` — hardcoded bottom CTA text ("Browse All HVAC Articles").
   - `FAQ` — default `title` prop value only (component itself is clean).

6. **Homepage** — `src/app/page.tsx` and its section components: hero,
   services teaser, trust bar, testimonials teaser, CTA — full AquaBlast copy.

7. **About page** — `src/app/about/**`: company story (2015 founding, Cody
   Marsh), mission, values, service-area coverage.

8. **Contact page** — `src/app/contact/**`: copy + form config referencing
   AquaBlast; contact pipeline itself (SendGrid/reCAPTCHA) untouched.

9. **Testimonials/reviews content** — `libs/local-db/reviews.ts`: rewrite
   actual review text/names/ratings into pressure-washing-flavored
   testimonials (distinct from the vendor sweep in Task 4).

10. **Service Areas page** — `src/app/service-areas/**`: Waco/Temple/Killeen
    copy reframed for exterior cleaning coverage.

11–16. **Service pages ×6** — per slug map above, each service gets its own
    commit: main service page + its 3 city sub-pages (`waco-tx`, `temple-tx`,
    `killeen-tx`), sibling-cloned from the matching old HVAC service folder,
    then delete the old HVAC folder once the new one is verified (route
    check via dev server, then 404 on the old path).

17. **Industries index** — `src/app/industries/page.tsx`: intro copy in
    AquaBlast's own voice (the HVAC base blends agency-voice copy here —
    replace fully, don't just swap nouns).

18–20. **Industry pages ×3** — per slug map above, same clone-then-delete
    pattern as the service pages.

21. **Blog registry swap** — `libs/blog-posts.ts`: replace `ALL_POSTS` per
    the blog slug map; delete the 3 old HVAC post route folders under
    `src/app/blogs/`.

22–24. **Write 3 new blog posts** — one commit each, per blog slug map: full
    `page.tsx`/`layout.tsx`/content for
    `signs-your-siding-needs-a-soft-wash-waco-tx`,
    `how-often-should-you-pressure-wash-your-driveway`,
    `soft-washing-vs-pressure-washing-whats-the-difference`.

25. **Blogs index page** — `src/app/blogs/page.tsx`: intro copy, category
    labels if hardcoded.

26. **Projects data + grid rebuild** — `libs/local-db/projects.ts` +
    `ProjectCardGrid`: replace Scott Apps' own client-portfolio data and
    agency `SERVICE_CTAS` (Graphic Design/Marketing/Invoicing cross-sell)
    with a real completed-jobs grid for AquaBlast (driveway/roof/siding/deck
    jobs, placeholder gradient graphics per spec).

27. **Projects trust/identity components** — `InsuredBadge` (AquaBlast's own
    "Licensed, Bonded & Insured" — not the web agency's professional
    liability policy/insurer), `SectionMap` (AquaBlast service-area
    map/markers — not "Scott Applications HQ"), `HighlightedProject`
    (a flagship AquaBlast job — not a link to `scottapps.com/invoicing`),
    `BeforeAfter` (real before/after cleaning-job pairs), `CaseStudyGrid`
    (short AquaBlast case studies), `AuthorBio` (fictional AquaBlast
    author bio — remove the real founder's name/LinkedIn/photo/schema).
    Wire the rebuilt components into `src/app/projects/page.tsx`.

28. **Privacy policy + site metadata sweep** — `src/app/privacy-policy/**`,
    `src/app/llms.txt`, `src/app/sitemap.xml`, `src/app/robots.ts`,
    `package.json` (`name`/description if present), `README.md`, any stray
    `hvac-pro-template.vercel.app` canonical-URL fallback in page layouts.

29. **Final sweep + QA**
    - Grep whole tree (excluding `docs/`) for: `arctic air`, `hvac` (case
      insensitive), the old phone `254.?900.?1234`, old email/address,
      `scott app`, `scottapps.com`, the real founder's name. Fix every hit.
    - Re-run the same greps, expect zero hits.
    - `npm run typecheck` && `npm run lint`, both clean.
    - `npm run dev`, manually click every primary nav link (Home, Services ×6
      + city subpages spot-check, Industries ×3, Service Areas, Blog index +
      3 posts, Projects, About, Contact, Privacy Policy) at 375/768/1440px —
      check for console errors, horizontal overflow, 404s.
    - Screenshot check that the teal accent color actually renders (not just
      that the SCSS variable changed — this is how roofing's accent-color bug
      slipped through previously).
    - Commit with `git add -A` (only place this task list allows the broad add).
