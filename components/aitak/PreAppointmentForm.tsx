"use client";

import { useState, type FormEvent } from "react";
import FormField from "./FormField";
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";
import Icon from "./Icon";
import {
  PRE_APPOINTMENT_INITIAL_DATA,
  PREFERRED_DAY_OPTIONS,
  PREFERRED_PERIOD_OPTIONS,
  buildPreAppointmentWhatsAppUrl,
  formatBrazilianPhone,
  validatePreAppointment,
  validatePreAppointmentField,
  type PreAppointmentErrors,
  type PreAppointmentField,
  type PreAppointmentFormData,
} from "./preAppointment";

const FIELD_IDS: Partial<Record<PreAppointmentField, string>> = {
  name: "pre-appointment-name",
  phone: "pre-appointment-phone",
  email: "pre-appointment-email",
};

export default function PreAppointmentForm() {
  const [form, setForm] = useState<PreAppointmentFormData>(PRE_APPOINTMENT_INITIAL_DATA);
  const [errors, setErrors] = useState<PreAppointmentErrors>({});
  const [status, setStatus] = useState("");

  const updateField = (field: PreAppointmentField, rawValue: string) => {
    const value = field === "phone" ? formatBrazilianPhone(rawValue) : rawValue;
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field] && !validatePreAppointmentField(field, value)) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
    if (status) setStatus("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validatePreAppointment(form);
    setErrors(nextErrors);

    const firstInvalid = (["name", "phone", "email"] as PreAppointmentField[]).find((field) => nextErrors[field]);
    if (firstInvalid) {
      setStatus("Revise os campos destacados antes de continuar.");
      const fieldId = FIELD_IDS[firstInvalid];
      if (fieldId) requestAnimationFrame(() => document.getElementById(fieldId)?.focus());
      return;
    }

    const whatsappUrl = buildPreAppointmentWhatsAppUrl(form);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setStatus("A mensagem foi preparada no WhatsApp. Revise os dados e envie quando desejar.");
  };

  return <div className="pre-appointment-form-card">
    <header>
      <h3>Fale com a gente</h3>
      <p>Preencha as informações abaixo para iniciar seu atendimento pelo WhatsApp.</p>
    </header>
    <form onSubmit={handleSubmit} noValidate>
      <FormField id="pre-appointment-name" label="Seu nome" type="text" icon="user" value={form.name} onChange={(value) => updateField("name", value)} error={errors.name} required minLength={2} maxLength={80} autoComplete="name" inputMode="text" />
      <FormField id="pre-appointment-phone" label="WhatsApp ou telefone" type="tel" icon="phone" value={form.phone} onChange={(value) => updateField("phone", value)} error={errors.phone} required maxLength={15} autoComplete="tel" inputMode="tel" placeholder="(15) 99999-9999" />
      <FormField id="pre-appointment-email" label="E-mail, se preferir" type="email" icon="mail" value={form.email} onChange={(value) => updateField("email", value)} error={errors.email} maxLength={120} autoComplete="email" inputMode="email" />
      <div className="pre-form-select-row">
        <SelectField id="pre-appointment-day" label="Melhor dia para contato" icon="calendar" value={form.preferredDay} options={PREFERRED_DAY_OPTIONS} onChange={(value) => updateField("preferredDay", value)} />
        <SelectField id="pre-appointment-period" label="Melhor período" value={form.preferredPeriod} options={PREFERRED_PERIOD_OPTIONS} onChange={(value) => updateField("preferredPeriod", value)} />
      </div>
      <TextareaField id="pre-appointment-message" label="Como podemos ajudar?" icon="message" value={form.message} onChange={(value) => updateField("message", value)} />
      <button className="pre-form-submit" type="submit">
        <Icon name="whatsapp" size={32} />
        <span>Quero agendar minha avaliação</span>
        <strong aria-hidden="true"><Icon name="arrow-right" size={24} /></strong>
      </button>
      <div className="pre-form-privacy">
        <Icon name="lock" size={24} />
        <p>Os dados preenchidos serão inseridos somente na mensagem do WhatsApp e enviados apenas após sua confirmação.</p>
      </div>
      <p className="pre-form-status" aria-live="polite">{status}</p>
    </form>
  </div>;
}
