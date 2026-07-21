import Icon, { type IconName } from "./Icon";
const items: Array<{ key: string; icon: IconName; lilac?: boolean; a: string; b?: string }> = [
  { key: "one", icon: "diamond", a: "Implantes e", b: "próteses" },
  { key: "two", icon: "target", lilac: true, a: "Ortodontia e", b: "alinhadores" },
  { key: "three", icon: "leaf", a: "Prevenção e", b: "estética" },
];
export default function HeroBenefits() {
  return <aside className="hero-benefits" aria-label="Áreas de atendimento da Aitak Odontologia">
    <svg className="benefit-connector" viewBox="0 0 80 380" aria-hidden="true"><defs><linearGradient id="benefit-gradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#78b992"/><stop offset=".52" stopColor="#a99dd3"/><stop offset="1" stopColor="#6eb88d"/></linearGradient></defs><path d="M18 4 C62 90, 4 142, 31 208 C53 262, 9 312, 37 376"/></svg>
    {items.map(item => <div key={item.key} className={`benefit-item${item.lilac ? " is-lilac" : ""}`} data-benefit={item.key}><span className="benefit-icon"><Icon name={item.icon}/></span><span className="benefit-text"><strong>{item.a}</strong>{item.b && <span>{item.b}</span>}</span></div>)}
  </aside>;
}
