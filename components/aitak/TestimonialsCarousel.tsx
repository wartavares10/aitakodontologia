"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "./testimonials";
import Icon from "./Icon";

export default function TestimonialsCarousel() {
  const listRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [maxIndex, setMaxIndex] = useState(TESTIMONIALS.length - 1);

  const updateMetrics = useCallback(() => {
    const list = listRef.current;
    if (!list || list.children.length === 0) return;
    const first = list.children[0] as HTMLElement;
    const second = list.children[1] as HTMLElement | undefined;
    const step = second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
    const visible = Math.max(1, Math.floor((list.clientWidth + 2) / Math.max(step, 1)));
    const nextMax = Math.max(0, TESTIMONIALS.length - visible);
    setMaxIndex(nextMax);
    setActive(current => Math.min(current, nextMax));
  }, []);

  useEffect(() => {
    updateMetrics();
    window.addEventListener("resize", updateMetrics);
    return () => window.removeEventListener("resize", updateMetrics);
  }, [updateMetrics]);

  const goTo = useCallback((requestedIndex: number) => {
    const list = listRef.current;
    if (!list) return;
    const index = Math.max(0, Math.min(requestedIndex, maxIndex));
    const target = list.children[index] as HTMLElement | undefined;
    if (!target) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    list.scrollTo({ left: target.offsetLeft - list.offsetLeft, behavior: reduced ? "auto" : "smooth" });
    setActive(index);
  }, [maxIndex]);

  const syncActive = () => {
    const list = listRef.current;
    if (!list) return;
    let closest = 0;
    let distance = Number.POSITIVE_INFINITY;
    for (let index = 0; index <= maxIndex; index += 1) {
      const child = list.children[index] as HTMLElement | undefined;
      if (!child) continue;
      const nextDistance = Math.abs(child.offsetLeft - list.offsetLeft - list.scrollLeft);
      if (nextDistance < distance) {
        distance = nextDistance;
        closest = index;
      }
    }
    setActive(closest);
  };

  return <div className="testimonials-carousel">
    <div className="testimonials-carousel-toolbar">
      <p>Experiências compartilhadas por pacientes</p>
      <div className="testimonial-arrows">
        <button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Mostrar avaliações anteriores"><Icon name="arrow-left" size={20} /></button>
        <button type="button" onClick={() => goTo(active + 1)} disabled={active === maxIndex} aria-label="Mostrar próximas avaliações"><Icon name="arrow-right" size={20} /></button>
      </div>
    </div>
    <ul ref={listRef} className="testimonials-track" aria-label="Carrossel de avaliações de pacientes" tabIndex={0} onScroll={syncActive} onKeyDown={event => {
      if (event.key === "ArrowLeft") { event.preventDefault(); goTo(active - 1); }
      if (event.key === "ArrowRight") { event.preventDefault(); goTo(active + 1); }
    }}>
      {TESTIMONIALS.map((testimonial, index) => <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />)}
    </ul>
    <div className="testimonial-dots" aria-label="Selecionar grupo de avaliações">
      {Array.from({ length: maxIndex + 1 }, (_, index) => <button key={index} type="button" className={index === active ? "is-active" : ""} onClick={() => goTo(index)} aria-label={`Mostrar avaliações a partir da posição ${index + 1}`} aria-current={index === active ? "true" : undefined} />)}
    </div>
    <p className="sr-only" aria-live="polite">Exibindo grupo de avaliações {active + 1} de {maxIndex + 1}.</p>
  </div>;
}
