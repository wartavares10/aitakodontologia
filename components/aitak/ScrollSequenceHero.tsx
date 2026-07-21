"use client";
import { useRef } from "react";
import HeroBenefits from "./HeroBenefits";
import HeroContent from "./HeroContent";
import ScrollCanvas from "./ScrollCanvas";

export default function ScrollSequenceHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  return <section id="inicio" className="sequence-section" ref={sectionRef} aria-label="Aitak Odontologia em Sorocaba"><div className="sequence-stage" ref={stageRef}><ScrollCanvas sectionRef={sectionRef} stageRef={stageRef}/><div className="sequence-wash" aria-hidden="true"/><div className="sequence-vignette" aria-hidden="true"/><div className="hero-content"><HeroContent/><HeroBenefits/></div></div></section>;
}
