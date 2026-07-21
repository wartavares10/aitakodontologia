"use client";

import AnxiousPatientFeature from "./AnxiousPatientFeature";
import PatientComfortImage from "./PatientComfortImage";
import PatientTrustBand from "./PatientTrustBand";
import useRevealOnce from "./useRevealOnce";
import { ANXIOUS_PATIENT_FEATURES } from "./anxiousPatients";

export default function AnxiousPatientsSection() {
  const sectionRef = useRevealOnce<HTMLElement>();

  return <section id="pacientes-ansiosos" className="page-section anxious-section" ref={sectionRef} aria-labelledby="anxious-title">
    <span className="anxious-shape anxious-shape-mint" aria-hidden="true" />
    <span className="anxious-shape anxious-shape-lilac" aria-hidden="true" />
    <svg className="anxious-curve" viewBox="0 0 690 420" preserveAspectRatio="none" aria-hidden="true"><path d="M15 320c105-26 154-98 171-192 21-117 111-147 242-98 85 31 159 22 251-25"/><circle cx="192" cy="116" r="8"/></svg>

    <div className="anxious-inner">
      <div className="anxious-main">
        <header className="anxious-heading">
          <p className="anxious-eyebrow" data-reveal="up">Pacientes ansiosos</p>
          <h2 id="anxious-title" className="anxious-title" data-reveal="up" data-reveal-delay="70"><span>Acolhimento que</span>{" "}<span>transforma <em>sua experiência</em></span></h2>
          <p data-reveal="up" data-reveal-delay="140">Entendemos que cada paciente é único, principalmente quando o assunto é <strong>medo de dentista.</strong></p>
          <p data-reveal="up" data-reveal-delay="140">Por isso, oferecemos um atendimento humanizado, com paciência, escuta e explicações claras para que você se sinta <strong>mais seguro</strong> em cada etapa.</p>
          <p className="anxious-local-copy" data-reveal="up" data-reveal-delay="140">Na Aitak, clínica odontológica em Sorocaba, cada paciente ansioso recebe atendimento acolhedor e orientação cuidadosa desde a avaliação odontológica com um dentista em Sorocaba.</p>
        </header>

        <PatientComfortImage />

        <ul className="anxious-features" aria-label="Cuidados para pacientes ansiosos">
          {ANXIOUS_PATIENT_FEATURES.map((feature, index) => <AnxiousPatientFeature key={feature.title} feature={feature} index={index} />)}
        </ul>
      </div>

      <PatientTrustBand />
    </div>
  </section>;
}
