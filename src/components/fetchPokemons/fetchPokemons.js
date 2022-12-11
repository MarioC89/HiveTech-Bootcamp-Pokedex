import styles from "./pokemons.module.css"

const FetchPokemons = () => {
    return (
        <div>
            <button className={styles.contaier}>Fetch Pokemons!</button>
        </div>
    );
};

export default FetchPokemons;