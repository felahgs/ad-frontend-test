// Loader.test.js
import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader component", () => {
  it("renders the loader element", () => {
    render(<Loader />);

    const loader = screen.getByRole("status");
    expect(loader).toBeInTheDocument();

    const svg = screen.getByRole("status").querySelector("svg");
    expect(svg).toHaveClass("w-8");
    expect(svg).toHaveClass("h-8");
  });

  it('contains a "Loading..." message for accessibility', () => {
    render(<Loader />);

    const srText = screen.getByText(/loading/i);
    expect(srText).toBeInTheDocument();
  });
});
