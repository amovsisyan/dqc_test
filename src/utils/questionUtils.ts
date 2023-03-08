import {Question} from "../types/survey";
import {QUESTION_TYPE_NUMBER} from "../constants/question";

export const calculateAverageHappiness = (questions: Question[] | undefined): number => {
    if (!questions) {
        return 0;
    }

    let totalAverage = 0;
    let totalNumberQuestionsCount = 0;
    questions.forEach((question) => {
        if (question.type === QUESTION_TYPE_NUMBER) {
            // @ts-ignore
            const average = question.responses.reduce((a: number, b: number) => a + b, 0) / question.responses.length;
            totalAverage += average * 20;
            totalNumberQuestionsCount += 1;
        }
    })


    if (!totalNumberQuestionsCount) {
        return 0;
    }

    return Math.round(totalAverage / totalNumberQuestionsCount);

}
