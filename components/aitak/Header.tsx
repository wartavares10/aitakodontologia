"use client";
import Image from "@/components/aitak/DirectImage";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { NAVIGATION_LINKS, WHATSAPP_SCHEDULE_URL } from "./constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="header-inner">
        <a className="brand-link" href="#inicio" aria-label="Aitak Odontologia — início"><Image className="brand-logo" src="/assets/brand/aitak-logo.webp" alt="Aitak Odontologia" width={437} height={437} sizes="(max-width: 720px) 75px, 92px" priority unoptimized /></a>
        <nav className="desktop-nav" aria-label="Navegação principal">{NAVIGATION_LINKS.map(item => <a key={item.label} href={item.href}>{item.label}</a>)}</nav>
        <a className="header-cta" href={WHATSAPP_SCHEDULE_URL} target="_blank" rel="noreferrer" aria-label="Agendar avaliação na Aitak Odontologia pelo WhatsApp">Agendar avaliação</a>
        <button className="menu-button" type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(v => !v)}><Icon name={open ? "close" : "menu"}/></button>
      </div>
      {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Navegação para celular">{NAVIGATION_LINKS.map(item => <a key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}<a className="mobile-cta" href={WHATSAPP_SCHEDULE_URL} target="_blank" rel="noreferrer" aria-label="Agendar avaliação na Aitak Odontologia pelo WhatsApp">Agendar avaliação</a></nav>}
    </header>
  );
}
