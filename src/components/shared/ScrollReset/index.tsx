import { PropsWithChildren, useEffect, useRef } from "react";
import { useLocation, useRouter } from "wouter";

function ScrollReset({ children }: PropsWithChildren) {
  const [location] = useLocation();
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    rootRef.current = document.querySelector("#root");
  }, []);

  useEffect(() => {
    if (rootRef.current == null) return;
    rootRef.current.scroll(0, 0);
  }, [location]);

  return children;
}

export default ScrollReset;
