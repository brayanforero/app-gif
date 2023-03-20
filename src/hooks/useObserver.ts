import { useEffect, useRef } from "react";

interface Props extends IntersectionObserverInit {
  handler: () => void;
  stopWatching: boolean;
}

function useObserver({ handler, stopWatching, ...restOfProps }: Props) {
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const { current: ref } = elementRef;
    if (!ref) return;
    const observer = new IntersectionObserver((entries) => {
      const [element] = entries;
      const { isIntersecting } = element;

      if (!isIntersecting || stopWatching) return;

      handler();
    }, restOfProps);

    observer.observe(ref);
    return () => {
      observer.disconnect();
    };
  }, []);
  return {
    elementRef,
  };
}

export default useObserver;
