import { identity } from "../data/resume";
import { pitch } from "../data/content";
import BlurFade from "./magicui/BlurFade";
import GridPattern from "./magicui/GridPattern";
import Terminal from "./magicui/Terminal";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <GridPattern />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <BlurFade><p className="eyebrow">{pitch.eyebrow}</p></BlurFade>
            <BlurFade delay={0.06}><h1>{pitch.headline}</h1></BlurFade>
            <BlurFade delay={0.12}>
              <p className="tagline">{pitch.subheadline}</p>
              <div className="hero-actions">
                <Button variant="primary" href="#contact">Get in touch</Button>
                <Button href="#process">See how I work</Button>
              </div>
              <a className="resume-link" href={identity.resumePdf} download>Download résumé</a>
            </BlurFade>
          </div>
          <BlurFade className="hero-visual" delay={0.18}><Terminal /></BlurFade>
        </div>
      </div>
    </section>
  );
}
