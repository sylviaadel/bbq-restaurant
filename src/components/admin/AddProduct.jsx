import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createProduct } from "../../scripts/fireStore/createProduct";
import { readDocuments } from "../../scripts/fireStore/readDocuments";
import { useCategories } from "../../state/CategoriesProvider";
import { validImageURL } from "../../scripts/tests/addItem";
import { validText, validPrice } from "../../scripts/tests/addItem";
import { titleError, urlError } from "../../scripts/addItemHelpers";
import { descError, priceError } from "../../scripts/addItemHelpers";
import TextBox from "./TextBox";

export default function AddProduct({ collection }) {
  const { data, dispatch } = useCategories();
  const [status, setStatus] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [category, setCategory] = useState({
    category: "mhYdNkBR2LCrqJVAQbzZ",
  });
  const navigate = useNavigate();
  const categoryID = category.category;

  useEffect(() => {
    loadData(collection);
  }, []);
  async function loadData(collection) {
    const data = await readDocuments(collection).catch(onFail);
    onSuccess(data);
  }

  function onSuccess(data) {
    dispatch({ type: "initializeArray", payload: data });
    setStatus(1);
  }
  function onFail() {
    setStatus(2);
  }

  function handleChange(e) {
    setCategory({ category: e.target.value });
  }

  async function onSubmit(e) {
    const data = {
      title: title,
      imageURL: imageURL,
      description: description,
      price: price,
      ingredients: [ingredients],
    };
    e.preventDefault();
    if (
      !validImageURL(data.imageURL) ||
      !validText(data.title) ||
      !validText(data.description) ||
      !validPrice(data.price)
    ) {
      e.preventDefault();
    } else {
      debugger;
      const array = Array.from(ingredients.split(","));
      setIngredients(array);
      // console.log(ingredients);
      const documentId = await createProduct(collection, categoryID, data);
      dispatch({ type: "create", payload: { id: documentId, ...data } });
      navigate("/menu");
    }
  }

  const categories = data.map((data) => (
    <option key={data.id} value={data.id}>
      {data.title}
    </option>
  ));
  // console.log(categories[0].props.value);

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <TextBox
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        error={titleError}
      />
      <TextBox
        label="Image URL"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
        error={urlError}
      />
      <label>
        <span>Related Category</span>
        <select defaultValue={category} onChange={(e) => handleChange(e)}>
          {categories}
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
        <span>Ingredients (comma separated)</span>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        ></textarea>
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
