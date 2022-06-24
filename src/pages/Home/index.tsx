import './index.css'
import logo from './../../assets/img/logo.svg'
import { Form } from '../../components'
function Home() {
  return (
    <section className="home">
      <picture className="home__picture">
        <img src={logo} alt="mopics brand logo" />
      </picture>

      <p className="home__subtitle">Explore a world of gifs</p>
      <Form />
    </section>
  )
}

export default Home
