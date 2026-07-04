import { building } from "../data/content";

export default function Building() {
  return (
    <section className="section" id="building">
      <div className="container">
        <div className="section-kicker">{building.kicker}</div>
        <div className="building-card">
          <div>
            <h3>{building.title}</h3>
            <p>{building.description}</p>
            <div className="capability-tags">
              {building.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <a className="button" href={building.link} target="_blank" rel="noreferrer">
            {building.linkLabel} →
          </a>
        </div>
      </div>
    </section>
  );
}
