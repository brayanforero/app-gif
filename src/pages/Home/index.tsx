import './index.css'

import { Form, Logo } from '../../components'
function Home() {
  return (
    <section className="home">
      <Logo />
      <p className="home__subtitle">Explore a world of gifs</p>
      <Form />
    </section>
  )
}

export default Home
