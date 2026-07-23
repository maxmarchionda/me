import type { MouseEvent, ReactNode } from "react";

type GlowHoverCardProps = {
  children: ReactNode;
  className?: string;
};

/** Adapted from SmoothUI Glow Hover Card using the project's semantic accent. */
export default function GlowHoverCard({ children, className = "" }: GlowHoverCardProps) {
  const handlePointer = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--glow-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--glow-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <div className={`glow-hover-card ${className}`} onMouseMove={handlePointer}>
      {children}
    </div>
  );
}
