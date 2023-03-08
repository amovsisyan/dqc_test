import {useEffect, useState} from "react";
import data from '../data/survey_results.json'
import {Survey} from "../types/survey";

export const useSurvey = () => {
    const [survey, setSurvey] = useState<Survey>({} as Survey);

    useEffect(() => {
        setSurvey(data as Survey);
    }, [])

    return survey
}
