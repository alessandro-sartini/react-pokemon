import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import "../cssComponents/Pokedex.css";
import Loader from "../components/utils/Loader";

export default function Home() {
  const { pokemons, isLoading } = useGlobalContext();

  return (
    <div>
      <div className="window">
        <h1>Pokédex</h1>
      </div>
      <div style={{ height: "80px" }}></div>
      {isLoading ? (
        <Loader />
      ) : pokemons.length === 0 ? (
        <div className="no-pokemon-message">
          <p>No Pokémon found. Please try again later!</p>
        </div>
      ) : (
        <ul className="pokedex-list">
          {pokemons.map((pokemon) => (
            <Link
              key={pokemon.id}
              to={`/pokemon/${pokemon.slug}`}
              style={{ textDecoration: "none" }}
            >
              <li className="pokedex-card">
                <img src={pokemon.imageUrl} alt={pokemon.name} />
                <h2>{pokemon.name}</h2>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
