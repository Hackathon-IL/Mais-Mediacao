import React, { Component } from "react";
import { View, Image } from 'react-native';
import { Button, TextInput, TinyButton } from '../components/CommonComponents';
import { commonStyles } from '../styles/common.styles';
import { StyleSheet } from 'react-native'
import { NavigationParams, NavigationState } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

export type LoginScreenProps = {
    navigation: NavigationStackProp<NavigationState, NavigationParams>
}

export default ({ navigation }: LoginScreenProps) => {
    const styles = commonStyles();

    const onPressLogin = () => {
        navigation.navigate('CollaboratorStack');
    }

    const onPressEnter = () => {
        navigation.navigate('UserStack');
    }

    const onPressRegister = () => {
        navigation.navigate('RegistrationScreen');
    }

    
    return (
        <View style={[styles.contentContainer, local_styles.mainContainer]}>

            <Image source={require('../assets/images/app_icon.png')} style={local_styles.appLogo} />
            <TextInput
                placeholder="Email"
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
            />
            <TextInput
                placeholder="Senha"
                secureTextEntry
                autoCompleteType="password"
                textContentType="password"
            />

            <Button text={"Entrar"} style={local_styles.RegularButton} onPress={onPressLogin} />
            <Button text={"Entrar sem cadastro"} style={local_styles.TintButton} onPress={onPressEnter} />
            <TinyButton text={"Registrar"} style={local_styles.RegularButton} onPress={onPressRegister} />
        </View>
    );
}

const local_styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#2171A9',
        justifyContent: 'center',
    },
    RegularButton: {
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    TintButton: {
        width: 200,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 40,
        backgroundColor: '#15B8E3'
    },
    appLogo: {
        height: 180,
        width: 180,
        alignSelf: 'center',
        marginBottom: 50
    }
})