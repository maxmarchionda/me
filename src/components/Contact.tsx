import * as Separator from "@radix-ui/react-separator";
import { Github, Linkedin, Mail } from "lucide-react";
import { identity } from "../data/resume";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-kicker">Contact</div>
        <h2 className="section-title">Say hello</h2>
        <div className="contact-list">
          <a className="social-link" href={`mailto:${identity.email}`}>
            <Mail />
            {identity.email}
          </a>
          <a
            className="social-link"
            href={identity.links.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github />
            GitHub
          </a>
          <a
            className="social-link"
            href={identity.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
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
