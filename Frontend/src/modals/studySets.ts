export type StudySetArgs = {
  id: number;
  count: number;
  progress: number;
  name: string;
  created: Date;
  description?: string;
  questions: Question[];
};

export type Question = {
  definition: string;
  definitionStatus: number;
  id: number;
  isActive: boolean;
  isLearned: boolean;
  question: string;
  questionStatus: number;
};

export type QuestionInRounds = {
  definition: string;
  id: number;
  definitionStatus: number;
  isActive: boolean;
  isLearned: boolean;
  qestStatus: number;
  quest: string;
};

export type QuestionSet = {
  id: number;
  created: Date;
  count: number;
  questions: QuestionInRounds[];
};

export type Answer = {
  correct: boolean;
  id: number;
};
