import { Question } from "../modals/studySets";

type QuestionSetData = {
  id: number;
  isActive: boolean;
  isLearned: boolean;
  questionText: string;
  definition: string;
};

export const QuestionItem = ({ id, isActive, isLearned, questionText, definition }: QuestionSetData) => {
  return (
    <div className="flex justify-between shadow-md p-2 py-1.5 mb-2">
      <h3>{questionText}</h3>
      <h3 className="font-normal">{definition}</h3>
    </div>
  );
};
