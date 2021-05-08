import React from "react";
import { Text, View, ScrollView, useColorScheme, StyleSheet } from 'react-native';
import { Button, TinyButton } from '../../../components/CommonComponents';
import { commonStyles } from '../../../styles/common.styles';
import { t } from 'i18n-js';
import Header from "../../../components/Header";
import { NavigationParams, NavigationState } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

export type IndigenousScreenProps = {
  navigation: NavigationStackProp<NavigationState, NavigationParams>
}

export default ({ navigation }: IndigenousScreenProps) => {
  const styles = commonStyles();
  return (
    <View style={styles.screen}>
      <Header
        title="Chat"
        hasBackButton={true}
        onBackPress={navigation.goBack}
      />
      <ScrollView style={styles.contentContainer}>
      
      </ScrollView>
    </View>
  );
}
const local_styles = StyleSheet.create({
  mainContainer: {
      justifyContent: 'center',
  }
})