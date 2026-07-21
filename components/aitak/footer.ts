import type { IconName } from "./Icon";

export const FOOTER_ASSET_ROOT = "/assets/aitak/footer";

export const FOOTER_NAVIGATION = [
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Equipe", href: "#equipe" },
  { label: "Convênios", href: "#convenios" },
  { label: "A clínica", href: "#clinica" },
  { label: "Perguntas frequentes", href: "#perguntas-frequentes" },
  { label: "Contato", href: "#contato" },
] as const;

export const FOOTER_CONTACTS = [
  {
    label: "Endereço",
    value: "Rua da Penha, 1310 — Centro, Sorocaba/SP",
    href: "https://www.google.com/maps/dir/?api=1&destination=Rua+da+Penha,+1310,+Centro,+Sorocaba,+SP",
    icon: "map-pin" as IconName,
    external: true,
  },
  {
    label: "Telefone",
    value: "(15) 3234-7575",
    href: "tel:+551532347575",
    icon: "phone" as IconName,
    external: false,
  },
  {
    label: "WhatsApp",
    value: "(15) 99828-9890",
    href: "https://wa.me/5515998289890?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Aitak%20Odontologia.",
    icon: "whatsapp" as IconName,
    external: true,
  },
  {
    label: "Instagram",
    value: "@aitakodontologia",
    href: "https://www.instagram.com/aitakodontologia/",
    icon: "instagram" as IconName,
    external: true,
  },
] as const;

export const FOOTER_SOCIALS = [
  {
    label: "Instagram da Aitak Odontologia",
    href: "https://www.instagram.com/aitakodontologia/",
    icon: "instagram" as IconName,
  },
  {
    label: "Falar com a Aitak Odontologia pelo WhatsApp",
    href: "https://wa.me/5515998289890?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Aitak%20Odontologia.",
    icon: "whatsapp" as IconName,
  },
  {
    label: "Facebook da Aitak Odontologia",
    href: "https://www.facebook.com/aitakodontologia/?locale=pt_BR",
    icon: "facebook" as IconName,
  },
] as const;
