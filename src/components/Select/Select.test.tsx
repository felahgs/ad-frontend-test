import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Select from "./Select";

describe("Select", () => {
  it("should render properly with options", () => {
    render(
      <Select>
        <option value="opt 1">Opt 1</option>
        <option value="opt 2">Opt 2</option>
      </Select>,
    );

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    const option1 = screen.getByText("Opt 1");
    const option2 = screen.getByText("Opt 2");

    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
  });

  it("should allow selection of an option", async () => {
    render(
      <Select>
        <option value="opt 1">Opt 1</option>
        <option value="opt 2">Opt 2</option>
      </Select>,
    );

    const selectElement = screen.getByRole("combobox") as HTMLSelectElement;
    fireEvent.change(selectElement, { target: { value: "opt 1" } });

    expect(selectElement.value).toBe("opt 1");
  });
});
