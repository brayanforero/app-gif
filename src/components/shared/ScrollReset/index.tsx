import { PropsWithChildren, useEffect } from "react";
import { useLocation } from "wouter";

function ScrollReset({ children }: PropsWithChildren) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
}

export default ScrollReset;
