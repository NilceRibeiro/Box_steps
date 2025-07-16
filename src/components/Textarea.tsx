import './Textarea.css';
interface TextareaProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  colunas?: number;
  ehExpandivel?: boolean;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  placeholder,
  value,
  onChange,
  colunas = 30,
  ehExpandivel = false,
}) => (
  <div style={{ marginBottom: 16 }}>
    <label style={{ display: 'block', marginBottom: 4, fontFamily: "arial" }}>{label}</label>
    <textarea
      placeholder={placeholder}
      value={value}
      rows={5}
      onChange={(e) => onChange(e.target.value)}
      cols={colunas}
      style={{ width: '96%', padding: 8, borderRadius: 4, border: '1px solid #ccc', marginTop: 4, resize: ehExpandivel ? 'both' : 'none' }}

    />
  </div>
);
