"use server";

import { GamesQueryParams, GamesResponse, getGames } from "@/services/games";

export async function getGamesAction(
  queryParams?: GamesQueryParams,
): Promise<GamesResponse> {
  return getGames(queryParams);
}
