import { useMemo, useState } from "react";

const money = new Intl.NumberFormat("ro-RO", {
  maximumFractionDigits: 0,
});

export function CasaVerdeCalculator() {
  const [capacity, setCapacity] = useState(15);
  const projectValue = capacity * 1500;
  const maximumFunding = Math.min(15000, projectValue * 0.75, capacity * 1500);
  const [requestedFunding, setRequestedFunding] = useState(maximumFunding);
  const funding = Math.min(requestedFunding, maximumFunding);

  const result = useMemo(() => {
    const ownContribution = projectValue - funding;
    const capacityScore = Math.min(50, capacity * 2.5);
    const contributionScore = funding === 0
      ? 50
      : Math.min(50, 30 * (ownContribution / funding));
    return {
      ownContribution,
      capacityScore,
      contributionScore,
      totalScore: Math.min(100, capacityScore + contributionScore),
    };
  }, [capacity, funding, projectValue]);

  const changeCapacity = (value: number) => {
    const nextProjectValue = value * 1500;
    const nextMaximum = Math.min(15000, nextProjectValue * 0.75, value * 1500);
    setCapacity(value);
    setRequestedFunding((current) => Math.min(current, nextMaximum));
  };

  const scoreLabel = result.totalScore >= 75
    ? "Punctaj ridicat"
    : result.totalScore >= 50
      ? "Punctaj mediu"
      : "Punctaj de îmbunătățit";

  return (
    <div className="cv-calculator" id="calculator">
      <div className="cv-controls">
        <div className="cv-calculator-heading">
          <span>Simulator punctaj</span>
          <h2>Configurează proiectul</h2>
          <p>Modifică valorile pentru a vedea instant finanțarea și punctajul estimat.</p>
        </div>

        <label className="cv-range-field">
          <span><strong>Capacitatea bateriei</strong><b>{capacity} kWh</b></span>
          <input
            type="range"
            min="10"
            max="50"
            step="1"
            value={capacity}
            onChange={(event) => changeCapacity(Number(event.target.value))}
          />
          <small><i>10 kWh</i><i>50 kWh</i></small>
        </label>

        <label className="cv-range-field">
          <span><strong>Finanțare solicitată</strong><b>{money.format(funding)} lei</b></span>
          <input
            type="range"
            min="0"
            max={maximumFunding}
            step="100"
            value={funding}
            onChange={(event) => setRequestedFunding(Number(event.target.value))}
          />
          <small><i>0 lei</i><i>plafon {money.format(maximumFunding)} lei</i></small>
        </label>

        <p className="cv-formula-note">
          Valoarea estimată este capacitatea × 1.500 lei/kWh. Finanțarea nu poate depăși
          15.000 lei sau 75% din proiect.
        </p>
      </div>

      <div className="cv-result" aria-live="polite">
        <div className="cv-score-head">
          <div><strong>{result.totalScore.toFixed(1)}</strong><span>/ 100 puncte</span></div>
          <p>{scoreLabel}</p>
        </div>
        <div className="cv-score-bar" aria-hidden="true">
          <span style={{ width: `${result.totalScore}%` }} />
        </div>
        <dl className="cv-score-breakdown">
          <div><dt>Capacitate baterie</dt><dd>{result.capacityScore.toFixed(1)} / 50 p</dd></div>
          <div><dt>Contribuție proprie</dt><dd>{result.contributionScore.toFixed(1)} / 50 p</dd></div>
        </dl>
        <dl className="cv-money-grid">
          <div><dt>Finanțare AFM</dt><dd>{money.format(funding)} lei</dd></div>
          <div><dt>Contribuția ta</dt><dd>{money.format(result.ownContribution)} lei</dd></div>
          <div><dt>Valoare proiect</dt><dd>{money.format(projectValue)} lei</dd></div>
        </dl>
        <p className="cv-disclaimer">Estimare orientativă pe baza Ordinului nr. 1.904/2026. Punctajul nu garantează selecția.</p>
      </div>
    </div>
  );
}