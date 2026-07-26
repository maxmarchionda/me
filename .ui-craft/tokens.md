# Design Tokens

## Colors

- Vermilion signal accent `#ef432f` in both themes.
- Light: technical paper `#f1efe8`, black ink `#171713`, teal secondary ink `#0d7774`.
- Dark: drafting film `#11110f`, chalk ink `#f0eee7`, cyan secondary ink `#66bbb4`.
- Components use `--color-*` semantic aliases only; primitive ramps remain in `tokens.css`.
- Teal is subordinate and reserved for the landscape, rules, and quiet data details.

## Typography

- Body: Plus Jakarta Sans, 16px/1.5 default.
- Display: Space Grotesk, 500–700, tight tracking above 24px.
- Mono: JetBrains Mono for terminal, metadata, numbers, and compact labels.

## Spacing

4px base scale: 4, 8, 12, 16, 24, 32, 48, 64, and 96px.

## Radius

2px editorial frames, 8px media, 14px overlays, pill only for the floating theme control.

## Shadows

- Most surfaces use crisp ink rules, not elevation.
- `--shadow-raised`: dialogs and floating theme control only.
- `--shadow-brand`: offset poster shadow on the primary CTA.

## Motion

- Deterministic ease-out tween: `cubic-bezier(0.16, 1, 0.3, 1)`.
- Fast 150ms, normal 240ms, slow 420ms.
- Hero entrance budget: three content groups plus the terminal.
- Stagger: 60ms. No bounce. Reduced motion resolves immediately.
