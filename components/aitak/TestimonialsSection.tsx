"use client";

import ReviewCtaBand from "./ReviewCtaBand";
import TestimonialsCarousel from "./TestimonialsCarousel";
import TestimonialsHeader from "./TestimonialsHeader";
import useRevealOnce from "./useRevealOnce";

export default function TestimonialsSection() {
  const sectionRef = useRevealOnce<HTMLElement>();

  return <section id="avaliacoes" className="page-section testimonials-section" ref={sectionRef} aria-labelledby="testimonials-title">
    <span className="testimonials-shape testimonials-shape-mint" aria-hidden="true" />
    <span className="testimonials-shape testimonials-shape-lilac" aria-hidden="true" />
    <svg className="testimonials-curve" viewBox="0 0 760 260" preserveAspectRatio="none" aria-hidden="true"><path d="M8 38c127-54 239-27 340 39 126 82 236 92 402 27"/><path d="M0 224c113-73 224-64 342-2 132 70 254 49 410-42"/><circle cx="350" cy="78" r="7"/></svg>
    <div className="testimonials-inner">
      <div className="testimonials-layout">
        <TestimonialsHeader />
        <TestimonialsCarousel />
      </div>
      <ReviewCtaBand />
    </div>
  </section>;
}
