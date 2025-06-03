import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";


export default function Home() {
  const { pokemons, isLoading } = useGlobalContext();

  return (
    <div>
      <h1>Pokemons List</h1>
      {isLoading == true ? (
        <div className="wrapper">
          <div className="pokeball"></div>
        </div>
      ) : (
        <ul>
          {pokemons.map((pokemon) => (
            <Link key={pokemon.id} to={`/pokemon/${pokemon.slug}`}>
              <li>
                {pokemon.name}
                <img src={pokemon.imageUrl} alt={pokemon.name} />
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
