"use client";

import Image from "@/components/aitak/DirectImage";
import FinalCtaFeature from "./FinalCtaFeature";
import FinalCtaImage from "./FinalCtaImage";
import WhatsAppActionBand from "./WhatsAppActionBand";
import useRevealOnce from "./useRevealOnce";
import { FINAL_CTA_FEATURES } from "./finalCta";

export default function FinalCtaSection() {
  const sectionRef = useRevealOnce<HTMLElement>();

  return <section id="agendamento" className="page-section final-cta-section" ref={sectionRef} aria-labelledby="final-cta-title">
    <span className="final-cta-shape final-cta-shape-mint" aria-hidden="true" />
    <span className="final-cta-shape final-cta-shape-lilac" aria-hidden="true" />
    <svg className="final-cta-curve" viewBox="0 0 720 500" preserveAspectRatio="none" aria-hidden="true"><path d="M12 420c119-37 166-127 169-246 3-129 98-179 239-129 95 34 174 20 288-32"/><circle cx="184" cy="164" r="8"/></svg>

    <div className="final-cta-inner">
      <div className="final-cta-main">
        <header className="final-cta-heading">
          <p className="final-cta-eyebrow" data-reveal="up">Agende sua avaliação</p>
          <h2 id="final-cta-title" className="final-cta-title" data-reveal="up" data-reveal-delay="70"><span>Dê o próximo passo</span>{" "}<span>para um <em>sorriso mais saudável</em></span></h2>
          <p className="final-cta-intro" data-reveal="up" data-reveal-delay="140">Estamos prontos para cuidar de você com toda a <strong>atenção, tecnologia e carinho</strong> que você e sua família merecem.</p>
          <p className="final-cta-local-copy" data-reveal="up" data-reveal-delay="140">Agende sua avaliação odontológica com a Aitak Odontologia, clínica odontológica em Sorocaba preparada para oferecer atendimento humanizado e cuidado completo com o sorriso.</p>
        </header>

        <FinalCtaImage />

        <ul className="final-cta-features" aria-label="Diferenciais para o seu atendimento">
          {FINAL_CTA_FEATURES.map((feature, index) => <FinalCtaFeature key={feature.title} feature={feature} index={index} />)}
        </ul>

        <WhatsAppActionBand />

        <div className="final-cta-signature">
          <span className="final-cta-signature-line" aria-hidden="true" />
          <Image src="/assets/aitak/cta-final/icons/08_decorative_heart.svg" alt="" width={1024} height={1024} sizes="30px" loading="lazy" decoding="async" unoptimized aria-hidden="true" />
          <span className="final-cta-signature-line" aria-hidden="true" />
          <h3>Seu sorriso em boas mãos.</h3>
          <p>Aitak Odontologia — cuidado próximo para hoje e para o futuro.</p>
        </div>
      </div>
    </div>
  </section>;
}
