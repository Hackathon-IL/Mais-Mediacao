import React from "react";
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Button, TextInput } from '../components/CommonComponents';
import { commonStyles } from '../styles/common.styles';
import Header from "../components/Header";
import { NavigationParams, NavigationState } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

export type RegistrationScreenProps = {
    navigation: NavigationStackProp<NavigationState, NavigationParams>
}

export default ({ navigation }: RegistrationScreenProps) => {
    const onPressRegister = () => {
        navigation.navigate('CollaboratorStack');
    }

    const styles = commonStyles();
    return (
        <View style={styles.screen}>
            <Header
                title={`Registro`}
                hasBackButton={true}
                onBackPress={navigation.goBack}
            />
            <ScrollView style={styles.contentContainer}>
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
                <TextInput
                    placeholder="Repita sua senha"
                    secureTextEntry
                    autoCompleteType="password"
                    textContentType="password"
                />
                <TextInput
                    placeholder="Nome"
                />

                <Text style={[styles.smallPrimaryText, local_styles.label]}> Tipo de cadastro </Text>
                <View style={styles.horizontalSeparator} />
                <View style={{ height: 100 }} />
                <Button text={"Registrar"} style={local_styles.button} onPress={onPressRegister} />

            </ScrollView>
        </View>
    );
}

const local_styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
    },
    button: {
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    label: {
        marginTop: 20
    }
})
