"use client";

import Image from "@/components/aitak/DirectImage";
import ContactInformationGrid from "./ContactInformationGrid";
import InteractiveMap from "./InteractiveMap";
import LocationCtaBand from "./LocationCtaBand";
import LocationFeature from "./LocationFeature";
import useRevealOnce from "./useRevealOnce";
import { DENTIST_JSON_LD, LOCATION_FEATURES } from "./location";

export default function LocationSection() {
  const sectionRef = useRevealOnce<HTMLElement>();

  return <section id="contato" className="page-section location-section" ref={sectionRef} aria-labelledby="location-title">
    <Image className="location-decoration location-curve" src="/assets/aitak/localizacao/decorative/01_green_curve_with_dots.svg" alt="" width={1024} height={1024} sizes="440px" loading="lazy" decoding="async" unoptimized aria-hidden="true" />
    <Image className="location-decoration location-mint" src="/assets/aitak/localizacao/decorative/02_mint_blob.svg" alt="" width={1024} height={1024} sizes="390px" loading="lazy" decoding="async" unoptimized aria-hidden="true" />
    <Image className="location-decoration location-lilac" src="/assets/aitak/localizacao/decorative/03_lilac_blob.svg" alt="" width={1024} height={1024} sizes="320px" loading="lazy" decoding="async" unoptimized aria-hidden="true" />

    <div className="location-inner">
      <div className="location-layout">
        <div className="location-editorial">
          <header>
            <p className="location-eyebrow" data-reveal="up">Nosso endereço</p>
            <h2 id="location-title" data-reveal="up" data-reveal-delay="70"><span>Fácil de encontrar,</span><em>perto de você.</em></h2>
            <p className="location-lead" data-reveal="up" data-reveal-delay="140">A Aitak Odontologia está localizada no <strong>Centro de Sorocaba</strong>, em uma região prática para quem deseja cuidar da saúde bucal com <strong>conforto e atendimento próximo.</strong></p>
            <p className="location-local-copy" data-reveal="up" data-reveal-delay="140">Para quem procura um dentista no Centro de Sorocaba, a clínica oferece atendimento odontológico próximo e acesso direto pelos canais abaixo.</p>
          </header>
          <ul className="location-features" aria-label="Facilidades de localização e contato">
            {LOCATION_FEATURES.map((feature, index) => <LocationFeature key={feature.title} feature={feature} index={index} />)}
          </ul>
          <Image className="location-dot-grid" src="/assets/aitak/localizacao/decorative/04_dot_grid.svg" alt="" width={1024} height={1024} sizes="150px" loading="lazy" decoding="async" unoptimized aria-hidden="true" />
        </div>

        <div className="location-map-column">
          <InteractiveMap />
          <ContactInformationGrid />
        </div>
      </div>
      <LocationCtaBand />
    </div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(DENTIST_JSON_LD) }} />
  </section>;
}
