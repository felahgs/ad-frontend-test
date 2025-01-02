import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("should render properly", async () => {
    render(<Header />);

    const text = await screen.findByText("Header");

    expect(text).toBeInTheDocument();
  });
});
