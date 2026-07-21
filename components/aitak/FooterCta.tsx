"use client";

import Icon from "./Icon";

export default function FooterCta() {
  const focusPreAppointment = () => {
    const section = document.getElementById("pre-agendamento");
    if (!section) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    section.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });

    window.setTimeout(() => {
      document.getElementById("pre-appointment-name")?.focus({ preventScroll: true });
    }, reducedMotion ? 0 : 650);
  };

  return <section className="footer-appointment" aria-labelledby="footer-appointment-title">
    <span className="footer-appointment-icon" aria-hidden="true">
      <Icon name="calendar" size={43} />
    </span>
    <div className="footer-appointment-copy">
      <h2 id="footer-appointment-title">Agende sua avaliação</h2>
      <p>Atendimento humanizado e tecnologia a favor do seu sorriso.</p>
    </div>
    <span className="footer-appointment-divider" aria-hidden="true" />
    <button type="button" onClick={focusPreAppointment} aria-label="Agendar agora: voltar ao formulário de pré-agendamento">
      <Icon name="calendar" size={31} />
      <span>Agendar agora</span>
      <strong aria-hidden="true"><Icon name="arrow-right" size={25} /></strong>
    </button>
  </section>;
}
