import { identity } from "../data/resume";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <span>
          © {new Date().getFullYear()} {identity.name}
        </span>
        <span>{identity.location}</span>
      </div>
    </footer>
  );
}
