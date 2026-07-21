import { FAQ_MAP_URL, FAQ_PHONE_URL, FAQ_WHATSAPP_URL, type FaqItemData } from "./faq";
import Icon from "./Icon";

type Props = {
  item: FaqItemData;
  index: number;
  open: boolean;
  onToggle: () => void;
};

export default function FaqItem({ item, index, open, onToggle }: Props) {
  const buttonId = `faq-question-${item.id}`;
  const panelId = `faq-answer-${item.id}`;

  return <li className={`faq-item${open ? " is-open" : ""}`} style={{ "--faq-item-index": index } as React.CSSProperties}>
    <h3>
      <button id={buttonId} type="button" aria-expanded={open} aria-controls={panelId} onClick={onToggle}>
        <span className="faq-question-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <span className="faq-question-text">{item.question}</span>
        <span className="faq-toggle" aria-hidden="true"><Icon name={open ? "minus" : "plus"} size={22} /></span>
      </button>
    </h3>
    <div id={panelId} className="faq-answer" role="region" aria-labelledby={buttonId} aria-hidden={!open}>
      <div className="faq-answer-inner">
        <p>{item.answer}</p>
        {item.id === "localizacao" && <a href={FAQ_MAP_URL} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1} aria-label="Ver a localização da Aitak Odontologia no Google Maps">Ver localização <Icon name="arrow-up-right" size={18} /></a>}
        {item.id === "contato" && <div className="faq-answer-links">
          <a href={FAQ_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1} aria-label="Falar com a Aitak Odontologia pelo WhatsApp">WhatsApp</a>
          <a href={FAQ_PHONE_URL} tabIndex={open ? 0 : -1} aria-label="Ligar para a Aitak Odontologia no telefone 15 3234-7575">Ligar para a clínica</a>
        </div>}
      </div>
    </div>
  </li>;
}
