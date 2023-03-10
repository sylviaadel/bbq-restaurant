import { useEffect, useState } from "react";
import { readDocuments } from "../scripts/fireStore/readDocuments";
import CategoryItem from "../components/shared/CategoryItem";
import Spinner from "../components/shared/Spinner";
import { useCategories } from "../state/CategoriesProvider";
import NotFound from "./NotFound";

export default function Menu({ collection }) {
  const { data, dispatch } = useCategories();
  const [status, setStatus] = useState(0);

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

  const Items = data.map((item) => <CategoryItem key={item.id} item={item} />);

  return (
    <div id="Menu">
      <h1>Our Main Categories</h1>
      {status === 0 && <Spinner />}
      {status === 1 && <section className="categories-items">{Items}</section>}
      {status === 2 && <NotFound />}
    </div>
  );
}
