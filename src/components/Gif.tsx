import { memo } from "react";
import GifModel from "../interfaces/app/gif";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Gif.css";
import { Link } from "wouter";
import { LazyImage } from "./shared";
interface Props {
  data: GifModel;
  type?: "hd" | "normal";
}

function Gif({ data, type = "normal" }: Props) {
  return (
    <article className="Gif">
      <LazyImage
        width={300}
        height={300}
        src={type === "normal" ? data.image.normal : data.image.hd}
        alt={data.name}
      />

      <h2>
        <Link to={`/g/${data.id}`} className="Gif__name">
          {data.name || "Title Unavaliable"}
        </Link>
      </h2>
    </article>
  );
}

export default memo(
  Gif,
  (prevProps, nextProps) => prevProps.data.id === nextProps.data.id
);
