import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  if (!currentPokemon.slug) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
        <h1>No Pokémon found, sorry!</h1>
        <Link
          className="btn btn-danger mt-4"
          style={{ backgroundColor: "#d32f2f" }}
          to={"/"}
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      {isLoadingSinglePokemon === true ? (
        <Loader />
      ) : (
        <div className="single-poke-container">
          <h2>{currentPokemon?.name}</h2>
          <h3>N. {pokedexNumber(currentPokemon?.numberPokedex)}</h3>
          <img src={currentPokemon?.imageUrl} alt={currentPokemon?.name} />
          <p>{currentPokemon?.description}</p>
          <h4>Types:</h4>
          <TypeList types={currentPokemon?.types} />
        </div>
      )}
      <div className="d-flex justify-content-around m-5 ">
        <button
          className={`poke-btn poke-btn-prev btn${
            isFirstPokemon ? " disabled" : ""
          }`}
          onClick={goToPrevPokemon}
          disabled={isFirstPokemon}
        >
          Previous
        </button>
        <button
          className={`poke-btn poke-btn-next btn${
            isLastPokemon ? " disabled" : ""
          }`}
          onClick={goToNextPokemon}
          disabled={isLastPokemon}
        >
          Next
        </button>
      </div>
    </div>
  );
}
