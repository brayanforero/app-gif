import { Suspense, lazy } from "react";
import { Form, Lines, Logo } from "@components/shared";
const TrendingTerms = lazy(() => import("@components/TrendingTerms"));
import "./index.css";

function HomeFeed() {
  return (
    <section className="Home">
      <Logo size="small" />
      <p className="Home__subtitle gradient-purple">Explore a world of gifs</p>
      <Form />
      <Suspense fallback={<Lines />}>
        <TrendingTerms />
      </Suspense>
    </section>
  );
}

export default HomeFeed;
