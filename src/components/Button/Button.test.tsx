import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
  it("should render properly", () => {
    render(<Button />);

    const button = screen.getByRole("button", { name: "Button" });

    expect(button).toBeInTheDocument();
  });

  it("should call onClick when clicking the button", async () => {
    const mockedOnClick = jest.fn();
    render(<Button onClick={mockedOnClick} />);

    const button = screen.getByRole("button", { name: "Button" });
    await userEvent.click(button);

    expect(mockedOnClick).toHaveBeenCalled();
  });
});
