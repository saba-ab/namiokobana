"use client";
import React, { useState } from "react";
import { questions } from "../tools/questions";
import QuestionBox from "../components/QuestionBox";
import QuestionInterface from "../interface/QuestionInterface";
const Game = () => {
  const [questionsArr, setQuestionsArr] = useState<QuestionInterface[]>([]);
  return (
    <div>
      {questionsArr.map((item) => {
        return (
          <QuestionBox
            question={item.question}
            answer={item.answer}
            id={item.id}
            key={item.id}
            is_correct={item.is_correct}
          />
        );
      })}
    </div>
  );
};

export default Game;
