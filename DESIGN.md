# Design Brief: Vira Makeup Artistry & Beauty Studio

**Purpose**: Premium luxury makeup artistry studio website showcasing celebrity collaborations, services, and booking capabilities in Akola, Maharashtra.

## Direction & Tone
Luxury minimalism — refined, premium, sophisticated. Restraint through deliberate choices. Warm elegance without excess. Premium through subtlety, not saturation.

## Palette
| Token | OKLCH | Hex (approx) | Usage |
|-------|-------|--------------|-------|
| Cream | 0.97 0.01 96 | #FAF7F2 | Background, cards, surfaces |
| Beige | 0.92 0.02 81 | #E8D5C4 | Secondary backgrounds, accents |
| Brown Light | 0.70 0.05 62 | #B8956A | Tertiary accents, hover states |
| Brown | 0.48 0.07 48 | #6B4423 | Primary text, headlines, CTAs |
| Brown Dark | 0.32 0.06 45 | #3D2817 | Deep text, active states |
| Text Primary | 0.28 0.04 48 | #2A1810 | Body text, primary content |

## Typography
| Family | Font | Role | Weights |
|--------|------|------|----------|
| Display | Fraunces | H1–H3, hero headlines, luxury emphasis | 400, 600, 700 |
| Body | GeneralSans | Body, lists, UI labels | 400, 500, 600 |
| Mono | GeistMono | Code, technical content (rare) | 400 |

## Elevation & Depth
- **Surfaces**: Cream (0.97 0.01 96) base with 0.5–1px beige borders (0.88 0.02 85)
- **Cards**: Glass-morphism blur (16px) with warm beige glow overlay at 0.1–0.2 opacity
- **Shadows**: Warm brown (0.48 0.07 48 at 0.08–0.12 opacity) for depth, NO sharp blacks
- **Glow effects**: Subtle beige/brown blur (0.2–0.3 opacity), not harsh or golden

## Structural Zones
| Zone | Surface | Border | Shadow | Example |
|------|---------|--------|--------|----------|
| Header/Nav | Cream w/ blur | Bottom 0.5px beige | Subtle elevation | Sticky nav |
| Hero | Gradient beige→cream | None | Glow effect backdrop | 3D particle scene |
| Content Sections | Alternating cream/beige | Top/bottom dividers | Layer depth via blur | Services, gallery |
| Cards | Glass morphism cream | Thin beige | Warm brown glow | Service cards, reviews |
| CTA Buttons | Brown solid (0.48) | 1px border brown-dark | Elevation shadow | "Book Now" buttons |
| Footer | Beige (0.92) | Top divider beige | Subtle elevation | Contact, links |

## Motion & Animation
- **Floating particles**: Ambient drifting in hero (y ±18px, x ±8px), 0.15–0.35 opacity
- **Hover transitions**: 0.3s cubic-bezier(0.4, 0, 0.2, 1) for all interactive elements
- **Card animations**: Fade-in (0.6s) on scroll, 3D hover elevations, glow pulse on hover
- **Scroll reveals**: Staggered reveal for testimonials, gallery, services
- **Background subtlety**: Soft blur orbs (2–4 per page) at 0.05–0.1 opacity, very slow drift

## Spacing & Rhythm
- **Vertical rhythm**: 16px base, 24px sections, 32px major blocks
- **Horizontal**: 24px card padding, 16px internal spacing
- **Breathing room**: Generous whitespace (40–60px between major sections)

## Component Patterns
- **Service cards**: 3D flip on hover, brown heading + beige subtext, subtle glow on active
- **Review cards**: Animated star ratings, warm brown quote accent, fade-in on scroll
- **Gallery grid**: 2-col mobile, 3-col tablet, 4-col desktop; 3D hover lift + glow
- **CTAs**: Brown (0.48) solid, beige text on hover, rounded corners (12px), elevation shadow
- **FAQ**: Brown headings, smooth accordion (0.2s), beige hover state
- **Floating buttons**: WhatsApp (left), Instagram (right), brown with cream icon, pulsing glow on load

## Signature Detail
**Blurry warm glow backdrop**: Every major card and section has a soft, blurred beige/brown glow that breathes — pulsing at 2.5s intervals. This is the signature luxury detail that makes the site feel premium without being garish. NOT golden/yellow glows — strictly warm beige and brown tones.

## Constraints
✓ NO gold, NO yellow, NO bright accents — only beige, brown, cream  
✓ NO stark black shadows — all shadows use warm brown at reduced opacity  
✓ Mobile-first responsive (sm, md, lg breakpoints)  
✓ All images working & visible (Unsplash URLs)  
✓ Light theme only (no dark mode)  
✓ 3D animations on every major section (Three.js, React Three Fiber)  
✓ Minimum 6 sections + 5 pages with unique background animations  
✓ Every interactive element has a smooth transition & glow effect
