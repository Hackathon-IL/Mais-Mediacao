import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import EmergencialAidScreen from "../../screens/collaborator/EmergencialAidScreen";
import TutorialScreen from "../../screens/collaborator/emergencial_aid/TutorialScreen";
import MapScreen from "../../screens/collaborator/emergencial_aid/MapScreen";
import FaqScreen from "../../screens/collaborator/emergencial_aid/FaqScreen";
import SendQuestionScreen from "../../screens/collaborator/emergencial_aid/SendQuestionScreen";

export type EmergencialAidStackNavigatorParamsList = {
    InitialPage: undefined
    Tutorial: undefined
    Map: undefined
    Faq: undefined
    SendQuestion: undefined
}

const EmergencialAidStack = createStackNavigator<EmergencialAidStackNavigatorParamsList>();

export default () => {
    return (
        <EmergencialAidStack.Navigator headerMode="none">
            <EmergencialAidStack.Screen name="InitialPage" component={EmergencialAidScreen} />
            <EmergencialAidStack.Screen name="Tutorial" component={TutorialScreen} />
            <EmergencialAidStack.Screen name="Map" component={MapScreen} />
            <EmergencialAidStack.Screen name="Faq" component={FaqScreen} />
            <EmergencialAidStack.Screen name="SendQuestion" component={SendQuestionScreen} />
        </EmergencialAidStack.Navigator>
    );
}
