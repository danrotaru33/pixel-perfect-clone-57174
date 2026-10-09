import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import highVoltageTransformer from "../assets/high-voltage-transformer.jpg.asset.json";
import substationTransformer from "../assets/substation-transformer.jpg.asset.json";
import distributionTransformer from "../assets/distribution-transformer.jpg.asset.json";
import dryTypeTransformer from "../assets/dry-type-transformer.jpg.asset.json";
import projectBulgaria from "../assets/project-bulgaria.jpg.asset.json";
import projectUk1 from "../assets/project-uk-1.jpg.asset.json";
import projectUk2 from "../assets/project-uk-2.jpg.asset.json";
import projectSouthAfrica from "../assets/project-south-africa.jpg.asset.json";

export const Route = createFileRoute("/power-equipment")({
  head: () => ({ meta: [
    { title: "Power Equipment — SENCON | Energy Consulting" },
    { name: "description", content: "Sencon is a leading solar energy consulting firm specializing in innovative and sustainable solutions for residential, commercial, and industrial clients." },
    { property: "og:title", content: "Power Equipment — SENCON | Energy Consulting" },
    { property: "og:description", content: "Sencon is a leading solar energy consulting firm specializing in innovative and sustainable solutions for residential, commercial, and industrial clients." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: PowerEquipmentPage,
});

const transformers = [
  {
    image: highVoltageTransformer.url,
    alt: "High-voltage power transformer in a test facility",
    label: "220 – 500 kV",
    title: "High-voltage power transformers",
    body: "For transmission substations and large industrial loads.",
  },
  {
    image: substationTransformer.url,
    alt: "Substation power transformer with high-voltage bushings",
    label: "35 – 110 kV",
    title: "Substation transformers",
    body: "For regional networks, industrial plants and renewable grid connection.",
  },
  {
    image: distributionTransformer.url,
    alt: "Oil-immersed distribution transformer",
    label: "10 kV · oil-immersed",
    title: "Distribution transformers",
    body: "Reliable, low-loss units for distribution networks.",
  },
  {
    image: dryTypeTransformer.url,
    alt: "Dry-type cast-resin transformer for indoor installation",
    label: "10 kV · dry-type",
    title: "Dry-type transformers",
    body: "Flame-retardant design for indoor installation.",
  },
] as const;

const references = [
  { image: projectBulgaria.url, alt: "Grid-scale battery storage plant in Bulgaria", location: "Bulgaria", capacity: "202 MW / 500 MWh" },
  { image: projectUk1.url, alt: "Battery storage containers being installed in the United Kingdom", location: "United Kingdom", capacity: "337.5 MW / 445 MWh" },
  { image: projectUk2.url, alt: "Aerial view of a battery storage plant under construction in the United Kingdom", location: "United Kingdom", capacity: "375 MW / 750 MWh" },
  { image: projectSouthAfrica.url, alt: "Aerial view of a solar and battery storage plant in South Africa", location: "South Africa", capacity: "283.5 MW / 1.14 GWh" },
] as const;

function PowerEquipmentPage() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
  return (
    <>
      <SiteHeader inverse />
      <main>
        <section className="page-hero dark">
          <div className="shell">
            <h1>Power Transformers &amp; Energy Storage Equipment</h1>
            <p>We supply power transformers and integrated medium-voltage solutions for energy storage projects, built to your project specifications.</p>
            <a href="#request-a-quote" className="primary-light hero-cta">Request a quote</a>
          </div>
        </section>

        <section className="pe-transformers">
          <div className="shell">
            <span className="pe-label">Power Transformers</span>
            <h2>From distribution networks to high-voltage substations</h2>
            <p className="pe-lead">Oil-immersed and dry-type transformers, built to your project specifications.</p>
            <div className="pe-transformer-grid">
              {transformers.map(({ image, alt, label, title, body }) => (
                <article className="pe-transformer-card" key={title}>
                  <div className="pe-transformer-media"><img src={image} alt={alt} loading="lazy" /></div>
                  <span className="pe-voltage">{label}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
            <a href="#request-a-quote" className="pill-dark">Request a quote</a>
          </div>
        </section>


        <section className="pe-references section-dark">
          <div className="shell">
            <span className="pe-label">Reference projects</span>
            <h2>Installed at grid-scale storage plants</h2>
            <div className="pe-reference-grid">
              {references.map(({ image, alt, location, capacity }) => (
                <figure className="pe-reference" key={`${location}-${capacity}`}>
                  <img src={image} alt={alt} loading="lazy" />
                  <figcaption>
                    <strong>{location}</strong>
                    <span>{capacity}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="pe-quote" id="request-a-quote">
          <div className="shell">
            <h2>Request a quote</h2>
            <p className="pe-quote-lead">Tell us about your project and we will get back to you with a technical and commercial offer.</p>
            <form className="contact-form pe-form" onSubmit={submit}>
              <label className="field">Name<input name="name" placeholder="John Smith" required maxLength={100} /></label>
              <label className="field">Company<input name="company" placeholder="Company SRL" maxLength={100} /></label>
              <label className="field">Email<input type="email" name="email" placeholder="john@sencon.ro" required maxLength={255} /></label>
              <label className="field">Phone<input type="tel" name="phone" placeholder="+40 ..." maxLength={30} /></label>
              <label className="field">Product
                <select name="product" defaultValue="Power transformer">
                  <option>Power transformer</option>
                  <option>Energy storage skid</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="field">Project details<textarea name="details" placeholder="Rated power, voltage levels, location, timeline" maxLength={1000} /></label>
              <button className="submit-button" type="submit">{sent ? "Request sent" : "Send request"}</button>
              {sent && <p aria-live="polite">Thank you, we will be in touch shortly.</p>}
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
