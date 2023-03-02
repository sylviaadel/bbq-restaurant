import CategoryItem from "../components/CategoryItem";

export default function Menu() {
  return (
    <div id="Menu">
      <h1>Our Main Categories</h1>
      <section className="categories-items">
        <CategoryItem />
        <CategoryItem />
      </section>
    </div>
  );
}
