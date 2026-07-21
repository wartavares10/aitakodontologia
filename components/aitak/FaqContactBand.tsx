import { FAQ_WHATSAPP_URL } from "./faq";
import Icon from "./Icon";

export default function FaqContactBand() {
  return <aside className="faq-contact-band" aria-label="Contato para outras dúvidas">
    <div className="faq-contact-intro">
      <span className="faq-contact-icon">
        <Icon name="headset" size={40} />
      </span>
      <div><h3>Ainda tem dúvidas?</h3><p>Nossa equipe está pronta para ajudar.</p></div>
    </div>
    <p className="faq-contact-copy">Fale com a gente e receba um atendimento próximo, <strong>humano</strong> e sem complicação.</p>
    <a href={FAQ_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Enviar uma dúvida para a Aitak Odontologia pelo WhatsApp">
      <Icon name="whatsapp" size={32} />
      <span>Falar pelo WhatsApp</span><strong aria-hidden="true"><Icon name="arrow-right" size={24} /></strong>
    </a>
  </aside>;
}
