import type { CSSProperties } from "react";
import type { PRE_APPOINTMENT_FEATURES } from "./preAppointment";
import Icon, { type IconName } from "./Icon";

type Feature = (typeof PRE_APPOINTMENT_FEATURES)[number];

export default function PreAppointmentFeature({ feature, index }: { feature: Feature; index: number }) {
  return <li className={`pre-appointment-feature is-${feature.tone}`} style={{ "--pre-feature-index": index } as CSSProperties}>
    <span className="pre-appointment-feature-icon">
      <Icon name={feature.icon as IconName} size={40} />
    </span>
    <h3>{feature.title}</h3>
  </li>;
}
