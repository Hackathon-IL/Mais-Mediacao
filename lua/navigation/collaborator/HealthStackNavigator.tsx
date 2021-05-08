import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import HealthScreen from "../../screens/collaborator/HealthScreen";
import CovidScreen from "../../screens/collaborator/health/CovidScreen";
import FaqScreen from "../../screens/collaborator/health/FaqScreen";
import MapScreen from "../../screens/collaborator/health/MapScreen";
import SymptomScreen from "../../screens/collaborator/health/SymptomScreen";
import SendQuestionScreen from "../../screens/collaborator/health/SendQuestionScreen";

export type HealthStackNavigatorParamsList = {
    InitialPage: undefined
    Covid: undefined
    Faq: undefined
    Map: undefined
    Symptom: undefined
    SendQuestion: undefined
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
            <HealthStack.Screen name="SendQuestion" component={SendQuestionScreen} />
        </HealthStack.Navigator>
    );
}
