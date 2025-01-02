import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  const mockedLogo = <span>Logo</span>;
  const mockedNavItems = [
    <a key={0} href="/home">
      Nav Item 1
    </a>,
    <a key={1} href="/about">
      Nav Item 2
    </a>,
    <a key={2} href="/contact">
      Nav Item 3
    </a>,
  ];

  it("should render with a logo", () => {
    render(<Header logo={mockedLogo} />);

    const text = screen.getByText("Logo");

    expect(text).toBeInTheDocument();
  });

  it("should render with custom nav icons", () => {
    render(<Header logo={mockedLogo} navItems={mockedNavItems} />);

    const navItems = screen.getAllByRole("link");

    expect(navItems).toHaveLength(3);

    expect(navItems[0]).toHaveTextContent("Nav Item 1");
    expect(navItems[0]).toHaveAttribute("href", "/home");

    expect(navItems[1]).toHaveTextContent("Nav Item 2");
    expect(navItems[1]).toHaveAttribute("href", "/about");

    expect(navItems[2]).toHaveTextContent("Nav Item 3");
    expect(navItems[2]).toHaveAttribute("href", "/contact");
  });
});
