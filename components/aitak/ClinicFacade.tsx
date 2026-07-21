import Image from "@/components/aitak/DirectImage";

export default function ClinicFacade() {
  return <figure className="clinic-facade">
    <span className="clinic-facade-outline" aria-hidden="true" />
    <Image
      src="/assets/aitak/clinica/01_fachada_aitak_recorte_organico.webp"
      alt="Fachada da Aitak Odontologia no Centro de Sorocaba."
      width={1038}
      height={770}
      sizes="(max-width: 980px) 94vw, 58vw"
      loading="lazy"
      decoding="async"
      quality={90}
    />
    <figcaption className="sr-only">A unidade da Aitak Odontologia localizada no Centro de Sorocaba.</figcaption>
  </figure>;
}
