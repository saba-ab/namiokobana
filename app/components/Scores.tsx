import React from "react";
import styles from "../styles/game.module.css";
interface Props {
  score: number;
}
const Scores = ({ score }: Props) => {
  return (
    <div className={styles.scores}>
      <h2>your score is : {score}</h2>
    </div>
  );
};

export default Scores;
