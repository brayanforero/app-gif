import './index.css'

import { Form, Grid, Logo } from '../../components'
function Home() {
  return (
    <section className="Home">
      <Logo />
      <p className="Home__subtitle">Explore a world of gifs</p>
      <Form />
      <Grid name="Last Search" />
    </section>
  )
}

export default Home
