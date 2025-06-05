import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import "../cssComponents/SinglePokePage.css";
import TypeList from "../components/signleProduct/TypeList";
import Loader from "../components/utils/Loader";

export default function SinglePokePage() {
  const { slug } = useParams();

  const {
    currentPokemon,
    fetchSinglePokemon,
    isLoadingSinglePokemon,
    goToNextPokemon,
    goToPrevPokemon,
    getCurrentPokemonIndex,
    pokemons,
  } = useGlobalContext();

  useEffect(() => {
    fetchSinglePokemon(slug);
  }, [slug]);

  function pokedexNumber(pokedex) {
    return String(pokedex).padStart(3, "0");
  }

  const isFirstPokemon = getCurrentPokemonIndex() === 0;
  const isLastPokemon = getCurrentPokemonIndex() === pokemons.length - 1;

  return (
    <div>
      {isLoadingSinglePokemon == true ? (
        <Loader />
      ) : (
        <div className="single-poke-container">
          <h2>{currentPokemon?.name}</h2>
          <h3>N. {pokedexNumber(currentPokemon?.numberPokedex)}</h3>
          <img src={currentPokemon?.imageUrl} alt={currentPokemon?.name} />
          <p>{currentPokemon?.description}</p>
          <h4>Tipi:</h4>
          <TypeList types={currentPokemon?.types} />
        </div>
      )}
      <div className="d-flex justify-content-around m-5 ">
        <button
          className={`poke-btn poke-btn-prev btn mx-2${
            isFirstPokemon ? " disabled" : ""
          }`}
          onClick={goToPrevPokemon}
          disabled={isFirstPokemon}
        >
          Precedente
        </button>
        <button
          className={`poke-btn poke-btn-next btn${
            isLastPokemon ? " disabled" : ""
          }`}
          onClick={goToNextPokemon}
          disabled={isLastPokemon}
        >
          Prossimo
        </button>
      </div>
    </div>
  );
}
