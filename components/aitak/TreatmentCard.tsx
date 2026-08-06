import Image from "@/components/aitak/DirectImage";
import type { CSSProperties } from "react";
import type { Treatment } from "./treatments";
import Icon from "./Icon";

type Props = { treatment: Treatment; index: number };

export default function TreatmentCard({ treatment, index }: Props) {
  return <article className={`treatment-card is-${treatment.accent}`} style={{ "--card-index": index } as CSSProperties}>
    <div className="treatment-visual">
      <span className="treatment-orbit" aria-hidden="true" />
      <Image src={treatment.image} alt={treatment.alt} width={1200} height={1200} sizes="(max-width: 700px) 70vw, (max-width: 1100px) 38vw, 18vw" loading="lazy" decoding="async" quality={88} />
    </div>
    <div className="treatment-card-copy">
      <h3>{treatment.title}</h3>
      <p>{treatment.description}</p>
    </div>
    <a className="treatment-arrow" href={treatment.href} target="_blank" rel="noreferrer" aria-label={`Conversar sobre ${treatment.title} pelo WhatsApp`}>
      <Icon name="arrow-right" size={21} />
    </a>
  </article>;
}
