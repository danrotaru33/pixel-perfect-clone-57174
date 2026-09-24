import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { ContactBand } from "../components/ContactBand";
import mainImage from "../assets/about-main.jpg.asset.json";
import secondaryImage from "../assets/about-secondary.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About us — SENCON" }, { name: "description", content: "Learn about SENCON and our commitment to complete energy projects in Romania." },
    { property: "og:title", content: "About us — SENCON" }, { property: "og:description", content: "Products, solutions and services dedicated to the energy field." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: AboutPage,
});

function AboutPage() { return <><SiteHeader /><main><section className="page-hero"><div className="shell"><h1>About us</h1><p>Learn more about SENCON and our commitment to assisting you develop a complete project in the Romanian energy sector.</p></div></section><section className="about-story"><div className="shell"><h2>Products, solutions and services dedicated to the energy field.</h2><img className="about-main-image" src={mainImage.url} alt="Modern energy infrastructure" /><div className="about-copy"><h2>SENCON</h2><div><p>Sencon has a multidisciplinary team, most of them with rich technical and technological education, extensive professional experience and university background.</p><br /><p>Our company offers turnkey solutions for energy efficiency, photovoltaic systems, energy management.</p></div></div></div><img className="about-secondary" src={secondaryImage.url} alt="Energy infrastructure at sunset" /><div className="shell about-closing"><h2>Building the future of energy evolution</h2><p>We cover any project in the energy or electrical field: entrepreneurship for works in complex electrical installations, operation of energy installations, design and specialized engineering services, production of medium and low voltage equipment, energy audit, consultancy in energy efficiency programs and renewable energies.</p></div></section><ContactBand /></main><footer className="footer"><div className="shell footer-inner"><span>© SENCON 2026</span><span>Romania, Brașov</span></div></footer></>; }
