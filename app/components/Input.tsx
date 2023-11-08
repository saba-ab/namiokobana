import React, { ChangeEventHandler } from "react";
import styles from "../styles/game.module.css";
interface Props {
  handleAnswer: () => void;
  handleInput: ChangeEventHandler<HTMLInputElement>;
  value: string;
}
const Input = ({ handleAnswer, handleInput, value }: Props) => {
  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder="პასუხი"
        onChange={handleInput}
        value={value}
      />
      <button onClick={handleAnswer}>sumbit</button>
    </div>
  );
};

export default Input;
