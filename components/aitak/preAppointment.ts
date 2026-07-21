export type PreAppointmentFormData = {
  name: string;
  phone: string;
  email: string;
  preferredDay: string;
  preferredPeriod: string;
  message: string;
};

export type PreAppointmentField = keyof PreAppointmentFormData;
export type PreAppointmentErrors = Partial<Record<PreAppointmentField, string>>;

export const PRE_APPOINTMENT_INITIAL_DATA: PreAppointmentFormData = {
  name: "",
  phone: "",
  email: "",
  preferredDay: "",
  preferredPeriod: "",
  message: "",
};

export const PRE_APPOINTMENT_FEATURES = [
  { title: "Agendamento rápido e fácil", icon: "calendar", tone: "green" },
  { title: "Atendimento humanizado", icon: "headset", tone: "lilac" },
  { title: "Tecnologia e segurança", icon: "shield", tone: "green" },
  { title: "Cuidado completo para você", icon: "heart", tone: "lilac" },
] as const;

export const PREFERRED_DAY_OPTIONS = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sem preferência"];
export const PREFERRED_PERIOD_OPTIONS = ["Manhã", "Tarde", "Sem preferência"];
export const PRE_APPOINTMENT_CONTACT_URL = "https://wa.me/5515998289890?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Aitak%20Odontologia.";

export function formatBrazilianPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (!digits) return "";
  if (digits.length < 3) return `(${digits}`;
  const ddd = digits.slice(0, 2);
  const local = digits.slice(2);
  if (local.length <= 4) return `(${ddd}) ${local}`;
  if (local.length <= 8) return `(${ddd}) ${local.slice(0, 4)}-${local.slice(4)}`;
  return `(${ddd}) ${local.slice(0, 5)}-${local.slice(5)}`;
}

export function validatePreAppointmentField(field: PreAppointmentField, value: string) {
  if (field === "name") {
    const length = value.trim().length;
    return length >= 2 && length <= 80 ? "" : "Informe seu nome.";
  }
  if (field === "phone") {
    const digits = value.replace(/\D/g, "");
    return digits.length === 10 || digits.length === 11 ? "" : "Informe um telefone com DDD.";
  }
  if (field === "email" && value.trim()) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? "" : "Informe um e-mail válido.";
  }
  return "";
}

export function validatePreAppointment(data: PreAppointmentFormData) {
  const errors: PreAppointmentErrors = {};
  (["name", "phone", "email"] as PreAppointmentField[]).forEach((field) => {
    const error = validatePreAppointmentField(field, data[field]);
    if (error) errors[field] = error;
  });
  return errors;
}

export function buildPreAppointmentMessage(data: PreAppointmentFormData) {
  return [
    "Olá, gostaria de agendar uma avaliação na Aitak Odontologia.",
    "",
    `Nome: ${data.name.trim()}`,
    `Contato: ${data.phone.trim()}`,
    `E-mail: ${data.email.trim() || "Não informado"}`,
    `Melhor dia: ${data.preferredDay || "Sem preferência"}`,
    `Melhor período: ${data.preferredPeriod || "Sem preferência"}`,
    `Assunto: ${data.message.trim() || "Gostaria de receber orientações sobre o atendimento."}`,
  ].join("\n");
}

export function buildPreAppointmentWhatsAppUrl(data: PreAppointmentFormData) {
  return `https://wa.me/5515998289890?text=${encodeURIComponent(buildPreAppointmentMessage(data))}`;
}
