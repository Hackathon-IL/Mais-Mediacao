import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import HealthScreen from "../../screens/collaborator/HealthScreen";
import CovidScreen from "../../screens/collaborator/health/CovidScreen";
import FaqScreen from "../../screens/collaborator/health/FaqScreen";
import MapScreen from "../../screens/collaborator/health/MapScreen";
import SymptomScreen from "../../screens/collaborator/health/SymptomScreen";
import QuestionsListScreen from "../../screens/collaborator/health/QuestionsListScreen";
import AnswerQuestionScreen from "../../screens/collaborator/health/AnswerQuestionScreen";
import EditAnswerScreen from "../../screens/collaborator/health/EditAnswerScreen";

export type HealthStackNavigatorParamsList = {
    InitialPage: undefined
    Covid: undefined
    Faq: undefined
    Map: undefined
    Symptom: undefined
    QuestionList: undefined
    AnswerQuestion: any
    EditAnswer: any
}

const HealthStack = createStackNavigator<HealthStackNavigatorParamsList>();

export default () => {
    return (
        <HealthStack.Navigator headerMode="none">
            <HealthStack.Screen name="InitialPage" component={HealthScreen} />
            <HealthStack.Screen name="Covid" component={CovidScreen} />
            <HealthStack.Screen name="Faq" component={FaqScreen} />
            <HealthStack.Screen name="Map" component={MapScreen} />
            <HealthStack.Screen name="Symptom" component={SymptomScreen} />
            <HealthStack.Screen name="QuestionList" component={QuestionsListScreen} />
            <HealthStack.Screen name="AnswerQuestion" component={AnswerQuestionScreen} />
            <HealthStack.Screen name="EditAnswer" component={EditAnswerScreen} />
        </HealthStack.Navigator>
    );
}
