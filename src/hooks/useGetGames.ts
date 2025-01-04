import { useState, useEffect, useCallback } from "react";
import { GamesQueryParams, GamesResponse } from "@/services/games";
import { getGamesAction } from "./actions";

interface Options {
  autoFetch?: boolean;
  onSuccess?: (data: GamesResponse) => void;
  onFailure?: (error: Error) => void;
}

export function useGetGames(queryParams?: GamesQueryParams, options?: Options) {
  const [data, setData] = useState<GamesResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const {
    autoFetch = true,
    onSuccess = (data: GamesResponse) => null,
    onFailure = (error: Error) => null,
  } = options || {};

  const fetchGames = useCallback(
    async (queryParams?: GamesQueryParams, options?: Options) => {
      setLoading(true);
      setError(null);

      try {
        const data = await getGamesAction(queryParams);
        setData(data);
        onSuccess(data);
        return data;
      } catch (error: any) {
        setError(error.message || "Failed to fetch games");
        onFailure(error);
      } finally {
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(() => {
    autoFetch && fetchGames(queryParams, options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoFetch]);

  return { data, loading, error, fetch: fetchGames };
}
