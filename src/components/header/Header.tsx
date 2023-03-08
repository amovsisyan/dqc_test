import {FontIcon} from "@fluentui/react";
import React from "react";

interface Props {
    title: string
    score: number
}

export const Header: React.FC<Props> = ({title, score}) => {
    return (
        <>
            <h1>
                <FontIcon iconName="ClipboardList" style={{ marginRight: "5px" }} />
                {title}
            </h1>

            <h1 data-testid="happinessScore">
                <FontIcon iconName="ChatBot" style={{ marginRight: "5px" }} />
                {score} / 100
            </h1>
        </>
    );
}
