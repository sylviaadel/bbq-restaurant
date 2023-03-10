import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createDocument } from "../../scripts/fireStore/createDocument";
import { useCategories } from "../../state/CategoriesProvider";
import { validImageURL, validText } from "../../scripts/tests/addItem";
import { titleError, urlError, descError } from "../../scripts/addItemHelpers";
import TextBox from "./TextBox";

export default function AddCategory({ collection }) {
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
    } else {
      const documentId = await createDocument(collection, data);
      dispatch({ type: "create", payload: { id: documentId, ...data } });
      navigate("/admin-menu");
    }
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <TextBox
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        validate={validText(title)}
        error={titleError}
      />
      <TextBox
        label="Image URL"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
        validate={validImageURL(imageURL)}
        error={urlError}
      />
      <label>
        <span>Description</span>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        {validText(description) ? "" : descError}
      </label>
      <button className="primary-btn">Add Category</button>
    </form>
  );
}
