import { PropsWithChildren, useEffect } from "react";

function ScrollReset({ children }: PropsWithChildren) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return children;
}

export default ScrollReset;
