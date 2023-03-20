import { Form, Logo, TrendingTerms } from "../../components";
import "./index.css";
// TODO: Load all of categories by lazy load and handle error in its file

function Home() {
  return (
    <>
      <section className="Home">
        <Logo size="small" />
        <p className="Home__subtitle gradient-purple">
          Explore a world of gifs
        </p>
        <Form />
        <TrendingTerms />
      </section>
    </>
  );
}

export default Home;
