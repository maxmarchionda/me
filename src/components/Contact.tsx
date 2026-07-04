import { Github, Linkedin, Mail } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { identity } from "../data/resume";
import { contactCopy } from "../data/content";

export default function Contact() {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section
      className={`section reveal${inView ? " in-view" : ""}`}
      id="contact"
      ref={ref}
    >
      <div className="container">
        <div className="section-kicker">{contactCopy.kicker}</div>
        <h2 className="section-title">{contactCopy.title}</h2>
        <p className="section-lead">{contactCopy.lead}</p>
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
      </div>
    </section>
  );
}
