import Image from "@/components/aitak/DirectImage";
import Icon from "./Icon";
import { WHATSAPP_SCHEDULE_URL } from "./constants";

export default function TeamInstitutionalBand() {
  return <div className="team-band">
    <div className="team-band-art" aria-hidden="true"><Image src="/assets/aitak/equipe/dente-com-folhas.webp" alt="" width={1254} height={1254} sizes="180px" loading="lazy" decoding="async" quality={88} /></div>
    <p className="team-band-message">Dedicação, conhecimento <span>e cuidado <strong>para o seu sorriso.</strong></span></p>
    <div className="team-technical">
      <span className="team-technical-icon"><Image src="/assets/aitak/equipe/07_icone_responsavel_tecnica.svg" alt="" width={1024} height={1024} sizes="62px" loading="lazy" unoptimized /></span>
      <p><span>Responsável técnica</span><strong>Dra. Katia Beltrame</strong><small>CROSP/CL 20105</small></p>
    </div>
    <a className="team-band-button" href={WHATSAPP_SCHEDULE_URL} target="_blank" rel="noopener noreferrer" aria-label="Agende sua avaliação na Aitak Odontologia pelo WhatsApp"><Icon name="calendar" />Agende sua avaliação<span aria-hidden="true"><Icon name="arrow-right" size={21} /></span></a>
  </div>;
}
