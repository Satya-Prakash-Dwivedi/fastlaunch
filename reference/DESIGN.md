---
name: "AI/ML/DevOps Full-Stack & Mobile Solutions Platform"
theme: "light"

colors:
  neutral:
    shade-0: "#FFFFFF"
    shade-1: "#F2F2F2"
    shade-2: "#DADAD9"
    shade-3: "#B6B5B4"
    shade-4: "#858482"
    shade-5: "#545350"
    shade-6: "#24221E"
    shade-7: "#0C0A05"
    white: "#FFFFFF"
  science-blue:
    shade-1: "#E6EFF8"
    shade-2: "#CEE0F2"
    shade-3: "#5393D4"
    shade-4: "#0A66C2"
    shade-5: "#08519B"
    shade-6: "#04284D"
    shade-7: "#031E3A"
  mandy:
    shade-1: "#FCEDF1"
    shade-2: "#FADBE3"
    shade-3: "#EF839F"
    shade-4: "#E94E77"
    shade-5: "#BA3E5F"
    shade-6: "#5D1F2F"
    shade-7: "#451723"
  jade:
    shade-1: "#E5F6F1"
    shade-2: "#CCEDE4"
    shade-3: "#4CC2A0"
    shade-4: "#00A878"
    shade-5: "#008660"
    shade-6: "#004330"
    shade-7: "#003224"
  cream-can:
    shade-1: "#FEF9EF"
    shade-2: "#FDF4DF"
    shade-3: "#F8D88F"
    shade-4: "#F6C85F"
    shade-5: "#C4A04C"
    shade-6: "#625026"
    shade-7: "#493C1C"

typography:
  heading:
    fontFamily: "Urbanist"
    fontWeight: 500
  body:
    fontFamily: "Inter"
    fontWeight: 400
  sizes:
    desktop:
      h1: 84px
      h2: 60px
      h3: 48px
      h4: 40px
      h5: 32px
      h6: 26px
      text-large: 26px
      text-medium: 20px
      text-regular: 18px
      text-small: 16px
      text-tiny: 12px
    mobile:
      h1: 48px
      h2: 44px
      h3: 32px
      h4: 24px
      h5: 20px
      h6: 18px
      text-large: 18px
      text-medium: 16px
      text-regular: 14px
      text-small: 12px
      text-tiny: 10px

ui:
  style: "sleek"
  buttonRadius: 12px
  tagRadius: 6px
  inputRadius: 12px

cards:
  style: "outlined"
  borderWidth: 1px
  dividerWidth: 1px
  radiusLarge: 16px
  radiusMedium: 16px
  radiusSmall: 16px

schemes:
  - name: "Scheme 1"
    background: "chromatic2-shade-2"
    backgroundHex: "#FADBE3"
    foregroundHex: "#FADBE3"
    textHex: "#0c0a05"
    accentHex: "#0A66C2"
    borderValue: "#0c0a0526"
    useLogoVariant: light
    cssClass: "scheme-1"
  - name: "Scheme 2"
    background: "neutral-shade-0"
    backgroundHex: "#FFFFFF"
    foregroundHex: "#FFFFFF"
    textHex: "#0c0a05"
    accentHex: "#0A66C2"
    borderValue: "#0c0a0526"
    useLogoVariant: light
    cssClass: "scheme-2"
  - name: "Scheme 3"
    background: "chromatic1-shade-2"
    backgroundHex: "#CEE0F2"
    foregroundHex: "#CEE0F2"
    textHex: "#0c0a05"
    accentHex: "#0A66C2"
    borderValue: "#0c0a0526"
    useLogoVariant: light
    cssClass: "scheme-3"
  - name: "Scheme 4"
    background: "chromatic2-shade-6"
    backgroundHex: "#5D1F2F"
    foregroundHex: "#5D1F2F"
    textHex: "#ffffff"
    accentHex: "#ffffff"
    borderValue: "#ffffff33"
    useLogoVariant: dark
    cssClass: "scheme-4"
  - name: "Scheme 5"
    background: "chromatic3-shade-6"
    backgroundHex: "#004330"
    foregroundHex: "#004330"
    textHex: "#ffffff"
    accentHex: "#ffffff"
    borderValue: "#ffffff33"
    useLogoVariant: dark
    cssClass: "scheme-5"
  - name: "Scheme 6"
    background: "chromatic2-shade-7"
    backgroundHex: "#451723"
    foregroundHex: "#451723"
    textHex: "#ffffff"
    accentHex: "#ffffff"
    borderValue: "#ffffff33"
    useLogoVariant: dark
    cssClass: "scheme-6"
  - name: "Scheme 7"
    background: "neutral-shade-7"
    backgroundHex: "#0c0a05"
    foregroundHex: "#0c0a05"
    textHex: "#ffffff"
    accentHex: "#ffffff"
    borderValue: "#ffffff33"
    useLogoVariant: dark
    cssClass: "scheme-7"
  - name: "Scheme 8"
    background: "chromatic1-shade-4"
    backgroundHex: "#0A66C2"
    foregroundHex: "#0A66C2"
    textHex: "#ffffff"
    accentHex: "#ffffff"
    borderValue: "#ffffff33"
    useLogoVariant: dark
    cssClass: "scheme-8"
---

# AI/ML/DevOps Full-Stack & Mobile Solutions Platform — Design Specification

This file contains machine-readable design tokens in the YAML frontmatter above, and human-readable guidance below.

## Colors

The design uses a **light** theme with a neutral palette and 4 chromatic palettes.

- **Neutral shades** range from shade-0 (darkest) to shade-7 (lightest), plus white
- **Science Blue** — primary shade: `#0A66C2`
- **Mandy** — primary shade: `#E94E77`
- **Jade** — primary shade: `#00A878`
- **Cream Can** — primary shade: `#F6C85F`

Use the CSS custom properties from `react/globals.css` for all colors (e.g. `--color-neutral-darkest`, `--color-blue-ribbon`).

## Typography

Headings use **Urbanist** at weight 500. Body text uses **Inter** at weight 400.

The type scale has desktop and mobile sizes. Apply mobile sizes at smaller breakpoints. All values are in `react/globals.css`.

## UI Elements

UI style is **sleek** with button radius 12px. Cards use the **outlined** style with border-width 1px.

## Color Schemes

Sections use color schemes to control their visual appearance. Each scheme is derived from a single background color — all other colors (text, foreground, accent, border) are automatically computed for optimal contrast.

| Scheme | Background | Text | Accent | Logo | CSS class |
|--------|-----------|------|--------|------|-----------|
| Scheme 1 | Mandy Lighter (#FADBE3) | #0c0a05 | #0A66C2 | light | `.scheme-1` |
| Scheme 2 | Neutral White (#FFFFFF) | #0c0a05 | #0A66C2 | light | `.scheme-2` |
| Scheme 3 | Science Blue Lighter (#CEE0F2) | #0c0a05 | #0A66C2 | light | `.scheme-3` |
| Scheme 4 | Mandy Darker (#5D1F2F) | #ffffff | #ffffff | dark | `.scheme-4` |
| Scheme 5 | Jade Darker (#004330) | #ffffff | #ffffff | dark | `.scheme-5` |
| Scheme 6 | Mandy Darkest (#451723) | #ffffff | #ffffff | dark | `.scheme-6` |
| Scheme 7 | Neutral Darkest (#0c0a05) | #ffffff | #ffffff | dark | `.scheme-7` |
| Scheme 8 | Science Blue (#0A66C2) | #ffffff | #ffffff | dark | `.scheme-8` |

Apply a scheme by adding its CSS class to the section element. See `sitemap.md` for which scheme each section uses.

### Tweaking Schemes

To create visual variation, you can change which scheme a section uses. When switching schemes:

- Swap the CSS class (e.g. change `.scheme-1` to `.scheme-2`)
- All child elements automatically inherit the correct text, accent, and border colors
- Use the matching logo variant (`logo-light.svg` or `logo-dark.svg`) based on the scheme's `useLogoVariant`
- Alternate between light and dark schemes to create visual rhythm
