import { useEffect, useState } from "react";
import { readDocuments } from "../scripts/firebaseSetup";
import CategoryItem from "../components/CategoryItem";

export default function Menu() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await readDocuments();
      setData(data);
    }
    loadData();
  }, []);
  const Items = data.map((item) => <CategoryItem key={item.id} item={item} />);

  return (
    <div id="Menu">
      <h1>Our Main Categories</h1>
      <section className="categories-items">{Items}</section>
    </div>
  );
}
