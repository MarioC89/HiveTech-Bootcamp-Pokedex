import React, { useState } from "react";

const initialState = {
  isLoggedIn: false,
  pokemons: [],
  pokemonsNumber: 0,
  pokemonProfile: {},
  onLogin: () => {},
  onLogout: () => {},
  onFetchPokemons: () => {},
  onFetchPokemonProfile: () => {},
};

const Contex = React.createContext(initialState);

export const ContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsNumber, setPokemonsNumber] = useState(0);
  const [pokemonProfile, setPokemonProfile] = useState({});

  const logInHandler = () => {
    setIsLoggedIn(true);
  };

  const logOuthandler = () => {
    setIsLoggedIn(false);
  };

  const fetchPokemonsHandler = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => [
        setPokemonsNumber(data.count),
        setPokemons(data.results),
      ]);
  };

  const fetchPokemonProfile = (pokemonUrl) => {
    fetch(pokemonUrl)
      .then((response) => response.json())
      .then((data) => setPokemonProfile(data));
  };

  return (
    <Contex.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: logInHandler,
        onLogout: logOuthandler,
        pokemons: pokemons,
        pokemonsNumber: pokemonsNumber,
        onFetchPokemons: fetchPokemonsHandler,
        pokemonProfile: pokemonProfile,
        onFetchPokemonProfile: fetchPokemonProfile,
      }}
    >
      {props.children}
    </Contex.Provider>
  );
};

export default Contex;