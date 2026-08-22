# Architecture & Design System

## Overview

This is a premium, production-ready Shopify Online Store 2.0 theme built for rapid DTC e-commerce launches. The architecture prioritizes:

- **Conversion-focused defaults:** Pre-built homepage and product page require minimal customization
- **Theme Editor customization:** 95%+ of changes made without touching code
- **Design system consistency:** CSS variables enable cohesive theming across the entire store
- **Performance:** Optimized for Lighthouse 90+ mobile, <2.5s LCP
- **Accessibility:** WCAG 2.1 Level AA compliant
- **Maintainability:** Clean Liquid templates for AI-assisted modifications

## Design System

### Color Variables

All colors are defined in CSS variables and configurable via Theme Editor:

- --color-primary: Main brand color
- --color-accent: CTAs, links, primary actions
- --color-background: Page background
- --color-text: Primary text
- --color-text-light: Secondary text, muted
- --color-border: Dividers, borders

### Typography

- H1: 36-48px responsive (clamp)
- H2: 30-36px responsive
- H3: 24-30px responsive
- Body: 16px desktop, 15px mobile
- Line height: 1.6

### Spacing Scale

Based on 8px base unit:
- xs: 8px
- sm: 16px
- md: 24px
- lg: 32px
- xl: 48px
- 2xl: 64px

### Components

- **Buttons:** 44px+ height (touch-friendly), 3 styles (primary, secondary, tertiary)
- **Cards:** Subtle shadow, rounded corners, hover lift effect
- **Forms:** 44px+ height inputs, clear focus states
- **Product Cards:** 1:1 image, zoom on hover, price + rating display

## Mobile Experience

- Touch targets: 44px minimum (Apple HIG)
- Single column layout for sections
- Sticky add-to-cart button on scroll
- Hamburger menu for navigation
- Optimized form inputs for mobile keyboards

## Performance

- Lighthouse Mobile: 90+ target
- Lighthouse Desktop: 95+ target
- LCP: <2.5s
- CSS: <15KB gzipped
- JS: <20KB vanilla JavaScript
- Images: Shopify CDN optimization + lazy loading

## Accessibility

- WCAG 2.1 Level AA compliant
- Proper heading hierarchy (H1 → H2 → H3)
- Alt text on all images
- Color contrast: 4.5:1 normal text, 3:1 large text
- Keyboard navigation: Tab through all interactive elements
- Focus indicators: Visible on all buttons/links
- Semantic HTML: Proper use of nav, main, section tags

## Settings Schema

The settings_schema.json defines Theme Editor controls:

- Global: Colors, fonts, logo, spacing, border radius
- Header: Style (minimal/nav/sticky), search toggle
- Announcement: Text, colors, dismissible
- Footer: Copyright, payment icons, newsletter toggle
- Section-specific: Each section has customizable settings + blocks for repeatable content

## Development

- Local dev: shopify theme dev (optional)
- Deploy: Package theme/ as ZIP → upload to Shopify Admin
- Customize: Theme Editor handles 95%+ of changes
- Code changes: Edit .liquid files in sections/, templates/
