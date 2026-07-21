"use client";

import Image from "@/components/aitak/DirectImage";
import ContactSummaryBand from "./ContactSummaryBand";
import PreAppointmentFeature from "./PreAppointmentFeature";
import PreAppointmentForm from "./PreAppointmentForm";
import useRevealOnce from "./useRevealOnce";
import { PRE_APPOINTMENT_FEATURES } from "./preAppointment";

export default function PreAppointmentSection() {
  const sectionRef = useRevealOnce<HTMLElement>();

  return <section id="pre-agendamento" className="page-section pre-appointment-section" ref={sectionRef} aria-labelledby="pre-appointment-title">
    <Image className="pre-appointment-decoration pre-appointment-curve" src="/assets/aitak/formulario-agendamento/decorative/01_green_curve_with_dots.svg" alt="" width={1024} height={1024} sizes="460px" loading="lazy" decoding="async" unoptimized aria-hidden="true" />
    <Image className="pre-appointment-decoration pre-appointment-mint" src="/assets/aitak/formulario-agendamento/decorative/02_mint_blob.svg" alt="" width={1024} height={1024} sizes="390px" loading="lazy" decoding="async" unoptimized aria-hidden="true" />
    <Image className="pre-appointment-decoration pre-appointment-lilac" src="/assets/aitak/formulario-agendamento/decorative/03_lilac_blob.svg" alt="" width={1024} height={1024} sizes="330px" loading="lazy" decoding="async" unoptimized aria-hidden="true" />
    <div className="pre-appointment-inner">
      <div className="pre-appointment-layout">
        <div className="pre-appointment-editorial">
          <header>
            <p className="pre-appointment-eyebrow" data-reveal="up">Agende sua avaliação</p>
            <h2 id="pre-appointment-title" data-reveal="up" data-reveal-delay="70"><span>Seu melhor sorriso</span><em>começa aqui.</em></h2>
            <p className="pre-appointment-lead" data-reveal="up" data-reveal-delay="140">Preencha os dados ao lado e nossa equipe entrará em contato para encontrar o <strong>melhor horário</strong> para você.</p>
            <p className="pre-appointment-local-copy" data-reveal="up" data-reveal-delay="140">Solicite uma avaliação odontológica na Aitak Odontologia, clínica odontológica em Sorocaba com atendimento pelo WhatsApp.</p>
          </header>
          <ul className="pre-appointment-features" aria-label="Diferenciais do atendimento">
            {PRE_APPOINTMENT_FEATURES.map((feature, index) => <PreAppointmentFeature key={feature.title} feature={feature} index={index} />)}
          </ul>
          <Image className="pre-appointment-dot-grid" src="/assets/aitak/formulario-agendamento/decorative/04_dot_grid.svg" alt="" width={1024} height={1024} sizes="150px" loading="lazy" decoding="async" unoptimized aria-hidden="true" />
        </div>
        <PreAppointmentForm />
      </div>
      <ContactSummaryBand />
    </div>
  </section>;
}
