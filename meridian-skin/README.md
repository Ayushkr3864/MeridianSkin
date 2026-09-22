# Meridian Skin Clinic — Homepage

A responsive dermatology clinic homepage built with Next.js (App Router), React and Tailwind CSS.

## Stack
- Next.js 14 / React 18
- Tailwind CSS 3
- lucide-react icons
- Google Fonts: Fraunces (display) + Work Sans (body)

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Structure

```
app/
  layout.js       Root layout, fonts, metadata
  page.js         Assembles all homepage sections
  globals.css     Tailwind + base styles
components/
  Header.jsx          Logo, nav, mobile menu, CTA
  Hero.jsx            Hero section
  TrustStats.jsx       Trust / stats strip
  Services.jsx         6 treatment cards
  WhyChooseUs.jsx      About / why-choose-us
  ConsultationCTA.jsx  Consultation banner
  Contact.jsx          Contact info + enquiry form (frontend only)
  Footer.jsx           Footer
```

## Notes

- All imagery is rendered with CSS/SVG (gradients, line-art) rather than
  external photos, so the project has zero external image dependencies.
- The enquiry form validates on the client and shows a success state; it is
  not wired to a backend (per project scope — "Backend development is not
  required").
- Colour tokens, type scale and spacing live in `tailwind.config.js` under
  `theme.extend` (`pine`, `clay`, `stone` palettes; `font-display` /
  `font-body` families).
