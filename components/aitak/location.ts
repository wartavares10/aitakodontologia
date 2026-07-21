import type { IconName } from "./Icon";
import { absoluteSiteUrl, seoConfig, siteUrl } from "@/config/seo";

export type LocationFeatureData = {
  title: string;
  description: string;
  icon: IconName;
  tone: "green" | "lilac";
};

export type ContactItemData = {
  id: "address" | "phone" | "whatsapp" | "route";
  label: string;
  value: string;
  icon: IconName;
  href?: string;
  ariaLabel?: string;
  external?: boolean;
};

export const LOCATION_MAP_EMBED_URL = "https://www.google.com/maps?q=Rua+da+Penha,+1310,+Centro,+Sorocaba,+SP&output=embed";
export const LOCATION_ROUTE_URL = "https://www.google.com/maps/dir/?api=1&destination=Rua+da+Penha,+1310,+Centro,+Sorocaba,+SP";
export const LOCATION_WHATSAPP_URL = "https://wa.me/5515998289890?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Aitak%20Odontologia.";
export const LOCATION_SCHEDULE_URL = "https://wa.me/5515998289890?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Aitak%20Odontologia.";

export const LOCATION_FEATURES: LocationFeatureData[] = [
  {
    title: "Localização central",
    description: "No Centro de Sorocaba.",
    icon: "map-pin",
    tone: "green",
  },
  {
    title: "Rota pelo Google Maps",
    description: "Visualize o caminho até a clínica.",
    icon: "route",
    tone: "lilac",
  },
  {
    title: "Contato direto",
    description: "Telefone e WhatsApp para falar com a equipe.",
    icon: "phone",
    tone: "green",
  },
  {
    title: "Ambiente acolhedor",
    description: "Um espaço preparado para receber você.",
    icon: "heart",
    tone: "lilac",
  },
];

export const LOCATION_CONTACTS: ContactItemData[] = [
  {
    id: "address",
    label: "Endereço",
    value: "Rua da Penha, 1310 — Centro, Sorocaba/SP",
    icon: "map-pin",
  },
  {
    id: "phone",
    label: "Telefone",
    value: "(15) 3234-7575",
    href: "tel:+551532347575",
    ariaLabel: "Ligar para a Aitak Odontologia",
    icon: "phone",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "(15) 99828-9890",
    href: LOCATION_WHATSAPP_URL,
    ariaLabel: "Falar com a Aitak Odontologia pelo WhatsApp",
    icon: "whatsapp",
    external: true,
  },
  {
    id: "route",
    label: "Como chegar",
    value: "Abrir rota no Google Maps",
    href: LOCATION_ROUTE_URL,
    ariaLabel: "Abrir rota até a Aitak Odontologia no Google Maps",
    icon: "route",
    external: true,
  },
];

export const DENTIST_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Aitak Odontologia",
  description: "Clínica odontológica em Sorocaba com atendimento humanizado e cuidado completo para o seu sorriso.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua da Penha, 1310",
    addressLocality: "Sorocaba",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  telephone: "+551532347575",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+5515998289890",
    contactType: "customer service",
    availableLanguage: "pt-BR",
  },
  sameAs: [
    "https://www.instagram.com/aitakodontologia/",
    "https://www.facebook.com/aitakodontologia/?locale=pt_BR",
  ],
  ...(siteUrl
    ? {
        url: siteUrl,
        image: absoluteSiteUrl(seoConfig.socialImagePath),
      }
    : {}),
};
