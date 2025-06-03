import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import "../cssComponents/SinglePokePage.css";

export default function SinglePokePage() {
  const { slug } = useParams();

  const { currentPokemon, fetchSinglePokemon, isLoadingSinglePokemon } =
    useGlobalContext();

  useEffect(() => {
    fetchSinglePokemon(slug);
  }, [slug]);

  return (
    <div>
      {isLoadingSinglePokemon == true ? (
        <div className="wrapper">
          <div className="pokeball"></div>
        </div>
      ) : (
        <div className="single-poke-container">
          <h2>{currentPokemon?.name}</h2>
          <img src={currentPokemon?.imageUrl} alt={currentPokemon?.name} />
          <p>{currentPokemon?.description}</p>
          <h3>Tipi:</h3>
          {currentPokemon?.types?.length > 0 ? (
            <ul>
              {currentPokemon?.types.map((type) => (
                <li key={type.id}>{type.name}</li>
              ))}
            </ul>
          ) : (
            <p>Nessun tipo disponibile.</p>
          )}
        </div>
      )}
    </div>
  );
}
