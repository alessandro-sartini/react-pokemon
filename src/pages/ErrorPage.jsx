import "../cssComponents/error.css";
import { Link } from 'react-router-dom';
export default function ErrorPage() {
  return (
    <div className="no-pokemon-message">
      <p>
        Oh no!
        <br /> Uno snorlax ti sta bloccando la strada!
      </p>
          <img src="/imgs/snorlax.jpg" alt="Snorlax che dorme" style={{ width: '450px' }} />
          <Link className="btn btn-danger mt-4" to={"/"}>
        Torna alla home
      </Link>
    </div>
  );
}
