import { useEffect, useRef, useState } from "react";

import Gif from "../interfaces/app/gif";
import { getGifByKeyword } from "../services/gif";

function useGifs(keyword: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [page, setPage] = useState(1);
  const totalPages = useRef(1);

  useEffect(() => {
    setPage(1);
    setGifs([]);
  }, [keyword]);

  useEffect(() => {
    setLoading(true);
    const offset = page === 1 ? 0 : page;
    getGifByKeyword(keyword, offset)
      .then((response) => {
        if (!response) return;

        totalPages.current =
          Math.ceil(response.pagination.total_count / 10) || 0;
        const gifsFormated: Gif[] = response.data.map((g) => {
          const { id, title } = g;
          const { fixed_height_downsampled, original } = g.images;

          return {
            id,
            name: title,
            image: {
              hd: original.url,
              normal: fixed_height_downsampled.url,
            },
          };
        });

        if (page > 1) setGifs((prev) => prev.concat(gifsFormated));
        else setGifs(gifsFormated);
      })
      .catch((_err) => {
        setError("Falien in fecth gifs");
      })
      .finally(() => setLoading(false));
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [keyword]);

  return {
    loading,
    gifs,
    error,
    page,
    setPage,
    pages: totalPages.current,
  };
}

export default useGifs;
