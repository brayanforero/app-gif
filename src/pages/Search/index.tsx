import { Form } from '../../components'
import './index.css'
interface Props {
  params: { keyword: string }
}

function Search({ params }: Props) {
  return (
    <section className="Search">
      <Form />
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
