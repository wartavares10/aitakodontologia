import Image from "@/components/aitak/DirectImage";
import { WHATSAPP_CONTACT_URL, WHATSAPP_SCHEDULE_URL } from "./constants";
import Icon from "./Icon";

export default function ClinicContactBand() {
  return <div className="clinic-contact-band">
    <div className="clinic-contact-message">
      <span className="clinic-contact-icon" aria-hidden="true">
        <Image src="/assets/aitak/clinica/04_icone_estrutura_dente.svg" alt="" width={1024} height={1024} sizes="74px" loading="lazy" decoding="async" unoptimized />
      </span>
      <p>Estamos prontos <strong>para receber você.</strong></p>
    </div>

    <a className="clinic-whatsapp" href={WHATSAPP_CONTACT_URL} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Aitak Odontologia pelo WhatsApp no número (15) 99828-9890">
      <span className="clinic-whatsapp-icon" aria-hidden="true">
        <Icon name="whatsapp" size={34} />
      </span>
      <span><small>Fale pelo WhatsApp</small><strong>(15) 99828-9890</strong></span>
    </a>

    <a className="clinic-schedule" href={WHATSAPP_SCHEDULE_URL} target="_blank" rel="noopener noreferrer" aria-label="Agendar uma avaliação odontológica na Aitak pelo WhatsApp">
      <Icon name="calendar" size={23} />
      Agende sua avaliação
    </a>
  </div>;
}
