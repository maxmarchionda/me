export default function TechnicalLandscape() {
  return (
    <svg
      className="technical-landscape"
      viewBox="0 0 640 720"
      role="img"
      aria-labelledby="landscape-title landscape-description"
    >
      <title id="landscape-title">Abstract technical landscape</title>
      <desc id="landscape-description">
        Layered mountains, a signal sun, and precise construction lines merge nature with engineering.
      </desc>
      <defs>
        <linearGradient id="mountain-ink" x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="var(--color-ink-secondary)" stopOpacity="0.16" />
          <stop offset="0.55" stopColor="var(--color-ink-secondary)" stopOpacity="0.88" />
          <stop offset="1" stopColor="var(--color-ink-secondary)" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id="mountain-deep" x1="0.15" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="var(--color-text)" stopOpacity="0.08" />
          <stop offset="0.5" stopColor="var(--color-text)" stopOpacity="0.76" />
          <stop offset="1" stopColor="var(--color-text)" stopOpacity="0.06" />
        </linearGradient>
        <filter id="ink-soft">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <pattern id="micro-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="currentColor" strokeOpacity="0.13" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="640" height="720" fill="url(#micro-grid)" />
      <g className="landscape-construction" fill="none" stroke="currentColor">
        <path d="M42 88H598M42 632H598M84 42V678M554 42V678" />
        <path d="M24 178H242V112H388V206H616" />
        <path d="M38 516H178V582H462V488H608" />
        <path d="M132 62V136H268M506 94V162H428M78 416H214V364H318" />
        <circle cx="320" cy="360" r="246" />
        <circle cx="320" cy="360" r="198" />
      </g>

      <circle className="landscape-sun" cx="164" cy="154" r="96" />
      <circle className="landscape-signal" cx="494" cy="142" r="8" />
      <circle className="landscape-signal" cx="104" cy="564" r="13" />

      <g filter="url(#ink-soft)" opacity="0.55">
        <path
          d="M44 560C116 520 136 466 190 438C238 414 250 336 296 258C332 196 362 172 388 202C428 248 422 318 470 350C522 386 544 450 604 496V642H44Z"
          fill="url(#mountain-ink)"
        />
      </g>
      <path
        className="mountain mountain-back"
        d="M28 596C104 562 122 496 184 458C228 432 254 366 294 292C334 218 352 192 382 214C426 246 430 334 476 366C522 398 554 470 616 514V660H28Z"
      />
      <path
        className="mountain mountain-front"
        d="M108 640C166 588 188 514 242 488C306 456 316 338 370 278C402 242 420 278 442 346C462 408 504 444 532 502C552 544 584 572 622 596V676H108Z"
      />

      <g className="landscape-contours" fill="none" stroke="currentColor">
        <path d="M96 608C180 540 194 464 266 420C336 378 340 264 384 240" />
        <path d="M130 634C220 568 236 502 292 462C354 418 364 326 400 288" />
        <path d="M218 666C270 614 290 546 334 514C388 474 396 400 430 362" />
        <path d="M300 680C340 634 358 576 398 544C438 512 456 458 470 418" />
      </g>

      <g className="landscape-pines" fill="currentColor">
        <path d="M480 456l-18 34h12l-20 38h20v36h12v-36h20l-20-38h12z" />
        <path d="M524 478l-14 27h9l-16 31h16v29h10v-29h16l-16-31h9z" />
        <path d="M446 498l-12 23h8l-14 28h14v26h9v-26h14l-14-28h8z" />
      </g>

      <g className="landscape-labels" fill="currentColor">
        <text x="48" y="42">SYSTEM / 01</text>
        <text x="470" y="700">BUILD → SHIP</text>
        <text x="414" y="224">AI / PRODUCT</text>
      </g>
      <path className="landscape-crosshair" d="M480 116v52M454 142h52" />
    </svg>
  );
}
