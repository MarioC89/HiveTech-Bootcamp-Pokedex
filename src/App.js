import LoginForm from './components/login/LoginForm';

import styles from "./App.module.css"

function App() {
  return (
  <div className={styles.container}>
    <h1 className={styles.containerTitle}>HiveTech Bootcamp Pokedex</h1>
    <LoginForm />
  </div>)
}

export default App;
