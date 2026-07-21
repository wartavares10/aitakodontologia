export type FinalCtaFeatureData = {
  title: string;
  icon: "calendar" | "users" | "heart" | "shield";
  accent: "green" | "lilac" | "mixed";
};

export const FINAL_CTA_FEATURES: FinalCtaFeatureData[] = [
  {
    title: "Agendamento rápido e prático",
    icon: "calendar",
    accent: "green",
  },
  {
    title: "Atendimento humanizado",
    icon: "users",
    accent: "lilac",
  },
  {
    title: "Soluções completas para o seu sorriso",
    icon: "heart",
    accent: "mixed",
  },
  {
    title: "Segurança e confiança",
    icon: "shield",
    accent: "lilac",
  },
];

export const FINAL_CTA_WHATSAPP_URL = "https://wa.me/5515998289890?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Aitak%20Odontologia.";
