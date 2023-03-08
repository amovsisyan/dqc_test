import { initializeIcons, Stack } from "@fluentui/react";
import {useSurvey} from "./hooks/useAnswers";
import {calculateAverageHappiness, getQuestionPerType} from "./utils/questionUtils";
import {Header} from "./components/header/Header";
import {SurveyFreeTextList} from "./components/surveys/SurveyFreeTextList";
import {QUESTION_TYPE_TEXT} from "./constants/question";
import {QuestionString} from "./types/survey";
initializeIcons();

function App() {
  const survey = useSurvey();
  const happinessScore = calculateAverageHappiness(survey.questions);
  const freeTextQuestions = getQuestionPerType(survey.questions, QUESTION_TYPE_TEXT) as QuestionString[]

  return (
    <Stack style={{ margin: 20 }}>
        <Header title={survey.survey_title} score={happinessScore} />
      <Stack>
        <SurveyFreeTextList questions={freeTextQuestions} />
      </Stack>
    </Stack>
  );
}

export default App;
