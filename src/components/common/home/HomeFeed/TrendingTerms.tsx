import TermsList from "./TermsList";
import useTrendingSearches from "@hooks/useTrendingSearches";
function TrendingTerms() {
  const { terms, error } = useTrendingSearches();

  if (error) return <span className="alert">{error}</span>;

  return (
    <section className="Home__searches">
      <TermsList terms={terms} />
    </section>
  );
}

export default TrendingTerms;
