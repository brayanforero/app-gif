import { Link } from 'wouter'
import { Form, Grid, Logo } from '../../components'
import { useGifs } from './../../hooks'
import './index.css'
interface Props {
  params: { keyword: string }
}

function Search({ params }: Props) {
  const { gifs, loading, error } = useGifs(params.keyword)

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
    </section>
  )
}

export default Search
