import Image from "@/components/aitak/DirectImage";
import type { CSSProperties } from "react";
import type { InsuranceProvider } from "./insurance";

type Props = { provider: InsuranceProvider; index: number };

export default function InsuranceLogoCard({ provider, index }: Props) {
  const row = Math.floor(index / 6);
  const column = index % 6;
  const delay = 100 + row * 65 + column * 42;

  return <li className="insurance-logo-card" style={{ "--insurance-delay": `${delay}ms` } as CSSProperties}>
    <Image src={provider.logo} alt={provider.alt} width={420} height={180} sizes="(max-width: 380px) 72vw, (max-width: 760px) 38vw, (max-width: 1100px) 21vw, 13vw" loading="lazy" decoding="async" unoptimized />
  </li>;
}
