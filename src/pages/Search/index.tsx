import { Link } from 'wouter'
import { Form, Logo } from '../../components'
import './index.css'
interface Props {
  params: { keyword: string }
}

function Search({ params }: Props) {
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

      <div className="Search__grid">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </section>
  )
}

export default Search
