import type { CSSProperties } from "react";
import type { LocationFeatureData } from "./location";
import Icon from "./Icon";

export default function LocationFeature({ feature, index }: { feature: LocationFeatureData; index: number }) {
  return <li className={`location-feature is-${feature.tone}`} style={{ "--location-feature-index": index } as CSSProperties}>
    <span className="location-feature-icon">
      <Icon name={feature.icon} size={40} />
    </span>
    <h3>{feature.title}</h3>
    <p>{feature.description}</p>
  </li>;
}
