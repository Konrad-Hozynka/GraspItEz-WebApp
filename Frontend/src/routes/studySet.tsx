import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Question, StudySetArgs } from "../modals/studySets";
import { QuestionItem } from "../components/questionItem";

export default function StudySet() {
  let { setId } = useParams();
  const [currentSet, setCurrentSet] = useState<StudySetArgs>();

  useEffect(() => {
    getCurrentSet();
  }, []);

  async function getCurrentSet() {
    const response = await fetch(`/jsonData/studySets/${setId}/details.json`);
    const data = await response.json();
    setCurrentSet(data);
  }

  return (
    <div className=" pb-8">
      <img className="w-full lg:h-96 object-cover" src="/images/quizOverview.jpg" alt="" />
      <div className="lg:w-2/3 mx-auto p-4">
        <div className="lg:flex lg:justify-between lg:items-center gap-x-4">
          <div className="mb-4 lg:mb-0">
            <h1 className="pt-2 lg:pt-4 text-blue-600">{currentSet?.name}</h1>
            <h2 className=" text-gray-500 font-normal">{currentSet?.description}</h2>
          </div>
          <Link
            to={`/studySet/${setId}/quiz?name=${currentSet?.name}&set=1`}
            className="bg-blue-600 whitespace-nowrap text-white px-4 py-1.5 lg:py-2 rounded-full font-bold mt-3 border-2 border-blue-600 hover:bg-white hover:text-blue-600 transition-colors duration-300"
          >
            Get started!
          </Link>
        </div>
        <div className="mt-12">
          <h2 className="text-green-600">Completed</h2>
          <div>
            {currentSet?.questions?.map((question: Question, key: number) => {
              if (question?.isActive && question?.isLearned) {
                return (
                  <QuestionItem
                    key={key}
                    id={question?.id}
                    isActive={question?.isActive}
                    isLearned={question?.isLearned}
                    questionText={question?.question}
                    definition={question?.definition}
                  />
                );
              }
            })}
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-yellow-600">Pending</h2>
          <div>
            {currentSet?.questions?.map((question: Question, key: number) => {
              if (question?.isActive && question?.isLearned == false) {
                return (
                  <QuestionItem
                    key={key}
                    id={question?.id}
                    isActive={question?.isActive}
                    isLearned={question?.isLearned}
                    questionText={question?.question}
                    definition={question?.definition}
                  />
                );
              }
            })}
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-red-600">Not started</h2>
          <div>
            {currentSet?.questions?.map((question: Question, key: number) => {
              if (!question?.isActive && !question?.isLearned) {
                return (
                  <QuestionItem
                    key={key}
                    id={question?.id}
                    isActive={question?.isActive}
                    isLearned={question?.isLearned}
                    questionText={question?.question}
                    definition={question?.definition}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
