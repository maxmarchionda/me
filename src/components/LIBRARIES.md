# Component library ownership

The portfolio uses source-adapted components rather than opaque package wrappers. This keeps the
semantic light/dark token seam in `src/styles/tokens.css` authoritative.

## SmoothUI adaptations

- `ui/Button.tsx` — Smooth Button behavior
- `smoothui/GlowHoverCard.tsx` — pointer-aware card highlight
- `smoothui/NumberFlow.tsx` — formatted numeric reveal
- `Process.tsx` styles — Animated Stepper-inspired progression
- `Building.tsx` styles — Shimmer Sweep-inspired CTA

Source catalog: <https://smoothui.dev/docs/components>

## Magic UI adaptations

- `magicui/BlurFade.tsx`
- `magicui/GridPattern.tsx`
- `magicui/Terminal.tsx`
- `ThemeToggle.tsx` — Animated Theme Toggler-inspired icon swap

Source catalog: <https://magicui.design/docs/components>

## Update policy

Treat these files as project-owned code. When adopting upstream changes, compare behavior and
accessibility manually, then remap every color, radius, shadow, and duration to project tokens.
Do not introduce a second button, card, icon, or motion system.
