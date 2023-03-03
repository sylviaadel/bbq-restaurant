import { useEffect, useState } from "react";
import { readDocuments } from "../scripts/firebaseSetup";

export default function CategoryItem() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await readDocuments();
      setData(data);
    }
    loadData();
  }, []);

  const Items = data.map((item) => (
    <article key={item.id}>
      <img src={item.imageURL} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <button className="small-btn">View Menu</button>
    </article>
  ));
  return <>{Items}</>;
}
