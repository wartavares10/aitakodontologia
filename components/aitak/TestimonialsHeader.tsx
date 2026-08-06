import Icon from "./Icon";

export default function TestimonialsHeader() {
  return <header className="testimonials-heading">
    <p className="testimonials-eyebrow" data-reveal="up">Avaliações de pacientes</p>
    <h2 id="testimonials-title" className="testimonials-title" data-reveal="up" data-reveal-delay="70"><span>A confiança de quem</span>{" "}<em>já viveu essa experiência</em></h2>
    <p className="testimonials-intro" data-reveal="up" data-reveal-delay="140">Cada atendimento conta uma história. Conheça algumas experiências compartilhadas publicamente por pacientes da Aitak Odontologia.</p>
    <p className="testimonials-local-copy" data-reveal="up" data-reveal-delay="140">Relatos reais ajudam quem procura dentista em Sorocaba a conhecer o atendimento humanizado de uma clínica odontológica em Sorocaba pela experiência dos próprios pacientes.</p>
    <div className="testimonials-seal" data-reveal="up" data-reveal-delay="210">
      <Icon name="star" size={27} />
      <span>Seleção de avaliações públicas de 5 estrelas</span>
    </div>
  </header>;
}
