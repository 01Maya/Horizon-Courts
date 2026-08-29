"use client";

import { useEffect, useState } from "react";

const links = [
  ["About Us", "about"],
  ["Services", "services"],
  ["Club life", "club-life"],
  ["Experience", "experience"],
  ["Newsletter", "newsletter"],
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#top" className="brand" aria-label="Horizon Courts home">
        <span className="brand-mark">◌</span> Horizon Courts
      </a>
      <nav
        className={open ? "nav-links is-open" : "nav-links"}
        aria-label="Primary navigation"
      >
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <a className="button button-dark header-cta" href="#contact">
        Book now <span>→</span>
      </a>
      <button
        className="menu-toggle"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}

export function SectionPill({ children }: { children: React.ReactNode }) {
  return <span className="section-pill">{children}</span>;
}
export function ArrowButton({
  children = "Explore More",
}: {
  children?: React.ReactNode;
}) {
  return (
    <a className="button button-dark" href="#contact">
      {children} <span>→</span>
    </a>
  );
}
