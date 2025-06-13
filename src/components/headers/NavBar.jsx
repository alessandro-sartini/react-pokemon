import { Link, useLocation } from "react-router-dom";
import FilterCheckBox from "./FilterCheckBox";
import "../../cssComponents/navBar.css";

export default function NavBar() {
  const location = useLocation();
  return (
    <aside className="pokedex-navbar">
      <h5 className="mb-4">Main Menu</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link
            className={`nav-link text-white${
              location.pathname === "/" ? " active" : ""
            }`}
            aria-current="page"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link text-white${
              location.pathname === "/pokedex" ? " active" : ""
            }`}
            to="/pokedex"
          >
            Pokédex
          </Link>
        </li>
      </ul>
     
      {location.pathname === "/pokedex" ? <FilterCheckBox /> : null}
    </aside>
  );
}
