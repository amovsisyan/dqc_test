import { FunctionComponent } from "react";
import {QuestionString} from "../../types/survey";
import {SurveyFreeText} from "./SurveyFreeText";

interface Props {
  questions: QuestionString[] | undefined
}

export const SurveyFreeTextList: FunctionComponent<Props> = ({ questions }) => {
  return (
    <>{
      questions?.map((question) => {
        return <SurveyFreeText
            key={question.question_text}
            title={question.question_text}
            items={question.responses}
        />
      })
    }</>
  );
};
