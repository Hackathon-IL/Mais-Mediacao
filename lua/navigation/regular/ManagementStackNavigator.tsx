import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import ManagementScreen from "../../screens/regular/ManagementScreen";

export type ManagementStackNavigatorParamsList = {
    InitialPage: undefined
}

const ManagementStack = createStackNavigator<ManagementStackNavigatorParamsList>();

export default () => {
    return (
        <ManagementStack.Navigator headerMode="none">
            <ManagementStack.Screen name="InitialPage" component={ManagementScreen} />
        </ManagementStack.Navigator>
    );
}
