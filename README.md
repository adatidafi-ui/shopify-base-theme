# Shopify Premium Base Theme

A production-ready, high-converting, reusable Shopify Online Store 2.0 theme designed for rapid DTC e-commerce store launches.

## 🎯 What This Is

A pre-built, opinionated, premium e-commerce operating system that requires **minimal customization per store**. Import → Connect product → Adapt branding → Launch.

Unlike generic Shopify themes, this includes:
- ✅ Pre-designed premium homepage (not blank canvas)
- ✅ Conversion-optimized product page structure
- ✅ Mobile-first, premium design system
- ✅ 95%+ customizable via Shopify Theme Editor (no code changes needed)
- ✅ Multiple section layout variants to avoid cookie-cutter stores
- ✅ Clean, maintainable code for AI-assisted modifications
- ✅ Fast (Lighthouse 90+), accessible (WCAG AA), performant

## 🚀 Quick Start

1. **Package the theme**
   ```bash
   cd theme/
   zip -r ../shopify-base-theme.zip .
   ```

2. **Upload to Shopify**
   - Go to Shopify Admin → Sales channels → Online Store → Themes
   - Click "Add theme" → "Upload theme ZIP"
   - Select the ZIP file and upload

3. **Customize via Theme Editor**
   - Logo, colors, fonts, images, text
   - Reorder sections, hide/show sections
   - Configure trust elements, FAQs, testimonials

4. **For each new store:**
   1. Upload theme
   2. Connect product(s)
   3. Change logo, colors, fonts in Theme Editor
   4. Replace images/videos
   5. Edit copy (headlines, descriptions, FAQs, testimonials)
   6. Configure offer/bundle options
   7. QA and launch

## 📁 Repository Structure

```
shopify-base-theme/
├── theme/                       # Main theme folder (upload as ZIP to Shopify)
│   ├── config/
│   │   ├── settings_schema.json # Theme Editor controls (CRITICAL)
│   │   ├── settings_data.json   # Default settings
│   │   └── locales/
│   │       └── en.default.json  # Translations
│   │
│   ├── sections/                # Editable sections
│   ├── blocks/                  # Reusable blocks
│   ├── snippets/                # Utility components
│   ├── layout/
│   │   ├── theme.liquid         # Master HTML
│   │   └── password.liquid
│   │
│   ├── templates/               # Page templates
│   │   ├── index.liquid         # Homepage
│   │   ├── product.liquid       # Product page
│   │   ├── collection.liquid    # Category
│   │   ├── cart.liquid          # Cart
│   │   └── [others]
│   │
│   ├── assets/                  # CSS, JS, images, fonts
│   │   ├── base.css
│   │   ├── components.css
│   │   ├── theme.js
│   │   └── images/
│   │
│   └── theme.toml               # Theme metadata
│
├── docs/                        # Documentation
│   ├── ARCHITECTURE.md          # Design system
│   ├── CUSTOMIZATION.md         # Theme Editor guide
│   ├── DEVELOPMENT.md           # Code modification
│   └── SECTION_GUIDE.md         # Section reference
│
├── CHANGELOG.md
├── LICENSE (MIT)
└── .gitignore
```

## 🎨 Key Features

### Homepage Sections (Pre-built, Reorderable)
- Announcement bar
- Hero (4 layout variants)
- Trust badges
- Featured product showcase
- Problem/solution storytelling
- Benefits/features grid (2 variants)
- Testimonials carousel (3 layout variants)
- Comparison table (optional)
- FAQ accordion
- Newsletter signup
- CTA banner

### Product Page (Conversion-Optimized)
- Premium product gallery with zoom
- Ratings & reviews display
- Variant selector
- Quantity selector
- Strong primary CTA + express checkout
- Trust element bar
- Collapsible details (delivery, returns, usage)
- Sticky add-to-cart (mobile)
- Product details tabs
- Related/upsell products
- Testimonials section
- FAQ section

### Cart Experience
- Full-page cart (desktop/tablet)
- Cart drawer (optional)
- Order summary with free shipping progress
- Trust badges above checkout

### Mobile Experience
- 44px+ touch targets
- Full-width stacked layout
- Optimized typography
- Sticky cart button
- Swipe-enabled galleries

## 🔧 Theme Editor Customization (No Code)

- Logo & favicon
- Primary, secondary, accent colors
- Heading & body fonts
- Container width, spacing, border radius
- Section ordering (drag/drop)
- Hide/show sections
- Text content (headlines, descriptions, FAQs, testimonials)
- Images (all sections)
- Section layout variants
- Trust elements configuration

## 🏗️ Design System

- **Colors:** Customizable primary, secondary, accent
- **Typography:** Premium web fonts (Shopify Sans + Google Fonts options)
- **Spacing:** 8px base unit system
- **Components:** Buttons, cards, inputs, badges
- **Interactions:** Subtle micro-interactions, smooth transitions
- **Icons:** SVG sprite sheet

## 📊 Performance Targets

- Lighthouse Mobile: 90+
- Lighthouse Desktop: 95+
- Core Web Vitals: All green
- CSS: <50KB (gzipped)
- JS: <30KB (gzipped)
- LCP: <2.5s

## 🔒 Accessibility

- WCAG 2.1 Level AA
- Proper heading hierarchy
- Alt text on images
- Color contrast ratios
- Keyboard navigation
- Screen reader friendly

## 📦 Included Native (No Apps Needed)

✅ All sections & homepage layouts
✅ Premium product page
✅ Cart drawer & full-page cart
✅ Customer testimonials
✅ FAQ accordion
✅ Trust badges
✅ Product gallery with zoom
✅ Sticky mobile CTA
✅ Newsletter signup
✅ Blog/articles
✅ Customer accounts
✅ Mobile menu
✅ Search
✅ Collections & filtering

## 🛠️ Development

See `docs/DEVELOPMENT.md` for:
- Local development setup
- Modifying sections
- CSS/JS customization
- Building for production

## 📝 License

MIT - Use freely for your own stores or client work.

---

**Version:** 1.0.0  
**Shopify Online Store:** 2.0+
