import useTrendingSearches from "@hooks/useTrendingSearches";
import { Link } from "wouter";
import Lines from "./placeholders/Lines";

// TODO: Use the hook useTrending and handle erros and this file

function TrendingTerms() {
  const { terms, loading, error } = useTrendingSearches();

  if (loading) return <Lines />;

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
