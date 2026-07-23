import { useInView } from "../hooks/useInView";
import { education, experience } from "../data/resume";
import { stats } from "../data/content";
import NumberFlow from "./smoothui/NumberFlow";

export default function TrackRecord() {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section
      className={`section reveal${inView ? " in-view" : ""}`}
      id="track-record"
      ref={ref}
    >
      <div className="container">
        <div className="section-kicker">Track Record</div>
        <h2 className="section-title">What it's led to</h2>
        <div className="stat-grid">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="stat-value"><NumberFlow value={s.value} /></div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
        {experience.map((job) => (
          <article className="role-card" key={job.company}>
            <header>
              <div>
                <h3>{job.headline}</h3>
                <div className="company">
                  {job.company} · {job.location}
                </div>
              </div>
              <span className="period">{job.period}</span>
            </header>
            <ul className="timeline" aria-label="Role progression">
              {job.progression.map((step, i) => (
                <li key={step.title}>
                  <div className="rail">
                    <div className="dot" />
                    {i < job.progression.length - 1 && <div className="line" />}
                  </div>
                  <div className="step">
                    <div className="step-title">{step.title}</div>
                    <div className="step-period">{step.period}</div>
                  </div>
                </li>
              ))}
            </ul>
            <ul className="highlights highlights-primary">
              {job.highlights.slice(0, 3).map((h) => (
                <li key={h.slice(0, 40)}>{h}</li>
              ))}
            </ul>
            {job.highlights.length > 3 && (
              <details className="role-more">
                <summary>More engineering work <span aria-hidden="true">+{job.highlights.length - 3}</span></summary>
                <ul className="highlights">
                  {job.highlights.slice(3).map((h) => (
                    <li key={h.slice(0, 40)}>{h}</li>
                  ))}
                </ul>
              </details>
            )}
          </article>
        ))}
        <p className="education">
          {education.degrees.join(" · ")} — {education.school},{" "}
          {education.location} ({education.period}, GPA {education.gpa})
        </p>
      </div>
    </section>
  );
}
