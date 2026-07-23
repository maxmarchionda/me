import { useInView } from "../hooks/useInView";
import { capabilities } from "../data/content";
import GlowHoverCard from "./smoothui/GlowHoverCard";

export default function Capabilities() {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section
      className={`section reveal${inView ? " in-view" : ""}`}
      id="capabilities"
      ref={ref}
    >
      <div className="container">
        <div className="section-heading-row">
          <h2 className="section-title">Where I add the most leverage</h2>
          <p className="section-aside">Systems thinking from the first user conversation through production scale.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((c, index) => (
            <GlowHoverCard className={`capability-card capability-card-${index + 1}`} key={c.title}>
              <span className="capability-marker" aria-hidden="true">{index === 0 ? "Core practice" : ""}</span>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
              <div className="capability-tags">
                {c.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </GlowHoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}
