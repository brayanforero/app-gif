import { useEffect } from "react";
import { useLocation } from "wouter";

function ScrollReset() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default ScrollReset;
