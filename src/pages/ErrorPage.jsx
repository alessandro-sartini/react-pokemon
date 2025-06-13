import "../cssComponents/error.css";
import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <div className="no-pokemon-message">
      <p>
        Oh no!
        <br /> A Snorlax is blocking your way!
      </p>
      <img
        src="/imgs/snorlax.jpg"
        alt="Sleeping Snorlax"
        style={{ width: "450px" }}
      />
      <Link
        className="btn btn-danger mt-4"
        style={{ backgroundColor: "#d32f2f" }}
        to={"/"}
      >
        Go back to Route 1!
      </Link>
    </div>
  );
}
