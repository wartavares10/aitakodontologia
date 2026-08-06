import Icon, { type IconName } from "./Icon";

type Props = {
  id: string;
  label: string;
  icon: IconName;
  value: string;
  onChange: (value: string) => void;
};

export default function TextareaField({ id, label, icon, value, onChange }: Props) {
  const counterId = `${id}-counter`;
  return <div className="pre-form-field pre-form-textarea-field">
    <label htmlFor={id}>{label}</label>
    <div className="pre-form-control pre-form-textarea">
      <Icon name={icon} size={24} />
      <textarea id={id} name={id} value={value} onChange={(event) => onChange(event.target.value)} maxLength={300} rows={4} placeholder="Conte brevemente qual atendimento ou informação você procura." aria-describedby={counterId} />
      <span id={counterId} className="pre-form-counter" aria-live="polite">{value.length}/300</span>
    </div>
  </div>;
}
