import { useState, useEffect } from "react";
import { useParams, useRoutes } from "react-router-dom";
import { readDocuments } from "../scripts/fireStore/readDocuments";
import { readProducts } from "../scripts/fireStore/readProducts";
import { useCategories } from "../state/CategoriesProvider";
import Spinner from "../components/shared/Spinner";
import ProductContent from "../components/Product/ProductContent";

export default function Product({ collection }) {
  let { id, productId } = useParams();
  const { data, dispatch } = useCategories();
  const [status, setStatus] = useState(0);
  const [products, setProducts] = useState([]);
  const currentCategory = data.find((c) => c.id === id);
  let currentProduct = products.find((p) => p.id === productId);
  const categoryLink = `/category/${currentCategory.id}`;

  useEffect(() => {
    loadData(collection);
  }, []);

  async function loadData(collection) {
    const data = await readDocuments(collection).catch(onFail);
    const result = await readProducts(`${collection}/${id}/products`);
    setProducts(result);
    onSuccess(data);
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
            <img src={currentProduct.imageURL} alt={currentProduct.title} />
          </header>
          <ProductContent product={currentProduct} link={categoryLink} />
        </section>
      )}
      {status === 2 && <p>Error</p>}
    </>
  );
}
