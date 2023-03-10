import { Link } from "react-router-dom";
import { deleteDocument } from "../../scripts/fireStore/deleteDocument";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { useCategories } from "../../state/CategoriesProvider";
import Modal from "./Modal";
import { useState } from "react";

export default function CategoryItem({ item, collectionName }) {
  const { id, title, description, imageURL } = item;
  const { dispatch } = useCategories();
  const [isOpen, setIsOpen] = useState(false);

  async function onDelete(id) {
    setIsOpen(true);
    // const message = `Are you sure you want to delete ${title} Category?`;
    // const result = window.confirm(message);
    // if (!result) return;

    // await deleteDocument(collectionName, id);
    // dispatch({ type: "delete", payload: id });
  }

  return (
    <article key={id}>
      <img className="category-img" src={imageURL} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={`/category/${id}`} className="small-btn view-menu">
          View Menu
        </Link>
        <button
          className="delete-category small-btn"
          onClick={() => onDelete(id)}
        >
          <FontAwesomeIcon icon={solid("trash")} /> Delete category
        </button>
      </div>
      <Modal
        open={isOpen}
        onClose={(e) => setIsOpen(false)}
        message="Are you sure you want to delete this category?"
      />
    </article>
  );
}
