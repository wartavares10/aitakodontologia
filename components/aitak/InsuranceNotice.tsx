import Icon from "./Icon";

export default function InsuranceNotice() {
  return <aside className="insurance-notice" aria-label="Informação sobre cobertura dos convênios">
    <span className="insurance-info-icon" aria-hidden="true"><Icon name="info" size={22} /></span>
    <p>A cobertura e os procedimentos disponíveis variam conforme o plano contratado.</p>
    <strong>Consulte nossa equipe para confirmar as condições do seu convênio.</strong>
  </aside>;
}
