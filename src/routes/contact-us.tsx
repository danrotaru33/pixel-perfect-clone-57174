import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useRef, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { submitContactForm } from "../lib/forms.functions";
import office from "../assets/contact-office.png.asset.json";

export const Route = createFileRoute("/contact-us")({
  head: () => ({ meta: [
    { title: "Contact us — SENCON | Energy Consulting" }, { name: "description", content: "Sencon is a leading solar energy consulting firm specializing in innovative and sustainable solutions for residential, commercial, and industrial clients." },
    { property: "og:title", content: "Contact us — SENCON | Energy Consulting" }, { property: "og:description", content: "Sencon is a leading solar energy consulting firm specializing in innovative and sustainable solutions for residential, commercial, and industrial clients." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ContactPage,
});
function ContactPage() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const submissionId = useRef(crypto.randomUUID());
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (state === "sending") return;
    setState("sending");
    const data = new FormData(event.currentTarget);
    try {
      await submitContactForm({ data: {
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        message: String(data.get("message") ?? ""),
        website: String(data.get("website") ?? ""),
        submissionId: submissionId.current,
      } });
      setState("sent");
      submissionId.current = crypto.randomUUID();
    } catch {
      setState("error");
    }
  };
  return <><SiteHeader /><main><section className="page-hero"><div className="shell"><h1>Contact us</h1><p>Our team is here to assist you on your journey towards a sustainable and efficient energy future.</p></div></section><section className="shell contact-content"><div className="contact-info"><h2>Location</h2><p>Romania, Brașov, Nicolae Bălcescu 58</p><h2>Open hours</h2><p>Weekdays - 9:00am to 6:00pm<br />Weekends - Closed</p></div><form className="contact-form" onSubmit={submit}><h2>Let us get in touch!</h2><label className="field">Name<input name="name" placeholder="John Smith" required maxLength={100} /></label><label className="field">Email<input type="email" name="email" placeholder="john@sencon.ro" required maxLength={255} /></label><label className="field">Message<textarea name="message" placeholder="How can we help..." required maxLength={2000} /></label><input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true" /><button className="submit-button" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : state === "sent" ? "Message sent" : "Send"}</button>{state === "sent" && <p aria-live="polite">Thank you. Your message has been sent — we will get back to you shortly.</p>}{state === "error" && <p aria-live="polite">Something went wrong. Please try again or email us at office@sencon.ro.</p>}</form></section><img className="contact-image" src={office.url} alt="SENCON office" /></main><SiteFooter /></>;
}
