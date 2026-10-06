"use client";

// Phone/tablet navigation. The design only specifies the desktop header, so below
// 960px the desktop links and Offerings mega-menu are hidden (see globals.css) and
// this menu button + panel takes over, using the same links and brand styling.
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const OFFERINGS = [
  { href: "/offerings#build", label: "Digital Product Development" },
  { href: "/offerings#automate", label: "AI & Automation" },
  { href: "/offerings#modernize", label: "Modernization & Migration" },
];
const LINKS = [
  { href: "/talent-solutions", label: "Talent Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About us" },
];

const noopSubscribe = () => () => {};

export default function MobileMenu({
  active,
  onTalk,
}: {
  active?: string;
  onTalk?: (e: React.MouseEvent) => void;
}) {
  const [open, setOpen] = useState(false);
  const [offersOpen, setOffersOpen] = useState(active === "/offerings");
  // The panel is portalled to <body>: the header's backdrop-filter would otherwise
  // become the containing block of the fixed-position panel.
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 960 && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const linkColor = (href: string) => (href === active ? "#FF6B00" : "#202733");

  return (
    <>
      <button
        type="button"
        className="mobile-menu-btn"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {open ? (
            <path d="M6 6l12 12M18 6 6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>
      {mounted &&
        createPortal(
          <div
            className={"mobile-menu-panel" + (open ? " is-open" : "")}
            aria-hidden={!open}
          >
            <nav aria-label="Main">
              <button
                type="button"
                className="mobile-menu-row"
                aria-expanded={offersOpen}
                onClick={() => setOffersOpen((o) => !o)}
                style={{ color: linkColor("/offerings") }}
              >
                Offerings
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transform: offersOpen ? "rotate(180deg)" : "none",
                    transition: "transform 300ms",
                  }}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div
                className={"mobile-menu-sub" + (offersOpen ? " is-open" : "")}
              >
                <div>
                  <a href="/offerings" onClick={() => setOpen(false)}>
                    All offerings
                  </a>
                  {OFFERINGS.map((o) => (
                    <a
                      key={o.href}
                      href={o.href}
                      onClick={() => setOpen(false)}
                    >
                      {o.label}
                    </a>
                  ))}
                </div>
              </div>
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="mobile-menu-row"
                  aria-current={l.href === active ? "page" : undefined}
                  style={{ color: linkColor(l.href) }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <a
              href="#talk"
              className="mobile-menu-cta"
              onClick={(e) => {
                setOpen(false);
                onTalk?.(e);
              }}
            >
              {"Let's Talk"}
            </a>
          </div>,
          document.body,
        )}
    </>
  );
}
