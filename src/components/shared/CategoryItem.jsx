import { Link } from "react-router-dom";

export default function CategoryItem({ item }) {
  const { id, title, description, imageURL } = item;

  return (
    <article key={id}>
      <img className="category-img" src={imageURL} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to="" className="small-btn">
          View Menu
        </Link>
      </div>
    </article>
  );
}
