"use client";

import InsuranceCta from "./InsuranceCta";
import InsuranceLogoGrid from "./InsuranceLogoGrid";
import InsuranceNotice from "./InsuranceNotice";
import useRevealOnce from "./useRevealOnce";

export default function InsuranceSection() {
  const sectionRef = useRevealOnce<HTMLElement>();

  return <section id="convenios" className="page-section insurance-section" ref={sectionRef} aria-labelledby="insurance-title">
    <span className="insurance-shape insurance-shape-lilac" aria-hidden="true" />
    <span className="insurance-shape insurance-shape-mint" aria-hidden="true" />
    <svg className="insurance-curve" viewBox="0 0 570 330" preserveAspectRatio="none" aria-hidden="true"><path d="M10-12c62 90 149 83 255 110 141 36 166 132 292 211"/><circle cx="381" cy="165" r="7"/></svg>
    <div className="insurance-inner">
      <header className="insurance-heading">
        <p className="insurance-eyebrow" data-reveal="up">Convênios odontológicos</p>
        <h2 id="insurance-title" className="insurance-title" data-reveal="up" data-reveal-delay="70"><span>Atendemos diversos</span><span> <em>convênios</em> odontológicos</span></h2>
        <p className="insurance-subtitle" data-reveal="up" data-reveal-delay="140">Trabalhamos com diferentes convênios para facilitar seu acesso ao cuidado odontológico com <strong>qualidade, conforto e confiança.</strong></p>
        <p className="insurance-local" data-reveal="up" data-reveal-delay="140">Para quem procura dentista em Sorocaba, a Aitak é uma clínica odontológica em Sorocaba que oferece atendimento por convênio, sujeito às condições dos planos odontológicos contratados.</p>
      </header>
      <InsuranceLogoGrid />
      <InsuranceNotice />
      <InsuranceCta />
    </div>
  </section>;
}
