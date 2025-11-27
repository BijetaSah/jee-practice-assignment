"use client";
import { FaArrowRight } from "react-icons/fa";

import { questions } from "@/app/data/questions";
import { useState } from "react";
import EndScreen from "./EndScreen";

function QuestionBox() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const question = questions[currentQuestion];

  function handlenextQuestion() {
    if (currentQuestion === questions.length - 1) {
      setIsFinished(true);
      return;
    }
    //  move to next question
    setCurrentQuestion((prev) => prev + 1);
    setSelectedAnswer(null);
  }

  function handleCorrectAnswer(answer: string) {
    setSelectedAnswer(answer);
    if (answer === question.answer) setScore((prev) => prev + 1);
    return;
  }

  if (isFinished) return <EndScreen score={score} />;
  return (
    <div className="w-full sm:w-8/10 md:w-5/10 bg-blue-50 mx-auto mt-10 shadow-lg rounded-md px-5 py-8 flex flex-col gap-2">
      <p className="ml-auto font-semibold">
        <span>Score : </span>
        {score}/{questions.length}
      </p>
      <h4>
        <span className="font-semibold">Question {currentQuestion + 1} : </span>
        {question.question}
      </h4>
      {/* options */}
      <div className="flex flex-col gap-4 mt-5">
        {question.options.map((option, idx) => {
          const isCorrect = option === question.answer;
          const isSelected = option === selectedAnswer;
          let borderClass = "border-blue-400";
          if (selectedAnswer) {
            if (isCorrect)
              borderClass = "border-green-500 bg-green-600 text-white";
            else if (isSelected)
              borderClass = "border-red-500 bg-red-600 text-white";
          }

          return (
            <button
              key={idx}
              disabled={selectedAnswer !== null}
              className={`border-2 pl-6 py-2 rounded-full cursor-pointer text-start ${borderClass}`}
              onClick={() => handleCorrectAnswer(option)}
            >
              {option}
            </button>
          );
        })}
      </div>

      {/* Next button */}
      <button
        className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300 ml-auto rounded-lg mt-5 flex items-center gap-2 cursor-pointer"
        onClick={handlenextQuestion}
      >
        Next <FaArrowRight />
      </button>
    </div>
  );
}
export default QuestionBox;
