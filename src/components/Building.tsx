import { building } from "../data/content";
import Button from "./ui/Button";

export default function Building() {
  return (
    <section className="section" id="building">
      <div className="container">
        <div className="building-card">
          <div>
            <p className="building-label">Beyond enterprise AI</p>
            <h2>{building.title}</h2>
            <p>{building.description}</p>
            <div className="capability-tags">
              {building.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <Button className="shimmer-sweep" href={building.link} target="_blank" rel="noreferrer">
            {building.linkLabel} →
          </Button>
        </div>
      </div>
    </section>
  );
}
