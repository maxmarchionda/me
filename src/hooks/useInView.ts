import { useEffect, useRef, useState } from "react";

/**
 * Tracks the first time an element enters the viewport. Reveals run once so
 * content stays stable when visitors reverse scroll direction.
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
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.unobserve(entry.target);
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
