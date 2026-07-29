"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "../data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>AGNI <span>ARTS</span></Link>
        <div className="nav-links">
          {navItems.map(([label, href]) => {
            if (href.startsWith("#")) {
              return (
                <a key={href} href={href} className="nav-link" onClick={() => setOpen(false)}>
                  {label}
                </a>
              );
            }

            return (
              <Link key={href} href={href} className="nav-link" onClick={() => setOpen(false)}>
                {label}
              </Link>
            );
          })}
        </div>
        <a className="button nav-cta" href="#workshops" onClick={() => setOpen(false)}>Join a workshop <span>↗</span></a>
        <button className="menu-button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><i></i><i></i></button>
      </nav>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {navItems.map(([label, href], index) => {
          if (href.startsWith("#")) {
            return (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>{label}
              </a>
            );
          }

          return (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{label}
            </Link>
          );
        })}
        <a href="#workshops" className="button" onClick={() => setOpen(false)}>Join a workshop ↗</a>
      </div>
    </header>
  );
}
