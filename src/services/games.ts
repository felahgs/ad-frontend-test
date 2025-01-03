import apiClient from "@/services/api";
import { Game } from "@/types/game";

interface GamesResponse {
  games: Game[];
  availableFilters: string[];
  totalPage: number;
  currentPage: number;
}

export async function getGames(): Promise<GamesResponse> {
  try {
    const response = await apiClient.get("/games ");
    return response.data;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to fetch games", error as Error);
  }
}
