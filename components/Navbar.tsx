"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "../data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <header className="nav-wrap"><nav className="nav container" aria-label="Main navigation">
    <Link href="/" className="brand" onClick={() => setOpen(false)}>AGNI <span>ARTS</span></Link>
    <div className="nav-links">{navItems.map(([label, href]) => <Link key={href} className={pathname === href ? "active" : ""} href={href}>{label}</Link>)}</div>
    <Link className="button nav-cta" href="/workshops">Join a workshop <span>↗</span></Link>
    <button className="menu-button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><i></i><i></i></button>
  </nav>
  <div className={`mobile-menu ${open ? "open" : ""}`}>{navItems.map(([label, href], index) => <Link key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</Link>)}<Link href="/workshops" className="button" onClick={() => setOpen(false)}>Join a workshop ↗</Link></div></header>;
}
