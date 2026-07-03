import { identity } from "../data/resume";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-blob coral" aria-hidden />
      <div className="hero-blob mustard" aria-hidden />
      <div className="container">
        <p className="eyebrow">Machine learning · full-stack</p>
        <h1>{identity.name}</h1>
        <p className="tagline">{identity.title}</p>
        <p className="meta">{identity.location}</p>
        <div className="hero-actions">
          <a className="button primary" href={identity.resumePdf} download>
            Download résumé
          </a>
          <a className="button" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
