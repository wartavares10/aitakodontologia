import type { CSSProperties } from "react";
import type { ClinicFeatureData } from "./clinic";
import Icon from "./Icon";

type Props = {
  feature: ClinicFeatureData;
  index: number;
};

export default function ClinicFeature({ feature, index }: Props) {
  return <li className={`clinic-feature is-${feature.accent}`} style={{ "--clinic-feature-index": index } as CSSProperties}>
    <span className="clinic-feature-icon" aria-hidden="true">
      <Icon name={feature.icon} size={39} />
    </span>
    <h3>{feature.title}</h3>
    <p>{feature.description}</p>
  </li>;
}
