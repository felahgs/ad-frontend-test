import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("should render properly", () => {
    render(<Footer>Footer</Footer>);

    const text = screen.getByText("Footer");

    expect(text).toBeInTheDocument();
  });
});
