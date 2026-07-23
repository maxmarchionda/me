import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "./ui/Button";

const links = [
  { href: "#capabilities", label: "What I Do" },
  { href: "#process", label: "How I Work" },
  { href: "#track-record", label: "Track Record" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <a href="#top" className="wordmark">
          <img className="site-logo logo-dark" src="/logo.svg" alt="" width={28} height={28} />
          <img className="site-logo logo-light" src="/logo-light.svg" alt="" width={28} height={28} />
          Max Marchionda
        </a>
        <nav className="site-nav" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <Button variant="primary" size="sm" href="#contact">Get in touch</Button>
        </nav>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              className="nav-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <Menu aria-hidden />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="mobile-nav-overlay" />
            <Dialog.Content
              className="mobile-nav-content"
              aria-describedby={undefined}
            >
              <Dialog.Title style={{ position: "absolute", opacity: 0 }}>
                Menu
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="nav-toggle" aria-label="Close menu">
                  <X aria-hidden />
                </button>
              </Dialog.Close>
              <nav className="mobile-nav" aria-label="Primary">
                {links.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                ))}
                <Button variant="primary" href="#contact" onClick={() => setOpen(false)}>
                  Get in touch
                </Button>
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
