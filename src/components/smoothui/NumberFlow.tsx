import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type NumberFlowProps = {
  value: string;
};

function parseValue(value: string) {
  const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
  if (!match) return null;
  return {
    prefix: match[1],
    number: Number(match[2].replace(/,/g, "")),
    suffix: match[3],
  };
}

/** Adapted from SmoothUI Number Flow; supports the portfolio's formatted stats. */
export default function NumberFlow({ value }: NumberFlowProps) {
  const parsed = parseValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? parsed?.number ?? 0 : 0);

  useEffect(() => {
    if (!parsed || !inView) return;
    if (reduceMotion) {
      setDisplay(parsed.number);
      return;
    }
    const started = performance.now();
    const duration = 700;
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - started) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(parsed.number * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, parsed?.number, reduceMotion]);

  if (!parsed) return <>{value}</>;
  return (
    <span ref={ref} aria-label={value}>
      <span aria-hidden="true">
        {parsed.prefix}
        {display.toLocaleString("en-US")}
        {parsed.suffix}
      </span>
    </span>
  );
}
