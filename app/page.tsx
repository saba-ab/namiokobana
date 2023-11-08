import styles from "./page.module.css";
import StartGame from "./components/StartGame";
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Guess the word</h1>
      <p>this game is about to guess the word with one letter hint</p>
      <StartGame />
    </main>
  );
}
