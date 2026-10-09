import { createFileRoute } from "@tanstack/react-router";
import { BatteryCharging, Zap } from "lucide-react";
import { FormEvent, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

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

const products = [
  {
    icon: Zap,
    title: "Power Transformers",
    body: "Oil-immersed and dry-type transformers from 10 kV to 500 kV, for distribution, substations and renewable energy grid connection.",
  },
  {
    icon: BatteryCharging,
    title: "Energy Storage Skids",
    body: "Containerized medium-voltage skids for battery storage projects, integrating power conversion, transformer and switchgear in one unit.",
  },
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

        <section className="pe-products">
          <div className="shell pe-cards">
            {products.map(({ icon: Icon, title, body }) => (
              <article className="pe-card" key={title}>
                <Icon aria-hidden="true" />
                <h2>{title}</h2>
                <p>{body}</p>
              </article>
            ))}
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
