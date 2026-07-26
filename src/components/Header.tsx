import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import Button from "./ui/Button";

const links = [
  { href: "#capabilities", label: "What I Do" },
  { href: "#process", label: "How I Work" },
  { href: "#track-record", label: "Track Record" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="site-header">
      <div className="container">
        <a href="#top" className="wordmark">
          <span className="site-monogram" aria-hidden="true">
            <span>M</span><span className="site-monogram-period">.</span>
          </span>
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
              ref={menuTriggerRef}
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
              onCloseAutoFocus={(event) => {
                event.preventDefault();
                menuTriggerRef.current?.focus({ preventScroll: true });
              }}
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
