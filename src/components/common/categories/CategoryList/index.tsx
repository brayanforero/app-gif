import Category from "@/interfaces/app/categories";
import CategoryItem from "../Category";

interface Props {
  items: Category[];
}

function CategoryList({ items }: Props) {
  return (
    <>
      {items.map((item) => (
        <CategoryItem key={`${item.name}`} item={item} />
      ))}
    </>
  );
}

export default CategoryList;
