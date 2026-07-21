import Image from "@/components/aitak/DirectImage";

export default function PatientComfortImage() {
  return <figure className="anxious-photo">
    <span className="anxious-photo-outline" aria-hidden="true" />
    <Image
      src="/assets/aitak/pacientes-ansiosos/paciente/01_paciente_cadeira_azul_turquesa.webp"
      alt="Paciente recebendo atendimento odontológico acolhedor."
      width={1600}
      height={1166}
      sizes="(max-width: 860px) 94vw, 44vw"
      loading="lazy"
      decoding="async"
      quality={88}
    />
  </figure>;
}
