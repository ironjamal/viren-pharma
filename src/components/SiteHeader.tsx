"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CTA_PATHS } from "@/data/site";
import { ChevronIcon, VirenMark } from "@/components/Icons";

const companyLinks = [
  { label: "About VIREN", href: CTA_PATHS.about, note: "Our purpose and principles" },
  { label: "Science & innovation", href: CTA_PATHS.science, note: "An approach to development" },
  { label: "Manufacturing", href: CTA_PATHS.manufacturing, note: "A considered process" },
  { label: "Quality", href: CTA_PATHS.quality, note: "Care through every stage" },
];

const primaryLinks = [
  { label: "Products", href: CTA_PATHS.products },
  { label: "For professionals", href: CTA_PATHS.professionals },
  { label: "Insights", href: CTA_PATHS.insights },
  { label: "Careers", href: CTA_PATHS.careers },
  { label: "Contact", href: CTA_PATHS.contact },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  function closeMobileMenu() {
    setMenuOpen(false);
    toggleRef.current?.focus();
  }

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <Link className="brand" href="/" aria-label="VIREN Pharma home">
          <VirenMark className="brand__mark" />
          <span className="brand__name">VIREN<span>PHARMA</span></span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <details className="nav-disclosure">
            <summary>Company <ChevronIcon /></summary>
            <div className="nav-disclosure__panel">
              {companyLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span>{item.label}</span><small>{item.note}</small>
                </Link>
              ))}
            </div>
          </details>
          {primaryLinks.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
          ))}
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
          ref={toggleRef}
        >
          <span className="menu-toggle__lines" aria-hidden="true"><i /><i /></span>
          <span className="menu-toggle__text">{menuOpen ? "Close" : "Menu"}</span>
        </button>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav${menuOpen ? " is-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!menuOpen}>
        <div className="container mobile-nav__inner">
          <p className="eyebrow">Explore VIREN</p>
          <div className="mobile-nav__links">
            {companyLinks.map((item) => <Link onClick={closeMobileMenu} tabIndex={menuOpen ? 0 : -1} key={item.href} href={item.href}>{item.label}<span>{item.note}</span></Link>)}
            {primaryLinks.map((item) => <Link onClick={closeMobileMenu} tabIndex={menuOpen ? 0 : -1} key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
          <p className="mobile-nav__foot">Fictional concept website · Cairo, Egypt</p>
        </div>
      </nav>
    </header>
  );
}
