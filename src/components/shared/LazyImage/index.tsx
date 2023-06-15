import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "./index.css";
type LazyImageCustomProp = Pick<
  HTMLImageElement,
  "src" | "alt" | "width" | "height"
>;

interface Props extends LazyImageCustomProp {
  caption?: string;
}

function LazyImage({ src, alt, width, height, caption }: Props) {
  return (
    <div className="LazyImage">
      <LazyLoadImage
        width={width}
        height={height}
        src={src}
        alt={alt}
        decoding="async"
        useIntersectionObserver
        effect="blur"
      />
      {caption && <span>{caption}</span>}
    </div>
  );
}

export default LazyImage;