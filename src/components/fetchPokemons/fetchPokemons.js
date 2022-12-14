import { useState } from "react";
import IndividualPokemon from "./IndividualPokemon";
import { Divider } from 'antd';

import styles from "./pokemons.module.css";

const FetchPokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonsNumber, setPokemonsNumber] = useState(0);

    const fetchPokemonsHandler = () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then((response) => response.json())
            .then((data) => [
                setPokemonsNumber(data.count), 
                setPokemons(data.results),
            ]);
    };
 
    return (
        <>
            <button className={styles.button} onClick={fetchPokemonsHandler}>
                Fetch Pokemons!
            </button>
            <h2>There are {pokemonsNumber} Pokemons!</h2>
            <ul className={styles.list}>
                {pokemons.map((pokemon) => {
                    return (
                        <div key={pokemon.url}>
                            <IndividualPokemon name={pokemon.name} url={pokemon.url}/>
                            <Divider />
                        </div>
                    )
                })}
            </ul>
        </>
    );
};

export default FetchPokemons;