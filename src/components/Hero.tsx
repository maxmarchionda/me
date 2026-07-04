import { identity } from "../data/resume";
import { pitch } from "../data/content";

function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-terminal">
        <div className="hero-terminal-bar">
          <span className="hero-terminal-dot" />
          <span className="hero-terminal-dot" />
          <span className="hero-terminal-dot" />
          <span className="hero-terminal-title">initiative-status.log</span>
        </div>
        <div className="hero-terminal-body">
          <p className="hero-terminal-command">status enterprise-initiative --mode aidlc</p>
          <div className="hero-terminal-line">
            <span className="check">✓</span>
            <span>scope</span>
            <span className="metric">multi-team initiative</span>
          </div>
          <div className="hero-terminal-line">
            <span className="check">✓</span>
            <span>method</span>
            <span className="metric">agentic AI-driven dev (AIDLC)</span>
          </div>
          <div className="hero-terminal-line">
            <span className="check">✓</span>
            <span>backing</span>
            <span className="metric">$50M · 2 yrs</span>
          </div>
          <div className="hero-terminal-line">
            <span className="check">✓</span>
            <span>stage</span>
            <span className="metric">beta → GA 2027</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <p className="eyebrow">{pitch.eyebrow}</p>
            <h1>{pitch.headline}</h1>
            <p className="tagline">{pitch.subheadline}</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Get in touch
              </a>
              <a className="button" href="#process">
                See how I work
              </a>
            </div>
            <a className="resume-link" href={identity.resumePdf} download>
              Download résumé
            </a>
          </div>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
