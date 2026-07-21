"use client";

import TeamFeature from "./TeamFeature";
import TeamImage from "./TeamImage";
import TeamInstitutionalBand from "./TeamInstitutionalBand";
import useRevealOnce from "./useRevealOnce";
import { TEAM_FEATURES } from "./team";

export default function TeamSection() {
  const sectionRef = useRevealOnce<HTMLElement>();

  return <section id="equipe" className="page-section team-section" ref={sectionRef} aria-labelledby="team-title">
    <span className="team-ambient team-ambient-one" aria-hidden="true" />
    <span className="team-ambient team-ambient-two" aria-hidden="true" />
    <svg className="team-curve" viewBox="0 0 720 690" preserveAspectRatio="none" aria-hidden="true"><path d="M-10 14c282 24 520 92 628 282 66 116 75 255 32 394"/><circle cx="619" cy="296" r="8"/></svg>
    <div className="team-inner">
      <div className="team-main">
        <div className="team-content">
          <header className="team-heading">
            <p className="team-eyebrow" data-reveal="up">Nossa equipe</p>
            <h2 id="team-title" className="team-title" data-reveal="up" data-reveal-delay="70"><span>Profissionais que</span><span> cuidam de <em>cada detalhe</em></span></h2>
            <p className="team-intro" data-reveal="up" data-reveal-delay="140">Nossa equipe reúne profissionais de diferentes áreas da odontologia para oferecer um <strong>cuidado completo, integrado</strong> e focado nas necessidades de cada paciente.</p>
            <p className="team-local" data-reveal="up" data-reveal-delay="140">Na Aitak Odontologia, clínica odontológica em Sorocaba, o atendimento humanizado e o planejamento integrado orientam cada etapa do cuidado odontológico.</p>
          </header>
          <ul className="team-features" aria-label="Diferenciais da equipe Aitak">
            {TEAM_FEATURES.map((feature, index) => <TeamFeature key={feature.title} feature={feature} index={index} />)}
          </ul>
        </div>
        <TeamImage />
      </div>
      <TeamInstitutionalBand />
    </div>
  </section>;
}
