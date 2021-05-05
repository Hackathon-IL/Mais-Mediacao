import { StyleSheet, useColorScheme } from 'react-native'

export const lightColors = {
    primaryButtonText: '#FFFFFF',
    secondaryButtonText: '#F2F2F2',
    background: '#FFFFFF',
    headerBackground: '#293B7D',
    primaryText: '#333333',
    secondaryText: '#293B7D',
    tertiaryText: '#828282',
    card: '#F2F2F2',
    separator: '#E4E4E4',
    buttonBackground: '#293B7D',
    inactiveButtonBackground: '#BDBDBD',
}

export const darkColors = {
    primaryButtonText: '#FFFFFF',
    secondaryButtonText: '#F2F2F2',
    background: '#313337',
    headerBackground: '#293B7D',
    primaryText: '#FFFFFF',
    secondaryText: '#15B8E3',
    tertiaryText: '#828282',
    card: '#1E201D',
    separator: '#828282',
    buttonBackground: '#293B7D',
    inactiveButtonBackground: '#BDBDBD',
}

export const baseStyles = () => {
    const colorScheme = (useColorScheme() === 'dark' ? darkColors : lightColors);
    return StyleSheet.create({
        cardContainer: {
            width: '100%',
            borderRadius: 5,
            padding: 5,
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: 10,
            backgroundColor: colorScheme.card,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        primaryText: {
            color: colorScheme.primaryText,
        },
        secondaryText: {
            color: colorScheme.secondaryText,
        },
        tertiaryText: {
            color: colorScheme.tertiaryText,
        }
    })
}

export const commonStyles = () => {
    const colorScheme = (useColorScheme() === 'dark' ? darkColors : lightColors);
    return StyleSheet.create({
        contentContainer: {
            backgroundColor: colorScheme.background,
            padding: 12,
            height: '100%',
        },
        placeholderContainer: {
            height: 40,
            borderRadius: 5,
            backgroundColor: colorScheme.card,
            justifyContent: 'center',
            paddingLeft: 10,
            paddingRight: 10,
            margin: 10
        },
        outsideModal: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        outTouchModal: {
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundColor: '#000',
            opacity: 0.3,
        },
        modalDialog: {
            backgroundColor: colorScheme.card,
            margin: 20,
            borderRadius: 10,
            padding: 20,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            alignSelf: 'center',
            justifyContent: 'center',
        },
        screen: {
            backgroundColor: colorScheme.background,
        },
        paddingBottomBar: {
            paddingBottom: 203,
        },
        centeredContainer: {
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        headerContainer: {
            height: 100,
            backgroundColor: colorScheme.headerBackground,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 40,
            borderBottomStartRadius: 5,
            borderBottomEndRadius: 5,
            padding: 5,
        },
        buttonContainer: {
            margin: 5,
            backgroundColor: colorScheme.buttonBackground,
            height: 45,
            width: 160,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
        },
        inactiveButtonContainer: {
            margin: 5,
            backgroundColor: colorScheme.inactiveButtonBackground,
            height: 45,
            width: 160,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
        },
        roundedImage: {
            height: 50,
            width: 50,
            borderRadius: 50 / 2.0,
        },
        horizontalSeparator: {
            width: '100%',
            height: 0,
            borderBottomWidth: 1,
            borderBottomColor: colorScheme.separator,
            marginTop: 5,
            marginBottom: 5
        },
        verticalSeparator: {
            width: 0,
            height: '100%',
            borderLeftWidth: 1,
            borderLeftColor: colorScheme.separator,
            marginLeft: 5,
            marginRight: 5
        },
        bigCardContainer: {
            ...baseStyles().cardContainer,
            height: 90,
        },
        mediumCardContainer: {
            ...baseStyles().cardContainer,
            height: 70,
        },
        smallCardContainer: {
            ...baseStyles().cardContainer,
            height: 50,
        },
        tinyCardContainer: {
            ...baseStyles().cardContainer,
            height: 30,
        },
        bigPrimaryText: {
            ...baseStyles().primaryText,
            fontSize: 24,
        },
        mediumPrimaryText: {
            ...baseStyles().primaryText,
            fontSize: 18,
        },
        smallPrimaryText: {
            ...baseStyles().primaryText,
            fontSize: 14,
        },
        tinyPrimaryText: {
            ...baseStyles().primaryText,
            fontSize: 12,
        },
        bigSecondaryText: {
            ...baseStyles().secondaryText,
            fontSize: 24,
        },
        mediumSecondaryText: {
            ...baseStyles().secondaryText,
            fontSize: 18,
        },
        smallSecondaryText: {
            ...baseStyles().secondaryText,
            fontSize: 14,
        },
        tinySecondaryText: {
            ...baseStyles().secondaryText,
            fontSize: 12,
        },
        bigTertiaryText: {
            ...baseStyles().tertiaryText,
            fontSize: 24,
        },
        mediumTertiaryText: {
            ...baseStyles().tertiaryText,
            fontSize: 18,
        },
        smallTertiaryText: {
            ...baseStyles().tertiaryText,
            fontSize: 14,
        },
        tinyTertiaryText: {
            ...baseStyles().tertiaryText,
            fontSize: 12,
        },
    })
};
