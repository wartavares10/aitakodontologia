import Icon from "./Icon";
import { WHATSAPP_CONTACT_URL, WHATSAPP_SCHEDULE_URL } from "./constants";

export default function SectionActions() {
  return <div className="process-actions">
    <a className="hero-button primary" href={WHATSAPP_SCHEDULE_URL} target="_blank" rel="noopener noreferrer" aria-label="Agende sua avaliação odontológica na Aitak pelo WhatsApp"><Icon name="calendar" />Agende sua avaliação</a>
    <a className="hero-button secondary" href={WHATSAPP_CONTACT_URL} target="_blank" rel="noopener noreferrer" aria-label="Fale com a equipe da Aitak Odontologia pelo WhatsApp"><Icon name="chat" />Fale no WhatsApp</a>
  </div>;
}
