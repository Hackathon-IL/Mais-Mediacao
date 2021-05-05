import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import SampleScreen from '../../screens/SampleScreen';

export type ManagementStackNavigatorParamsList = {
    Management: undefined
}

const ManagementStack = createStackNavigator<ManagementStackNavigatorParamsList>();

export default () => {
    return (
        <ManagementStack.Navigator headerMode="none">
            <ManagementStack.Screen name="Management" component={SampleScreen} />
        </ManagementStack.Navigator>
    );
}
