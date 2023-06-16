import { API_URL, API_KEY } from "@config/index";
import { GifsResponse } from "@/interfaces/giphy/gifs";

export const getGifByKeyword = (
  keyword: string,
  offset: number = 0,
  limit: number = 10
): Promise<GifsResponse | null> => {
  return fetch(
    `${API_URL}gifs/search?api_key=${API_KEY}&q=${keyword}&offset=${
      offset * limit
    }&limit=${limit}`
  )
    .then((respose) => respose.json())
    .then((data) => data);
};

export const getGifByID = (id: string): Promise<GifsResponse> => {
  return fetch(`${API_URL}gifs?api_key=${API_KEY}&ids=${id}`)
    .then((respose) => respose.json())
    .then((data) => data);
};
