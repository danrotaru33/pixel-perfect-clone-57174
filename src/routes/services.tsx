import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { ServicesAccordion } from "../components/ServicesAccordion";
import cta from "../assets/services-cta.jpg.asset.json";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services — SENCON" }, { name: "description", content: "Consulting, development, engineering, construction, operations and maintenance for energy projects." },
    { property: "og:title", content: "Services — SENCON" }, { property: "og:description", content: "Discover SENCON’s comprehensive energy services." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ServicesPage,
});
function ServicesPage() { return <><SiteHeader inverse /><main><section className="page-hero dark"><div className="shell"><h1>Services</h1><p>Discover our comprehensive range of services tailored to meet your needs.</p></div></section><section className="services-body"><div className="shell"><ServicesAccordion /><img className="services-image" src={cta.url} alt="Large-scale renewable energy project" /><div className="services-cta"><h2>Proudly helping businesses</h2><div><p>Examine our collection of extraordinary endeavours wherein novelty and eco-friendliness intersect. Uncover the ways we've revolutionised energy terrains and raised the bar in the sector.</p><Link to="/contact-us" className="arrow-link">Get in touch <span>→</span></Link></div></div></div></section></main><footer className="footer"><div className="shell footer-inner"><span>© SENCON 2026</span><span>Empowering Energy</span></div></footer></>; }
