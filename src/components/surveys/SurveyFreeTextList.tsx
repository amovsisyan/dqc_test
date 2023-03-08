import { FunctionComponent } from "react";
import {QuestionString} from "../../types/survey";
import {SurveyFreeText} from "./SurveyFreeText";
import {prepareTableDataForQuestions} from "../../utils/questionUtils";

interface Props {
  questions: QuestionString[] | undefined
}

export const SurveyFreeTextList: FunctionComponent<Props> = ({ questions }) => {
  const { columns, items, groups } = prepareTableDataForQuestions(questions)

  return (
      <SurveyFreeText
          columns={columns}
          items={items}
          groups={groups}
      />
  );
};
