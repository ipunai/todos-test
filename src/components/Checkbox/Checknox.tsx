import "./Checkbox.scss";
import { type CheckboxProps } from "./Checkbox.types";
import { type ReactElement } from "react";

export const Checkbox = ({
  checked,
  onChange,
}: CheckboxProps): ReactElement => {
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
