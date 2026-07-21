import type { IconName } from "./Icon";

export type ClinicFeatureData = {
  title: string;
  description: string;
  icon: IconName;
  accent: "green" | "lilac";
};

export const CLINIC_FEATURES: ClinicFeatureData[] = [
  {
    title: "Fácil acesso",
    description: "Localização central e prática para o seu dia a dia.",
    icon: "map-pin",
    accent: "green",
  },
  {
    title: "Ambiente acolhedor",
    description: "Um espaço pensado para tornar o atendimento mais tranquilo.",
    icon: "heart",
    accent: "lilac",
  },
  {
    title: "Estrutura preparada",
    description: "Organização, conforto e cuidado em cada detalhe.",
    icon: "dental",
    accent: "green",
  },
  {
    title: "Atendimento próximo",
    description: "Uma equipe pronta para orientar você em cada etapa.",
    icon: "users",
    accent: "lilac",
  },
];

export const CLINIC_MAP_URL = "https://www.google.com/maps/search/?api=1&query=Rua%20da%20Penha%2C%201310%2C%20Centro%2C%20Sorocaba%2C%20SP";
