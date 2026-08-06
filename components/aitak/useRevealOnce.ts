"use client";

import { useEffect, useRef } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const observedElements = new Set<Element>();
let sharedObserver: IntersectionObserver | null = null;

function reveal(element: Element) {
  element.classList.add("is-visible");
  sharedObserver?.unobserve(element);
  observedElements.delete(element);
}

function getSharedObserver() {
  if (sharedObserver) return sharedObserver;

  sharedObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) reveal(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -10% 0px",
  });

  return sharedObserver;
}

/**
 * Reveals a section only once through one shared IntersectionObserver.
 * Content remains visible when JavaScript, hydration or IntersectionObserver
 * are unavailable; the motion-ready class enables animation progressively.
 */
export default function useRevealOnce<T extends HTMLElement>() {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      element.classList.add("is-visible");
      return;
    }

    document.documentElement.classList.add("motion-ready");
    const observer = getSharedObserver();
    observedElements.add(element);
    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observedElements.delete(element);
    };
  }, []);

  return elementRef;
}
