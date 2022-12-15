import { Divider } from "antd";
import { useContext, useState } from "react";
import Contex from "../../context/context";
import IndividualPokemon from "./IndividualPokemon";

import styles from "./pokemons.module.css";

const FetchPokemons = () => {
  const ctx = useContext(Contex);
  //   const [pokemons, setPokemons] = useState([]);
  //   const [pokemonsNumber, setPokemonsNumber] = useState(0);

  //   const fetchPokemonsHandler = () => {
  //     fetch("https://pokeapi.co/api/v2/pokemon")
  //       .then((response) => response.json())
  //       .then((data) => [
  //         setPokemonsNumber(data.count),
  //         setPokemons(data.results),
  //       ]);
  //   };

  return (
    <>
      <button className={styles.button} onClick={ctx.onFetchPokemons}>
        Fetch Pokemons!
      </button>
      <h2>There are {ctx.pokemonsNumber} Pokemons!</h2>
      <ul className={styles.list}>
        {ctx.pokemons.map((pokemon) => {
          return (
            <div key={pokemon.url}>
              <IndividualPokemon name={pokemon.name} url={pokemon.url} />
              <Divider />
            </div>
          );
        })}
      </ul>
      <button className={styles.button} onClick={ctx.onLogout}>
        Log Out
      </button>
    </>
  );
};

export default FetchPokemons;