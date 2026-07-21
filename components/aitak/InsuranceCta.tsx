import Icon from "./Icon";
import { WHATSAPP_INSURANCE_URL } from "./constants";

export default function InsuranceCta() {
  return <div className="insurance-cta">
    <span className="insurance-cta-icon" aria-hidden="true"><Icon name="shield" size={39} /></span>
    <p>Verifique seu convênio e descubra como podemos <strong>cuidar do seu sorriso.</strong></p>
    <div className="insurance-cta-action">
      <a href={WHATSAPP_INSURANCE_URL} target="_blank" rel="noopener noreferrer" aria-label="Consultar atendimento do meu convênio pelo WhatsApp"><Icon name="whatsapp" />Consultar meu convênio<span aria-hidden="true"><Icon name="arrow-right" size={22} /></span></a>
      <small>Resposta rápida pelo WhatsApp</small>
    </div>
  </div>;
}
