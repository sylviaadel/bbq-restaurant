import { useEffect, useState } from "react";
import { readDocuments } from "../scripts/fireStore";
import CategoryItem from "../components/CategoryItem";

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

  const Items = data.map((item) => <CategoryItem key={item.id} item={item} />);

  return (
    <div id="Menu">
      <h1>Our Main Categories</h1>
      {status === 0 && <p>Loading...</p>}
      {status === 1 && <section className="categories-items">{Items}</section>}
      {status === 2 && <p>Error</p>}
    </div>
  );
}
