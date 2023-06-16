import { API_URL, API_KEY } from "@config/index";
import { CategoriesResponse } from "@/interfaces/giphy/gifs";

export const getCategories = (): Promise<CategoriesResponse | null> => {
  return fetch(`${API_URL}gifs/categories?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data: CategoriesResponse) => data);
};
