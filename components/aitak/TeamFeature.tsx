import type { CSSProperties } from "react";
import type { TeamFeatureData } from "./team";
import Icon from "./Icon";

type Props = { feature: TeamFeatureData; index: number };

export default function TeamFeature({ feature, index }: Props) {
  return <li className={`team-feature is-${feature.accent}`} style={{ "--team-feature-index": index } as CSSProperties}>
    <span className="team-feature-icon">
      <Icon name={feature.icon} size={39} />
    </span>
    <h3>{feature.title}</h3>
    <p>{feature.description}</p>
  </li>;
}
