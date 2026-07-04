import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether an element is in the viewport, toggling back to false when
 * it scrolls back out — so scroll-reveal animations replay both scrolling
 * down into a section and scrolling back up past it.
 *
 * Threshold defaults to 0 (any overlap counts) rather than a ratio like 0.2:
 * a ratio threshold is a fraction of the *target's own height*, so a section
 * taller than ~5x the viewport (common on mobile once content stacks into a
 * single column) could never reach it — leaving the section permanently
 * hidden at opacity:0 while scrolled through it, which looked like the
 * whole page going blank.
 */
export function useInView<T extends HTMLElement>(threshold = 0) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
