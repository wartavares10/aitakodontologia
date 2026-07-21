import { FOOTER_NAVIGATION } from "./footer";
import Icon from "./Icon";

export default function FooterNavigation() {
  return <nav className="footer-column footer-navigation" aria-label="Navegação do rodapé">
    <h2>Navegação</h2>
    <ul>
      {FOOTER_NAVIGATION.map((item) => <li key={item.href}>
        <a href={item.href}><span>{item.label}</span><strong aria-hidden="true"><Icon name="arrow-right" size={21} /></strong></a>
      </li>)}
    </ul>
  </nav>;
}
