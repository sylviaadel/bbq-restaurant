import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

export default function CategoryItem({ item, onDeleteItem }) {
  const { id, title, description, imageURL } = item;

  async function onDelete(id) {
    onDeleteItem(id);
  }

  return (
    <article key={id}>
      <img className="category-img" src={imageURL} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to="" className="small-btn view-menu">
          View Menu
        </Link>
        <button
          className="delete-category small-btn"
          onClick={() => onDelete(id)}
        >
          <FontAwesomeIcon icon={solid("trash")} /> Delete category
        </button>
      </div>
    </article>
  );
}
