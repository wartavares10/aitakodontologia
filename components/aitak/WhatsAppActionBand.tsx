import Image from "@/components/aitak/DirectImage";
import { FINAL_CTA_WHATSAPP_URL } from "./finalCta";
import Icon from "./Icon";

export default function WhatsAppActionBand() {
  return <div className="final-cta-action-band">
    <a href={FINAL_CTA_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Agendar uma avaliação na Aitak Odontologia pelo WhatsApp">
      <Icon name="whatsapp" size={32} />
      <span>Agendar pelo WhatsApp</span>
      <strong aria-hidden="true"><Icon name="arrow-right" size={24} /></strong>
    </a>
    <div className="final-cta-support">
      <span aria-hidden="true"><Image src="/assets/aitak/cta-final/icons/07_friendly_smile.svg" alt="" width={1024} height={1024} sizes="56px" loading="lazy" decoding="async" unoptimized /></span>
      <p>Nossa equipe vai atender você com atenção e ajudar a esclarecer suas dúvidas.</p>
    </div>
  </div>;
}
