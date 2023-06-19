import GifModel from "@/interfaces/app/gif";
import "./Grid.css";
import Gif from "./Gif";
interface Props {
  items: GifModel[];
}

function Grid({ items }: Props) {
  return (
    <section className="grid">
      {items.map((g) => (
        <Gif key={`${g.id}-${g.name}}`} data={g} />
      ))}
    </section>
  );
}

export default Grid;
