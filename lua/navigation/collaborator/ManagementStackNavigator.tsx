import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import ManagementScreen from "../../screens/collaborator/ManagementScreen";
import DocumentScreen from "../../screens/collaborator/management/DocumentScreen";
import FaqScreen from "../../screens/collaborator/management/FaqScreen";
import MapScreen from "../../screens/collaborator/management/MapScreen";
import SupportScreen from "../../screens/collaborator/management/SupportScreen";
import SendQuestionScreen from "../../screens/collaborator/management/SendQuestionScreen";

export type ManagementStackNavigatorParamsList = {
    InitialPage: undefined
    Document: undefined
    Faq: undefined
    Map: undefined
    Support: undefined
    SendQuestion: undefined
}

const ManagementStack = createStackNavigator<ManagementStackNavigatorParamsList>();

export default () => {
    return (
        <ManagementStack.Navigator headerMode="none">
            <ManagementStack.Screen name="InitialPage" component={ManagementScreen} />
            <ManagementStack.Screen name="Document" component={DocumentScreen} />
            <ManagementStack.Screen name="Faq" component={FaqScreen} />
            <ManagementStack.Screen name="Map" component={MapScreen} />
            <ManagementStack.Screen name="Support" component={SupportScreen} />
            <ManagementStack.Screen name="SendQuestion" component={SendQuestionScreen} />
        </ManagementStack.Navigator>
    );
}
