type Option = {
  value: string;
  text: string;
};
export type SelectProps = {
  defaultValue: string;
  options: Option[];
  onChange?: (value: string) => void;
};
