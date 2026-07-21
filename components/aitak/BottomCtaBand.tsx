import Image from "@/components/aitak/DirectImage";
import Icon from "./Icon";
import { WHATSAPP_SCHEDULE_URL } from "./constants";

const highlights = [
  "Do cuidado preventivo às soluções mais avançadas.",
  "Tudo em um só lugar, com uma equipe completa para te atender.",
  "Aqui, você encontra tecnologia, experiência e um atendimento que faz a diferença.",
];

function HighlightIcon({ index }: { index: number }) {
  if (index === 0) return <Icon name="shield" size={25} />;
  if (index === 1) return <Icon name="users" size={25} />;
  return <Icon name="heart" size={25} />;
}

export default function BottomCtaBand() {
  return <div className="technology-band">
    <div className="technology-band-art" aria-hidden="true">
      <Image src="/assets/technology/10_decorative_tooth_with_leaves.webp" alt="" width={1254} height={1254} sizes="210px" loading="lazy" decoding="async" quality={88} aria-hidden="true" />
    </div>
    <p className="technology-band-title">Seu sorriso merece <strong>o melhor cuidado.</strong></p>
    <ul className="technology-band-highlights">
      {highlights.map((highlight, index) => <li key={highlight}><span><HighlightIcon index={index} /></span><p>{highlight}</p></li>)}
    </ul>
    <a className="technology-band-button" href={WHATSAPP_SCHEDULE_URL} target="_blank" rel="noreferrer" aria-label="Quero transformar meu sorriso com a Aitak Odontologia pelo WhatsApp"><Icon name="calendar" />Quero transformar meu sorriso</a>
  </div>;
}
