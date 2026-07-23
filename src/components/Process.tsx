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
        <div className="process-heading">
          <h2 className="section-title">{philosophy.title}</h2>
          <p className="philosophy-intro">{philosophy.intro}</p>
        </div>
        <ol className="process-grid smooth-stepper">
          {process.map((p) => (
            <li className="process-step" key={p.step}>
              <div className="process-index"><span>{p.step}</span></div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
