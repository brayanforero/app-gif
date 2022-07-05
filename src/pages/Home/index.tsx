import './index.css'

import { Form, Grid, Logo } from '../../components'
import { useCategories, useTrendingSearches } from '../../hooks'
import { Link } from 'wouter'
function Home() {
  const { terms } = useTrendingSearches()
  const { categories } = useCategories()
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

      <Grid name="Categories">
        <>
          {categories?.map(c => (
            <div className="Gif" key={c.name}>
              <img
                loading="lazy"
                className="Gif__image"
                src={c.image}
                alt={c.name}
              />
              <Link to={`/search/${c.name}`} className="Gif__name">
                {c.name}
              </Link>
            </div>
          ))}
        </>
      </Grid>
    </section>
  )
}

export default Home
