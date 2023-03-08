import {Question, QuestionType} from "../types/survey";
import {QUESTION_TYPE_NUMBER, QUESTION_TYPE_TEXT} from "../constants/question";
import {IColumn} from "@fluentui/react/lib/components/DetailsList/DetailsList.types";
import {IGroup} from "@fluentui/react/lib/components/GroupedList";

// I might get the calculation logic incorrectly as it broke the test, but this is what it is
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
            totalAverage += average;
            totalNumberQuestionsCount += 1;
        }
    })


    if (!totalNumberQuestionsCount) {
        return 0;
    }

    return Math.round(totalAverage * 20 / totalNumberQuestionsCount);
}

export const getQuestionPerType = (questions: Question[] | undefined, type: QuestionType): Question[] | undefined =>
    questions?.filter(question => question.type === type)

export const prepareTableDataForQuestions = (questions: Question[] | undefined): {
    columns: IColumn[]
    groups: IGroup[]
    items: string[]
} => {
    const data = {
        columns: [{ key: 'name', name: 'Text answers', minWidth: 100 }],
        groups: [] as IGroup[],
        items: [] as string[]
    };

    let prevStartIndex = 0;

    questions?.forEach((question, i) => {
        data.groups.push(
            {
                key: question.question_text,
                name: question.question_text,
                startIndex: prevStartIndex,
                count: question.responses.length,
                level: 0,
                isCollapsed: i !== 0
            },
        )
        data.items = [...data.items, ...question.responses] as string[]
        prevStartIndex += question.responses.length;
    })

    return data;
}
