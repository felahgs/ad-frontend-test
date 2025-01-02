import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Text from "./Text";

describe("Text", () => {
  it("should render properly", async () => {
    render(<Text />);

    const text = await screen.findByText("Text");

    expect(text).toBeInTheDocument();
  });
});
