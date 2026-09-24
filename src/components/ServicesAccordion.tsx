import { Plus, X } from "lucide-react";
import { useState } from "react";

const services = [
  ["Consulting", "Advanced technical knowledge, a personalized approach to ensure the most efficient and sustainable photovoltaic solutions. Tailor-made solutions that exactly match the requirements of your project, whether it is a photovoltaic system on the roof of a commercial building or an extensive photovoltaic park."],
  ["Project Development", "Land acquisition. Solar resource analysis. Permitting. Transmission and interconnection. PPA and financing."],
  ["Engineering", "Each project starts with a detailed analysis of the location, solar conditions and specific requirements of the client. We design an optimized photovoltaic solution that maximizes energy efficiency and return on investment."],
  ["Construction", "Managing your entire construction process, blending tailored solutions, quality materials, and advanced methods. We ensure on-time, compliant, cost-effective builds that become efficient, long-lasting assets."],
  ["Operations & Maintenance", "Daily preparation of the production forecast. Daily notifications to the regional distributor and PRE. Maintaining contracts and reporting to A.N.R.E. according to applicable procedures."],
] as const;

export function ServicesAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="services-list">
      {services.map(([title, body], index) => {
        const expanded = open === index;
        return (
          <div className="service-row" key={title}>
            <button onClick={() => setOpen(expanded ? null : index)} aria-expanded={expanded}>
              <span>{title}</span>{expanded ? <X size={20} /> : <Plus size={20} />}
            </button>
            {expanded && <p>{body}</p>}
          </div>
        );
      })}
    </div>
  );
}
