import React from "react";
import QuestionInterface from "../interface/QuestionInterface";

const QuestionBox = ({ question, answer, id }: QuestionInterface) => {
  return (
    <div className="question-box">
      <h3>ნამიოკი # {id}</h3>
      <p>
        {question} - ნამიოკი {answer.charAt(0)}
      </p>
    </div>
  );
};

export default QuestionBox;
