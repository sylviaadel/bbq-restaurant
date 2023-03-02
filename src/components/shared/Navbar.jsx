import { Link } from "react-router-dom";
import mainLogo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={mainLogo} alt="A piece of meat with fork on grill" />
      </Link>
      <ul>
        <li>
          <Link to="">
            <FontAwesomeIcon icon={solid("utensils")} /> Menu
          </Link>
        </li>
        <li>
          <Link to="">
            <FontAwesomeIcon icon={solid("phone")} /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
