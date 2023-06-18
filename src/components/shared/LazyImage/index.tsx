import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
type LazyImageCustomProp = Pick<
  HTMLImageElement,
  "src" | "alt" | "width" | "height"
>;

interface Props extends LazyImageCustomProp {
  caption?: string;
}

function LazyImage({ src, alt, width, height, caption }: Props) {
  return (
    <>
      <LazyLoadImage
        width={width}
        height={height}
        src={src}
        alt={alt}
        useIntersectionObserver
        threshold={10}
        wrapperClassName="LazyImage"
        effect="blur"
      />
      {caption && <span>{caption}</span>}
    </>
  );
}

export default LazyImage;
