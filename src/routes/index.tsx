import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { ContactBand } from "../components/ContactBand";
import hero from "../assets/hero.m4v.asset.json";
import heroPoster from "../assets/hero-poster.jpg.asset.json";
import efficiency from "../assets/efficiency.png.asset.json";
import storage from "../assets/storage.png.asset.json";
import photovoltaic from "../assets/photovoltaic.png.asset.json";
import mobility from "../assets/mobility.jpg.asset.json";
import wind from "../assets/wind.png.asset.json";
import native from "../assets/native.png.asset.json";
import office from "../assets/office.jpg.asset.json";
import discovery from "../assets/discovery.png.asset.json";
import consulting from "../assets/consulting.png.asset.json";
import development from "../assets/development.png.asset.json";

const expertise = [
  [efficiency.url, "Energy Efficiency"], [storage.url, "Energy Storage Solutions"],
  [photovoltaic.url, "Photovoltaic Energy"], [mobility.url, "Electric Mobility"],
  [wind.url, "Wind Stations"], [native.url, "Native Sources"],
] as const;

const steps = [
  { n: "1", label: "(Identities)", title: "We discuss your objective and establish the right approach.", image: discovery.url, name: "Discovery", body: "An audit to understand your project, your competition, and how to cut through the noise of a crowded industry." },
  { n: "2", label: "(Systems)", title: "We analyse the market to find the perfect project for you.", image: consulting.url, name: "Consulting", body: "Advanced technical knowledge and a personalized approach ensure efficient and sustainable photovoltaic solutions." },
  { n: "3", label: "(Applications)", title: "We obtain approvals and start developing your project.", image: development.url, name: "Project Development", body: "Land acquisition. Solar resource analysis. Permitting. Transmission and interconnection. PPA and financing." },
];

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "SENCON — Empowering Energy" },
    { name: "description", content: "SENCON shapes Romania’s energy landscape with end-to-end energy solutions." },
    { property: "og:title", content: "SENCON — Empowering Energy" },
    { property: "og:description", content: "End-to-end consulting, engineering, construction and maintenance for Romania’s energy sector." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});

function HomePage() {
  return <>
    <SiteHeader inverse />
    <main>
      <section className="hero">
        <div className="hero-copy"><div className="hero-copy-inner"><h1>Empowering<br />Energy</h1><p>Driving forward Romania's energy sector through strategic consulting, seamless project approvals, cutting-edge engineering, skilled construction, and dedicated maintenance.</p><Link to="/services" className="primary-light">Explore Services</Link></div></div>
        <div className="hero-media"><video src={hero.url} poster={heroPoster.url} autoPlay muted loop playsInline aria-label="Aerial view of solar panels" /></div>
      </section>
      <section className="expertise section-dark">
        <div className="shell expertise-header"><h2>Areas of<br />Expertise</h2><p>Whether for small or large-scale projects, we are committed to delivering cutting-edge results, contributing to a more sustainable and innovative energy future.</p></div>
        <div className="marquee">{[...expertise, ...expertise].map(([src, title], i) => <article className="expertise-card" key={`${title}-${i}`}><img src={src} alt="" /><h3>{title}</h3></article>)}</div>
      </section>
      <section className="shell intro-split"><h2>SENCON shapes Romania’s energy landscape with end-to-end solutions.</h2><div><p>From consulting and approvals to engineering, construction, and maintenance, we power visionary projects with expertise, efficiency, and sustainability.</p><Link to="/about" className="arrow-link">Learn more <span>→</span></Link></div></section>
      <img className="office-feature" src={office.url} alt="SENCON office building" />
      <section className="shell intro-split"><h2>Knowledge, Connections and Expertise.</h2><div><p>Our extensive experience and activity in the energy sector have positioned us as experts in the industry. Our team's profound understanding enables us to provide innovative, tailored solutions that save you time and capital.</p><Link to="/about" className="arrow-link">Learn more <span>→</span></Link></div></section>
      <section className="process"><div className="shell">{steps.map((step) => <article className="process-step" key={step.n}><div className="step-number">{step.n}</div><div><p className="step-kicker">{step.label}</p><h3>{step.title}</h3></div><div className="process-card"><img src={step.image} alt="" /><h4>{step.name}</h4><p>{step.body}</p></div></article>)}</div></section>
      <ContactBand />
    </main>
    <footer className="footer"><div className="shell footer-inner"><span>© SENCON 2026</span><span>Romania, Brașov, Nicolae Bălcescu 58</span></div></footer>
  </>;
}
