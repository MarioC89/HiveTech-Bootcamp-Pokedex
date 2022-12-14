import IndividualPokemon from "./IndividualPokemon";
import styles from "./pokemons.module.css"

const FetchPokemons = () => {
    return (
        <>
            <button className={styles.button}>Fetch Pokemons!</button>
            <ul className={styles.list}>
                <IndividualPokemon />
            </ul>
        </>
    );
};

export default FetchPokemons;