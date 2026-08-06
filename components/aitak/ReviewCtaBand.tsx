import Icon from "./Icon";
import { WHATSAPP_SCHEDULE_URL } from "./constants";
import { REVIEW_WRITE_URL } from "./testimonials";

export default function ReviewCtaBand() {
  return <div className="review-cta-band">
    <div className="review-cta-copy">
      <h3>Sua experiência também pode começar com um <strong>sorriso tranquilo.</strong></h3>
      <p>Agende seu atendimento ou conte como foi sua experiência com a Aitak Odontologia.</p>
    </div>
    <div className="review-cta-actions">
      <a className="review-cta-primary" href={WHATSAPP_SCHEDULE_URL} target="_blank" rel="noopener noreferrer" aria-label="Agendar avaliação na Aitak Odontologia pelo WhatsApp"><Icon name="calendar" />Agendar avaliação</a>
      <a className="review-cta-secondary" href={REVIEW_WRITE_URL} target="_blank" rel="noopener noreferrer" aria-label="Conte-nos sua experiência escrevendo uma avaliação no Google">
        <Icon name="writing" size={25} />
        Conte-nos sua experiência
      </a>
    </div>
  </div>;
}
