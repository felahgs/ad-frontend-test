import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";

describe("ProductCard", () => {
  it("should render properly", async () => {
    render(<ProductCard />);

    const text = await screen.findByText("ProductCard");

    expect(text).toBeInTheDocument();
  });
});
