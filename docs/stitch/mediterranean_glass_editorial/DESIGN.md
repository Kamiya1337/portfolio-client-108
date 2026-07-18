---
name: Mediterranean Glass Editorial
colors:
  surface: '#fcf9f1'
  surface-dim: '#dcdad2'
  surface-bright: '#fcf9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3eb'
  surface-container: '#f1eee6'
  surface-container-high: '#ebe8e0'
  surface-container-highest: '#e5e2da'
  on-surface: '#1c1c17'
  on-surface-variant: '#404751'
  inverse-surface: '#31312b'
  inverse-on-surface: '#f3f1e9'
  outline: '#717783'
  outline-variant: '#c0c7d3'
  surface-tint: '#0061a5'
  primary: '#005e9f'
  on-primary: '#ffffff'
  primary-container: '#0077c8'
  on-primary-container: '#fbfbff'
  inverse-primary: '#9fcaff'
  secondary: '#45681c'
  on-secondary: '#ffffff'
  secondary-container: '#c3ed91'
  on-secondary-container: '#496c20'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cea700'
  on-tertiary-container: '#4e3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#9fcaff'
  on-primary-fixed: '#001d36'
  on-primary-fixed-variant: '#00497e'
  secondary-fixed: '#c5f094'
  secondary-fixed-dim: '#aad37a'
  on-secondary-fixed: '#0f2000'
  on-secondary-fixed-variant: '#2e4f03'
  tertiary-fixed: '#ffe085'
  tertiary-fixed-dim: '#efc100'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fcf9f1'
  on-background: '#1c1c17'
  surface-variant: '#e5e2da'
  aegean-blue: '#0077C8'
  olive-green: '#486B1F'
  sunflower-yellow: '#F2C400'
  santorini-white: '#F7F4EC'
  glass-border: rgba(255, 255, 255, 0.4)
  glass-surface: rgba(247, 244, 236, 0.6)
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 64px
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 40px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap-lg: 120px
  section-gap-sm: 80px
---

## Brand & Style

This design system reimagines a high-end portfolio through the lens of a **Sophisticated Mediterranean** aesthetic. It departs from ethereal, dreamy tones in favor of a grounded, professional editorial feel that captures the vibrant clarity of the Greek Isles. The brand personality is authoritative yet welcoming, blending the timeless tradition of classical publishing with a modern, high-tech digital finish.

The visual style is a hybrid of **Minimalism** and **Glassmorphism**. It focuses on structural integrity, expansive Santorini-inspired whitespace, and deep atmospheric depth. Key visual motifs include:
- **Mediterranean Blurs:** Large, soft radial gradients in Aegean Blue and Olive Green that sit deep behind the glass layers, replacing previous lavender tones with a more natural, oceanic depth.
- **Deep Glassmorphism:** Primary containers use high-intensity backdrop blurs (20px+) to create a frosted-glass look that feels premium and tactile.
- **Architectural Framing:** Semi-transparent panels are defined by soft white borders, mimicking the stark, sun-drenched architecture of coastal villas.
- **Vibrant Precision:** Sunflower Yellow is used with surgical precision to draw the eye to critical actions and editorial highlights, providing a warm, sun-kissed contrast to the cool blues and greens.

## Colors

The palette transition moves from "Dreamy" to "Professional Editorial," utilizing a high-contrast Mediterranean scheme.

- **Primary (Aegean Blue):** Used for primary navigation, headings, and deep-sea radial gradients. It represents stability and professional depth.
- **Secondary (Olive Green):** Used for organic accents, botanical-themed secondary gradients, and secondary text elements. It adds a sophisticated, grounded warmth.
- **Tertiary (Sunflower Yellow):** A high-visibility accent reserved for CTAs, decorative highlights, and interactive states.
- **Neutral (Santorini White):** The foundation of the system. This off-white cream provides a softer, more sophisticated background than pure white, reducing eye strain and enhancing the "Editorial" paper feel.
- **Glass Logic:** All glass panels use `santorini-white` at 60% opacity with a 20px backdrop-blur and a `glass-border` (white at 40% opacity).

## Typography

This system maintains its editorial roots through a high-contrast serif and sans-serif pairing that emphasizes hierarchy and legibility.

- **EB Garamond (Headlines):** Used for all display and headline roles. Its historical weight and elegant curves provide the "Professional Editorial" tone. Use *Italic* weights for pull-quotes or to emphasize artistic flair within a heading.
- **Work Sans (Body & Labels):** A neutral, versatile sans-serif that ensures the long-form content remains readable and modern.
- **Editorial Labels:** All `label-sm` text should be transformed to uppercase with 10% letter spacing. Use Aegean Blue for labels to maintain a structured, institutional feel.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model inspired by premium magazine spreads, ensuring content is always framed by intentional whitespace.

- **Grid System:** A 12-column grid on desktop with generous 64px margins. Content should be grouped into glass panels that span defined column widths (e.g., a 4-column sidebar and an 8-column main content area).
- **Responsive Behavior:** 
    - **Desktop:** 12 columns, 24px gutters.
    - **Tablet:** 8 columns, 16px gutters, 40px margins.
    - **Mobile:** 4 columns, 12px gutters, 20px margins.
- **Vertical Rhythm:** Sections are separated by "Section Gaps" (80px to 120px) to allow the background Mediterranean blurs to breathe through the layout.

## Elevation & Depth

Visual hierarchy is communicated through **Glassmorphism** and backdrop-centric layering.

- **Layer 0 (Background):** Solid `Santorini White` base with large, soft radial gradients of `Aegean Blue` (top right) and `Olive Green` (bottom left) at 10-15% opacity.
- **Layer 1 (Glass Panels):** 60% opaque white surfaces with a 20px+ backdrop-blur. These are defined by a 1px `glass-border` white stroke.
- **Layer 2 (Floating Elements):** Tooltips and dropdowns use a slightly more opaque glass (80%) with a very soft, diffused Aegean-tinted shadow (Offset: 0 10px, Blur: 30px, Opacity: 0.08).
- **Focus:** Interactive elements do not use heavy shadows; instead, they use a `Sunflower Yellow` subtle outer glow to indicate focus.

## Shapes

The shape language is **Rounded**, reflecting the smooth, weathered edges of Aegean coastal architecture.

- **Buttons & Inputs:** Use a 0.5rem (8px) radius for a professional, clean-cut appearance.
- **Glass Containers:** Use a 1.5rem (24px) radius to create a sense of large, solid blocks of "carved" glass.
- **Decorative Elements:** Small icons or yellow highlight bars should maintain the 0.5rem rounding for consistency.

## Components

### Buttons
- **Primary:** Solid `Sunflower Yellow` background with `Aegean Blue` text. This provides the highest contrast and visual weight for main CTAs.
- **Secondary:** Semi-transparent `Aegean Blue` (10% opacity) with a 1px Aegean Blue border and text.
- **Glass Button:** A small version of the glass panel effect—backdrop blur (10px) and white border. Use for low-priority navigation.

### Cards
Portfolio cards are glass panels with internal padding of 24px. Images within cards should have a subtle 8px corner radius. Headlines inside cards should always be `EB Garamond`.

### Input Fields
Inputs are fully enclosed glass panels with a 1px white border. Upon focus, the border color changes to `Sunflower Yellow` and a 1px solid underline in the same color appears for additional emphasis.

### Chips & Tags
Pill-shaped (rounded-full) with an `Olive Green` background at 15% opacity and solid `Olive Green` text. Used for categorization or metadata.

### Editorial Dividers
Thin 1px lines using the `Aegean Blue` color at 20% opacity. For a more decorative "Mediterranean" look, a small `Sunflower Yellow` dot (4px) can be centered on the divider line.