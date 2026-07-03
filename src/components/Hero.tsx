import { identity } from "../data/resume";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <h1>{identity.name}</h1>
        <p className="tagline">{identity.title}</p>
        <p className="meta">{identity.location}</p>
        <div className="hero-actions">
          <a className="button primary" href={identity.resumePdf} download>
            Download Résumé
          </a>
          <a className="button" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
