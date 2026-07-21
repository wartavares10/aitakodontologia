import type { CSSProperties } from "react";
import type { AnxiousPatientFeatureData } from "./anxiousPatients";
import Icon from "./Icon";

type Props = {
  feature: AnxiousPatientFeatureData;
  index: number;
};

export default function AnxiousPatientFeature({ feature, index }: Props) {
  return <li className={`anxious-feature is-${feature.accent}`} style={{ "--anxious-feature-index": index } as CSSProperties}>
    <span className="anxious-feature-icon">
      <Icon name={feature.icon} size={39} />
    </span>
    <h3>{feature.title}</h3>
    <p>{feature.description}</p>
  </li>;
}
