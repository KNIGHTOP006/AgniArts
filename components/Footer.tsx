import Link from "next/link";
import { navItems, site } from "../data/site";

export function Footer() {
  return <footer className="footer"><div className="container footer-top"><div><div className="footer-logo" aria-label="Agni Arts footer logo placeholder">LOGO</div><p className="eyebrow">AGNI ARTS</p><h2>The rhythm<br />of resistance.</h2></div><p className="footer-copy">A collective carrying folk arts into the future — one rhythm, one gathering, one generation at a time.</p></div><div className="container footer-grid"><div className="footer-links">{navItems.map(([name, href]) => <Link key={href} href={href}>{name}</Link>)}</div><div><p className="eyebrow">FOLLOW THE RHYTHM</p><a href={site.instagram} aria-label="Instagram link">Instagram ↗</a><br /><a href={site.email ? `mailto:${site.email}` : "#"}>{site.email}</a></div></div><div className="container footer-bottom"><span>© 2026 Agni Arts. All rights reserved.</span><strong>REVIVE. REIMAGINE. CARRY FORWARD.</strong></div></footer>;
}
