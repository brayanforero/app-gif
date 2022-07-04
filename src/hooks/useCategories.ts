import { useEffect, useState } from 'react'
import Category from '../interfaces/app/categories'
import { getCategories } from '../services/categories'

function useCategories() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    setLoading(true)

    getCategories()
      .then(res => {
        if (!res) return

        const categoriesFormated = res.data.map(c => {
          const { name } = c
          const { downsized } = c.gif.images

          return {
            name,
            image: downsized.url,
          }
        })

        setCategories(categoriesFormated)
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
    categories,
    error,
  }
}

export default useCategories
