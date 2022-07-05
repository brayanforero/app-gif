import { useEffect, useState } from 'react'

import Gif from '../interfaces/app/gif'
import { getGifByKeyword } from '../services/gif'

function useSingleGif(keyword: string) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [gifs, setGifs] = useState<Gif[]>([])

  useEffect(() => {
    setLoading(true)
    getGifByKeyword(keyword)
      .then(response => {
        if (!response) return

        const gifsFormated: Gif[] = response.data.map(g => {
          const { id, title } = g
          const { downsized, original } = g.images

          return {
            id,
            name: title,
            image: {
              hd: original.url,
              normal: downsized.url,
            },
          }
        })

        console.log(gifsFormated)

        setGifs(prevState => prevState.concat(gifsFormated))
      })
      .catch(_err => {
        setError('Falien in fecth gifs')
      })
      .finally(() => setLoading(false))
  }, [keyword])

  return {
    loading,
    gifs,
    error,
  }
}

export default useSingleGif
