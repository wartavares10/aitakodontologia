import Image from "@/components/aitak/DirectImage";

export default function FinalCtaImage() {
  return <figure className="final-cta-photo">
    <span className="final-cta-photo-outline" aria-hidden="true" />
    <Image
      src="/assets/aitak/cta-final/photo/01_dentist_clinic_scene.webp"
      alt="Imagem institucional ilustrativa de profissional odontológica em ambiente clínico."
      width={1400}
      height={1945}
      sizes="(max-width: 860px) 94vw, 43vw"
      loading="lazy"
      decoding="async"
      quality={88}
    />
    <figcaption className="sr-only">Imagem ilustrativa usada somente para representar acolhimento em ambiente odontológico.</figcaption>
  </figure>;
}
