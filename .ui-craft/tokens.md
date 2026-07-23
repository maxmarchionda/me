# Design Tokens

## Colors

- Dark accent: indigo `#6d5bff`; background `#08080b`; raised surfaces `#16161d`.
- Light accent: terracotta `#cf4f26`; background cream `#fdf8f1`; white surfaces.
- Components use `--color-*` semantic aliases only; primitive ramps remain in `tokens.css`.
- Ember/terracotta is reserved for section kickers and light-theme accent states.

## Typography

- Body: Plus Jakarta Sans, 16px/1.5 default.
- Display: Space Grotesk, 500–700, tight tracking above 24px.
- Mono: JetBrains Mono for terminal, metadata, numbers, and compact labels.

## Spacing

4px base scale: 4, 8, 12, 16, 24, 32, 48, 64, and 96px.

## Radius

8px small controls, 14px media/overlays, 22px cards, 32px large surfaces, pill for buttons/tags.

## Shadows

- `--shadow-sm`: quiet card separation.
- `--shadow-md`: hover/elevated control.
- `--shadow-raised`: terminal, dialogs, and floating theme control.
- `--shadow-brand`: primary CTA only.

## Motion

- Deterministic ease-out tween: `cubic-bezier(0.16, 1, 0.3, 1)`.
- Fast 150ms, normal 240ms, slow 420ms.
- Hero entrance budget: three content groups plus the terminal.
- Stagger: 60ms. No bounce. Reduced motion resolves immediately.
