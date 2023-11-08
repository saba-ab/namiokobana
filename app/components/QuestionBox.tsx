import React from "react";
import Question from "../interface/QuestionInterface";
import styles from "../styles/game.module.css";
const QuestionBox = ({ question, answer, id }: Question) => {
  return (
    <div className={styles.question_box}>
      <h3>ნამიოკი # {id}</h3>
      <p>
        {question} - ნამიოკი {answer.charAt(0)}
      </p>
      <div className={styles.letters}>
        {answer.split("").map((letter) => {
          return <div key={letter} className={styles.letter}></div>;
        })}
      </div>
    </div>
  );
};

export default QuestionBox;
