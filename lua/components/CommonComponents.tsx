import React from "react";
import { TouchableOpacity, ViewStyle, Text, View, TextInput as TInput, useColorScheme, TextInputProps } from "react-native";
import { commonStyles, darkColors, lightColors } from "../styles/common.styles";

export type ButtonProps = {
    style?: ViewStyle;
    active?: boolean;
    text?: string;
    onPress?: () => void
}
export const Button = ({ style = {}, active = true, text = "", onPress = () => { } }: ButtonProps) => {
    return (
        <TouchableOpacity
            style={[(active ? commonStyles().buttonContainer : commonStyles().inactiveButtonContainer), style]}
            onPress={active ? onPress : () => { }}
        >
            <Text
                style={[commonStyles().smallPrimaryText, {
                    color: '#FFFFFF', fontFamily: 'roboto-bold',
                    fontWeight: 'bold', textAlign: 'center'
                }]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

export const TinyButton = ({ style = {}, active = true, text = "", onPress = () => { } }: ButtonProps) => {
    return (
        <TouchableOpacity
            style={[(active ? commonStyles().buttonContainer : commonStyles().inactiveButtonContainer), { height: 30 }, style]}
            onPress={active ? onPress : () => { }}
        >
            <Text
                style={[commonStyles().tinyPrimaryText, {
                    color: '#FFFFFF', fontFamily: 'roboto-bold',
                    fontWeight: 'bold', textAlign: 'center'
                }]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}


export const TextInput = (props: TextInputProps) => {
    const styles = commonStyles();
    const colorScheme = (useColorScheme() === 'dark' ? darkColors : lightColors);
    return (
        <View style={styles.placeholderContainer}>
            <TInput
                placeholderTextColor={colorScheme.tertiaryText}
                style={styles.smallPrimaryText}
                {...props}
            />
        </View>
    );
}

export type TwoInfoButtonProps = {
    style?: ViewStyle;
    active?: boolean;
    primaryText?: string;
    secondaryText?: string;
    onPress?: () => void
}
export const TwoInfoTinyButton = ({ style = {}, active = true, primaryText = "", secondaryText = "", onPress = () => { } }: TwoInfoButtonProps) => {
    const styles = commonStyles();
    const colorScheme = (useColorScheme() === 'dark' ? darkColors : lightColors);
    return (
        <TouchableOpacity
            style={[(active ? commonStyles().buttonContainer : commonStyles().inactiveButtonContainer),
            {
                flexDirection: 'row',
                alignItems: 'center',
                height: 30,
                justifyContent: 'space-between',
                paddingLeft: 10,
                paddingRight: 10
            },
                style]}
            onPress={active ? onPress : () => { }}
        >
            <Text style={[styles.tinyPrimaryText, { color: colorScheme.primaryButtonText }]}>
                {primaryText}
            </Text>

            <Text style={[styles.tinyPrimaryText, { color: colorScheme.secondaryButtonText }]}>
                {secondaryText}
            </Text>
        </TouchableOpacity>
    );
}


export type TinyCardButtonProps = {
    style?: ViewStyle;
    primaryText?: string;
    secondaryText?: string;
    onPress?: () => void
}
export const TinyCardButton = ({ style = {}, primaryText = "", secondaryText = "", onPress = () => { } }: TinyCardButtonProps) => {
    const styles = commonStyles();
    return (
        <TouchableOpacity
            style={[styles.tinyCardContainer,
            {
                flexDirection: 'row',
                height: 35,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: 10,
                paddingRight: 10
            },
                style]}
            onPress={onPress}
        >
            <Text style={[styles.smallPrimaryText]}>
                {primaryText}
            </Text>

            <Text style={[styles.smallSecondaryText]}>
                {secondaryText}
            </Text>
        </TouchableOpacity>
    );
}
