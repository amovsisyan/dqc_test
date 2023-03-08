import { FontIcon, initializeIcons, Stack, Text } from "@fluentui/react";
import { SurveyFreeText } from "./components/surveys/survey-free-text";
import {useSurvey} from "./hooks/useAnswers";
initializeIcons();

function App() {
  const happinessScore = 73;
  const survey = useSurvey();

  return (
    <Stack style={{ margin: 20 }}>
      <h1>
        <FontIcon iconName="ClipboardList" style={{ marginRight: "5px" }} />
          {survey.survey_title}
      </h1>

      <h1 data-testid="happinessScore">
        <FontIcon iconName="ChatBot" style={{ marginRight: "5px" }} />
        {happinessScore} / 100
      </h1>
      <Stack>
        <SurveyFreeText />
      </Stack>
    </Stack>
  );
}

export default App;
