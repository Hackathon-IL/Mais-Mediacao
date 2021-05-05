import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import HealthScreen from "../../screens/regular/HealthScreen";
import CovidScreen from "../../screens/regular/health/CovidScreen";
import FaqScreen from "../../screens/regular/health/FaqScreen";
import MapScreen from "../../screens/regular/health/MapScreen";
import SymptomScreen from "../../screens/regular/health/SymptomScreen";

export type HealthStackNavigatorParamsList = {
    InitialPage: undefined
    Covid: undefined
    Faq: undefined
    Map: undefined
    Symptom: undefined
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
        </HealthStack.Navigator>
    );
}
