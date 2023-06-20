import { useCallback } from "react";
import { FakeGrid, InfiniteScroll } from "@components/shared";
import Grid from "@components/common/gif/Grid";
import useGifs from "@hooks/useGifs";
import debounce from "just-debounce-it";
import "./index.css";
import { BallTriangle } from "react-loader-spinner";

interface Props {
  keyword?: string;
}

function SearchFeed({ keyword = "" }: Props) {
  const keyDecoded = decodeURI(keyword);
  const { gifs, pages, page, loading, error, setPage } = useGifs(keyDecoded);

  const handleNextPage = useCallback(
    debounce(() => {
      setPage((prev) => prev + 1);
    }, 600),
    [keyDecoded]
  );

  if (error) return;

  return (
    <section className="SearchFeed">
      <h2>Your result: {keyDecoded}</h2>
      {error ? (
        <div className="alert">Something has been wrong</div>
      ) : (
        <InfiniteScroll
          dataLength={gifs.length}
          hasMore={page < pages}
          isLoading={loading}
          handlerEndSection={handleNextPage}
          loader={<BallTriangle color="#5747eb" height={80} width={80} />}
        >
          <Grid items={gifs} />
        </InfiniteScroll>
      )}
    </section>
  );
}

export default SearchFeed;
