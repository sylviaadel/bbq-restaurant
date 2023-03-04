import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { deleteDocument } from "../../scripts/fireStore";
import { useState } from "react";

export default function CategoryItem({ item }) {
  const { id, title, description, imageURL } = item;
  const [categories, setCategories] = useState("");

  async function onDelete(id) {
    const clonedCategories = [...categories];
    const itemIndex = clonedCategories.findIndex((item) => item.id === id);
    console.log(clonedCategories);
    clonedCategories.splice(itemIndex, 1);
    debugger;
    setCategories(clonedCategories);
    await deleteDocument("categories", id);
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
