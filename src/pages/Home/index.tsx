import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Categories, HomeFeed } from "@components/common";

function Home() {
  return (
    <>
      <div className="section">
        <HomeFeed />
      </div>

      <div className="section">
        <LazyLoadComponent useIntersectionObserver threshold={0}>
          <Categories />
        </LazyLoadComponent>
      </div>
    </>
  );
}

export default Home;
