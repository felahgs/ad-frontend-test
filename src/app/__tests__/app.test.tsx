/* eslint-disable @next/next/no-img-element */
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useRouter } from "next/navigation";

import { useGetGames } from "@/hooks/useGetGames";
import userEvent from "@testing-library/user-event";

import HomeView from "../home";
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(() => new URLSearchParams()),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img alt="mock image" {...props} />,
}));

jest.mock("@/hooks/useGetGames", () => ({
  useGetGames: jest.fn(),
}));

describe("HomeView Component", () => {
  let mockPush: jest.Mock;

  beforeEach(() => {
    mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useGetGames as jest.Mock).mockReturnValue({
      data: {
        games: [
          {
            id: "1",
            name: "Game 1",
            genre: "Action",
            price: "$10",
            isNew: true,
            image: "game1.jpg",
          },
          {
            id: "2",
            name: "Game 2",
            genre: "Adventure",
            price: "$15",
            isNew: false,
            image: "game2.jpg",
          },
        ],
        availableFilters: ["Action", "Adventure"],
        currentPage: 1,
        totalPages: 2,
      },
      loading: false,
      error: null,
      fetch: jest.fn(),
    });
  });

  it("should render the header and games list", async () => {
    render(<HomeView />);

    expect(screen.getByText("Top Sellers")).toBeInTheDocument();
    expect(screen.getByText("Genre")).toBeInTheDocument();

    expect(screen.getByText("Game 1")).toBeInTheDocument();
    expect(screen.getByText("Game 2")).toBeInTheDocument();
  });

  it("should render loading when fetching games", async () => {
    (useGetGames as jest.Mock).mockReturnValue({
      data: null,
      loading: true,
      error: null,
      fetch: jest.fn(),
    });

    render(<HomeView />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it('should show the "See More" button and handle click', async () => {
    const mockFetch = jest.fn(() => ({
      games: [
        {
          id: "3",
          name: "Game 3",
          genre: "RPG",
          price: "$20",
          isNew: true,
          image: "game3.jpg",
        },
      ],
    }));

    (useGetGames as jest.Mock).mockReturnValue({
      data: {
        games: [
          {
            id: "1",
            name: "Game 1",
            genre: "Action",
            price: "$10",
            isNew: true,
            image: "game1.jpg",
          },
        ],
        availableFilters: ["Action", "Adventure"],
        currentPage: 1,
        totalPages: 2,
      },
      loading: false,
      error: null,
      fetch: mockFetch,
    });

    render(<HomeView />);

    const seeMoreButton = screen.getByText("SEE MORE");
    expect(seeMoreButton).toBeInTheDocument();

    userEvent.click(seeMoreButton);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith({ page: 2, genre: "" });
    });
  });

  it("should update genre and fetch games when changed", async () => {
    const mockFetch = jest.fn(() => ({
      games: [
        {
          id: "1",
          name: "New Game 1",
          genre: "Action",
          price: "$20",
          isNew: true,
          image: "newgame1.jpg",
        },
      ],
    }));

    (useGetGames as jest.Mock).mockReturnValue({
      data: {
        games: [
          {
            id: "1",
            name: "Game 1",
            genre: "Action",
            price: "$10",
            isNew: true,
            image: "game1.jpg",
          },
        ],
        availableFilters: ["Action", "Adventure"],
        currentPage: 1,
        totalPages: 2,
      },
      loading: false,
      error: null,
      fetch: mockFetch,
    });

    render(<HomeView />);

    // Check if genre dropdown is rendered
    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "Adventure" } });

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith({ page: 1, genre: "Adventure" });
    });
  });

  it("should handle empty game results", async () => {
    (useGetGames as jest.Mock).mockReturnValue({
      data: {
        games: [],
        availableFilters: ["Action", "Adventure"],
        currentPage: 1,
        totalPages: 1,
      },
      loading: false,
      error: null,
      fetch: jest.fn(),
    });

    render(<HomeView />);

    expect(screen.getByText("Oops! No Games Found")).toBeInTheDocument();
  });
});
