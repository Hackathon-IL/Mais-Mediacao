import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import EmergencialAidScreen from "../../screens/regular/EmergencialAidScreen";

export type EmergencialAidStackNavigatorParamsList = {
    InitialPage: undefined
}

const EmergencialAidStack = createStackNavigator<EmergencialAidStackNavigatorParamsList>();

export default () => {
    return (
        <EmergencialAidStack.Navigator headerMode="none">
            <EmergencialAidStack.Screen name="InitialPage" component={EmergencialAidScreen} />
        </EmergencialAidStack.Navigator>
    );
}
