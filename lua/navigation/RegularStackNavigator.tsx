import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import HealthStackNavigator from "./regular/HealthStackNavigator";
import ManagementStackNavigator from "./regular/ManagementStackNavigator";
import EmergencialAidStackNavigator from "./regular/EmergencialAidStackNavigator";
import ChatStackNavigator from "./regular/ChatStackNavigator";
import HomeScreen from "../screens/regular/HomeScreen";

export type RegularStackNavigatorParamsList = {
    HomePage: undefined
    HealthStack: undefined
    EmergencialAidStack: undefined
    ChatStack: undefined
    ManagementStack: undefined
}

const RegularStack = createStackNavigator<RegularStackNavigatorParamsList>();

export default () => {
    return (
        <RegularStack.Navigator headerMode="none">
            <RegularStack.Screen name="HomePage" component={HomeScreen} />
            <RegularStack.Screen name="HealthStack" component={HealthStackNavigator} />
            <RegularStack.Screen name="EmergencialAidStack" component={EmergencialAidStackNavigator} />
            <RegularStack.Screen name="ManagementStack" component={ManagementStackNavigator} />
            <RegularStack.Screen name="ChatStack" component={ChatStackNavigator} />
        </RegularStack.Navigator>
    );
}
