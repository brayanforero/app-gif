import useTrendingSearches from "@hooks/useTrendingSearches";
import { Link } from "wouter";
function TrendingTerms() {
  const { terms, error } = useTrendingSearches();

  return (
    <section className="Home__searches">
      {!error && <TermsList terms={terms} />}
      {error && <span className="alert">{error}</span>}
    </section>
  );
}

function TermsList({ terms }: { terms: string[] }) {
  return (
    <>
      {terms.map((t) => (
        <Link key={t} href={`/search/${t}`} className="active">
          {t}
        </Link>
      ))}
    </>
  );
}

export default TrendingTerms;
