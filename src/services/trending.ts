import { API_KEY, API_URL } from "../config";
import { TrendingSearchApi } from "../interfaces/giphy/gifs";

export const getTrendingSearches = (): Promise<null | TrendingSearchApi> => {
  return fetch(`${API_URL}trending/searches?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data: TrendingSearchApi) => data);
};
