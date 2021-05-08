import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/collaborator/HomeScreen";
import HealthStackNavigator from "./collaborator/HealthStackNavigator";
import EmergencialAidStackNavigator from "./collaborator/EmergencialAidStackNavigator";
import ManagementStackNavigator from "./collaborator/ManagementStackNavigator";
import ChatStackNavigator from "./collaborator/ChatStackNavigator";

export type CollaboratorStackParamList = {
    HomePage: undefined
    HealthStack: undefined
    EmergencialAidStack: undefined
    ChatStack: undefined
    ManagementStack: undefined
}

const CollaboratorStack = createStackNavigator<CollaboratorStackParamList>();

export default () => {
    return (
        <CollaboratorStack.Navigator headerMode="none">
            <CollaboratorStack.Screen name="HomePage" component={HomeScreen} />
            <CollaboratorStack.Screen name="HealthStack" component={HealthStackNavigator} />
            <CollaboratorStack.Screen name="EmergencialAidStack" component={EmergencialAidStackNavigator} />
            <CollaboratorStack.Screen name="ManagementStack" component={ManagementStackNavigator} />
            <CollaboratorStack.Screen name="ChatStack" component={ChatStackNavigator} />
        </CollaboratorStack.Navigator>
    );
}