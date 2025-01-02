import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Select from "./Select";

describe("Select", () => {
  it("should render properly", async () => {
    render(<Select />);

    const text = await screen.findByText("Select");

    expect(text).toBeInTheDocument();
  });
});
