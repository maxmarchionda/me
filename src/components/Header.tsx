import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
} from "react";
import Button from "./ui/Button";

const links = [
  { href: "#capabilities", label: "What I Do" },
  { href: "#process", label: "How I Work" },
  { href: "#track-record", label: "Track Record" },
  { href: "#contact", label: "Contact" },
];

type DrawerDrag = {
  mode: "open" | "close";
  offset: number;
  startX: number;
  startTime: number;
  width: number;
  settling: boolean;
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [drawerDrag, setDrawerDrag] = useState<DrawerDrag | null>(null);
  const [suppressStateAnimation, setSuppressStateAnimation] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const hasToggledMenu = useRef(false);
  const drawerDragRef = useRef<DrawerDrag | null>(null);
  const settleTimerRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (settleTimerRef.current !== null) {
        window.clearTimeout(settleTimerRef.current);
      }
    },
    [],
  );

  const handleOpenChange = (nextOpen: boolean) => {
    hasToggledMenu.current = true;
    setSuppressStateAnimation(false);
    setOpen(nextOpen);
  };

  const menuMotionClass = hasToggledMenu.current
    ? open
      ? " menu-button-opening"
      : " menu-button-closing"
    : "";

  const beginDrawerDrag = (
    event: PointerEvent<HTMLDivElement>,
    mode: DrawerDrag["mode"],
  ) => {
    if (settleTimerRef.current !== null) {
      window.clearTimeout(settleTimerRef.current);
      settleTimerRef.current = null;
    }
    const width = Math.min(window.innerWidth * 0.85, 352);
    if (mode === "open") {
      handleOpenChange(true);
    }
    event.currentTarget.setPointerCapture(event.pointerId);
    const nextDrag: DrawerDrag = {
      mode,
      offset: mode === "open" ? width : 0,
      startX: event.clientX,
      startTime: performance.now(),
      width,
      settling: false,
    };
    drawerDragRef.current = nextDrag;
    setDrawerDrag(nextDrag);
  };

  const updateDrawerDrag = (event: PointerEvent<HTMLDivElement>) => {
    const current = drawerDragRef.current;
    if (!current || current.settling) return;

    const delta = event.clientX - current.startX;
    const offset =
      current.mode === "open" ? current.width + delta : delta;
    const nextDrag = {
      ...current,
      offset: Math.max(0, Math.min(current.width, offset)),
    };

    drawerDragRef.current = nextDrag;
    setDrawerDrag(nextDrag);
  };

  const finishDrawerDrag = (event: PointerEvent<HTMLDivElement>) => {
    const current = drawerDragRef.current;
    if (!current || current.settling) return;

    const elapsed = Math.max(performance.now() - current.startTime, 1);
    const velocity = (event.clientX - current.startX) / elapsed;
    const shouldOpen =
      current.mode === "open"
        ? current.offset < current.width * 0.72 || velocity < -0.45
        : !(current.offset > current.width * 0.28 || velocity > 0.45);

    const settlingDrag = {
      ...current,
      offset: shouldOpen ? 0 : current.width,
      settling: true,
    };
    drawerDragRef.current = settlingDrag;
    setDrawerDrag(settlingDrag);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    settleTimerRef.current = window.setTimeout(
      () => {
        setSuppressStateAnimation(true);
        drawerDragRef.current = null;
        setDrawerDrag(null);

        if (!shouldOpen) {
          hasToggledMenu.current = true;
          setOpen(false);
          window.setTimeout(() => setSuppressStateAnimation(false), 0);
        }
        settleTimerRef.current = null;
      },
      prefersReducedMotion ? 0 : 240,
    );
  };

  const drawerStyle = drawerDrag
    ? ({
        "--drawer-drag-offset": `${drawerDrag.offset}px`,
      } as CSSProperties)
    : undefined;
  const overlayStyle = drawerDrag
    ? { opacity: 1 - drawerDrag.offset / drawerDrag.width }
    : undefined;
  const drawerGestureClass = drawerDrag
    ? ` is-dragging${drawerDrag.settling ? " is-settling" : ""}`
    : "";
  const stateAnimationClass = suppressStateAnimation
    ? " suppress-state-animation"
    : "";

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

        <Dialog.Root open={open} onOpenChange={handleOpenChange}>
          <button
            ref={menuTriggerRef}
            type="button"
            className={`nav-toggle${menuMotionClass}`}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-navigation-drawer"
            onClick={() => handleOpenChange(true)}
          >
            <Menu aria-hidden />
          </button>
          {(!open || drawerDrag?.mode === "open") && (
            <div
              className="drawer-edge-swipe"
              aria-hidden="true"
              onPointerDown={(event) => beginDrawerDrag(event, "open")}
              onPointerMove={updateDrawerDrag}
              onPointerUp={finishDrawerDrag}
              onPointerCancel={finishDrawerDrag}
            />
          )}
          <Dialog.Portal>
            <Dialog.Overlay
              className={`mobile-nav-overlay${drawerGestureClass}${stateAnimationClass}`}
              style={overlayStyle}
            />
            <Dialog.Content
              id="mobile-navigation-drawer"
              className={`mobile-nav-content${drawerGestureClass}${stateAnimationClass}`}
              style={drawerStyle}
              aria-describedby={undefined}
              onCloseAutoFocus={(event) => {
                event.preventDefault();
                menuTriggerRef.current?.focus({ preventScroll: true });
              }}
            >
              <Dialog.Title style={{ position: "absolute", opacity: 0 }}>
                Menu
              </Dialog.Title>
              <div
                className="drawer-drag-handle"
                aria-hidden="true"
                onPointerDown={(event) => beginDrawerDrag(event, "close")}
                onPointerMove={updateDrawerDrag}
                onPointerUp={finishDrawerDrag}
                onPointerCancel={finishDrawerDrag}
              >
                <span />
              </div>
              <Dialog.Close asChild>
                <button
                  className={`nav-toggle${menuMotionClass}`}
                  aria-label="Close menu"
                >
                  <X aria-hidden />
                </button>
              </Dialog.Close>
              <nav className="mobile-nav" aria-label="Primary">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => handleOpenChange(false)}
                  >
                    {l.label}
                  </a>
                ))}
                <Button
                  variant="primary"
                  href="#contact"
                  onClick={() => handleOpenChange(false)}
                >
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
