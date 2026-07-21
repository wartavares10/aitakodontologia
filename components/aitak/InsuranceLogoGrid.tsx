import InsuranceLogoCard from "./InsuranceLogoCard";
import { INSURANCE_PROVIDERS } from "./insurance";

export default function InsuranceLogoGrid() {
  return <ul className="insurance-logo-grid" aria-label="Convênios odontológicos atendidos">
    {INSURANCE_PROVIDERS.map((provider, index) => <InsuranceLogoCard key={provider.name} provider={provider} index={index} />)}
  </ul>;
}
