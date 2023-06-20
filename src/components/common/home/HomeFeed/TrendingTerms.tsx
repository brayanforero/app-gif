import { Lines } from "@components/shared";
import TermsList from "./TermsList";
import useTrendingSearches from "@hooks/useTrendingSearches";
function TrendingTerms() {
  const { terms, error, loading } = useTrendingSearches();

  if (error) return <span className="alert">{error}</span>;
  if (loading) return <Lines />;
  return (
    <section className="Home__searches">
      <TermsList terms={terms} />
    </section>
  );
}

export default TrendingTerms;
