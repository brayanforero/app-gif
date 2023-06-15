import { FakeGrid } from "@components/shared";
import CategoryList from "../CategoryList";
import useCategories from "@hooks/useCategories";
import "./index.css";

function Categories() {
  const { categories, loading, error } = useCategories();

  if (error) return <div className="alert">Something has been wrong</div>;
  if (loading) return <FakeGrid items={6} />;

  return (
    <section className="Categories">
      <h2>Categories</h2>
      <div className="grid">
        <CategoryList items={categories} />
      </div>
    </section>
  );
}

export default Categories;
