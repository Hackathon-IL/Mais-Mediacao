import React, { Component } from "react";
import { createStackNavigator } from '@react-navigation/stack'
import SampleScreen from '../screens/SampleScreen';

export type RegularStackNavigatorParamsList = {
    HomePage: undefined
}

const RegularStack = createStackNavigator<RegularStackNavigatorParamsList>();

export default () => {
    return (
        <RegularStack.Navigator headerMode="none">
            <RegularStack.Screen name="HomePage" component={SampleScreen} />
        </RegularStack.Navigator>
    );
}
