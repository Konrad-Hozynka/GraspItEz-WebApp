import { useSearchParams } from "react-router-dom";
import { Answer, Question, QuestionInRounds } from "../../modals/studySets";
import { useState } from "react";

type QuestionItemProps = {
  question?: QuestionInRounds;
  answerCheck: Answer[];
  setAnswerCheck: (answer: Answer[]) => void;
  answer: string;
  setAnswer: (value: string) => void;
  acceptQuestion: () => void;
  isIncorrect?: boolean;
};

export const SingleQuestionItem = ({
  question,
  acceptQuestion,
  isIncorrect,
  setAnswer,
  ...props
}: QuestionItemProps) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center mt-8 ">
        {question?.qestStatus !== 2 ? question?.quest : question.definition}
      </h1>
      {isIncorrect ? (
        <div className="w-full p-4 mt-2 bg-red-400">
          <h3>Wrong answer</h3>
          <h4>
            Correct answer:{" "}
            <strong> {question?.qestStatus !== 2 ? question?.definition : question.quest}</strong>
          </h4>
          <button
            onClick={() => {
              acceptQuestion();
            }}
            className="text-white font-semibold underline-text"
          >
            I was right.
          </button>
        </div>
      ) : null}
      <input
        className="mt-6 text-2xl border-4 p-2 pl-4 rounded-full"
        type="text"
        name="answer"
        placeholder="Your answer"
        onChange={(event) => {
          setAnswer(event?.target?.value);
        }}
      />
    </div>
  );
};
