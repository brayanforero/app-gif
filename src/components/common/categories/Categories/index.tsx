import useCategories from "@hooks/useCategories";
import CategoryItem from "../Category";
import "./index.css";

function Categories() {
  const { categories, error, loading } = useCategories();

  if (loading) return <p>Loading...</p>;

  if (error) return <div className="alert">Something has been wrong</div>;

  return (
    <section className="Categories">
      <h2>Categories</h2>
      <div className="grid">
        {categories.map((item) => (
          <CategoryItem key={`${item.name}`} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Categories;
