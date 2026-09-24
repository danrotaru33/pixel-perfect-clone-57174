import { Link } from "@tanstack/react-router";

export function ContactBand() {
  return (
    <section className="contact-band">
      <div className="shell contact-band-inner">
        <h2>Get in touch with us</h2>
        <div>
          <p>Should you wish to discover the benefits of our integrated approach—encompassing consulting, project development and approvals, engineering, construction, as well as operations and maintenance—don’t hesitate to reach out. We stand ready to engage, cooperate, and craft bespoke solutions tailored to your distinct goals and aspirations.</p>
          <Link to="/contact-us" className="arrow-link">Contact us <span>→</span></Link>
        </div>
      </div>
    </section>
  );
}
