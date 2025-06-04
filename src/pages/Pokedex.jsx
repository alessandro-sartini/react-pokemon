import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import "../cssComponents/Pokedex.css";

export default function Home() {
  const { pokemons, isLoading } = useGlobalContext();

  return (
    <div>
      <div className="window">
        <h1>Pokédex</h1>
      </div>
      <div style={{ height: "80px" }}></div>
      {isLoading ? ( 
        <div className="wrapper">
          <div className="pokeball"></div>
        </div>
      ) : (
       
        pokemons.length === 0 ? (
          <div className="no-pokemon-message">
            <p>Nessun Pokémon trovato. Riprova più tardi!</p>
           
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
        )
      )}
    </div>
  );
}