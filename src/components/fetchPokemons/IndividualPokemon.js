import styles from "./pokemons.module.css"

const IndividualPokemon = (props) => {
    return (
        <li className={styles.listItem}>
            <p>
                Pokemon name: <span className={styles.listItemTextData}>{props.name}</span>
                </p>
            <p>
                Pokemon URL: <span className={styles.listItemTextData}>{props.url}</span>
            </p>
        </li>
    )
}

export default IndividualPokemon;