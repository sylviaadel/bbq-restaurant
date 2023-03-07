import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDocuments } from "../scripts/fireStore/readDocuments";
import { readProducts } from "../scripts/fireStore/readProducts";
import { useCategories } from "../state/CategoriesProvider";
import ProductItem from "../components/category/ProductItem";
import Spinner from "../components/shared/Spinner";

export default function Category({ collection }) {
  let { id } = useParams();
  const { data, dispatch } = useCategories();
  const [status, setStatus] = useState(0);
  const currentCategory = data.find((c) => c.id === id);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadData(collection);
  }, []);
  async function loadData(collection) {
    const data = await readDocuments(collection).catch(onFail);
    var result = await readProducts(`${collection}/${id}/products`);
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

  const selectedProducts = products.map((product) => (
    <ProductItem key={product.id} item={product} />
  ));
  return (
    <>
      {status === 0 && <Spinner />}
      {status === 1 && (
        <div id="Category">
          <header className="category-header">
            <img src={currentCategory.imageURL} alt={currentCategory.title} />
            <div className="backdrop"></div>
            <h1>{currentCategory.title}</h1>
          </header>
          <div className="category-content">
            <p>{currentCategory.description}</p>
            <section className="ProductsContainer">{selectedProducts}</section>
          </div>
        </div>
      )}
      {status === 2 && <p>Error</p>}
    </>
  );
}
