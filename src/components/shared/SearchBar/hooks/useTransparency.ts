import { useRef, useEffect } from "react";
import debounce from "just-debounce-it";

function useTransparency() {
  const headerRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const handler = debounce(() => {
      const { scrollY } = window;

      headerRef.current?.classList.toggle("is-transparent", scrollY > 0);
    }, 400);

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return { headerRef };
}

export default useTransparency;
