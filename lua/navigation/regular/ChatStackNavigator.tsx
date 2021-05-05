import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import ChatScreen from "../../screens/regular/ChatScreen";

export type ChatStackNavigatorParamsList = {
    InitialPage: undefined
}

const ChatStack = createStackNavigator<ChatStackNavigatorParamsList>();

export default () => {
    return (
        <ChatStack.Navigator headerMode="none">
            <ChatStack.Screen name="InitialPage" component={ChatScreen} />
        </ChatStack.Navigator>
    );
}
