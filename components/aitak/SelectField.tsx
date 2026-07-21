import Icon, { type IconName } from "./Icon";

type Props = {
  id: string;
  label: string;
  icon?: IconName;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

export default function SelectField({ id, label, icon, value, options, onChange }: Props) {
  return <div className="pre-form-field">
    <label htmlFor={id}>{label}</label>
    <div className={`pre-form-control pre-form-select${icon ? " has-icon" : ""}`}>
      {icon && <Icon name={icon} size={24} />}
      <select id={id} name={id} value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">Selecione uma opção</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  </div>;
}
