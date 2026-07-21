import Image from "@/components/aitak/DirectImage";

export default function DecorativeDentalScene() {
  return <div className="dental-scene" aria-hidden="true">
    <Image className="dental-blob" src="/assets/treatments/08_forma_organica_verde_menta.webp" alt="" width={1400} height={1400} sizes="(max-width: 700px) 100vw, 46vw" loading="lazy" decoding="async" quality={88} />
    <Image className="dental-tooth" src="/assets/treatments/01_dente_decorativo.webp" alt="" width={1200} height={1200} sizes="(max-width: 700px) 58vw, 27vw" loading="lazy" decoding="async" quality={88} />
    <Image className="dental-orb" src="/assets/treatments/09_esfera_lilas_decorativa.webp" alt="" width={700} height={700} sizes="72px" loading="lazy" decoding="async" quality={88} />
  </div>;
}
