import { WHATSAPP_CONTACT_URL } from "./constants";

export type Treatment = {
  title: string;
  description: string;
  image: string;
  alt: string;
  accent: "green" | "lilac";
  href: string;
};

export const TREATMENTS: Treatment[] = [
  {
    title: "Implantes e próteses",
    description: "Soluções para repor dentes e recuperar função, conforto e confiança ao sorrir.",
    image: "/assets/treatments/02_implante_e_protese.webp",
    alt: "Representação de implante e prótese dentária.",
    accent: "green",
    href: WHATSAPP_CONTACT_URL,
  },
  {
    title: "Ortodontia e alinhadores",
    description: "Aparelhos e alinhadores transparentes para um sorriso mais harmonioso.",
    image: "/assets/treatments/03_alinhador_transparente.webp",
    alt: "Representação de alinhador ortodôntico transparente.",
    accent: "lilac",
    href: WHATSAPP_CONTACT_URL,
  },
  {
    title: "Prevenção e limpeza",
    description: "Cuidados regulares para preservar a saúde bucal e prevenir problemas.",
    image: "/assets/treatments/04_prevencao_escudo.webp",
    alt: "Símbolo de proteção e prevenção da saúde bucal.",
    accent: "green",
    href: WHATSAPP_CONTACT_URL,
  },
  {
    title: "Clareamento dental",
    description: "Tratamentos personalizados para um sorriso mais claro e natural.",
    image: "/assets/treatments/05_clareamento_dental.webp",
    alt: "Ilustração de dente representando clareamento dental.",
    accent: "lilac",
    href: WHATSAPP_CONTACT_URL,
  },
  {
    title: "Extração de siso",
    description: "Avaliação e procedimentos planejados para oferecer mais segurança e conforto.",
    image: "/assets/treatments/06_extracao_de_siso.webp",
    alt: "Ilustração conceitual de extração dentária.",
    accent: "green",
    href: WHATSAPP_CONTACT_URL,
  },
  {
    title: "Restaurações",
    description: "Recuperação da estética e da função dos dentes com planejamento individual.",
    image: "/assets/treatments/07_restauracao_dental.webp",
    alt: "Ilustração de dente com restauração odontológica.",
    accent: "lilac",
    href: WHATSAPP_CONTACT_URL,
  },
];
