"use client";

import ClinicContactBand from "./ClinicContactBand";
import ClinicFacade from "./ClinicFacade";
import ClinicFeature from "./ClinicFeature";
import { CLINIC_FEATURES, CLINIC_MAP_URL } from "./clinic";
import Icon from "./Icon";
import useRevealOnce from "./useRevealOnce";

export default function ClinicSection() {
  const sectionRef = useRevealOnce<HTMLElement>();

  return <section id="clinica" className="page-section clinic-section" ref={sectionRef} aria-labelledby="clinic-title">
    <span className="clinic-shape clinic-shape-mint" aria-hidden="true" />
    <span className="clinic-shape clinic-shape-lilac" aria-hidden="true" />
    <svg className="clinic-curve" viewBox="0 0 650 460" preserveAspectRatio="none" aria-hidden="true"><path d="M18-8c149 45 176 128 191 242 18 137 101 185 234 174 82-7 142 1 202 47"/><circle cx="210" cy="236" r="8"/></svg>

    <div className="clinic-inner">
      <div className="clinic-main">
        <div className="clinic-copy">
          <header className="clinic-heading">
            <p className="clinic-eyebrow" data-reveal="up">Sobre a clínica</p>
            <h2 id="clinic-title" className="clinic-title" data-reveal="up" data-reveal-delay="70">
              <span>Mais perto de você,</span>{" "}
              <span>um espaço pensado</span>{" "}
              <em>para o seu sorriso</em>
            </h2>
            <p className="clinic-intro" data-reveal="up" data-reveal-delay="140">Na Aitak Odontologia, reunimos <strong>acolhimento</strong>, localização acessível e um ambiente preparado para cuidar da sua saúde bucal com <strong>conforto e confiança</strong> em Sorocaba.</p>
            <p className="clinic-local-copy" data-reveal="up" data-reveal-delay="140">Uma clínica odontológica no Centro de Sorocaba, com atendimento odontológico próximo para quem procura dentista em Sorocaba.</p>
            <address className="clinic-address" data-reveal="up" data-reveal-delay="210">
              <span>Rua da Penha, 1310 — Centro, Sorocaba/SP</span>
              <a href={CLINIC_MAP_URL} target="_blank" rel="noopener noreferrer" aria-label="Ver como chegar à Aitak Odontologia no Google Maps">Como chegar <Icon name="arrow-up-right" size={19} /></a>
            </address>
          </header>

          <ul className="clinic-features" aria-label="Diferenciais da clínica">
            {CLINIC_FEATURES.map((feature, index) => <ClinicFeature key={feature.title} feature={feature} index={index} />)}
          </ul>
        </div>

        <ClinicFacade />
      </div>

      <ClinicContactBand />
    </div>
  </section>;
}
