import { useEffect, useState } from "react";
import { readDocuments } from "../scripts/fireStore/readDocuments";
import { deleteDocument } from "../scripts/fireStore/deleteDocument";
import CategoryItem from "../components/shared/CategoryItem";
import Spinner from "../components/shared/Spinner";

export default function Menu() {
  const [status, setStatus] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData("categories");
  }, []);
  async function loadData(collectionName) {
    const data = await readDocuments(collectionName).catch(onFail);
    onSuccess(data);
  }

  function onSuccess(data) {
    setData(data);
    setStatus(1);
  }

  function onFail() {
    setStatus(2);
  }

  async function onDeleteItem(id) {
    const clonedCategories = [...data];
    const itemIndex = clonedCategories.findIndex((item) => item.id === id);
    clonedCategories.splice(itemIndex, 1);
    setData(clonedCategories);
    await deleteDocument("categories", id);
  }

  const Items = data.map((item) => (
    <CategoryItem onDeleteItem={onDeleteItem} key={item.id} item={item} />
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
