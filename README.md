# Eco Vista Industrial Zone (EVIZ) Website

Official repository for the EVIZ marketing website: a responsive, static site presenting the Eco Vista Industrial Zone in Palakkad, Kerala.

🌐 **Live Site:** [https://evizindia.com/](https://evizindia.com/)

---

## Overview

The EVIZ website is built to communicate:

- Project vision and mission
- Infrastructure and facility capabilities
- Investment models and opportunities
- Sustainability initiatives
- Contact and location details for enquiries

The implementation is a lightweight static frontend with no build step or backend dependency.

---

## Tech Stack

- **HTML5** (`index.html`)
- **CSS3** (`styles.css`)
- **Vanilla JavaScript** (`script.js`)
- **Font Awesome CDN** for iconography
- Static assets under `images/`

---

## Repository Structure

```text
EVIZ/
├── index.html          # Main page markup
├── styles.css          # Styling, layout, responsiveness, animations
├── script.js           # Navigation, scrolling, interactions, reveal effects
├── images/             # Website images and section backgrounds
├── robots.txt          # Crawl rules
├── CNAME               # Custom domain (evizindia.com)
├── placeholder.svg     # Placeholder graphic asset
└── README.md
```

---

## Main Website Sections

1. **Hero** – brand statement and primary CTAs
2. **About** – estate introduction, vision, mission
3. **Infrastructure** – facilities and supported industry segments
4. **Investment** – models (sale, lease, JV/collaboration) and highlights
5. **Sustainability** – green initiatives and smart estate capabilities
6. **Founder** – profile and contact number
7. **Contact** – location, phone, map link, footer

---

## Features

- Responsive layout for desktop, tablet, and mobile
- Sticky tab navigation with active section tracking
- Smooth scroll behavior for section navigation
- Mobile menu toggle for compact navigation
- Scroll-triggered reveal animations for content cards
- Visual industry cards with hover effects
- Optimized static delivery (no runtime framework overhead)

---

## Local Development

This is a static site and can be run directly:

### Option 1: Open directly

Open `/home/runner/work/EVIZ/EVIZ/index.html` in a browser.

### Option 2: Use a local HTTP server (recommended)

From `/home/runner/work/EVIZ/EVIZ`:

```bash
# Python 3
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

---

## Configuration & Deployment Notes

- **Domain mapping:** controlled by `CNAME` (`evizindia.com`)
- **SEO crawl policy:** defined in `robots.txt`
- **OG/Twitter meta tags:** configured in `<head>` of `index.html`
- **Assets:** image references are relative paths under `images/`

Because this is static, it can be deployed to GitHub Pages, Netlify, Vercel static hosting, or any standard web server.

---

## Content Updates Guide

Common updates and where to edit:

- Page copy/content → `index.html`
- Visual styling/theme/colors → `styles.css`
- Interactions/behavior (scrolling, tabs, animation triggers) → `script.js`
- Photos/backgrounds → `images/` and matching `url(...)` references in `index.html`/`styles.css`
- Domain/crawl settings → `CNAME`, `robots.txt`

---

## Accessibility & Performance Considerations

Current implementation includes:

- Semantic sectioning and heading hierarchy
- Mobile-friendly responsive breakpoints
- Lightweight, framework-free rendering path

Recommended ongoing improvements:

- Add descriptive `alt` text for any newly introduced `<img>` elements
- Audit contrast when changing color palette
- Compress and modernize image formats when replacing assets

---

## Maintenance Checklist

- Verify section links still match `data-tab` / section `id` values
- Re-test mobile menu behavior after JS/CSS edits
- Validate CTA links (`tel:`, maps, social/meta links)
- Review SEO meta content when page messaging changes

---

## Contact

**Eco Vista Industrial Zone**  
Kuthanoor, Alathur, Palakkad, Kerala  
📞 +91 89216 68851
