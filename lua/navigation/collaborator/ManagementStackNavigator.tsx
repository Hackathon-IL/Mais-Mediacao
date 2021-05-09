import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import ManagementScreen from "../../screens/collaborator/ManagementScreen";
import DocumentScreen from "../../screens/collaborator/management/DocumentScreen";
import FaqScreen from "../../screens/collaborator/management/FaqScreen";
import MapScreen from "../../screens/collaborator/management/MapScreen";
import SupportScreen from "../../screens/collaborator/management/SupportScreen";
import QuestionsListScreen from "../../screens/collaborator/management/QuestionsListScreen";
import AnswerQuestionScreen from "../../screens/collaborator/management/AnswerQuestionScreen";
import EditAnswerScreen from "../../screens/collaborator/management/EditAnswerScreen";

export type ManagementStackNavigatorParamsList = {
    InitialPage: undefined
    Document: undefined
    Faq: undefined
    Map: undefined
    Support: undefined
    QuestionList: undefined
    AnswerQuestion: any
    EditAnswer: { question: any }
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
            <ManagementStack.Screen name="QuestionList" component={QuestionsListScreen} />
            <ManagementStack.Screen name="AnswerQuestion" component={AnswerQuestionScreen} />
            <ManagementStack.Screen name="EditAnswer" component={EditAnswerScreen} />
        </ManagementStack.Navigator>
    );
}
