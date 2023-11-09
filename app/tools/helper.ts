import Question from "../interface/QuestionInterface";
import React, { ChangeEvent } from "react";
export const resetGame = (
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>,
  setScore: React.Dispatch<React.SetStateAction<number>>,
  setInput: React.Dispatch<React.SetStateAction<string>>,
  setHide: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setCurrentQuestion(0);
  setScore(0);
  setInput("");
  setHide(false);
};
export const handleAnswer = (
  currentQuestion: number,
  questionsArr: Question[],
  input: string,
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>,
  setScore: React.Dispatch<React.SetStateAction<number>>,
  setInput: React.Dispatch<React.SetStateAction<string>>,
  setHide: React.Dispatch<React.SetStateAction<boolean>>,
  score: number,
  hide: boolean
) => {
  if (!questionsArr[currentQuestion].answer || input.trim() === "") return;

  if (questionsArr[currentQuestion].answer === input) {
    alert("Correct!");
    setScore((prev) => prev + 1);
  } else {
    alert("Incorrect");
  }
  setInput("");

  if (currentQuestion === 4) {
    setHide(!hide);
    return;
  }

  setCurrentQuestion((prev) => prev + 1);
};
export const handleInputChange = (
  e: ChangeEvent<HTMLInputElement>,
  setInput: React.Dispatch<React.SetStateAction<string>>
) => {
  setInput(e.target.value);
};
