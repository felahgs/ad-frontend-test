import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../page";

describe("Page", () => {
  it("renders a heading", async () => {
    render(await Page());

    const message = await screen.findByText("Hello, world!");

    expect(message).toBeInTheDocument();
  });
});
