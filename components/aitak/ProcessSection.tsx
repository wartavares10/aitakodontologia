"use client";

import ProcessStep from "./ProcessStep";
import SectionActions from "./SectionActions";
import useRevealOnce from "./useRevealOnce";
import { PROCESS_STEPS } from "./process";

export default function ProcessSection() {
  const sectionRef = useRevealOnce<HTMLElement>();

  return <section id="como-funciona" className="page-section process-section" ref={sectionRef} aria-labelledby="process-title">
    <span className="process-shape process-shape-lilac" aria-hidden="true" />
    <span className="process-shape process-shape-mint" aria-hidden="true" />
    <span className="process-shape process-shape-top" aria-hidden="true" />
    <svg className="process-curve" viewBox="0 0 560 330" preserveAspectRatio="none" aria-hidden="true"><path d="M12-12c58 90 142 83 245 109 137 35 160 132 289 211"/><circle cx="373" cy="163" r="7"/></svg>
    <div className="process-inner">
      <header className="process-heading">
        <p className="process-eyebrow" data-reveal="up">Como funciona</p>
        <h2 id="process-title" className="process-title" data-reveal="up" data-reveal-delay="70"><span>Seu cuidado começa com</span><span> uma <em>avaliação personalizada</em></span></h2>
        <p className="process-subtitle" data-reveal="up" data-reveal-delay="140">Um atendimento próximo, transparente e planejado para oferecer a <strong>melhor experiência</strong> em cada etapa.</p>
      </header>
      <ol className="process-steps">
        {PROCESS_STEPS.map((step, index) => <ProcessStep key={step.number} step={step} index={index} />)}
      </ol>
      <SectionActions />
      <p className="process-seo-note">Na Aitak, clínica odontológica em Sorocaba, a avaliação odontológica dá início a um atendimento personalizado, com planejamento de tratamento claro e acompanhamento odontológico em todas as etapas.</p>
    </div>
  </section>;
}
