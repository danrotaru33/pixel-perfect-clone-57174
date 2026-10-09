import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SHOW_CASA_VERDE } from "../lib/site-flags";

export function SiteHeader({ inverse = false, logoImage }: { inverse?: boolean; logoImage?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={`site-header ${inverse ? "site-header-inverse" : ""}`}>
      <div className="site-nav">
        <Link to="/" className={`wordmark ${logoImage ? "wordmark-img" : ""}`} aria-label="SENCON home">
          {logoImage ? <img src={logoImage} alt="SENCON" /> : "SENCON"}
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link to="/about" activeProps={{ className: "nav-active" }}>About us</Link>
          <Link to="/services" activeProps={{ className: "nav-active" }}>Services</Link>
          <Link to="/power-equipment" activeProps={{ className: "nav-active" }}>Power Equipment</Link>
          {SHOW_CASA_VERDE && <Link to="/casa-verde" activeProps={{ className: "nav-active" }}>Casa Verde</Link>}
          <Link to="/contact-us" className="contact-pill">Contact us</Link>
        </nav>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <Link to="/about" onClick={() => setOpen(false)}>About us</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/power-equipment" onClick={() => setOpen(false)}>Power Equipment</Link>
          {SHOW_CASA_VERDE && <Link to="/casa-verde" onClick={() => setOpen(false)}>Casa Verde</Link>}
          <Link to="/contact-us" onClick={() => setOpen(false)}>Contact us</Link>
        </nav>
      )}
    </header>
  );
}
