import { useInView } from "../hooks/useInView";
import { philosophy, process } from "../data/content";

export default function Process() {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section
      className={`section reveal${inView ? " in-view" : ""}`}
      id="process"
      ref={ref}
    >
      <div className="container">
        <div className="section-kicker">{philosophy.kicker}</div>
        <h2 className="section-title">{philosophy.title}</h2>
        <p className="philosophy-intro">{philosophy.intro}</p>
        <div className="process-grid">
          {process.map((p) => (
            <div className="process-step" key={p.step}>
              <div className="process-index">{p.step}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
