import { HomeFeed, Categories } from "@components/common";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function Home() {
  return (
    <>
      <div className="section">
        <HomeFeed />
      </div>
      <LazyLoadComponent useIntersectionObserver>
        <div className="section">
          <Categories />
        </div>
      </LazyLoadComponent>
    </>
  );
}

export default Home;
