import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import office from "../assets/contact-office.png.asset.json";

export const Route = createFileRoute("/contact-us")({
  head: () => ({ meta: [
    { title: "Contact us — SENCON" }, { name: "description", content: "Contact SENCON in Brașov to discuss your energy project." },
    { property: "og:title", content: "Contact us — SENCON" }, { property: "og:description", content: "Our team is here to assist you toward a sustainable and efficient energy future." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ContactPage,
});
function ContactPage() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
  return <><SiteHeader /><main><section className="page-hero"><div className="shell"><h1>Contact us</h1><p>Our team is here to assist you on your journey towards a sustainable and efficient energy future.</p></div></section><section className="shell contact-content"><div className="contact-info"><h2>Location</h2><p>Romania, Brașov, Nicolae Bălcescu 58</p><h2>Open hours</h2><p>Weekdays - 9:00am to 6:00pm<br />Weekends - Closed</p></div><form className="contact-form" onSubmit={submit}><h2>Let us get in touch!</h2><label className="field">Name<input name="name" placeholder="John Smith" required /></label><label className="field">Email<input type="email" name="email" placeholder="john@sencon.ro" required /></label><label className="field">Message<textarea name="message" placeholder="How can we help..." required /></label><button className="submit-button" type="submit">{sent ? "Message ready" : "Send"}</button>{sent && <p aria-live="polite">Thank you. Message delivery is not connected in this replica.</p>}</form></section><img className="contact-image" src={office.url} alt="SENCON office" /></main><footer className="footer"><div className="shell footer-inner"><span>© SENCON 2026</span><span>Romania, Brașov, Nicolae Bălcescu 58</span></div></footer></>;
}
