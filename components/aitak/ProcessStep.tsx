import type { CSSProperties } from "react";
import ProcessConnector from "./ProcessConnector";
import type { ProcessStepData } from "./process";
import Icon from "./Icon";

type Props = { step: ProcessStepData; index: number };

export default function ProcessStep({ step, index }: Props) {
  return <li className="process-step" style={{ "--step-index": index } as CSSProperties}>
    <div className="process-step-visual">
      <span className="process-step-number" aria-hidden="true">{step.number}</span>
      <span className="process-step-icon">
        <Icon name={step.icon} size={62} />
      </span>
      <span className="process-step-point" aria-hidden="true" />
      <ProcessConnector />
    </div>
    <div className="process-step-copy">
      <span className="process-step-mobile-number" aria-hidden="true">Etapa {step.number}</span>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </div>
  </li>;
}
