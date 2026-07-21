import Image from "@/components/aitak/DirectImage";
import type { CSSProperties } from "react";
import type { TestimonialData } from "./testimonials";
import Icon from "./Icon";

type Props = {
  testimonial: TestimonialData;
  index: number;
};

export default function TestimonialCard({ testimonial, index }: Props) {
  return <li className="testimonial-slide" style={{ "--testimonial-index": index } as CSSProperties}>
    <article className="testimonial-card" aria-labelledby={`testimonial-name-${index}`}>
      <header className="testimonial-person">
        <span className="testimonial-avatar" style={{ "--avatar-scale": testimonial.avatarScale } as CSSProperties}>
          <Image src={testimonial.avatar} alt={`Foto do perfil de ${testimonial.name}`} width={256} height={256} sizes="52px" loading="lazy" decoding="async" quality={88} />
        </span>
        <div>
          <h3 id={`testimonial-name-${index}`}>{testimonial.name}</h3>
          <span className="testimonial-stars" aria-label="5 de 5 estrelas"><span aria-hidden="true">{Array.from({ length: 5 }, (_, star) => <Icon key={star} name="star" size={18} fill="currentColor" />)}</span></span>
        </div>
      </header>
      <div className="testimonial-quote" aria-hidden="true"><Icon name="quote" size={36} /></div>
      <blockquote><p>{testimonial.review}</p></blockquote>
      <footer>Avaliação pública no Google</footer>
    </article>
  </li>;
}
