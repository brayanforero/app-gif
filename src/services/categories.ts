import { API_KEY, API_URL } from '../config'
import { CategoriesResponse } from '../interfaces/response/gifs'

export const getCategories = (): Promise<CategoriesResponse | null> => {
  return fetch(`${API_URL}gifs/categories?api_key=${API_KEY}`)
    .then(response => response.json())
    .then((data: CategoriesResponse) => data)
}
