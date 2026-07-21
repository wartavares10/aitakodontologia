import { FOOTER_CONTACTS } from "./footer";
import Icon from "./Icon";

export default function FooterContact() {
  return <section className="footer-column footer-contact" aria-labelledby="footer-contact-title">
    <h2 id="footer-contact-title">Contato</h2>
    <address>
      {FOOTER_CONTACTS.map((contact) => <a key={contact.label} href={contact.href} target={contact.external ? "_blank" : undefined} rel={contact.external ? "noopener noreferrer" : undefined} aria-label={`${contact.label}: ${contact.value}`}>
        <span className="footer-contact-icon" aria-hidden="true"><Icon name={contact.icon} size={30} /></span>
        <span><small>{contact.label}</small><strong>{contact.value}</strong></span>
      </a>)}
    </address>
  </section>;
}
