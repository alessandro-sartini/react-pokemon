import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const apiUrlPokmeon = import.meta.env.VITE_API_POKEMON;
  const apiUrlType = import.meta.env.VITE_API_TYPE;
  //!all pokemonsimport

  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // ! signle pokemon
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [isLoadingSinglePokemon, setIsLoadingSinglePokemon] = useState(false);

  // !types
  const [types, setTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrlPokmeon + "?type=" + selectedTypes)
      .then((response) => {
        setPokemons(response.data);
      })
      .catch((err) => {
        console.error("Errore durante il recupero dei Pokémon:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [selectedTypes]);

  const fetchSinglePokemon = (slug) => {
    setIsLoadingSinglePokemon(true);
    axios
      .get(`${apiUrlPokmeon}/bySlug/${slug}`)
      .then((response) => {
        setCurrentPokemon(response.data);
      })
      .catch((err) => {
        console.error("Errore durante il recupero dei Pokémon:", err);
      })
      .finally(() => {
        setIsLoadingSinglePokemon(false);
      });
  };

  useEffect(() => {
    axios
      .get(apiUrlType)
      .then((response) => {
        setTypes(response.data);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei tipi:", error);
        setTypes([]);
      });
  }, []);

  //todo trovo l'indice del pokemon
  //! lo porto in single page per capire a che indice mi trovo
  const getCurrentPokemonIndex = () => {
    return pokemons.findIndex(
      (pokemon) => pokemon.slug === currentPokemon.slug
    );
  };

  //todo uso l'indice del pokemon per trovare lo slug ed avanzare di uno

  const goToNextPokemon = () => {
    const currentIndex = getCurrentPokemonIndex();
    if (currentIndex < pokemons.length - 1) {
      const nextPokemonSlug = pokemons[currentIndex + 1].slug;
      fetchSinglePokemon(nextPokemonSlug);
    }
  };

  //todo uso l'indice del pokemon per trovare lo slug ed scalare di uno

  const goToPrevPokemon = () => {
    const currentIndex = getCurrentPokemonIndex();
    if (currentIndex > 0) {
      const prevPokemonSlug = pokemons[currentIndex - 1].slug;
      fetchSinglePokemon(prevPokemonSlug);
    }
  };

  const value = {
    isLoadingSinglePokemon,

    pokemons,
    isLoading,

    fetchSinglePokemon,
    currentPokemon,
    goToNextPokemon,
    goToPrevPokemon,
    getCurrentPokemonIndex,

    types,
    selectedTypes,
    setSelectedTypes,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
