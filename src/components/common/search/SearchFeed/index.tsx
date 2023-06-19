import { useCallback } from "react";
import { FakeGrid, InfiniteScroll } from "@components/shared";
import Grid from "@components/common/gif/Grid";
import useGifs from "@hooks/useGifs";
import debounce from "just-debounce-it";
import "./index.css";

interface Props {
  keyword?: string;
}

function SearchFeed({ keyword = "" }: Props) {
  const keyDecoded = decodeURI(keyword);
  const { gifs, pages, page, loading, setPage } = useGifs(keyDecoded);

  const handleNextPage = useCallback(
    debounce(() => {
      setPage((prev) => prev + 1);
    }, 800),
    [keyDecoded]
  );

  return (
    <section className="SearchFeed">
      <h2>Your result: {keyDecoded}</h2>
      <InfiniteScroll
        dataLength={gifs.length}
        hasMore={page < pages}
        isLoading={loading}
        handlerEndSection={handleNextPage}
        loader={<FakeGrid items={3} />}
      >
        <Grid items={gifs} />
      </InfiniteScroll>
    </section>
  );
}

function Loader() {
  return (
    <div className="SearchFeed">
      <FakeGrid items={6} />
    </div>
  );
}

export default SearchFeed;
