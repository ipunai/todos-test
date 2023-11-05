import { type SelectProps } from "./Select.types";
import "./Select.scss";
import { Popover } from "../Popover/Popover";
import { useState } from "react";
import { ChevDownIcon } from "./ChevDownIcon";
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
          <div className="select-component__parent">
            <span>{selected?.text}</span>

            <ChevDownIcon />
          </div>
        }
        popover={
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
        }
      />
    </div>
  );
};
