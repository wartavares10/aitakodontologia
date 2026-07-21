"use client";

import Image from "@/components/aitak/DirectImage";
import BottomCtaBand from "./BottomCtaBand";
import Icon from "./Icon";
import TechnologyBenefitCard from "./TechnologyBenefitCard";
import TechnologyFeatureItem from "./TechnologyFeatureItem";
import useRevealOnce from "./useRevealOnce";
import { WHATSAPP_CONTACT_URL, WHATSAPP_SCHEDULE_URL } from "./constants";
import { TECHNOLOGY_BENEFITS, TECHNOLOGY_FEATURES } from "./technology";

export default function TechnologySection() {
  const sectionRef = useRevealOnce<HTMLElement>();

  return <section id="tecnologia" className="page-section technology-section" ref={sectionRef} aria-labelledby="technology-title">
    <span className="technology-ambient technology-ambient-one" aria-hidden="true" />
    <span className="technology-ambient technology-ambient-two" aria-hidden="true" />
    <div className="technology-inner">
      <div className="technology-copy">
        <p className="technology-eyebrow" data-reveal="up">Tecnologia e conforto</p>
        <h2 id="technology-title" className="technology-title" data-reveal="up" data-reveal-delay="70"><span>Tecnologia que</span><span className="technology-title-green"> transforma sua</span><span className="technology-title-lilac"> experiência</span></h2>
        <p className="technology-intro" data-reveal="up" data-reveal-delay="140">Investimos em tecnologia de ponta e em um ambiente acolhedor para oferecer mais <strong>precisão, segurança e tranquilidade</strong> em cada etapa do seu tratamento.</p>
        <p className="technology-local" data-reveal="up" data-reveal-delay="140">Tecnologia odontológica, escaneamento digital e planejamento odontológico a serviço de um atendimento humanizado em nossa clínica odontológica em Sorocaba.</p>
        <ul className="technology-features" aria-label="Tecnologias e diferenciais da Aitak">
          {TECHNOLOGY_FEATURES.map((feature, index) => <TechnologyFeatureItem key={feature.title} feature={feature} index={index} />)}
        </ul>
        <div className="technology-actions" data-reveal="up" data-reveal-delay="210">
          <a className="hero-button primary" href={WHATSAPP_SCHEDULE_URL} target="_blank" rel="noreferrer" aria-label="Agende sua avaliação na Aitak Odontologia pelo WhatsApp"><Icon name="calendar" />Agende sua avaliação</a>
          <a className="hero-button secondary" href={WHATSAPP_CONTACT_URL} target="_blank" rel="noreferrer" aria-label="Fale com a Aitak Odontologia pelo WhatsApp"><Icon name="chat" />Fale no WhatsApp</a>
        </div>
      </div>
      <figure className="technology-photo">
        <span className="technology-photo-orbit" aria-hidden="true" />
        <div className="technology-photo-mask">
          <Image src="/assets/technology/01_clinic_room.webp" alt="Consultório odontológico da Aitak Odontologia" width={1023} height={1537} sizes="(max-width: 700px) 88vw, (max-width: 1180px) 52vw, 31vw" loading="lazy" decoding="async" quality={88} />
        </div>
        <figcaption className="sr-only">Consultório odontológico moderno, claro e acolhedor.</figcaption>
      </figure>
      <div className="technology-benefits" aria-label="Benefícios da experiência Aitak">
        {TECHNOLOGY_BENEFITS.map((benefit, index) => <TechnologyBenefitCard key={benefit.title} benefit={benefit} index={index} />)}
      </div>
      <BottomCtaBand />
    </div>
  </section>;
}
