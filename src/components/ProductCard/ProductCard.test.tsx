/* eslint-disable @next/next/no-img-element */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import userEvent from "@testing-library/user-event";

describe("ProductCard", () => {
  const mockedProps = {
    genre: "Action",
    title: "Product Title",
    price: 50,
    img: <img src="#" alt="image" className="bg-blue-300 w-full h-full" />,
  };

  it("should render properly with all product information", () => {
    render(<ProductCard {...mockedProps} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("Product Title")).toBeInTheDocument();
    expect(screen.getByText("$50")).toBeInTheDocument();
    expect(screen.queryByText("New")).not.toBeInTheDocument();
  });

  it("should render the card with a 'new' tag", () => {
    render(<ProductCard {...mockedProps} isNew />);

    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("should call the onAddItem method when clicking the button", async () => {
    const mockedOnAddItem = jest.fn();

    render(<ProductCard {...mockedProps} onAddItem={mockedOnAddItem} />);

    const button = screen.getByRole("button", {
      name: "ADD TO CART",
    });

    await userEvent.click(button);

    expect(mockedOnAddItem).toHaveBeenCalledTimes(1);
  });
});
