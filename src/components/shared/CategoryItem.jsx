import { Link } from "react-router-dom";
import { deleteDocument } from "../../scripts/fireStore/deleteDocument";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { useCategories } from "../../state/CategoriesProvider";
import Modal from "./Modal";
import { useState } from "react";
import { onImageError } from "../../helpers/AddProductHelper";

export default function CategoryItem({ item, collectionName }) {
  const { id, title, description, imageURL } = item;
  const { dispatch } = useCategories();
  const [isOpen, setIsOpen] = useState(false);
  const placeholderImage =
    "https://www.shutterstock.com/image-vector/food-cover-flat-icon-on-260nw-438697456.jpg";

  async function confirmDeleteCategory() {
    await deleteDocument(collectionName, id);
    dispatch({ type: "delete", payload: id });
    setIsOpen(false);
  }

  return (
    <article key={id}>
      <img
        className="category-img"
        src={imageURL ? imageURL : placeholderImage}
        onError={onImageError}
        alt={title}
      />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={`/category/${id}`} className="small-btn view-menu">
          View Menu
        </Link>
        <button className="delete-category" onClick={(e) => setIsOpen(true)}>
          <FontAwesomeIcon icon={solid("trash")} /> Delete category
        </button>
      </div>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirmDelete={confirmDeleteCategory}
      />
    </article>
  );
}
