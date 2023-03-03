import { useEffect, useState } from "react";
import { readDocuments } from "../../scripts/firebaseSetup";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

export default function CategoriesContainer() {
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
      <img className="category-img" src={item.imageURL} alt={item.title} />
      <div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <Link to="">
          <FontAwesomeIcon icon={solid("chevron-right")} /> View menu
        </Link>
      </div>
    </article>
  ));

  return <div className="CategoriesContainer">{Items}</div>;
}
