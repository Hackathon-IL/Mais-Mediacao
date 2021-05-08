import React from "react";
import { Text, View, Image, useColorScheme, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { commonStyles } from '../../../styles/common.styles';
import Header from "../../../components/Header";
import { NavigationParams, NavigationState } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

export type DeafScreenProps = {
  navigation: NavigationStackProp<NavigationState, NavigationParams>
}

export default ({ navigation }: DeafScreenProps) => {
  const styles = commonStyles();
  return (
    <View style={styles.screen}>
      <Header
        title="Solicitação de intérprete"
        hasBackButton={true}
        onBackPress={navigation.goBack}
      />
      <View style={[styles.contentContainer, local_styles.mainContainer]}>
        <View style={local_styles.labelContainer}>
          <Text style={styles.mediumPrimaryText}> Seu intérprete está pronto !!   </Text>
          <View style={styles.horizontalSeparator} />
        </View>
        <TouchableOpacity
          style={[commonStyles().buttonContainer, local_styles.buttonContainer]}
          onPress={() => Linking.openURL('http://meet.google.com/new')}
        >
          <Text
            style={[commonStyles().smallPrimaryText, local_styles.buttonText]}>
            Entrar em chamada
          </Text>
          <Image
            source={require('../../../assets/images/google_meet_logo.png')}
            style={local_styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const local_styles = StyleSheet.create({
  mainContainer: {
    padding: 15
  },
  labelContainer: {

  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding:10,
  },
  icon: {
    height: 32,
    width: 28
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'roboto-bold',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})