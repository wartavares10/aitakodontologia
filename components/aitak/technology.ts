import type { IconName } from "./Icon";

export type TechnologyFeature = {
  title: string;
  text: string;
  image: string;
  alt: string;
  accent: "green" | "lilac";
};

export type TechnologyBenefit = {
  title: string;
  text: string;
  icon: IconName;
  accent: "green" | "lilac";
};

export const TECHNOLOGY_FEATURES: TechnologyFeature[] = [
  {
    title: "Escaneamento digital",
    text: "Mais conforto e precisão nas moldagens.",
    image: "/assets/technology/05_safety_protocols_icon.webp",
    alt: "Ícone de escaneamento odontológico digital.",
    accent: "green",
  },
  {
    title: "Óxido nitroso",
    text: "Mais relaxamento e tranquilidade durante o atendimento.",
    image: "/assets/technology/03_nitrous_oxide_mask_icon.webp",
    alt: "Ícone de máscara para sedação consciente com óxido nitroso.",
    accent: "lilac",
  },
  {
    title: "Materiais de alta qualidade",
    text: "Soluções duráveis, biocompatíveis e esteticamente naturais.",
    image: "/assets/technology/07_humanized_care_icon.webp",
    alt: "Ícone de dente representando materiais odontológicos de qualidade.",
    accent: "green",
  },
  {
    title: "Protocolos de segurança",
    text: "Cuidados rigorosos em cada detalhe para sua proteção.",
    image: "/assets/technology/06_precise_diagnosis_icon.webp",
    alt: "Ícone de escudo representando protocolos de segurança.",
    accent: "lilac",
  },
];

export const TECHNOLOGY_BENEFITS: TechnologyBenefit[] = [
  {
    title: "Diagnóstico preciso",
    text: "Tecnologias avançadas que permitem análises detalhadas para tratamentos mais assertivos.",
    icon: "target",
    accent: "green",
  },
  {
    title: "Atendimento humanizado",
    text: "Escuta, acolhimento e cuidado individualizado para você se sentir seguro e tranquilo.",
    icon: "users",
    accent: "lilac",
  },
  {
    title: "Planejamento personalizado",
    text: "Cada sorriso é único. Seu tratamento é planejado de acordo com suas necessidades e objetivos.",
    icon: "calendar",
    accent: "green",
  },
  {
    title: "Conforto em cada detalhe",
    text: "Ambiente moderno, acolhedor e pensado para tornar sua experiência mais leve.",
    icon: "heart",
    accent: "lilac",
  },
];
