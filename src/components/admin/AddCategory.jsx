import { useState } from "react";

export default function AddCategory() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    console.log("data", title, description, imageURL);
  }
  return (
    <section id="add-category">
      <h2>Add a new Category</h2>
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
    </section>
  );
}
