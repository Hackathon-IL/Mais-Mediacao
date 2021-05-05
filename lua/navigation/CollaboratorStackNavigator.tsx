import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import SampleScreen from "../screens/SampleScreen";

export type CollaboratorStackParamList = {
    HomePage: undefined
}

const CollaboratorStack = createStackNavigator<CollaboratorStackParamList>();

export default () => {
    return (
        <CollaboratorStack.Navigator headerMode="none">
            <CollaboratorStack.Screen name="HomePage" component={SampleScreen} />
        </CollaboratorStack.Navigator>
    );
}