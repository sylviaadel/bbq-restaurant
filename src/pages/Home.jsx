import { useEffect, useState } from "react";
import { readDocuments } from "../scripts/firebaseSetup";
import Category from "../components/home/CategoryItem";
import logoImg from "../assets/images/logo-slogan.svg";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const data = await readDocuments();
    setData(data);
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
      <div className="CategoriesContainer">{Items}</div>
    </div>
  );
}
