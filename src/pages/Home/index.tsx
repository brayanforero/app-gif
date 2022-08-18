import './index.css'

import { Form, Grid, Logo, TrendingTerms } from '../../components'
import { useCategories, useTrendingSearches } from '../../hooks'
import Lines from '../../components/placeholders/Lines'
import { Link } from 'wouter'
import Card from '../../components/placeholders/Card'

function Home() {
  const {
    terms,
    loading: loadTerms,
    error: hasErrorTerms,
  } = useTrendingSearches()
  const {
    categories,
    loading: loadCategories,
    error: hasErrorCategories,
  } = useCategories()
  return (
    <section className="Home">
      <Logo />
      <p className="Home__subtitle gradient-purple">Explore a world of gifs</p>
      <Form />

      {hasErrorTerms && <span className="alert">{hasErrorTerms}</span>}

      {loadTerms ? <Lines /> : <TrendingTerms terms={terms} />}

      <Grid name="Categories">
        {loadCategories ? (
          <>
            <Card />
            <Card />
            <Card />
          </>
        ) : (
          <>
            {categories?.map(c => (
              <div className="Gif" key={c.name}>
                <img
                  loading="lazy"
                  decoding="async"
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
        )}
      </Grid>
    </section>
  )
}

export default Home
