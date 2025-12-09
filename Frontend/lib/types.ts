export type QuestionType = "text" | "radio" | "checkbox";

export interface QuizQuestion {
  id: string | number;
  type: QuestionType;
  question: string;
  choices?: string[];
}

export interface UserAnswer {
  id: string | number;
  value: string | number | number[];
}
