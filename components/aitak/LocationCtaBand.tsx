import Image from "@/components/aitak/DirectImage";
import { LOCATION_SCHEDULE_URL } from "./location";
import Icon from "./Icon";

export default function LocationCtaBand() {
  return <aside className="location-cta-band" aria-label="Agendamento de avaliação">
    <div className="location-cta-intro">
      <span className="location-cta-tooth">
        <Image src="/assets/aitak/localizacao/icons/08_tooth_heart.svg" alt="" width={1024} height={1024} sizes="82px" loading="lazy" decoding="async" unoptimized aria-hidden="true" />
      </span>
      <div>
        <h3>Estamos esperando por você!</h3>
        <p>Agende sua avaliação e descubra como a equipe da Aitak pode cuidar do seu sorriso com <strong>atenção</strong>, <strong>tecnologia</strong> e <em>carinho</em>.</p>
      </div>
    </div>
    <div className="location-cta-support">
      <span>
        <Icon name="message" size={34} />
      </span>
      <p>Fale com nossa equipe e esclareça suas dúvidas.</p>
    </div>
    <a href={LOCATION_SCHEDULE_URL} target="_blank" rel="noopener noreferrer" aria-label="Agendar avaliação na Aitak Odontologia pelo WhatsApp">
      <Icon name="whatsapp" size={35} />
      <span>Agendar pelo WhatsApp</span>
      <strong aria-hidden="true"><Icon name="arrow-right" size={24} /></strong>
    </a>
  </aside>;
}
