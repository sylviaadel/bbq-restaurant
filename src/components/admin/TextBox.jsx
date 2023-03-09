export default function TextBox({
  label,
  value,
  onChange,
  validate,
  error,
  title,
}) {
  return (
    <label>
      <span>{label}</span>
      <input
        type={title ? "text" : "number"}
        value={value}
        onChange={onChange}
      />
      {validate ? "" : error}
    </label>
  );
}
