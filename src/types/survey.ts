import {QUESTION_TYPE_NUMBER, QUESTION_TYPE_TEXT} from "../constants/question";

export type QuestionType = typeof QUESTION_TYPE_NUMBER | typeof QUESTION_TYPE_TEXT;

export interface Question {
    question_text: string
    type: QuestionType
    responses: number[] | string[]
}

export interface Survey {
    survey_title: string
    created_at: string
    questions: Question[]
}
