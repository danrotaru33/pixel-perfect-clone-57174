import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({ meta: [
    { title: "Privacy Policy — SENCON | Energy Consulting" },
    { name: "description", content: "Sencon is a leading solar energy consulting firm specializing in innovative and sustainable solutions for residential, commercial, and industrial clients." },
    { property: "og:title", content: "Privacy Policy — SENCON | Energy Consulting" },
    { property: "og:description", content: "Sencon is a leading solar energy consulting firm specializing in innovative and sustainable solutions for residential, commercial, and industrial clients." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}), component: PrivacyPage,
});

function PrivacyPage() {
  return <>
    <SiteHeader />
    <main>
      <section className="page-hero">
        <div className="shell">
          <h1>Privacy Policy</h1>
          <p>How SENCON SRL handles the personal data you share with us through this website.</p>
        </div>
      </section>
      <section className="shell legal">
        <p>SENCON SRL (“SENCON”, “we”) is the data controller for the personal data collected on this website. We process that data in line with Regulation (EU) 2016/679 (GDPR) and the applicable Romanian legislation.</p>

        <h2>What we collect</h2>
        <p>When you use the contact form we receive the name, email address and message content you choose to submit. When you browse the site, our hosting provider may log standard technical data such as IP address, browser type and pages visited.</p>

        <h2>Why we process it</h2>
        <p>To answer your enquiry, prepare proposals and technical documentation, and keep in touch about a project you asked us about. We process this data on the basis of your consent and of our legitimate interest in replying to requests made to us.</p>

        <h2>Who we share it with</h2>
        <p>We do not sell your data. It is accessed only by our own team and by service providers that host this website or help us operate it, each bound by confidentiality obligations.</p>

        <h2>How long we keep it</h2>
        <p>Enquiry data is kept for as long as needed to answer you and to follow up on the project, after which it is deleted or anonymised, unless a longer retention period is required by law.</p>

        <h2>Your rights</h2>
        <p>You can ask to access, correct, delete or restrict the processing of your personal data, object to processing, or receive a copy of it in a portable format. You also have the right to lodge a complaint with the Romanian data protection authority, ANSPDCP.</p>

        <h2>Contact</h2>
        <p>For any privacy question or request, write to us at <a href="mailto:office@sencon.ro">office@sencon.ro</a>.</p>
      </section>
    </main>
    <SiteFooter />
  </>;
}
