"use client";

import Image from "@/components/aitak/DirectImage";
import { PRE_APPOINTMENT_CONTACT_URL } from "./preAppointment";
import Icon from "./Icon";

export default function ContactSummaryBand() {
  const focusForm = () => document.getElementById("pre-appointment-name")?.focus();

  return <aside className="pre-contact-band" aria-label="Outras formas de contato e agendamento">
    <div className="pre-contact-intro">
      <span className="pre-contact-tooth">
        <Image src="/assets/aitak/formulario-agendamento/icons/04_tooth_heart.svg" alt="" width={1024} height={1024} sizes="78px" loading="lazy" decoding="async" unoptimized aria-hidden="true" />
      </span>
      <div><h3>Vamos cuidar do seu sorriso?</h3><p>Nossa equipe está pronta para receber você com <strong>atenção</strong>, <strong>tecnologia</strong> e <em>carinho</em>.</p></div>
    </div>
    <a className="pre-contact-method" href="tel:+551532347575" aria-label="Ligar para a Aitak Odontologia">
      <span><Icon name="phone" size={38} /></span>
      <span><strong>(15) 3234-7575</strong><small>Ligue para a clínica</small></span>
    </a>
    <a className="pre-contact-method is-whatsapp" href={PRE_APPOINTMENT_CONTACT_URL} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Aitak Odontologia pelo WhatsApp">
      <span><Icon name="whatsapp" size={38} /></span>
      <span><strong>(15) 99828-9890</strong><small>Fale pelo WhatsApp</small></span>
    </a>
    <button type="button" onClick={focusForm} aria-label="Ir para o formulário de pré-agendamento">
      <Icon name="calendar" size={30} />
      <span>Agendar agora</span>
    </button>
  </aside>;
}
