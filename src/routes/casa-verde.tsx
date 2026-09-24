import { createFileRoute, Link } from "@tanstack/react-router";
import { BatteryCharging, Check, FileText, ShieldCheck, Zap } from "lucide-react";
import { CasaVerdeCalculator } from "../components/CasaVerdeCalculator";
import { SiteHeader } from "../components/SiteHeader";
import storage from "../assets/storage.png.asset.json";

export const Route = createFileRoute("/casa-verde")({
  head: () => ({
    meta: [
      { title: "Casa Verde Baterii 2026 — SENCON" },
      { name: "description", content: "Calculează punctajul și finanțarea estimată pentru programul Casa Verde Baterii 2026." },
      { property: "og:title", content: "Casa Verde Baterii 2026 — SENCON" },
      { property: "og:description", content: "Simulator de punctaj, condiții de eligibilitate și documentele necesare pentru finanțarea AFM." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CasaVerdePage,
});

const documents = [
  ["01", "Cerere de finanțare", "Se completează digital în platforma AFM și se încarcă nesemnată."],
  ["02", "Act de identitate", "Buletin sau pașaport valabil, pe numele titularului prosumator."],
  ["03", "Certificat fiscal ANAF", "PDF-ul original din SPV, care confirmă lipsa datoriilor la stat."],
  ["04", "Certificat fiscal local", "Eliberat de primăria de domiciliu și valabil 30 de zile."],
  ["05", "Contract de prosumator", "Pentru locul de consum unde va fi instalată bateria."],
  ["06", "Certificat de racordare", "Documentul care atestă racordarea legală a sistemului fotovoltaic."],
  ["07", "Factură de energie", "Factură recentă, emisă cu cel mult 6 luni înaintea depunerii."],
  ["08", "Certificat fiscal local suplimentar", "Doar dacă locul de implementare diferă de adresa din actul de identitate."],
];

function CasaVerdePage() {
  return (
    <>
      <SiteHeader inverse />
      <main>
        <section className="cv-hero">
          <img src={storage.url} alt="Sistem modern de stocare a energiei" />
          <div className="shell cv-hero-inner">
            <div>
              <span className="cv-eyebrow">Casa Verde Baterii 2026</span>
              <h1>Energie păstrată pentru când ai nevoie.</h1>
              <p>Până la 15.000 lei finanțare pentru prosumatorii care adaugă un sistem de stocare.</p>
              <a href="#calculator" className="primary-light">Calculează punctajul</a>
            </div>
          </div>
        </section>

        <section className="cv-intro shell">
          <h2>Finanțare pentru mai multă independență.</h2>
          <div><p>Programul se adresează persoanelor fizice care au deja statut de prosumator. AFM poate acoperi maximum 75% din proiect, în limita a 15.000 lei.</p><p>Selecția nu se face în ordinea înscrierii, ci pe baza punctajului obținut.</p></div>
        </section>

        <section className="cv-calculator-section">
          <div className="shell"><CasaVerdeCalculator /></div>
        </section>

        <section className="cv-benefits shell">
          <div className="cv-section-heading"><span>Condiții esențiale</span><h2>Poți fi eligibil dacă</h2></div>
          <div className="cv-benefit-grid">
            <article><Zap /><h3>Ești prosumator</h3><p>Ai deja panouri fotovoltaice, contract de prosumator și certificat de racordare.</p></article>
            <article><ShieldCheck /><h3>Nu ai datorii</h3><p>Obții certificate fiscale valabile de la ANAF și bugetul local.</p></article>
            <article><BatteryCharging /><h3>Alegi minimum 10 kWh</h3><p>Bateria respectă tehnologiile și condițiile tehnice prevăzute în ghid.</p></article>
            <article><Check /><h3>Acoperi contribuția</h3><p>Contribuția proprie este de cel puțin 25% din valoarea proiectului.</p></article>
          </div>
        </section>

        <section className="cv-specs">
          <div className="shell cv-specs-inner">
            <div><span>Cerințe tehnice</span><h2>Un sistem construit să reziste.</h2></div>
            <ul>
              <li><strong>10 kWh</strong><span>capacitate minimă</span></li>
              <li><strong>5.000</strong><span>cicluri minimum</span></li>
              <li><strong>5 ani</strong><span>garanție minimum</span></li>
              <li><strong>BMS</strong><span>management obligatoriu</span></li>
            </ul>
          </div>
        </section>

        <section className="cv-documents shell">
          <div className="cv-section-heading"><span>Dosarul tău</span><h2>Documente necesare</h2><p>Documentele emise electronic trebuie încărcate în formatul PDF original, nu fotografiate sau scanate.</p></div>
          <div className="cv-document-list">
            {documents.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><FileText aria-hidden="true" /></article>)}
          </div>
          <p className="cv-document-note">Extrasul de carte funciară și adeverința de nomenclator stradal nu mai sunt solicitate în ghidul 2026.</p>
        </section>

        <section className="cv-official">
          <div className="shell cv-official-inner"><div><span>Sursa oficială</span><h2>Verifică întotdeauna forma actuală a programului.</h2></div><div><p>Sumele, calendarul și condițiile pot fi actualizate de Administrația Fondului pentru Mediu. Simulatorul are rol informativ.</p><a className="arrow-link" href="https://www.afm.ro/main/programe/baterii/2026/ordin_1904-11_09_2026-2026-09-15.pdf" target="_blank" rel="noreferrer">Consultă Ordinul 1.904/2026 <span>↗</span></a></div></div>
        </section>

        <section className="contact-band"><div className="shell contact-band-inner"><h2>Pregătit pentru următorul pas?</h2><div><p>Echipa SENCON te poate ajuta să alegi configurația potrivită și să pregătești proiectul pentru finanțare.</p><Link to="/contact-us" className="arrow-link">Contactează-ne <span>→</span></Link></div></div></section>
      </main>
      <footer className="footer"><div className="shell footer-inner"><span>© SENCON 2026</span><span>Empowering Energy</span></div></footer>
    </>
  );
}