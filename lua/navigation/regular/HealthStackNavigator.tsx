import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import HealthScreen from "../../screens/regular/HealthScreen";

export type HealthStackNavigatorParamsList = {
    InitialPage: undefined
}

const HealthStack = createStackNavigator<HealthStackNavigatorParamsList>();

export default () => {
    return (
        <HealthStack.Navigator headerMode="none">
            <HealthStack.Screen name="InitialPage" component={HealthScreen} />
        </HealthStack.Navigator>
    );
}
