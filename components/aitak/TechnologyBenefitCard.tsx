import type { CSSProperties } from "react";
import type { TechnologyBenefit } from "./technology";
import Icon from "./Icon";

type Props = { benefit: TechnologyBenefit; index: number };

export default function TechnologyBenefitCard({ benefit, index }: Props) {
  return <article className={`technology-benefit is-${benefit.accent}`} style={{ "--benefit-index": index } as CSSProperties}>
    <span className="technology-benefit-icon">
      <Icon name={benefit.icon} size={38} />
    </span>
    <div>
      <h3>{benefit.title}</h3>
      <p>{benefit.text}</p>
    </div>
  </article>;
}
