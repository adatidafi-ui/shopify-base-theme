# Customization Guide

## Theme Editor Basics

### Accessing Settings

1. Shopify Admin → Sales channels → Online Store → Themes
2. Select active theme → "Customize" button
3. Left sidebar shows all customizable settings

## Global Settings

### Colors
- Primary Color: Main brand color
- Secondary Color: Secondary elements
- Accent Color: CTAs, links
- Background/Text Colors: For contrast
- Border Color: Dividers, borders

### Typography
- Heading Font: Select from Google Fonts
- Body Font: Main text font
- Sizes scale automatically based on responsive design

### Layout
- Container Width: 960-1400px
- Spacing Scale: 80-150% uniformly scales all spacing
- Border Radius: 0-16px roundedness

### Logo & Branding
- Logo: Upload store logo
- Logo Width: Set logo size (50-300px)
- Favicon: 192x192px site icon

### Header
- Style: Minimal, with navigation, or sticky
- Show Search Bar: Toggle search in header

### Announcement Bar
- Enable: Toggle on/off
- Text: Change announcement message
- Background/Text Colors: Customize colors
- Dismissible: Allow users to close

## Customizing Sections

### Adding/Removing (Homepage)

1. Click "+" to add sections
2. Browse available sections
3. Drag to reorder
4. Click menu → "Delete" to remove

### Editing Content

Each section has its own settings panel:

**Hero Section:**
- Layout: 3 options (centered, split, gradient)
- Image: Upload background image
- Heading, subheading, CTA text
- Text color, overlay opacity

**Featured Product:**
- Product: Select product to showcase
- Benefits 1-3: Key selling points

**Testimonials:**
- Layout: Grid or carousel
- Add blocks: Quote, author, role, avatar

**Benefits:**
- Layout: Grid or alternating
- Add blocks: Icon, title, description, image

**FAQ:**
- Add blocks: Question, answer

**Newsletter:**
- Heading, description, button text
- Background/text colors

## Customizing Product Page

Product page is pre-built and auto-pulls from Shopify:
- Title, description, images, price, variants, reviews

Settings (Theme Editor):
- Sticky 'Add to Cart' on Mobile: Toggle
- Enable Image Zoom: Allow hover zoom
- Show Product Reviews: Display ratings
- Show Related Products: Recommend similar items

## Image Best Practices

- Hero images: 1200x600px (16:9)
- Product images: 1000x1000px (1:1)
- Testimonial avatars: 200x200px
- Logo: 300x300px minimum
- Format: JPG or PNG (Shopify auto-converts to WebP)

## Customizing Colors

1. Theme Settings → Colors
2. Click color picker
3. Select new color (or enter hex code)
4. Entire site updates instantly

## Customizing Fonts

1. Theme Settings → Typography → Heading/Body Font
2. Browse Google Fonts
3. Select font
4. Changes apply to all headings/body text

### Font Pairing Tips
- Modern: Poppins / Inter
- Elegant: Playfair Display / Lora
- Clean: Montserrat / Open Sans

## Common Customizations

- **Change store name:** Settings → General
- **Change announcement:** Announcement Bar section → Text field
- **Reorder sections:** Drag/drop in left sidebar
- **Hide section:** Delete from Theme Editor
- **Add testimonials:** Testimonials → Blocks → "+"
- **Add FAQ items:** FAQ → Blocks → "+"

## What Requires Code Changes

These require editing .liquid files:
- Adding new section types
- Modifying product page structure significantly
- Changing template layouts (2-column to 3-column)
- Custom calculations or logic
- Third-party app integrations

## Performance Tips

- Compress images before uploading
- Limit to 2 font families
- Minimize third-party apps
- Shopify hosts Google Fonts locally
