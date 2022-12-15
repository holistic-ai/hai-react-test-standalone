export type QuestionType = "radio" | "checkbox";

export interface Option {
  id: string;
  text: string;
}

export interface Section {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  type: QuestionType;
  visibilityCriteria: string[];
  required: boolean;
  section: Section;
}
