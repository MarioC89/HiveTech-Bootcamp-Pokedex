import { useContext } from "react";
import Contex from "../../context/context";

import styles from "./pokemons.module.css";

const PokemonProfile = () => {
  const ctx = useContext(Contex);

  return (
    <>
      <h1>Name: {ctx.pokemonProfile.name} </h1>
      <br />
      <p>Height: {ctx.pokemonProfile.height}</p>
      <p>Weight: {ctx.pokemonProfile.weight}</p>
      <p>Moves: </p>
      <ul>
        {ctx.pokemonProfile.moves.slice(0, 10).map((move) => {
          return <li>{move.move.name}</li>;
        })}
      </ul>
      <button className={styles.button} onClick={ctx.onLogout}>
        Log Out
      </button>
    </>
  );
};

export default PokemonProfile;