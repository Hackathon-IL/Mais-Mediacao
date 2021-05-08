import React from "react";
import { Text, View, ScrollView, useColorScheme, StyleSheet } from 'react-native';
import { Button, TinyButton } from '../../../components/CommonComponents';
import { commonStyles } from '../../../styles/common.styles';
import Header from "../../../components/Header";
import { NavigationParams, NavigationState } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

export type MapScreenProps = {
  navigation: NavigationStackProp<NavigationState, NavigationParams>
}

export default ({ navigation }: MapScreenProps) => {
  const styles = commonStyles();

  return (
    <View style={styles.screen}>
      <Header
        title="Mapa - Saúde"
        hasBackButton={true}
        onBackPress={navigation.goBack}
      />
      
    </View>
  );
}
const local_styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
  }
})