import { Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const lines = [
  ["scope", "multi-team initiative"],
  ["method", "agentic AI-driven dev (AIDLC)"],
  ["backing", "$50M · 2 yrs"],
  ["stage", "beta → GA 2027"],
] as const;

/** Adapted from Magic UI Terminal with portfolio-specific content. */
export default function Terminal() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="hero-terminal" role="img" aria-label="Enterprise initiative status summary">
      <div className="hero-terminal-bar">
        <span className="hero-terminal-dot" />
        <span className="hero-terminal-dot" />
        <span className="hero-terminal-dot" />
        <span className="hero-terminal-title">initiative-status.log</span>
      </div>
      <div className="hero-terminal-body">
        <p className="hero-terminal-command">status enterprise-initiative --mode aidlc</p>
        {lines.map(([label, metric], index) => (
          <motion.div
            className="hero-terminal-line"
            key={label}
            initial={reduceMotion ? false : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.28, delay: 0.28 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <Check className="check" aria-hidden="true" />
            <span>{label}</span>
            <span className="metric">{metric}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
