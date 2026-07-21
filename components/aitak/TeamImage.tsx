import Image from "@/components/aitak/DirectImage";

export default function TeamImage() {
  return <figure className="team-photo">
    <span className="team-photo-ring" aria-hidden="true" />
    <div className="team-photo-mask">
      <Image src="/assets/aitak/equipe/equipe-real-web.webp" alt="Equipe da Aitak Odontologia" width={1400} height={1589} sizes="(max-width: 700px) 92vw, (max-width: 1100px) 72vw, 47vw" loading="lazy" decoding="async" quality={88} />
    </div>
    <figcaption className="sr-only">Registro institucional da equipe da Aitak Odontologia reunida.</figcaption>
  </figure>;
}
