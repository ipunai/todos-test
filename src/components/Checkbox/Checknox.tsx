import "./Checkbox.scss";
import { type CheckboxProps } from "./Checkbox.types";

export const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <label className="checkbox-component">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
      />
      <span className="checkmark"></span>
    </label>
  );
};
