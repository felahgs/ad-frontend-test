import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("should render properly", async () => {
    render(<Footer />);

    const text = await screen.findByText("Footer");

    expect(text).toBeInTheDocument();
  });
});
