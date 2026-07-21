import type { IconName } from "./Icon";

export type TeamFeatureData = {
  title: string;
  description: string;
  icon: IconName;
  alt: string;
  accent: "green" | "lilac";
};

export const TEAM_FEATURES: TeamFeatureData[] = [
  {
    title: "Experiência",
    description: "Profissionais qualificados e em constante atualização.",
    icon: "shield",
    alt: "Ícone representando experiência profissional.",
    accent: "green",
  },
  {
    title: "Atendimento humanizado",
    description: "Escuta, acolhimento e cuidado em cada etapa do atendimento.",
    icon: "heart",
    alt: "Ícone representando atendimento humanizado.",
    accent: "lilac",
  },
  {
    title: "Trabalho integrado",
    description: "Planejamento conjunto para encontrar soluções adequadas a cada necessidade.",
    icon: "users",
    alt: "Ícone representando trabalho integrado.",
    accent: "green",
  },
  {
    title: "Compromisso com o cuidado",
    description: "Foco em saúde, função, estética e bem-estar a longo prazo.",
    icon: "target",
    alt: "Ícone representando compromisso com o cuidado odontológico.",
    accent: "lilac",
  },
];
