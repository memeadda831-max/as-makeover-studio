# Design Brief: AS Makeover & Makeup Studio

## Vision
Luxury premium 3D-animated website showcasing professional makeup artistry with warm beige/brown light theme, blurry glow effects, and sophisticated elegance.

## Tone & Purpose
Editorial luxury, aspirational yet approachable. Celebrate celebrity work, SFX expertise, and Bombay School of Makeup & Hair credentials. Full 3D hero canvas with floating particles conveys innovation and premium positioning.

## Differentiation
Three.js-powered hero with floating geometric particles and soft lighting. Warm beige + bronze palette throughout. Every section animates: floating objects, soft glows, smooth transitions. Professional portfolio meets luxury experience.

## Color Palette (OKLCH Light Theme)

| Token | OKLCH | Hex | Role |
|-------|-------|-----|------|
| Primary | 0.42 0.08 50 | #8B6F47 | Rich warm brown, headings, CTA accents |
| Secondary | 0.75 0.05 60 | #C9956C | Bronze/tan, highlights, secondary CTAs |
| Accent | 0.55 0.12 35 | #A67C52 | Copper bronze, interactive elements, hovers |
| Background | 0.965 0.01 70 | #F5F1ED | Cream base, ultra-light |
| Card | 0.98 0.01 70 | #FDFBF8 | Slightly warmer cream for depth |
| Muted | 0.88 0.02 70 | #E8E2D8 | Subtle backgrounds, dividers |
| Foreground | 0.18 0.01 70 | #3D3028 | Deep brown text |

## Typography
- **Display**: Fraunces (serif, editorial, 700 weight for headings)
- **Body**: GeneralSans (clean contemporary sans, 400/500 weights)
- **Scale**: 12px → 14px → 16px → 20px → 24px → 32px → 48px

## Elevation & Depth
- `.glow-warm`: Bronze glow shadow for premium cards (0 0 20px rgba(201,149,108,0.3))
- `.glow-subtle`: Brown glow for muted elevation (0 0 12px rgba(139,111,71,0.2))
- `.backdrop-blur-luxury`: 10px blur for glassmorphism over images
- Layered card backgrounds with subtle shadow hierarchy

## Structural Zones

| Zone | Surface | Treatment |
|------|---------|----------|
| Hero | 3D Canvas | Three.js particles, floating geometry, soft lighting |
| Header | Cream (0.98 OKLCH) | No border initially; shows on scroll with subtle shadow |
| Section BG | Alternating Cream/Muted | Cream for primary content, Muted for secondary |
| Cards | Card (0.98) | Warm glow shadow, border-radius 12-16px, 3D perspective on hover |
| CTA Buttons | Primary (0.42) | Bronze text on cream, glow on hover, smooth transitions |
| Footer | Muted (0.88) | Subtle background, dividing line above |

## Spacing & Rhythm
- Base unit: 4px
- Sections: 80px top/bottom (mobile 40px)
- Cards: 24px padding interior
- Typography: 1.6 line-height for body text

## Component Patterns
1. **Hero Section**: 3D canvas backdrop, floating particles, centered tagline with floating animation
2. **Service Cards**: Image top, text bottom, glow on hover, scale transform
3. **Testimonial**: Profile image, 5★ star rating, quote text in serif, glowing border
4. **Portfolio Grid**: Masonry layout, hover zoom + glow effect, image overlay labels
5. **CTA Section**: Centered text, primary button with hover glow, floating accent shapes
6. **Floating Buttons**: WhatsApp (left), Instagram (right), fixed position with pulse glow, soft shadows

## Motion & Animation
- **float**: 3s infinite, translateY(-20px) at midpoint — applies to hero elements
- **soft-glow**: 3s infinite pulsing opacity & blur — applies to accent elements
- **particle-drift**: 4s ease-out, particles move and fade across canvas
- **hover states**: 0.3s smooth transitions, scale 1.05, glow brightens
- **scroll reveals**: Fade-in + slight translateY as sections come into view

## Constraints
- No harsh shadows or neon effects — only warm, blurred glows
- OKLCH color system throughout; no hex literals in CSS
- All images use `/assets/images/` references; ensure proper aspect ratios
- Floating buttons always visible and interactive on all breakpoints
- Mobile: stack sections vertically, reduce animation intensity (fewer particles, slower floats)

## Signature Detail
**Luxury glow ecosystem**: Every interactive element wrapped in warm bronze glow that intensifies on interaction. Combined with Three.js particles and cream + brown palette, creates premium, distinctive experience unavailable in generic AI designs.

## Image Assets
- Hero: Optional professional portrait as small accent (not full background)
- Portfolio: SFX work, Prosthetic work, Bridal work, T-Series work — organized by service category
- Owner portrait: Dedicated section showcasing makeup artist

## Responsive Breakpoints
- Mobile (sm): 640px — stack cards, reduce hero canvas height
- Tablet (md): 768px — 2-column grids
- Desktop (lg): 1024px+ — full layout with 3-column grids

## Accessibility
- All text meets AA+ contrast (deep brown on cream)
- Floating buttons have clear focus states
- Animated elements respect prefers-reduced-motion
- Portfolio images have alt text describing makeup category
