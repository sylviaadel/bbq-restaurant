import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function CategoryItem({ item }) {
  const { id, title, description, imageURL } = item;

  return (
    <article key={id}>
      <img className="category-img" src={imageURL} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to="">
          <FontAwesomeIcon icon={solid("chevron-right")} /> View menu
        </Link>
      </div>
    </article>
  );
}
