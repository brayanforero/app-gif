import debounce from 'just-debounce-it'
import { useCallback } from 'react'
import { Link } from 'wouter'
import { Form, Grid, Logo } from '../../components'
import { useGifs } from './../../hooks'
import './index.css'
interface Props {
  params: { keyword: string }
}

function Search({ params }: Props) {
  const { gifs, loading, error, page, pages, setPage } = useGifs(params.keyword)

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

      {loading && <h6>Loading...</h6>}
      <Grid items={gifs} />

      <span>
        Page {page} of {pages}
      </span>
      <button disabled={loading} onClick={handlerNextPage}>
        Nex Page
      </button>
    </section>
  )
}

export default Search
