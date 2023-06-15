import { FakeGrid } from "@components/shared";
import CategoryList from "../CategoryList";
import useCategories from "@hooks/useCategories";
import "./index.css";

function Categories() {
  const { categories, loading, error } = useCategories();

  if (error) return <div className="alert">Something has been wrong</div>;

  return (
    <section className="Categories">
      <h2>Categories</h2>
      {!loading && (
        <div className="grid">
          <CategoryList items={categories} />
        </div>
      )}

      {loading && <FakeGrid />}
    </section>
  );
}

export default Categories;
