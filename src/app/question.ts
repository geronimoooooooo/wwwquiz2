import { Answer } from "./answer";

export interface Question {
    id: number;
    text: string;
    quiz_id: number;
    answers: Answer[];
}
