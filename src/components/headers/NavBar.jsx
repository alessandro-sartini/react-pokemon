import { Link } from "react-router-dom";
import FilterCheckBox from "./FilterCheckBox";

export default function NavBar() {
  return (
    <aside
      className="bg-danger text-white p-3 vh-100 position-fixed top-0 left-0"
      style={{ width: "250px", zIndex: 100 }}
    >
      <h5 className="mb-4">Menu Principale</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link
            className="nav-link active text-white"
            aria-current="page"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/about">
            Pokedex
          </Link>
        </li>
      </ul>
      {/* aggiungere qui  */}

      <FilterCheckBox />
    </aside>
  );
}
