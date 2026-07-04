import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether an element is in the viewport, toggling back to false when
 * it scrolls back out — so scroll-reveal animations replay both scrolling
 * down into a section and scrolling back up past it.
 */
export function useInView<T extends HTMLElement>(threshold = 0.2) {
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
