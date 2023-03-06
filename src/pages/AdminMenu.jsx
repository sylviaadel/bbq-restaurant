import { useEffect, useState } from "react";
import { readDocuments } from "../scripts/fireStore/readDocuments";
import CategoryItem from "../components/shared/CategoryItem";
import Spinner from "../components/shared/Spinner";
import { useCategories } from "../state/CategoriesProvider";

export default function Menu() {
  const { data, dispatch } = useCategories();
  const [status, setStatus] = useState(0);
  const COLLECTION_NAME = "categories";

  useEffect(() => {
    loadData(COLLECTION_NAME);
  }, []);
  async function loadData(collectionName) {
    const data = await readDocuments(collectionName).catch(onFail);
    onSuccess(data);
  }

  function onSuccess(data) {
    dispatch({ type: "initializeArray", payload: data });
    setStatus(1);
  }

  function onFail() {
    setStatus(2);
  }

  const Items = data.map((item) => (
    <CategoryItem key={item.id} item={item} collectionName={COLLECTION_NAME} />
  ));

  return (
    <div id="Menu" className="admin-menu">
      <h1>Our Main Categories</h1>
      {status === 0 && <Spinner />}
      {status === 1 && <section className="categories-items">{Items}</section>}
      {status === 2 && <p>Error</p>}
    </div>
  );
}
