import { useCallback } from "react";
import debounce from "just-debounce-it";
import { Link } from "wouter";
import { useGifs } from "./../../hooks";
import "./index.css";
import { BallTriangle } from "react-loader-spinner";
import { Logo, Form, InfiniteScroll } from "@components/shared";
import Grid from "@components/Grid";
interface Props {
  params: { keyword: string };
}

function Search({ params }: Props) {
  const { gifs, loading, page, pages, setPage } = useGifs(params.keyword);

  const handlerNextPage = useCallback(
    debounce(() => setPage((prev) => prev + 1), 800),
    []
  );
  return (
    <section className="Search">
      <Link href="/" className="active">
        Regresar
      </Link>
      <div className="Search__interacions-search">
        <Logo size="small" />
        <Form />
      </div>
      <p className="Search__show-result">
        Your results of: <span>{decodeURI(params.keyword)}</span>
      </p>
      <InfiniteScroll
        dataLength={gifs.length}
        hasMore={pages > page}
        handlerEndSection={handlerNextPage}
        threshold={0}
        isLoading={loading}
        loader={<BallTriangle color="#5747eb" height={80} width={80} />}
      >
        <Grid items={gifs} />
      </InfiniteScroll>
    </section>
  );
}

export default Search;
