import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SampleScreen from '../screens/SampleScreen';
import CollaboratorStack from './CollaboratorStackNavigator';
import RegularStack from './RegularStackNavigator';


export type MainStackParamList = {
    LoginScreen: undefined;
    RegistrationScreen: undefined;
    CollaboratorStack: undefined;
    UserStack: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

export default () => {
    return(
        <MainStack.Navigator headerMode="none">
            <MainStack.Screen name="LoginScreen" component={SampleScreen}/>
            <MainStack.Screen name="RegistrationScreen" component={SampleScreen}/>
            <MainStack.Screen name="CollaboratorStack" component={CollaboratorStack}/>
            <MainStack.Screen name="UserStack" component={RegularStack}/>
        </MainStack.Navigator>
    );
}