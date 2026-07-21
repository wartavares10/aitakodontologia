import type { CSSProperties } from "react";
import type { FinalCtaFeatureData } from "./finalCta";
import Icon from "./Icon";

type Props = {
  feature: FinalCtaFeatureData;
  index: number;
};

export default function FinalCtaFeature({ feature, index }: Props) {
  return <li className={`final-cta-feature is-${feature.accent}`} style={{ "--final-cta-feature-index": index } as CSSProperties}>
    <span className="final-cta-feature-icon" aria-hidden="true">
      <Icon name={feature.icon} size={42} />
    </span>
    <h3>{feature.title}</h3>
  </li>;
}
