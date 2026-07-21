import type { IconName } from "./Icon";

export type ProcessStepData = {
  number: string;
  title: string;
  description: string;
  icon: IconName;
  alt: string;
};

export const PROCESS_STEPS: ProcessStepData[] = [
  {
    number: "01",
    title: "Entre em contato",
    description: "Fale com nossa equipe pelo WhatsApp e escolha o melhor horário para você.",
    icon: "whatsapp",
    alt: "Ícone de contato pelo WhatsApp.",
  },
  {
    number: "02",
    title: "Faça sua avaliação",
    description: "Realizamos uma avaliação completa para entender suas necessidades e objetivos.",
    icon: "clipboard",
    alt: "Ícone de avaliação odontológica.",
  },
  {
    number: "03",
    title: "Receba seu planejamento",
    description: "Você recebe um plano de tratamento personalizado, com todas as possibilidades explicadas com clareza.",
    icon: "document",
    alt: "Ícone de planejamento do tratamento odontológico.",
  },
  {
    number: "04",
    title: "Inicie seu cuidado",
    description: "Seu tratamento começa com acompanhamento da nossa equipe em cada etapa do processo.",
    icon: "dental",
    alt: "Ícone de início e acompanhamento do cuidado odontológico.",
  },
];
