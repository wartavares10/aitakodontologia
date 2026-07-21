"use client";

import { useEffect, useRef, useState } from "react";
import { LOCATION_MAP_EMBED_URL, LOCATION_ROUTE_URL } from "./location";
import Icon from "./Icon";

export default function InteractiveMap() {
  const [loaded, setLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const mapRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    if (!("IntersectionObserver" in window)) {
      const fallbackTimer = window.setTimeout(() => setShouldLoad(true), 0);
      return () => window.clearTimeout(fallbackTimer);
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setShouldLoad(true);
      observer.disconnect();
    }, { rootMargin: "600px 0px" });
    observer.observe(map);
    return () => observer.disconnect();
  }, []);

  return <figure ref={mapRef} className={`location-map${loaded ? " is-loaded" : ""}`}>
    <div className="location-map-fallback" aria-hidden={loaded}>
      <Icon name="map-pin" size={48} />
      <strong>Aitak Odontologia</strong>
      <address>Rua da Penha, 1310 — Centro, Sorocaba/SP</address>
      <a href={LOCATION_ROUTE_URL} target="_blank" rel="noopener noreferrer" tabIndex={loaded ? -1 : 0} aria-label="Abrir a localização da Aitak Odontologia no Google Maps">Abrir no Google Maps</a>
    </div>
    {shouldLoad ? <iframe
      src={LOCATION_MAP_EMBED_URL}
      title="Localização da Aitak Odontologia no Google Maps"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      tabIndex={loaded ? 0 : -1}
      aria-hidden={!loaded}
      onLoad={() => setLoaded(true)}
      onError={() => setLoaded(false)}
    /> : null}
  </figure>;
}
