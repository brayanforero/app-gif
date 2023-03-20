import { Categories } from "@components/common/categories";
import { HomeFeed } from "@components/common/home";

function Home() {
  return (
    <>
      <div className="section">
        <HomeFeed />
      </div>
      <div className="section">
        <Categories />
      </div>
    </>
  );
}

export default Home;
