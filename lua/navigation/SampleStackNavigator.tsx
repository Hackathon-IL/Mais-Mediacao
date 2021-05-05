import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import SampleScreen from '../screens/SampleScreen';

export type SampleStackNavigatorParamsList = {
    Sample: undefined
}

const SampleStack = createStackNavigator<SampleStackNavigatorParamsList>();

export default () => {
    return (
        <SampleStack.Navigator headerMode="none">
            <SampleStack.Screen name="Sample" component={SampleScreen} />
        </SampleStack.Navigator>
    );
}
