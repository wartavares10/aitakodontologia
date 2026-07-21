import Image from "@/components/aitak/DirectImage";
import { FOOTER_ASSET_ROOT, FOOTER_SOCIALS } from "./footer";
import Icon from "./Icon";

export default function FooterBrand() {
  return <section className="footer-brand" aria-label="Aitak Odontologia">
    <Image className="footer-brand-logo" src={`${FOOTER_ASSET_ROOT}/logo/02_aitak_logo_footer_light.webp`} alt="Aitak Odontologia" width={512} height={512} sizes="(max-width: 720px) 230px, 280px" loading="lazy" decoding="async" quality={90} />
    <span className="footer-brand-rule" aria-hidden="true" />
    <p>Cuidado completo<br />para o seu sorriso.</p>
    <div className="footer-socials" aria-label="Redes sociais">
      {FOOTER_SOCIALS.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
        <Icon name={social.icon} size={25} />
      </a>)}
      <span className="footer-heart-detail" aria-hidden="true">
        <Icon name="heart" size={25} />
      </span>
    </div>
  </section>;
}
