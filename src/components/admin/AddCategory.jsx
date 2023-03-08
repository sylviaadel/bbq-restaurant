import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createDocument } from "../../scripts/fireStore/createDocument";
import { useCategories } from "../../state/CategoriesProvider";
import { validImageURL, validText } from "../../scripts/tests/addItem";
import { titleError, urlError, descError } from "../../scripts/addItemHelpers";

export default function AddCategory({ collectionName }) {
  const { dispatch } = useCategories();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const navigate = useNavigate();

  async function onSubmit(e) {
    const data = {
      title: title,
      imageURL: imageURL,
      description: description,
    };
    e.preventDefault();
    if (
      !validImageURL(data.imageURL) ||
      !validText(data.title) ||
      !validText(data.description)
    ) {
      e.preventDefault();
    }
    const documentId = await createDocument(collectionName, data);
    dispatch({ type: "create", payload: { id: documentId, ...data } });
    navigate("/admin-menu");
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <label>
        <span>Title</span>
        <input
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {validText(title) ? "" : titleError}
      </label>
      <label>
        <span>Image URL</span>
        <input
          required
          type="text"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        {validImageURL(imageURL) ? "" : urlError}
      </label>
      <label>
        <span>Description</span>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        {validText(description) ? "" : descError}
      </label>
      <button className="primary-btn">Add Category</button>
    </form>
  );
}
