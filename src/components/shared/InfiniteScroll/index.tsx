import { ReactNode, useEffect, useState } from "react";
import "./index.css";
import useObserver from "@hooks/useObserver";

interface Props {
  dataLength: number;
  hasMore: boolean;
  loader?: ReactNode;
  isLoading: boolean;
  handlerEndSection: () => void;
  children: ReactNode;
  threshold?: number;
}

function InfiniteScroll({
  dataLength = 0,
  hasMore,
  loader = <h5>Loading...</h5>,
  isLoading,
  handlerEndSection,
  threshold = 10,
  children,
}: Props) {
  const [prevData, setPrevData] = useState(dataLength);
  const { elementRef } = useObserver({
    rootMargin: `${threshold}px`,
    callback: handler,
  });

  useEffect(() => {
    if (prevData < dataLength) {
      setPrevData(dataLength);
    }
  }, [dataLength]);

  function handler(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    const [element] = entries;
    const canExecute = element.isIntersecting && hasMore && prevData > 0;
    if (canExecute) handlerEndSection();
    if (!hasMore) observer.disconnect();
  }

  return (
    <div className="InfiniteScroll">
      {children}
      <div
        className={`${
          isLoading
            ? "InfiniteScroll__loader"
            : "InfiniteScroll__loader is--hide"
        }`}
      >
        {loader}
      </div>
      <span ref={elementRef} className="InfiniteScroll__ref"></span>
    </div>
  );
}

export default InfiniteScroll;