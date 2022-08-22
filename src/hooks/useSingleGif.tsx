import { useEffect, useState } from 'react'
import Gif from '../interfaces/app/gif'
import { getGifByID } from '../services/gif'

function useSingleGif(id: string) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [gif, setGif] = useState<Gif>()

  useEffect(() => {
    setLoading(true)

    getGifByID(id)
      .then(res => {
        const [gifFromApi] = res.data
        const { id, title, images } = gifFromApi

        setGif({
          id,
          name: title,
          image: { normal: images.downsized.url, hd: images.original.url },
        })
      })
      .catch(_e => {
        setError('Not Found Gif')
      })
      .finally(() => setLoading(false))
  }, [])

  return {
    loading,
    gif,
    error,
  }
}

export default useSingleGif
