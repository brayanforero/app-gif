import Category from "@/interfaces/app/categories";
import { LazyImage } from "@components/shared";
import "./index.css";
interface Props {
  item: Category;
}

function CategoryItem({ item }: Props) {
  return (
    <article className="Category">
      <LazyImage
        src={item.image}
        alt={`Gift about ${item.name}`}
        width={300}
        height={300}
      />
      <h3 className="Category__name">{item.name}</h3>
    </article>
  );
}

export default CategoryItem;
