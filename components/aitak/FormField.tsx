import Icon, { type IconName } from "./Icon";

type Props = {
  id: string;
  label: string;
  type: "text" | "tel" | "email";
  icon: IconName;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  autoComplete: string;
  placeholder?: string;
  inputMode?: "text" | "tel" | "email";
};

export default function FormField({ id, label, type, icon, value, onChange, error, required, maxLength, minLength, autoComplete, placeholder, inputMode }: Props) {
  const errorId = `${id}-error`;
  return <div className={`pre-form-field${error ? " has-error" : ""}`}>
    <label htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label>
    <div className="pre-form-control">
      <Icon name={icon} size={24} />
      <input id={id} name={id} type={type} value={value} onChange={(event) => onChange(event.target.value)} required={required} maxLength={maxLength} minLength={minLength} autoComplete={autoComplete} placeholder={placeholder} inputMode={inputMode} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} />
    </div>
    {error && <p id={errorId} className="pre-form-error">{error}</p>}
  </div>;
}
