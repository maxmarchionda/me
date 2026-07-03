import { skillGroups } from "../data/resume";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-kicker">Skills</div>
        <h2 className="section-title">Tools of the trade</h2>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.label}>
              <h3>{group.label}</h3>
              <div className="skill-badges">
                {group.skills.map((skill) => (
                  <span className="skill-badge" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
