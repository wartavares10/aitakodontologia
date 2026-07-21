import type { IconName } from "./Icon";

export type AnxiousPatientFeatureData = {
  title: string;
  description: string;
  icon: IconName;
  alt: string;
  accent: "green" | "lilac";
};

export const ANXIOUS_PATIENT_FEATURES: AnxiousPatientFeatureData[] = [
  {
    title: "Escuta e empatia",
    description: "Ouvimos você com atenção para entender seus receios e respeitar seu tempo.",
    icon: "heart",
    alt: "Ícone de escuta e empatia.",
    accent: "green",
  },
  {
    title: "Ambiente acolhedor",
    description: "Um espaço tranquilo, confortável e preparado para o seu bem-estar.",
    icon: "users",
    alt: "Ícone de atendimento acolhedor.",
    accent: "lilac",
  },
  {
    title: "Explicações claras",
    description: "Você entende cada etapa do atendimento e participa das decisões sobre seu cuidado.",
    icon: "message",
    alt: "Ícone de explicações claras.",
    accent: "green",
  },
  {
    title: "Óxido nitroso, quando indicado",
    description: "Recurso que pode auxiliar no relaxamento durante determinados procedimentos.",
    icon: "leaf",
    alt: "Ícone conceitual de relaxamento.",
    accent: "lilac",
  },
];

export const WHATSAPP_ANXIOUS_PATIENT_URL = "https://wa.me/5515998289890?text=Ol%C3%A1%2C%20tenho%20receio%20de%20atendimento%20odontol%C3%B3gico%20e%20gostaria%20de%20conversar%20com%20a%20equipe%20da%20Aitak.";
