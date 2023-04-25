import { motion, AnimatePresence } from "framer-motion";
import { Answer, QuestionInRounds } from "../../modals/studySets";
import { useParams, useSearchParams } from "react-router-dom";
import { SingleQuestionItem } from "./singleQuestionItem";
import { useEffect, useRef, useState } from "react";

type QuestioneerProps = {
  questions: QuestionInRounds[];
  setCompletedSet: (completed: boolean) => void;
  setAnswers: (answers: Answer[]) => void;
};

export const Questionieer = ({ questions, setCompletedSet, setAnswers }: QuestioneerProps) => {
  let { setId } = useParams();
  const [answerCheck, setAnswerCheck] = useState<Answer[]>([]);
  const [answer, setAnswer] = useState<string>("");
  const [isIncorrect, setIsincorrect] = useState<boolean>();
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const input = useRef(null);

  function handleQuestion() {
    let helper = currentQuestion;
    let question = questions[currentQuestion - 1]?.definition;
    if (questions[currentQuestion - 1].qestStatus === 2) {
      question = questions[currentQuestion - 1]?.quest;
    }
    console.log("Question", question, "Answer", answer);
    let allAnswers = answerCheck;
    if (question === answer) {
      setIsincorrect(false);
      if (questions?.length && helper < questions?.length) {
        helper++;
      } else if (helper == questions?.length) {
        setCompletedSet(true);
      }

      allAnswers.push({
        id: questions[currentQuestion - 1]?.id as number,
        correct: true,
      });
      console.log("Correct", allAnswers);
      setAnswerCheck(allAnswers);
      setCurrentQuestion(helper);
    } else {
      setIsincorrect(true);
    }
  }
  function handleWrongQuestion() {
    let helper = currentQuestion;
    let question = questions[currentQuestion - 1]?.definition;
    if (questions[currentQuestion - 1].qestStatus === 2) {
      question = questions[currentQuestion - 1]?.quest;
    }
    console.log("Question", question, "Answer", answer);
    let allAnswers = answerCheck;
    if (question === answer) {
      setIsincorrect(false);
      if (questions?.length && helper < questions?.length) {
        helper++;
      } else if (helper == questions?.length) {
        setCompletedSet(true);
      }

      allAnswers.push({
        id: questions[currentQuestion - 1]?.id as number,
        correct: false,
      });
      setAnswerCheck(allAnswers);
      setCurrentQuestion(helper);
    } else {
      setIsincorrect(true);
    }
  }
  function handleSkip() {
    let helper = currentQuestion;
    let allAnswers = answerCheck;
    setIsincorrect(false);
    if (questions?.length && helper < questions?.length) {
      helper++;
    } else if (helper == questions?.length) {
      setCompletedSet(true);
    }

    allAnswers.push({
      id: questions[currentQuestion - 1]?.id as number,
      correct: false,
    });
    setAnswerCheck(allAnswers);
    setCurrentQuestion(helper);
  }

  function acceptQuestion() {
    let helper = currentQuestion;
    let allAnswers = answerCheck;
    setIsincorrect(false);
    if (questions?.length && helper < questions?.length) {
      helper++;
    } else if (helper == questions?.length) {
      setCompletedSet(true);
    }

    allAnswers.push({
      id: questions[currentQuestion - 1]?.id as number,
      correct: true,
    });
    console.log("Correct", allAnswers);
    setAnswerCheck(allAnswers);
    setCurrentQuestion(helper);
  }

  useEffect(() => {
    console.log("useEffect", answerCheck);
    setAnswers(answerCheck);
  }, [answerCheck.length]);

  return (
    <div>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{
            opacity: 0,
            x: "100%",
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.4,
            },
          }}
          exit={{
            opacity: 0,
            x: "-100%",
            transition: {
              duration: 0.4,
            },
          }}
        >
          <div>
            <SingleQuestionItem
              acceptQuestion={acceptQuestion}
              isIncorrect={isIncorrect}
              answer={answer}
              answerCheck={answerCheck}
              setAnswer={setAnswer}
              setAnswerCheck={setAnswerCheck}
              question={questions[currentQuestion - 1]}
            />
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center items-center mt-6">
        {isIncorrect ? (
          <button
            className="text-blue-600 text-lg font-bold mr-6"
            onClick={() => {
              handleSkip();
            }}
          >
            Skip
          </button>
        ) : null}

        <button
          className="text-lg bg-blue-600 whitespace-nowrap text-white px-6 py-1.5 lg:py-2 rounded-full font-bold  border-2 border-blue-600 hover:bg-white hover:text-blue-600 transition-colors duration-300"
          onClick={() => {
            if (isIncorrect) {
              handleWrongQuestion();
            } else {
              handleQuestion();
            }
          }}
        >
          Check
        </button>
      </div>
    </div>
  );
};
