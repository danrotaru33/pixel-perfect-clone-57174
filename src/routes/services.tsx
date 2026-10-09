import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { ServicesAccordion } from "../components/ServicesAccordion";
import { SiteFooter } from "../components/SiteFooter";
import cta from "../assets/services-cta.jpg.asset.json";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services — SENCON | Energy Consulting" }, { name: "description", content: "Sencon is a leading solar energy consulting firm specializing in innovative and sustainable solutions for residential, commercial, and industrial clients." },
    { property: "og:title", content: "Services — SENCON | Energy Consulting" }, { property: "og:description", content: "Sencon is a leading solar energy consulting firm specializing in innovative and sustainable solutions for residential, commercial, and industrial clients." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ServicesPage,
});
function ServicesPage() { return <><SiteHeader inverse /><main><section className="page-hero dark"><div className="shell"><h1>Services</h1><p>Discover our comprehensive range of services tailored to meet your needs.</p></div></section><section className="services-body"><div className="shell"><ServicesAccordion /><img className="services-image" src={cta.url} alt="Large-scale renewable energy project" /><div className="services-cta"><h2>Proudly helping businesses</h2><div><p>Examine our collection of extraordinary endeavours wherein novelty and eco-friendliness intersect. Uncover the ways we've revolutionised energy terrains and raised the bar in the sector.</p><Link to="/contact-us" className="arrow-link">Get in touch <span>→</span></Link></div></div></div></section></main><SiteFooter /></>; }
