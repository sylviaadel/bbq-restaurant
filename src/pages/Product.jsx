import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readDocuments } from "../scripts/fireStore/readDocuments";
import { readProducts } from "../scripts/fireStore/readProducts";
import { useCategories } from "../state/CategoriesProvider";
import Spinner from "../components/shared/Spinner";
import ProductContent from "../components/Product/ProductContent";
import InvalidID from "./InvalidID";
import { imageError } from "../helpers/AddProductHelper";

export default function Product({ collection }) {
  let { id, productId } = useParams();
  const { data, dispatch } = useCategories();
  const [status, setStatus] = useState(0);
  const [products, setProducts] = useState([]);
  const currentCategory = data.find((c) => c.id === id);
  let currentProduct = products.find((p) => p.id === productId);
  const categoryLink = `/category/${currentCategory?.id}`;
  const img =
    "https://www.shutterstock.com/image-vector/food-cover-flat-icon-on-260nw-438697456.jpg";

  // this part looks messy, add  spaces for easier lecture. formatting -1
  useEffect(() => {
    loadData(collection);
  }, []);
  async function loadData(collection) {
    if (currentCategory === undefined) {
      setStatus(2);
    } else {
      const data = await readDocuments(collection).catch(onFail);
      const result = await readProducts(`${collection}/${id}/products`);
      setProducts(result);
      onSuccess(data);
    }
  }
  function onSuccess(data) {
    dispatch({ type: "initializeArray", payload: data });
    setStatus(1);
  }
  function onFail() {
    setStatus(2);
  }

  return (
    <>
      {status === 0 && <Spinner />}
      {status === 1 && (
        <section id="Product" key={currentProduct.id}>
          <header className="product-header">
            <img
              src={currentProduct.imageURL ? currentProduct.imageURL : img}
              onError={imageError}
              alt={currentProduct.title}
            />
          </header>
          <ProductContent product={currentProduct} link={categoryLink} />
        </section>
      )}
      {status === 2 && <InvalidID />}
    </>
  );
}
