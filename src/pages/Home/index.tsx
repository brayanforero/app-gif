import { HomeFeed, Categories } from "@components/common";

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
