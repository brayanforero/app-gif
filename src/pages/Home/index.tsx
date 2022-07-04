import './index.css'

import { Form, Grid, Logo } from '../../components'
import { useTrendingSearches } from '../../hooks'
import { Link } from 'wouter'
function Home() {
  const { loading, error, terms } = useTrendingSearches()
  return (
    <section className="Home">
      <Logo />
      <p className="Home__subtitle">Explore a world of gifs</p>
      <Form />
      <div className="Home__searches">
        {terms.map(t => (
          <Link key={t} href={`/search/${t}`} className="active">
            {t}
          </Link>
        ))}
      </div>
      <Grid name="Last Search" />
    </section>
  )
}

export default Home
