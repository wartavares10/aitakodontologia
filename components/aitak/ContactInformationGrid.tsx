import { LOCATION_CONTACTS, type ContactItemData } from "./location";
import Icon from "./Icon";

function ContactContent({ item }: { item: ContactItemData }) {
  return <>
    <span className="location-contact-icon">
      <Icon name={item.icon} size={27} />
    </span>
    <span className="location-contact-copy">
      <strong>{item.label}</strong>
      {item.id === "address" ? <address>{item.value}</address> : <span>{item.value}</span>}
    </span>
    {item.id === "route" && <span className="location-contact-arrow" aria-hidden="true"><Icon name="arrow-right" size={22} /></span>}
  </>;
}

export default function ContactInformationGrid() {
  return <ul className="location-contact-grid" aria-label="Informações de contato da Aitak Odontologia">
    {LOCATION_CONTACTS.map((item) => <li key={item.id} className={`location-contact-item is-${item.id}`}>
      {item.href ? <a href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} aria-label={item.ariaLabel}>
        <ContactContent item={item} />
      </a> : <div><ContactContent item={item} /></div>}
    </li>)}
  </ul>;
}
