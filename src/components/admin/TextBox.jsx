export default function TextBox({ label, value, onChange, validate, error }) {
  return (
    <label>
      <span>{label}</span>
      <input type="text" value={value} onChange={onChange} />
      {validate ? "" : error}
    </label>
  );
}
