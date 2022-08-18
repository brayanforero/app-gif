import { Link } from 'wouter'

interface Props {
  terms: string[]
}

function TrendingTerms({ terms }: Props) {
  return (
    <div className="Home__searches">
      {terms.map(t => (
        <Link key={t} href={`/search/${t}`} className="active">
          {t}
        </Link>
      ))}
    </div>
  )
}

export default TrendingTerms
