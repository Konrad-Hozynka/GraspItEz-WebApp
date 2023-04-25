import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useSearchParams } from "react-router-dom";
import { Answer, QuestionInRounds, QuestionSet, StudySetArgs } from "../modals/studySets";
import { Questionieer } from "../components/questionieer/questioneer";
import { RoundCompleted } from "../components/questionieer/roundCompleted";

export default function Quiz() {
  let { setId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSet = searchParams.get("set");
  const [questions, setQuestions] = useState<QuestionInRounds[]>([]);
  const [completedSet, setCompletedSet] = useState<boolean>(false);
  const [answers, setAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    getQuestions();
  }, [currentSet]);

  async function getQuestions() {
    const response = await fetch(`https://grasp-it-ez.azurewebsites.net/studySet/learn/start/${setId}`);
    const data = await response.json();
    setQuestions(data);
  }

  useEffect(() => {
    console.log(completedSet);
    if (completedSet) {
      submitAnswers();
    }
  }, [completedSet]);

  async function submitAnswers() {
    console.log("Rqeust", JSON.stringify(answers));
    const response = await fetch(`https://grasp-it-ez.azurewebsites.net/learn/${setId}`, {
      mode: "no-cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        answers,
      }),
    });
    console.log("Post request", response);
    const data = await response.json();
  }

  return (
    <div>
      <div id="quiz-image">
        <img className="w-full lg:h-64 object-cover" src="/images/quiz.jpg" alt="" />
        <h1 className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          {searchParams?.get("name")}
        </h1>
      </div>
      <div className="lg:w-2/3 mx-auto p-4">
        <h3 className="text-center">Round - {searchParams.get("set")} </h3>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={completedSet.toString()}
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
              {completedSet ? (
                <RoundCompleted setCompletedSet={setCompletedSet} progress={20} />
              ) : (
                <Questionieer
                  questions={questions}
                  setAnswers={setAnswers}
                  setCompletedSet={setCompletedSet}
                />
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      ;
    </div>
  );
}
