import Image from "@/components/aitak/DirectImage";
import type { CSSProperties } from "react";
import type { TechnologyFeature } from "./technology";

type Props = { feature: TechnologyFeature; index: number };

export default function TechnologyFeatureItem({ feature, index }: Props) {
  return <li className={`technology-feature is-${feature.accent}`} style={{ "--feature-index": index } as CSSProperties}>
    <span className="technology-feature-icon">
      <Image src={feature.image} alt={feature.alt} width={1254} height={1254} sizes="72px" loading="lazy" decoding="async" quality={88} />
    </span>
    <h3>{feature.title}</h3>
    <p>{feature.text}</p>
  </li>;
}
