import { API_KEY, API_URL } from '../config'
import { GifsResponse } from '../interfaces/response/gifs'

export const getGifByKeyword = (
  keyword: string,
  offest: number = 0,
  limit: number = 10
): Promise<GifsResponse | null> => {
  return fetch(
    `${API_URL}gifs/search?api_key=${API_KEY}&q=${keyword}&offset=${offest}&limit=${limit}`
  )
    .then(respose => respose.json())
    .then(data => data)
}
