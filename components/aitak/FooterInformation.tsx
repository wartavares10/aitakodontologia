import Link from "next/link";
import Icon, { type IconName } from "./Icon";

const POLICY_LINKS = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade", icon: "document" as IconName },
  { label: "Política de Cookies", href: "/politica-de-cookies", icon: "cookie" as IconName },
] as const;

export default function FooterInformation() {
  return <section className="footer-column footer-information" aria-labelledby="footer-information-title">
    <h2 id="footer-information-title">Informações</h2>
    <div className="footer-responsible">
      <span className="footer-information-icon" aria-hidden="true"><Icon name="shield" size={32} /></span>
      <p><span>Responsável técnica</span><strong>Dra. Katia Beltrame</strong><small>CROSP/CL 20105</small></p>
    </div>
    <nav aria-label="Documentos institucionais">
      {POLICY_LINKS.map((policy) => <Link key={policy.href} href={policy.href}>
        <span className="footer-information-icon" aria-hidden="true"><Icon name={policy.icon} size={30} /></span>
        <span>{policy.label}<small>Em revisão jurídica</small></span>
        <strong aria-hidden="true"><Icon name="arrow-right" size={21} /></strong>
      </Link>)}
    </nav>
  </section>;
}
