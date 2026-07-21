import Image from "@/components/aitak/DirectImage";
import Link from "next/link";
import { FOOTER_ASSET_ROOT } from "./footer";
import Icon from "./Icon";

type Props = { title: string };

export default function LegalReviewPage({ title }: Props) {
  return <main className="legal-review-page">
    <Image className="legal-review-curve" src={`${FOOTER_ASSET_ROOT}/decorative/01_footer_curve.svg`} alt="" width={1600} height={600} sizes="100vw" unoptimized aria-hidden="true" />
    <article className="legal-review-card">
      <Image src={`${FOOTER_ASSET_ROOT}/logo/02_aitak_logo_footer_light.webp`} alt="Aitak Odontologia" width={512} height={512} sizes="220px" unoptimized />
      <p className="legal-review-eyebrow">Conteúdo em revisão jurídica</p>
      <h1>{title}</h1>
      <p>Esta página foi reservada para a política da Aitak Odontologia. O conteúdo jurídico definitivo ainda precisa ser revisado e aprovado antes da publicação.</p>
      <Link href="/">Voltar para o site <Icon name="arrow-right" size={22} /></Link>
    </article>
  </main>;
}
