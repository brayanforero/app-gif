import { useEffect, useRef } from "react";

interface Props extends IntersectionObserverInit {
  callback: IntersectionObserverCallback;
}

function useObserver({ callback, ...options }: Props) {
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const { current: ref } = elementRef;
    if (!ref) return;
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref);
    return () => {
      observer.disconnect();
    };
  });
  return {
    elementRef,
  };
}

export default useObserver;
