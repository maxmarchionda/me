import * as Separator from "@radix-ui/react-separator";
import { identity } from "../data/resume";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-kicker">Contact</div>
        <h2 className="section-title">Say hello</h2>
        <div className="contact-list">
          <a className="button primary" href={`mailto:${identity.email}`}>
            {identity.email}
          </a>
          <a
            className="button"
            href={identity.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="button"
            href={identity.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <Separator.Root
          className="separator"
          style={{ marginTop: "var(--space-7)" }}
        />
      </div>
    </section>
  );
}
