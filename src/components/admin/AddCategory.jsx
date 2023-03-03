import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCategory({ onCreateCategory }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const navigate = useNavigate();

  function onSubmit(e) {
    const data = {
      title: title,
      imageURL: imageURL,
      description: description,
    };
    console.log("from add category ", title, description, imageURL);
    e.preventDefault();
    onCreateCategory(data);
    navigate("/menu");
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <label>
        <span>Title</span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        <span>Image URL</span>
        <input
          type="text"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
      </label>
      <label>
        <span>Description</span>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </label>
      <button className="primary-btn">Add Category</button>
    </form>
  );
}
