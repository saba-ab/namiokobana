"use client";
import React, { ChangeEvent, useState } from "react";
import styles from "../styles/game.module.css";
import { questions } from "../tools/questions";
import QuestionBox from "../components/QuestionBox";
import Question from "../interface/QuestionInterface";
import Input from "../components/Input";
import Scores from "../components/Scores";
import { resetGame, handleAnswer, handleInputChange } from "../tools/helper";
const Game = () => {
  const [questionsArr, setQuestionsArr] = useState<Question[]>([...questions]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [input, setInput] = useState<string>("");
  const [hide, setHide] = useState<boolean>(false);
  return (
    <div className={styles.main}>
      <h2>{currentQuestion + 1} / 5 კითხვა</h2>

      <QuestionBox
        question={questionsArr[currentQuestion].question}
        answer={questionsArr[currentQuestion].answer}
        id={questionsArr[currentQuestion].id}
        key={questionsArr[currentQuestion].id}
        is_correct={questionsArr[currentQuestion].is_correct}
      />
      {!hide ? (
        <Input
          value={input}
          handleAnswer={() =>
            handleAnswer(
              currentQuestion,
              questionsArr,
              input,
              setCurrentQuestion,
              setScore,
              setInput,
              setHide,
              score,
              hide
            )
          }
          handleInput={(e) => handleInputChange(e, setInput)}
        />
      ) : null}
      {hide ? (
        <>
          <Scores score={score} />
          <button
            className={styles.reset}
            onClick={() =>
              resetGame(setCurrentQuestion, setScore, setInput, setHide)
            }
          >
            play again
          </button>{" "}
        </>
      ) : null}
    </div>
  );
};

export default Game;
