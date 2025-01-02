import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CheckoutBox from "./CheckoutBox";

describe("CheckoutBox", () => {
  it("should render properly", async () => {
    render(<CheckoutBox />);

    const text = await screen.findByText("CheckoutBox");

    expect(text).toBeInTheDocument();
  });
});
