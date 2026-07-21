import Icon, { type IconName } from "./Icon";
import type { FAQ_FEATURES } from "./faq";

type Feature = (typeof FAQ_FEATURES)[number];

export default function FaqFeature({ feature, index }: { feature: Feature; index: number }) {
  return <li className={`faq-feature is-${feature.tone}`} style={{ "--faq-feature-index": index } as React.CSSProperties}>
    <span className="faq-feature-icon">
      <Icon name={feature.icon as IconName} size={42} />
    </span>
    <h3>{feature.title}</h3>
  </li>;
}
