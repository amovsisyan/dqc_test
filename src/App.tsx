import { initializeIcons, Stack } from "@fluentui/react";
import { SurveyFreeText } from "./components/surveys/SurveyFreeText";
import {useSurvey} from "./hooks/useAnswers";
import {calculateAverageHappiness} from "./utils/questionUtils";
import {Header} from "./components/header/Header";
initializeIcons();

function App() {
  const survey = useSurvey();
  const happinessScore = calculateAverageHappiness(survey.questions);

  return (
    <Stack style={{ margin: 20 }}>
        <Header title={survey.survey_title} score={happinessScore} />
      <Stack>
        <SurveyFreeText />
      </Stack>
    </Stack>
  );
}

export default App;
