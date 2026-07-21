"use client";

import Image from "@/components/aitak/DirectImage";
import FaqAccordion from "./FaqAccordion";
import FaqContactBand from "./FaqContactBand";
import FaqFeature from "./FaqFeature";
import useRevealOnce from "./useRevealOnce";
import { FAQ_FEATURES, FAQ_JSON_LD } from "./faq";

export default function FaqSection() {
  const sectionRef = useRevealOnce<HTMLElement>();

  return <section id="perguntas-frequentes" className="page-section faq-section" ref={sectionRef} aria-labelledby="faq-title">
    <Image className="faq-decoration faq-curve" src="/assets/aitak/faq/decorative/01_curve_green_with_dot.svg" alt="" width={1024} height={1024} sizes="460px" loading="lazy" decoding="async" unoptimized aria-hidden="true" />
    <Image className="faq-decoration faq-mint-blob" src="/assets/aitak/faq/decorative/02_mint_blob.svg" alt="" width={1024} height={1024} sizes="360px" loading="lazy" decoding="async" unoptimized aria-hidden="true" />
    <Image className="faq-decoration faq-lilac-blob" src="/assets/aitak/faq/decorative/03_lilac_blob.svg" alt="" width={1024} height={1024} sizes="280px" loading="lazy" decoding="async" unoptimized aria-hidden="true" />
    <div className="faq-inner">
      <div className="faq-layout">
        <div className="faq-intro">
          <header>
            <p className="faq-eyebrow" data-reveal="up">Perguntas frequentes</p>
            <h2 id="faq-title" data-reveal="up" data-reveal-delay="70">Dúvidas comuns,<br /><em>respostas claras.</em></h2>
            <p className="faq-lead" data-reveal="up" data-reveal-delay="140">Reunimos as principais perguntas para ajudar você a conhecer melhor o atendimento da Aitak e tomar decisões com mais <strong>segurança e tranquilidade.</strong></p>
            <p className="faq-local-copy" data-reveal="up" data-reveal-delay="140">Encontre informações sobre avaliações, convênios e tratamentos na Aitak, sua clínica odontológica em Sorocaba.</p>
          </header>
          <ul className="faq-features" aria-label="Diferenciais do atendimento Aitak">
            {FAQ_FEATURES.map((feature, index) => <FaqFeature key={feature.title} feature={feature} index={index} />)}
          </ul>
          <Image className="faq-dot-grid" src="/assets/aitak/faq/decorative/04_dot_grid.svg" alt="" width={1024} height={1024} sizes="160px" loading="lazy" decoding="async" unoptimized aria-hidden="true" />
        </div>
        <FaqAccordion />
      </div>
      <FaqContactBand />
    </div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />
  </section>;
}
