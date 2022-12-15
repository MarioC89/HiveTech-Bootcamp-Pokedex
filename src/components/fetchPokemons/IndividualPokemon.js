import { useContext } from "react";
import Contex from "../../context/context";
import styles from "./pokemons.module.css";

const IndividualPokemon = (props) => {
  const ctx = useContext(Contex);
  console.log(ctx.pokemonProfile);

  return (
    <li className={styles.listItem}>
      <p>
        Pokemon name:{" "}
        <span className={styles.listItemTextData}>{props.name}</span>
      </p>
      <p>
        Pokemon URL:{" "}
        {/* <span className={styles.listItemTextData}>{props.url}</span> */}
        <button onClick={() => ctx.onFetchPokemonProfile(props.url)}>
          {props.url}
        </button>
      </p>
    </li>
  );
};

export default IndividualPokemon;