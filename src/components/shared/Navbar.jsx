import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        Grill Bar
      </Link>
      <div>
        <Link to="/menu">
          <FontAwesomeIcon icon={solid("utensils")} /> Menu
        </Link>
        <Link to="/contact">
          <FontAwesomeIcon icon={solid("phone")} /> Contact
        </Link>
      </div>
    </nav>
  );
}
