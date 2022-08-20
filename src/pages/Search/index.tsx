import { useCallback, useEffect } from 'react'
import debounce from 'just-debounce-it'
import { Link } from 'wouter'
import { Form, Grid, Logo } from '../../components'
import InfiniteScroll from '../../components/InfiniteScroll'
import { useGifs } from './../../hooks'
import './index.css'
interface Props {
  params: { keyword: string }
}

function Search({ params }: Props) {
  const { gifs, loading, page, pages, setPage } = useGifs(params.keyword)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const handlerNextPage = useCallback(
    debounce(() => setPage(prev => prev + 1), 800),
    []
  )
  return (
    <section className="Search">
      <Link href="/" className="active">
        Regresar
      </Link>
      <div className="Search__interacions-search">
        <Logo size="small" />
        <Form />
      </div>
      <p className="Search__show-result">
        Your results of: <span>{decodeURI(params.keyword)}</span>
      </p>
      <InfiniteScroll
        dataLength={gifs.length}
        hasMore={pages > page}
        handlerEndSection={handlerNextPage}
        margin={68}
        isLoading={loading}
      >
        <Grid items={gifs} />
      </InfiniteScroll>
    </section>
  )
}

export default Search
