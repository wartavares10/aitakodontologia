import Icon from "./Icon";
import { WHATSAPP_CONTACT_URL, WHATSAPP_SCHEDULE_URL } from "./constants";

export default function HeroContent() {
  return <div className="hero-copy">
    <p className="hero-eyebrow">Aitak Odontologia em Sorocaba</p>
    <h1 className="hero-title"><span>Cuidado <em className="title-green">completo</em></span><span> para o seu <em className="title-lilac">sorriso</em></span></h1>
    <div className="title-rule" aria-hidden="true"/>
    <p className="hero-subtitle">Tratamentos odontológicos com tecnologia, conforto e atendimento acolhedor — da prevenção aos implantes, ortodontia, próteses e estética dental.</p>
    <div className="hero-actions">
      <a className="hero-button primary" href={WHATSAPP_SCHEDULE_URL} target="_blank" rel="noreferrer" aria-label="Agende sua avaliação na Aitak Odontologia pelo WhatsApp"><Icon name="calendar"/>Agende sua avaliação</a>
      <a className="hero-button secondary" href={WHATSAPP_CONTACT_URL} target="_blank" rel="noreferrer" aria-label="Fale com a Aitak Odontologia pelo WhatsApp"><Icon name="chat"/>Fale no WhatsApp</a>
    </div>
  </div>;
}
