import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import "../cssComponents/SinglePokePage.css";
import TypeList from "../components/signleProduct/TypeList";

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
          <h3>N. {currentPokemon?.numberPokedex}</h3> 
          <img src={currentPokemon?.imageUrl} alt={currentPokemon?.name} />
          <p>{currentPokemon?.description}</p>
          <h4>Tipi:</h4>
          <TypeList types={currentPokemon?.types} />
        </div>
      )}
    </div>
  );
}
