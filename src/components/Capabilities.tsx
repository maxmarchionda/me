import { useInView } from "../hooks/useInView";
import { capabilities } from "../data/content";

export default function Capabilities() {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section
      className={`section reveal${inView ? " in-view" : ""}`}
      id="capabilities"
      ref={ref}
    >
      <div className="container">
        <div className="section-kicker">What I Do</div>
        <h2 className="section-title">Where I add the most leverage</h2>
        <div className="capability-grid">
          {capabilities.map((c) => (
            <div className="capability-card" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
              <div className="capability-tags">
                {c.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
