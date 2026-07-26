import * as Tooltip from "@radix-ui/react-tooltip";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <button
          className="back-to-top-fab"
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp aria-hidden="true" />
        </button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className="tooltip-content" side="left" sideOffset={8}>
          Scroll to top
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}
