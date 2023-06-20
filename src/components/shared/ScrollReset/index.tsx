import { PropsWithChildren, useEffect, useRef } from "react";
import { useLocation, useRouter } from "wouter";

function ScrollReset({ children }: PropsWithChildren) {
  const [location] = useLocation();
  const renderRef = useRef<number>(1);
  useEffect(() => {
    if (renderRef.current === 1) {
      renderRef.current = 2;
      return;
    }

    window.scrollTo(0, 0);
  }, [location]);

  return children;
}

export default ScrollReset;
