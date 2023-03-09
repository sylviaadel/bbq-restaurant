import { validText } from "../../scripts/tests/addItem";

export default function TextBox({ label, value, onChange, error }) {
  return (
    <label>
      <span>{label}</span>
      <input type="text" value={value} onChange={onChange} />
      {validText(value) ? "" : error}
    </label>
  );
}
