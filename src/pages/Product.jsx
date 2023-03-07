import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { readDocuments } from "../scripts/fireStore/readDocuments";
import { readProducts } from "../scripts/fireStore/readProducts";
import { useCategories } from "../state/CategoriesProvider";
import Ingredients from "../components/Product/Ingredients";
import Spinner from "../components/shared/Spinner";

export default function Product({ collection }) {
  let { id, productId } = useParams();
  const { data, dispatch } = useCategories();
  const [status, setStatus] = useState(0);
  const currentCategory = data.find((c) => c.id === id);
  console.log(currentCategory);
  const [products, setProducts] = useState([]);

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
  let currentProduct = products.find((p) => p.id === productId);

  return (
    <>
      {status === 0 && <Spinner />}
      {status === 1 && (
        <section key={currentProduct.id}>
          <header className="product-header">
            <img src={currentProduct.imageURL} alt={currentProduct.title} />
            <h2>{currentProduct.title}</h2>
          </header>
          <div className="product-content">
            <p>{currentProduct.description}</p>
            {/* <Ingredients product={currentProduct} /> */}
            <Link
              to={`/category/${currentCategory.id}`}
              className="primary-btn"
            >
              Go Back
            </Link>
          </div>
        </section>
      )}
      {status === 2 && <p>Error</p>}
    </>
  );
}
