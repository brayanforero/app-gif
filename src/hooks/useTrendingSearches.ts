import { useEffect, useState } from 'react'
import { getTrendingSearches } from '../services/trending'

function useTrendingSearches() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [terms, setTerms] = useState<string[]>([])

  useEffect(() => {
    setError(null)
    setLoading(true)
    getTrendingSearches()
      .then(data => {
        if (data) setTerms(data.data)
      })
      .catch(_err => {
        setError('Fetching data error')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return {
    loading,
    terms,
    error,
  }
}

export default useTrendingSearches
