import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer-top">
          <Link to="/" className="site-footer-brand" aria-label="SENCON home">SENCON</Link>

          <div className="site-footer-col">
            <nav className="site-footer-links" aria-label="Footer navigation">
              <Link to="/">Home</Link><span aria-hidden="true">/</span>
              <Link to="/about">About</Link><span aria-hidden="true">/</span>
              <Link to="/services">Services</Link><span aria-hidden="true">/</span>
              {SHOW_CASA_VERDE && <Link to="/casa-verde">Casa Verde</Link>}
            </nav>
            <div className="site-footer-block">
              <span className="site-footer-label">Email</span>
              <a className="site-footer-value" href="mailto:office@sencon.ro">office@sencon.ro</a>
            </div>
          </div>

          <div className="site-footer-col">
            <div className="site-footer-block">
              <span className="site-footer-label">Cluj</span>
              <a className="site-footer-value" href="tel:+40743058861">+40 743 058 861</a>
              <a className="site-footer-value" href="tel:+40724323774">+40 724 323 774</a>
            </div>
            <div className="site-footer-block">
              <span className="site-footer-label">Brașov</span>
              <a className="site-footer-value" href="tel:+40744608322">+40 744 608 322</a>
            </div>
          </div>

          <div className="site-footer-cta">
            <Link to="/contact-us" className="site-footer-pill">Contact Us</Link>
          </div>
        </div>

        <div className="site-footer-bottom">
          <span>© Copyright 2026 SENCON SRL.</span>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
