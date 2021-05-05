import React, { Component } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import CollaboratorStack from './CollaboratorStackNavigator';
import RegularStack from './RegularStackNavigator';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';


export type MainStackParamList = {
    LoginScreen: undefined;
    RegistrationScreen: undefined;
    CollaboratorStack: undefined;
    UserStack: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

export default () => {
    return (
        <MainStack.Navigator headerMode="none">
            <MainStack.Screen name="LoginScreen" component={LoginScreen} />
            <MainStack.Screen name="RegistrationScreen" component={RegistrationScreen} />
            <MainStack.Screen name="CollaboratorStack" component={CollaboratorStack} />
            <MainStack.Screen name="UserStack" component={RegularStack} />
        </MainStack.Navigator>
    );
}