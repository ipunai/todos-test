import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "./Select";

const options = [
  { value: "option1", text: "Option 1" },
  { value: "option2", text: "Option 2" },
];

describe("<Select />", () => {
  it("should render Select component with default value selected", () => {
    render(<Select defaultValue="option1" options={options} />);
    const comboBox = screen.getByRole("combobox");
    expect(comboBox.textContent).toBe("Option 1");
  });

  it("should open options when the combobox is clicked", () => {
    render(<Select defaultValue="option1" options={options} />);
    const user = userEvent.setup();
    const select = screen.getByRole("combobox");
    user.click(select);
    const optionNodes = screen.getAllByRole("option");

    options.forEach((option, index) => {
      expect(optionNodes[index].textContent).toBe(option.text);
    });
  });

  it("should call onChange when option is selected", async () => {
    const user = userEvent.setup();
    const mockOnChange = vi.fn();

    render(
      <Select
        defaultValue="option1"
        options={options}
        onChange={mockOnChange}
      />
    );
    const option2 = screen.getByLabelText("option2");

    await user.click(option2);

    expect(mockOnChange).toHaveBeenCalledWith("option2");
  });
});
