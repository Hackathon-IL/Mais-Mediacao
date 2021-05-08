import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import ChatScreen from "../../screens/collaborator/ChatScreen";
import DeafScreen from "../../screens/collaborator/chat/DeafScreen";
import ImmigrantScreen from "../../screens/collaborator/chat/ImmigrantScreen";
import IndigenousScreen from "../../screens/collaborator/chat/IndigenousScreen";

export type ChatStackNavigatorParamsList = {
    InitialPage: undefined
    Deaf: undefined
    Immigrant: undefined
    Indigenous: undefined
}

const ChatStack = createStackNavigator<ChatStackNavigatorParamsList>();

export default () => {
    return (
        <ChatStack.Navigator headerMode="none">
            <ChatStack.Screen name="InitialPage" component={ChatScreen} />
            <ChatStack.Screen name="Deaf" component={DeafScreen} />
            <ChatStack.Screen name="Immigrant" component={ImmigrantScreen} />
            <ChatStack.Screen name="Indigenous" component={IndigenousScreen} />
        </ChatStack.Navigator>
    );
}
