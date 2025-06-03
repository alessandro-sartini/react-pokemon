import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const apiUrl = import.meta.env.VITE_API_POKEMON;
  //!all pokemonsimport { the } from './../../node_modules/react-router/dist/development/register-BkDIKxVz.d';

  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // ! signle pokemon
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [isLoadingSinglePokemon, setIsLoadingSinglePokemon] = useState(false);

  // !types
  const [types, setTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]); 
  const [isLoadingTypes, setIsLoadingTypes] = useState(false);


  useEffect(() => {
    axios
      .get(apiUrl+"?type="+selectedTypes)
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
      .get(`${apiUrl}/bySlug/${slug}`)
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
    setIsLoadingTypes(true);
    axios
      .get(`http://localhost:8080/api/types`)
      .then((response) => {
        setTypes(response.data);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei tipi:", error);
        setTypes([]);
      })
      .finally(() => {
        setIsLoadingTypes(false);
      });
  }, []);

  const value = {
    isLoadingSinglePokemon,

    pokemons,
    isLoading,

    fetchSinglePokemon,
    currentPokemon,

    // fetchTypes,
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
