import { Link } from "react-router-dom";
import beefImg from "../../assets/images/beef.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

export default function CategoriesContainer() {
  return (
    <div className="CategoriesContainer">
      <article>
        <img className="category-img" src={beefImg} alt="Beef Background" />
        <div>
          <h2>Beef Dishes</h2>
          <p>
            In our wonderful dishes, you'll find wholesome vegan meals made with
            affordable and protein-rich whole grains, beans, and nuts. You'll
            also see plenty of fresh, colorful produce, and occasionally some
            tofu. No funny meat substitutes here.
          </p>
          <Link to="">
            <FontAwesomeIcon icon={solid("chevron-right")} /> View menu
          </Link>
        </div>
      </article>
      <article>
        <img className="category-img" src={beefImg} alt="Beef Background" />
        <div>
          <h2>Beef Dishes</h2>
          <p>
            In our wonderful dishes, you'll find wholesome vegan meals made with
            affordable and protein-rich whole grains, beans, and nuts. You'll
            also see plenty of fresh, colorful produce, and occasionally some
            tofu. No funny meat substitutes here.
          </p>
          <Link to="">
            <FontAwesomeIcon icon={solid("chevron-right")} /> View menu
          </Link>
        </div>
      </article>
    </div>
  );
}
