import { Logo } from "@components/shared";
import Form from "@components/Form";
import TrendingTerms from "@components/TrendingTerms";
import "./index.css";

function HomeFeed() {
  return (
    <section className="Home">
      <Logo size="small" />
      <p className="Home__subtitle gradient-purple">Explore a world of gifs</p>
      <Form />
      <TrendingTerms />
    </section>
  );
}

export default HomeFeed;
