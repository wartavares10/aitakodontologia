"use client";

import DecorativeDentalScene from "./DecorativeDentalScene";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import TreatmentCard from "./TreatmentCard";
import useRevealOnce from "./useRevealOnce";
import { WHATSAPP_SCHEDULE_URL } from "./constants";
import { TREATMENTS } from "./treatments";

export default function TreatmentsSection() {
  const sectionRef = useRevealOnce<HTMLElement>();

  return <section id="tratamentos" className="page-section treatments-section" ref={sectionRef} aria-labelledby="treatments-title">
    <svg className="treatments-curve" viewBox="0 0 820 660" preserveAspectRatio="none" aria-hidden="true">
      <path d="M-40 18C250 20 505 112 616 298c76 128 74 244 34 362" />
      <circle cx="616" cy="298" r="9" />
    </svg>
    <div className="treatments-inner">
      <div className="treatments-editorial">
        <div className="treatments-copy">
          <SectionHeading />
        <div className="treatments-actions" data-reveal="up" data-reveal-delay="210">
            <a className="hero-button primary" href={WHATSAPP_SCHEDULE_URL} target="_blank" rel="noreferrer" aria-label="Agende sua avaliação na Aitak Odontologia pelo WhatsApp"><Icon name="calendar" />Agende sua avaliação</a>
            <a className="hero-button secondary treatments-secondary" href="#treatment-grid" aria-label="Ver os tratamentos odontológicos da Aitak">Ver tratamentos<Icon name="arrow-right" size={20} /></a>
          </div>
        </div>
        <DecorativeDentalScene />
      </div>
      <div id="treatment-grid" className="treatments-grid" aria-label="Tratamentos odontológicos">
        {TREATMENTS.map((treatment, index) => <TreatmentCard key={treatment.title} treatment={treatment} index={index} />)}
      </div>
      <p className="treatments-seo-copy">Para quem procura dentista em Sorocaba, a Aitak reúne o cuidado de uma clínica odontológica completa: prevenção e limpeza, ortodontia e alinhadores, implantes, próteses, clareamento e restaurações.</p>
    </div>
  </section>;
}
