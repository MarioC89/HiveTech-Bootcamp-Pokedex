import { useState, useEffect, useContext } from "react";
import LoginForm from "./components/login/LoginForm";
import FetchPokemons from "./components/fetchPokemons/FetchPokemons";
import Contex from "./context/context";

import styles from "./App.module.css";
import PokemonProfile from "./components/fetchPokemons/PokemonProfil";

function App() {
  const ctx = useContext(Contex);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // browser's local storage
  // useEffect(() => {
  //   setIsLoggedIn(localStorage.getItem("isLoggedIn"));
  // }, [isLoggedIn]);

  return (
    <div className={styles.container}>
      <h1 className={styles.containerTitle}>HiveTech Bootcamp Pokemon task</h1>
      {!ctx.isLoggedIn && <LoginForm onFinish={ctx.onLogin} />}
      {ctx.isLoggedIn && Object.keys(ctx.pokemonProfile).length === 0 && (
        <FetchPokemons />
      )}
      {ctx.isLoggedIn && Object.keys(ctx.pokemonProfile).length > 0 && (
        <PokemonProfile />
      )}
    </div>
  );
}

export default App;
