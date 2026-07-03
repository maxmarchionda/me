import { education, experience } from "../data/resume";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-kicker">Experience</div>
        <h2 className="section-title">What I've built</h2>
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
            <ul className="progression" aria-label="Role progression">
              {job.progression.map((step) => (
                <li key={step.title}>
                  {step.title} · {step.period}
                </li>
              ))}
            </ul>
            <ul className="highlights">
              {job.highlights.map((h) => (
                <li key={h.slice(0, 40)}>{h}</li>
              ))}
            </ul>
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
