"use client";
import React, { ChangeEvent, useState } from "react";
import styles from "../styles/game.module.css";
import { questions } from "../tools/questions";
import QuestionBox from "../components/QuestionBox";
import Question from "../interface/QuestionInterface";
import Input from "../components/Input";
const Game = () => {
  const [questionsArr, setQuestionsArr] = useState<Question[]>([...questions]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [input, setInput] = useState<string>("");
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleAnswer = () => {
    if (!questionsArr[currentQuestion].answer) return;
    if (questionsArr[currentQuestion].answer === input) {
      questionsArr[currentQuestion].is_correct =
        !questionsArr[currentQuestion].is_correct;
      alert(`Correct!`);
      setInput("");
    } else {
      alert("false");
      setInput("");
    }
    setCurrentQuestion((prev) => prev + 1);
  };
  return (
    <div className={styles.main}>
      <QuestionBox
        question={questionsArr[currentQuestion].question}
        answer={questionsArr[currentQuestion].answer}
        id={questionsArr[currentQuestion].id}
        key={questionsArr[currentQuestion].id}
        is_correct={questionsArr[currentQuestion].is_correct}
      />
      <Input
        value={input}
        handleAnswer={handleAnswer}
        handleInput={handleInput}
      />
    </div>
  );
};

export default Game;
