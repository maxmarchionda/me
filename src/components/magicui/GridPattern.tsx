/** Adapted from Magic UI Grid Pattern. Decorative only. */
export default function GridPattern() {
  return (
    <svg className="magic-grid-pattern" aria-hidden="true">
      <defs>
        <pattern id="hero-grid" width="44" height="44" patternUnits="userSpaceOnUse">
          <path d="M 44 0 L 0 0 0 44" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
        <radialGradient id="hero-grid-mask">
          <stop offset="0" stopColor="white" />
          <stop offset="1" stopColor="transparent" />
        </radialGradient>
        <mask id="hero-grid-fade">
          <rect width="100%" height="100%" fill="url(#hero-grid-mask)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-grid)" mask="url(#hero-grid-fade)" />
    </svg>
  );
}
