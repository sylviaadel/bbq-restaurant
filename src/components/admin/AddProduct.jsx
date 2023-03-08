import { useState } from "react";
import { validImageURL } from "../../scripts/tests/addItem";
import { validText, validPrice } from "../../scripts/tests/addItem";
import { titleError, urlError } from "../../scripts/addItemHelpers";
import { descError, priceError } from "../../scripts/addItemHelpers";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState("");

  async function onSubmit(e) {
    const data = {
      title: title,
      imageURL: imageURL,
      description: description,
      price: price,
    };
    e.preventDefault();
    if (
      !validImageURL(data.imageURL) ||
      !validText(data.title) ||
      !validText(data.description) ||
      !validPrice(data.price)
    ) {
      e.preventDefault();
    }
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
        {validText(title) ? "" : titleError}
      </label>
      <label>
        <span>Image URL</span>
        <input
          type="text"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        {validImageURL(imageURL) ? "" : urlError}
      </label>
      <label>
        <span>Related Category</span>
        <select>
          <option>Beef</option>
          <option>Chicken</option>
          <option>Beverages</option>
        </select>
      </label>
      <label>
        <span>Price</span>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <span className="currency">SEK</span>
        {validPrice(price) ? "" : priceError}
      </label>
      <label>
        <span>Description</span>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        {validText(description) ? "" : descError}
      </label>
      <button className="primary-btn">Add Product</button>
    </form>
  );
}
