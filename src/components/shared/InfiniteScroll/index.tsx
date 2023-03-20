import { ReactNode, useEffect, useRef, useState } from "react";
import "./index.css";
import useObserver from "@hooks/useObserver";

interface Props {
  dataLength: number;
  hasMore?: boolean;
  loader?: ReactNode;
  isLoading: boolean;
  handlerEndSection: () => void;
  children: ReactNode;
  threshold?: number;
}

function InfiniteScroll({
  dataLength = 0,
  hasMore = false,
  loader = <h5>Loading...</h5>,
  isLoading,
  handlerEndSection,
  threshold = 10,
  children,
}: Props) {
  const [prevData, setPrevData] = useState(dataLength);
  const { elementRef } = useObserver({
    handler: handlerEndSection,
    stopWatching: !hasMore,
    rootMargin: `${threshold}px`,
  });

  useEffect(() => {
    const hasChanges = prevData === dataLength;
    if (!hasChanges) return;
    setPrevData(dataLength);
  }, [prevData, setPrevData, dataLength]);

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
