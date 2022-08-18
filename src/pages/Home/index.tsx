import './index.css'

import { Form, Grid, Logo } from '../../components'
import { useCategories, useTrendingSearches } from '../../hooks'
import { Link } from 'wouter'
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
      <div className="Home__searches">
        {loadTerms && <h4 className="gradient-purple">Loading Terms...</h4>}
        {hasErrorTerms ? (
          <span className="alert">{hasErrorTerms}</span>
        ) : (
          terms.map(t => (
            <Link key={t} href={`/search/${t}`} className="active">
              {t}
            </Link>
          ))
        )}
      </div>

      {loadCategories && <h4 className="gradient-purple">Loading Terms...</h4>}
      {hasErrorCategories ? (
        <div className="alert">{hasErrorCategories}</div>
      ) : (
        <Grid name="Categories">
          <>
            {categories?.map(c => (
              <div className="Gif" key={c.name}>
                <img
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
        </Grid>
      )}
    </section>
  )
}

export default Home
