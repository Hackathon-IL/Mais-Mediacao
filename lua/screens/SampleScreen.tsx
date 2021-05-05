import React from 'react';
import { Text, View, ScrollView, useColorScheme } from 'react-native';
import { Button, TinyButton } from '../components/CommonComponents';
import { commonStyles } from '../styles/common.styles';

export type SampleScreenProps = {
}

export default ({ }: SampleScreenProps) => {
    const colorScheme = useColorScheme();
    const styles = commonStyles();
    return (
        <View style={styles.screen}>
            <View style={[styles.headerContainer, { justifyContent: 'center' }]}>
                <Text style={[styles.mediumPrimaryText, { color: '#FFFFFF', fontWeight: 'bold' }]} >
                    Theme: {colorScheme}
                </Text>
            </View>
            <ScrollView style={styles.contentContainer}>
                <View style={styles.bigCardContainer}>
                    <Text style={styles.mediumPrimaryText}> Big Card </Text>
                </View>
                <View style={styles.mediumCardContainer}>
                    <Text style={styles.smallPrimaryText}> Medium Card </Text>
                </View>
                <View style={[styles.smallCardContainer, { flexDirection: 'row' }]}>
                    <Text style={styles.tinyPrimaryText}> Small Card </Text>
                    <View style={styles.verticalSeparator} />
                    <Text style={styles.tinyPrimaryText}> Small Card </Text>
                </View>
                <View style={styles.tinyCardContainer}>
                    <Text style={styles.tinyPrimaryText}> Tiny Card </Text>
                </View>

                <View style={styles.horizontalSeparator} />

                <Text style={styles.bigPrimaryText}>Big primary text </Text>
                <Text style={styles.mediumPrimaryText}>Medium primary text </Text>
                <Text style={styles.smallPrimaryText}>Small primary text </Text>
                <Text style={styles.tinyPrimaryText}>Tiny primary text </Text>

                <Text style={styles.bigSecondaryText}>Big secondary text </Text>
                <Text style={styles.mediumSecondaryText}>Medium secondary text </Text>
                <Text style={styles.smallSecondaryText}>Small secondary text </Text>
                <Text style={styles.tinySecondaryText}>Tiny secondary text </Text>

                <Text style={styles.bigTertiaryText}>Big tertiary text </Text>
                <Text style={styles.mediumTertiaryText}>Medium tertiary text </Text>
                <Text style={styles.smallTertiaryText}>Small tertiary text </Text>
                <Text style={styles.tinyTertiaryText}>Tiny tertiary text </Text>

                <Button
                    text={"Button"}
                />
                <TinyButton text={"Tiny button"} />
            </ScrollView>
        </View>
    );
}
