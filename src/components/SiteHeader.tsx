import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function SiteHeader({ inverse = false }: { inverse?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={`site-header ${inverse ? "site-header-inverse" : ""}`}>
      <div className="site-nav">
        <Link to="/" className="wordmark" aria-label="SENCON home">SENCON</Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link to="/about" activeProps={{ className: "nav-active" }}>About us</Link>
          <Link to="/services" activeProps={{ className: "nav-active" }}>Services</Link>
          <Link to="/casa-verde" activeProps={{ className: "nav-active" }}>Casa Verde</Link>
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
          <Link to="/casa-verde" onClick={() => setOpen(false)}>Casa Verde</Link>
          <Link to="/contact-us" onClick={() => setOpen(false)}>Contact us</Link>
        </nav>
      )}
    </header>
  );
}
