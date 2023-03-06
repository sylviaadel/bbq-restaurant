import { useEffect, useState } from "react";
import { readDocuments } from "../scripts/fireStore/readDocuments";
import Category from "../components/shared/CategoryItem";
import logoImg from "../assets/images/logo-slogan.svg";
import Spinner from "../components/shared/Spinner";

export default function Home() {
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
  const Items = data.map((item) => <Category key={item.id} item={item} />);

  return (
    <div id="Home">
      <section className="Hero">
        <img
          src={logoImg}
          alt="A peace of meat with fork on grill along with restaurant name"
        />
        <p>Count On Us When It Comes To BBQ</p>
      </section>
      {status === 0 && <Spinner />}
      {status === 1 && (
        <section className="CategoriesContainer">{Items}</section>
      )}
      {status === 2 && <p>Error</p>}
    </div>
  );
}
