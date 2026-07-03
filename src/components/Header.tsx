const links = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#hobbies", label: "Hobbies" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <a href="#top" className="wordmark">
          Max Marchionda
        </a>
        <nav className="site-nav" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a className="button primary sm" href="#contact">
            Say hi
          </a>
        </nav>
      </div>
    </header>
  );
}
