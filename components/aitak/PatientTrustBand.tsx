import Image from "@/components/aitak/DirectImage";
import { WHATSAPP_ANXIOUS_PATIENT_URL } from "./anxiousPatients";

export default function PatientTrustBand() {
  return <div className="anxious-trust-band">
    <div className="anxious-trust-item">
      <span className="anxious-trust-icon">
        <Image src="/assets/aitak/pacientes-ansiosos/icones/06_icone_dente_coracao.svg" alt="" width={1024} height={1024} sizes="74px" loading="lazy" decoding="async" unoptimized aria-hidden="true" />
      </span>
      <p>Aqui, seu conforto e tranquilidade vêm sempre <strong className="is-lilac">em primeiro lugar.</strong></p>
    </div>

    <div className="anxious-trust-item">
      <span className="anxious-trust-icon">
        <Image src="/assets/aitak/pacientes-ansiosos/icones/07_icone_maos_coracao.svg" alt="" width={1024} height={1024} sizes="74px" loading="lazy" decoding="async" unoptimized aria-hidden="true" />
      </span>
      <p>Nosso compromisso é cuidar de você com <strong>respeito, paciência e segurança.</strong></p>
    </div>

    <div className="anxious-trust-action">
      <a href={WHATSAPP_ANXIOUS_PATIENT_URL} target="_blank" rel="noopener noreferrer" aria-label="Conversar com a equipe da Aitak sobre atendimento para pacientes ansiosos">
        <Image src="/assets/aitak/pacientes-ansiosos/icones/08_icone_whatsapp.svg" alt="" width={1024} height={1024} sizes="29px" loading="lazy" decoding="async" unoptimized />
        Fale com nossa equipe
      </a>
      <small>Atendimento humanizado pelo WhatsApp</small>
    </div>
  </div>;
}
