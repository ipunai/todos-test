import { type SelectProps } from "./Select.types";
import "./Select.scss";
import { Popover } from "../Popover/Popover";
import { useState, type MouseEvent } from "react";

export const Select = ({ defaultValue, options, onChange }: SelectProps) => {
  const [value, setValue] = useState(defaultValue);
  const selected = options.find((v) => v.value === value);

  const selectOption = (value: string) => {
    setValue(value);
    onChange?.(value);
  };

  return (
    <div className="select-component">
      <Popover
        parent={
          <>
            <div className="select-component__parent">{selected?.text}</div>
          </>
        }
        popover={
          <>
            <div className="select-component__popover">
              {options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => selectOption(option.value)}
                  className="select-component__popover-option"
                >
                  {option.text}
                </div>
              ))}
            </div>
          </>
        }
      />
    </div>
  );
};
