# Pressure Washing & Exterior Cleaning Template — Design

## Context

`pressure-washing-template` is a full mirror of `hvac-template`, the "Arctic Air
HVAC" Next.js site sold as a listing on the templates marketplace. The base
template ships a complete production-shaped app: public marketing site, blog
engine, lead-capture contact forms, and a real admin dashboard with lead
tracking/analytics (page views, sessions, journeys, events, geo lookups via
MaxMind, consent tracking). This spec defines the re-skin of that same
architecture into a pressure-washing / exterior-cleaning business, to be
listed as a new "Coming Soon" template ("Pressure Washing & Exterior
Cleaning") alongside the landscaping, roofing, painting, and construction-hub
reskins already completed in this family.

The codebase was copied wholesale from `hvac-template` (excluding `.git`,
`node_modules`, `.next`, `tsconfig.tsbuildinfo`) into a fresh directory with
its own git history (commit `0061b7b`). `.env` / `.env.local` were copied for
local dev but are now gitignored in this repo (they were tracked, unignored,
in the source repo — not repeating that here). They currently still point at
the HVAC site's live MongoDB/SendGrid/reCAPTCHA/Mapbox credentials; before
this site takes real traffic, `MONGODB_URI` and `DATABASE_NAME` need to point
at a dedicated database so lead data doesn't mix with the other sites in this
family. That's a manual config step outside this spec's scope.

## What stays untouched

- Admin dashboard UI/logic (`src/app/admin/**`, `components/AdminComponents/**`)
  — labels like "Leads", "Events", "Sessions" are already generic.
- Tracking APIs (`src/app/api/track*`, `src/app/api/poll`) and their logic.
- Auth (`src/app/api/auth`, `src/app/admin/login`).
- Contact form submission pipeline (`src/app/api/submitContact`), SendGrid
  integration, reCAPTCHA.
- Component architecture and file/folder conventions — no new components, no
  new page types beyond what HVAC already has one-for-one equivalents for
  (services, industries, blog, projects, service-areas, etc.).
- Three-font system: `$titleFont` (Barlow Condensed), `$headerFont` (Outfit),
  `$textFont` (Inter).

## Business Identity (locked)

- **Name:** AquaBlast Pressure Washing
- **Tagline:** "Central Texas's Trusted Pressure Washing & Exterior Cleaning Experts"
- **Founded:** 2015 · **Founder/Owner:** Cody Marsh
- **HQ city:** Waco, TX · **Service cities:** Waco, Temple, Killeen (same
  three-city footprint as the HVAC template — keep this regional convention
  consistent across the whole template family)
- **Phone:** (254) 900-8842 · **Email:** contact@aquablastpw.com
- **Domain:** aquablastpw.com
- **Address:** 1187 Lake Shore Dr, Waco, TX 76708
- **Trust badges / guarantees:** "Licensed, Bonded & Insured", "5-Star Rated
  on Google", "100% Satisfaction Guarantee — Free Re-Clean If You're Not
  Happy", eco-friendly / soft-wash-safe cleaning solutions
- **Accent color:** aqua/teal (primary), replacing HVAC's navy+orange —
  distinct from roofing's blue, landscaping's green, and construction-hub's
  amber

## What changes

### Brand tokens (`src/app/globalVariables.scss`)
Same *structure* as HVAC (near-black base, tinted grey scale, one accent
color with light/dark variants, danger-red retained):
- `$black`/`$obsidian`/`$blackflat` → deep teal-black tones (e.g. `#06232b`,
  `#0d2f38`) instead of navy tones.
- `$darkgrey`/`$grey`/`$lightgrey` → teal-tinted greys instead of navy-tinted
  greys.
- `$orange`/`$lightorange`/`$darkorange` → `$teal`/`$lightteal`/`$darkteal` as
  the **primary** accent (e.g. base `#0891b2`, light `#22c3e6`, dark
  `#0e7490`), replacing orange as the live accent rather than staying a
  legacy alias.
- `$blue` secondary accent retained (works as a contrast color in comparison
  tables, same role HVAC used it for).
- `$danger-red` unchanged.
- Also update the hardcoded duplicates outside this file: `themeColor` in
  `layout.tsx`'s viewport export, `NextTopLoader` color, `PulseLoader` color —
  these don't read from the SCSS tokens and were missed in at least one prior
  reskin (roofing's accent-color bug).

### Services (6 pages, 1:1 structural mirror of HVAC's service pages)
| HVAC (`src/app/services/*`) | Pressure-washing equivalent |
|---|---|
| ac-repair | house-washing (Residential House Washing / Soft Washing) |
| duct-cleaning | gutter-cleaning (Gutter Cleaning) |
| heating | roof-cleaning (Soft Wash Roof Cleaning) |
| indoor-air-quality | deck-fence-cleaning (Deck & Fence Cleaning) |
| installation | driveway-concrete-cleaning (Driveway & Concrete Cleaning) |
| maintenance | commercial-pressure-washing (Commercial Pressure Washing) |

Each keeps its 3 city sub-routes (`waco-tx`, `temple-tx`, `killeen-tx`).

### Industries Served (3 pages)
| HVAC (`src/app/industries/*`) | Pressure-washing equivalent |
|---|---|
| automotive | property-management-hoas (Property Management & HOAs) |
| manufacturing | restaurants-hospitality (Restaurants & Hospitality) |
| oil-gas | retail-commercial-real-estate (Retail & Commercial Real Estate) |

### Blog (3 posts, `libs/blog-posts.ts`)
| HVAC slug | Pressure-washing equivalent |
|---|---|
| signs-ac-needs-replacement-waco-tx | signs-your-siding-needs-a-soft-wash-waco-tx |
| how-often-should-you-replace-hvac-filter | how-often-should-you-pressure-wash-your-driveway |
| heat-pump-vs-traditional-hvac-texas | soft-washing-vs-pressure-washing-whats-the-difference |

### Pages (standard set, all get rewritten copy)
Home, About, Contact, Privacy Policy, Service Areas, Services index + 6
detail pages (each ×3 city), Industries index + 3 detail pages, Blog index +
3 posts. Admin/auth/tracking untouched per above.

### Projects page — repurposed, not deleted
Per the construction-hub precedent, `src/app/projects/**` and its supporting
components (`BeforeAfter`, `CaseStudyGrid`, `HighlightedProject`,
`InsuredBadge`, `ProjectCardGrid`, `SectionMap`) are **not** Scott Apps'
generic agency components with trade content layered on — they are the real
web agency's own self-promotion (their own liability insurance, their own
`scottapps.com/invoicing` SaaS cross-sell, their own client-portfolio map,
the real founder's bio/LinkedIn). For pressure washing, before/after photo
pairs are one of the single strongest marketing assets in the trade, so this
page is a natural fit to rebuild rather than delete:
- `BeforeAfter` → real (placeholder-graphic) before/after cleaning-job pairs
  (driveway, roof, siding, deck).
- `CaseStudyGrid` → short case studies (e.g. an HOA contract, a restaurant
  patio cleanout).
- `libs/local-db/projects.ts` + `ProjectCardGrid` → rewritten from an agency
  service cross-sell (Graphic Design/Marketing/"Visit Live Site") into a real
  completed-jobs grid for AquaBlast.
- `HighlightedProject` → a single featured/flagship job, not a link to
  `scottapps.com/invoicing`.
- `InsuredBadge` → AquaBlast's own "Licensed, Bonded & Insured" trust badge,
  not the web agency's professional liability policy.
- `SectionMap` → AquaBlast's own service-area map/markers, not "Scott
  Applications HQ".
- `AuthorBio` (used on blog posts) → a fictional AquaBlast content
  author/technician bio, not the real founder's name/LinkedIn/photo.

### Images
No real photography sourced — placeholder-graphic strategy (gradient block +
label text), same approach used in prior reskins.

## Non-goals
- Real photography or licensed stock images.
- Database/credential provisioning (separate `MONGODB_URI`/`DATABASE_NAME` —
  manual step, out of scope here).
- Admin dashboard changes.
- New page types beyond the ones HVAC already has structural equivalents for.
- Reconfiguring SendGrid/reCAPTCHA/Mapbox — copied as-is.

## Process (rollout order for the implementation plan)
1. Step 0 sweep: brand tokens, Header/Footer, root layout metadata + JSON-LD,
   vendor/infra sweep (agency-identity leaks across shared components), fix
   shared `PageComponents` that hardcode trade content in their bodies.
2. Homepage, About, Contact, Testimonials, Service Areas rewrites.
3. Service pages ×6 (with city sub-pages).
4. Industries index + industry pages ×3.
5. Blog registry swap + 3 new posts.
6. Projects page rebuild (agency components → real AquaBlast before/after
   showcase, per above).
7. Final sweep: grep for leftover "Arctic Air"/"HVAC"/old phone-email-address/
   "Scott App"/real founder name, typecheck + lint, manual click-through of
   every nav link across breakpoints, screenshot check that the accent color
   actually rendered (not just that the SCSS variable changed).

## Success Criteria
- Zero grep hits for old-trade strings (`arctic air`, `hvac`, old phone
  `(254) 900-1234`, old email/address) outside `docs/`.
- Zero grep hits for vendor-identity leaks (`scott app`, `scottapps.com`, the
  real founder's name/LinkedIn) outside `docs/`.
- `npm run typecheck` and `npm run lint` pass clean.
- No console errors, no 404s, on a manual click-through of every primary nav
  link at 375/768/1440px.
- Screenshot confirms the teal accent color is actually visible (not just
  present in `globalVariables.scss`).
