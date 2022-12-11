import { useState,useEffect } from "react";
import LoginForm from './components/login/LoginForm';
import FetchPokemons from './components/fetchPokemons/fetchPokemons';

import styles from "./App.module.css"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn'));
  }, [isLoggedIn]);

  return (
  <div className={styles.container}>
    <h1 className={styles.containerTitle}>HiveTech Bootcamp Pokedex</h1>
    {!isLoggedIn && <LoginForm onFinish={setIsLoggedIn} />}
    {isLoggedIn && <FetchPokemons />}
  </div>)
}

export default App;
