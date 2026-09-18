# Alta Renovations — Website

A modern, premium marketing website for Alta Renovations, a residential
renovation and remodeling company. Built with Next.js (App Router),
TypeScript, and Tailwind CSS.

The site is a single, anchor-linked homepage (Home / About / Services /
Projects / Contact all live on `/`) with a working contact form, SEO
metadata, and fully responsive layout.

---

## 1. Project Structure

```
Alta-Renovations-2/
├── app/
│   ├── api/contact/route.ts   # Contact form submission endpoint (placeholder logic)
│   ├── layout.tsx             # Root layout, fonts, SEO metadata
│   ├── page.tsx                # Homepage — composes all sections
│   ├── globals.css             # Tailwind layers + design tokens (buttons, container, etc.)
│   ├── not-found.tsx           # 404 page
│   ├── robots.ts               # robots.txt (generated)
│   └── sitemap.ts              # sitemap.xml (generated)
├── components/
│   ├── Navbar.tsx               # Sticky, responsive nav + mobile hamburger menu
│   ├── Hero.tsx                 # Full-bleed hero section
│   ├── TrustSection.tsx         # "Why choose us" 4-point grid
│   ├── About.tsx                 # Split image/text About section
│   ├── Services.tsx / ServiceCard.tsx     # Services grid
│   ├── Projects.tsx / ProjectCard.tsx     # Featured projects gallery
│   ├── Process.tsx               # 4-step process band
│   ├── Testimonials.tsx / TestimonialCard.tsx
│   ├── CTA.tsx                   # Dark call-to-action band
│   ├── Contact.tsx / ContactForm.tsx      # Contact section + validated form
│   ├── Footer.tsx
│   ├── PlaceholderImage.tsx     # Stand-in for real photography (see §5)
│   ├── Reveal.tsx                # Scroll-entrance animation wrapper
│   ├── Container.tsx / SectionHeading.tsx # Layout helpers
├── lib/
│   ├── data.ts                   # Services, projects, testimonials, process content
│   └── constants.ts              # Site-wide placeholders (phone, email, nav, social)
├── package.json
├── tailwind.config.ts            # Color palette, fonts, animations
├── next.config.mjs
└── tsconfig.json
```

Every homepage section is its own component under `components/`, and all
editable content (services, projects, testimonials, contact details) is
centralized in `lib/data.ts` and `lib/constants.ts` — you should rarely
need to touch component files just to change text.

---

## 2. Installation

Requires **Node.js 18.18+** (Node 20+ recommended) and npm.

```bash
npm install
```

## 3. Running Locally

```bash
npm run dev
```

Visit **http://localhost:3000**. The dev server supports hot reload — edit
any file under `app/`, `components/`, or `lib/` and the browser updates
automatically.

Other useful scripts:

```bash
npm run build   # production build
npm run start   # run the production build locally (after `npm run build`)
npm run lint    # ESLint
```

## 4. Deploying

The site is a standard Next.js app and deploys to any platform that
supports Next.js:

**Vercel (recommended, zero-config)**
1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no configuration needed. Click Deploy.

**Netlify**
1. Push the repo to a Git provider.
2. Create a new site from Git in Netlify, using the "Next.js" build preset
   (build command `npm run build`, publish handled by the Next.js runtime
   plugin, which Netlify adds automatically).

**Self-hosted / any Node host**
```bash
npm run build
npm run start   # serves on port 3000 by default
```

---

## 5. Replacing Placeholder Images

**No stock photography is bundled with this project.** Every photo slot
on the site currently renders `components/PlaceholderImage.tsx` — a
styled gradient block with an icon and a "Photo placeholder" label,
instead of a real `<img>`. This was a deliberate choice: rather than
hardcode third-party stock-photo URLs that could go stale, break, or not
match the finished brand, every image location is clearly marked and
ready for real project photography.

**To replace a placeholder with a real photo:**

1. Add your image file to `public/images/` (create the folder), e.g.
   `public/images/hero.jpg`.
2. In the relevant component, replace the `<PlaceholderImage ... />` with
   Next's optimized image component:

   ```tsx
   import Image from "next/image";

   <Image
     src="/images/hero.jpg"
     alt="Renovated open-concept kitchen and living space"
     fill
     priority
     className="object-cover"
   />
   ```

   (`fill` requires the parent element to be `position: relative` with a
   defined size — every placeholder's parent container already is.)

Image slots in the site, in the order they appear:

| Location | Component | Notes |
|---|---|---|
| Hero background | `components/Hero.tsx` | Full-bleed, use `priority` since it's above the fold |
| About section | `components/About.tsx` | 4:5 portrait image |
| 6× Service cards | `components/Services.tsx` → `lib/data.ts` (`SERVICES`) | 4:3 images |
| 6× Project cards | `components/Projects.tsx` → `lib/data.ts` (`PROJECTS`) | 4:5 images, ideally real before/after or finished-project shots |

For a before/after treatment on project cards, the simplest approach is
two stacked `<Image>` elements with a CSS clip-path or a small slider
library — the current `ProjectCard.tsx` is a good starting point since
the image already fills the whole card.

---

## 6. Wiring Up the Contact Form

The form at `components/ContactForm.tsx` does full client-side validation
and posts to `app/api/contact/route.ts`. That API route currently
**validates and returns success but does not send an email or store
anything** — no email provider or database is configured.

To make it functional, pick one:

- **Email via a transactional provider** (Resend, SendGrid, Postmark,
  etc.): install their SDK, add your API key as an environment variable,
  and call it inside `app/api/contact/route.ts` after validation.
- **Formspree / Basin / a form-backend SaaS**: point the form's `fetch`
  call in `ContactForm.tsx` directly at their endpoint instead of
  `/api/contact`.
- **A CRM or lead-gen tool**: call its API from the route handler.

Environment variables (API keys, etc.) should go in a local `.env.local`
file (already gitignored) and be added to your hosting provider's
environment variable settings for production.

---

## 7. Placeholder Checklist — Replace Before Launch

Everything below is a placeholder. Search the codebase for these exact
strings to find every occurrence.

**Business contact info** — `lib/constants.ts`
- [ ] `CONTACT.phone` / `CONTACT.phoneHref` — real phone number
- [ ] `CONTACT.email` — real business email
- [ ] `CONTACT.serviceArea` — real service area / region
- [ ] `CONTACT.addressLine`, `CONTACT.hours` — currently unused on the
      page but defined for future use (e.g. if you add a map or hours block)

**Social links** — `lib/constants.ts`
- [ ] `SOCIAL.instagram` — real Instagram URL
- [ ] `SOCIAL.facebook` — real Facebook URL

**Site metadata** — `lib/constants.ts` and `app/layout.tsx`
- [ ] `SITE.url` — your real production domain (also update
      `metadataBase` usage — it reads from `SITE.url` automatically)

**Projects** — `lib/data.ts` (`PROJECTS`)
- [ ] `location` field on each project — currently
      `[Project Location Placeholder]`
- [ ] Replace placeholder project names/types with real completed
      projects once available (structure supports this as-is)

**Testimonials** — `lib/data.ts` (`TESTIMONIALS`)
- [ ] All three quotes are placeholder text and marked
      `[Placeholder testimonial]` — replace with real client feedback.
      Names intentionally use role labels only ("Homeowner", "Kitchen
      Renovation Client", etc.) — do not invent real customer names.

**Images** — see §5 above
- [ ] Hero background photo
- [ ] About section photo
- [ ] 6 service card photos
- [ ] 6 project gallery photos

**Content deliberately left out (per project brief)** — do not invent
these; add them only once you have the real information:
- Company history / years in business
- Certifications, licenses, awards
- Number of employees
- Specific pricing or guarantees
- Real customer names or reviews

**Footer**
- [ ] Copyright year is hardcoded to `2026` per the brief — update
      annually or switch to `new Date().getFullYear()` in
      `components/Footer.tsx` if you'd prefer it to auto-update.

**Contact form backend**
- [ ] `app/api/contact/route.ts` needs a real email/CRM integration —
      see §6.

---

## 8. Design Notes

- **Palette**: warm off-white (`cream`), charcoal/near-black
  (`charcoal`), warm grey (`stone`), and a muted brass/bronze accent
  (`accent`) — defined in `tailwind.config.ts`.
- **Type**: Playfair Display (serif, headings) + Inter (sans, body),
  loaded via `next/font/google` in `app/layout.tsx`.
- **Animation**: a lightweight `Reveal` component
  (`components/Reveal.tsx`) fades/slides sections in on scroll using
  `IntersectionObserver` — no animation library dependency. Respects
  `prefers-reduced-motion`.
- **Accessibility**: semantic landmarks, labeled form fields with visible
  error messages, `aria-label`s on icon-only buttons/links, focus-visible
  outlines, and skip-friendly heading hierarchy (single `h1` in the hero,
  `h2` per section, `h3` for cards).
- **SEO**: page title/description/OpenGraph/Twitter metadata in
  `app/layout.tsx`, auto-generated `robots.txt` and `sitemap.xml`,
  descriptive `alt` text via each image's `label`/`aria-label`.

---

## 9. Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) for icons
