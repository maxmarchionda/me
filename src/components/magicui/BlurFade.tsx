import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type BlurFadeProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Adapted from Magic UI Blur Fade; tokens and reduced motion are project-owned. */
export default function BlurFade({ children, className, delay = 0 }: BlurFadeProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 12, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.42, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
