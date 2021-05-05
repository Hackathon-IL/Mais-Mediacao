import React from "react";
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { commonStyles } from '../../styles/common.styles';
import Header from "../../components/Header";
import { NavigationParams, NavigationState } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

export type EmergencialAidScreenProps = {
  navigation: NavigationStackProp<NavigationState, NavigationParams>
}

export default ({ navigation }: EmergencialAidScreenProps) => {
  const styles = commonStyles();

  const onPressTutorial = () => {
    navigation.navigate('Tutorial');
  }

  const onPressMap = () => {
    navigation.navigate('Map');
  }

  const onPressFaq = () => {
    navigation.navigate('Faq');
  }

  return (
    <View style={styles.screen}>
      <Header
        title="Saúde"
        hasBackButton={true}
        onBackPress={navigation.goBack}
      />
      <ScrollView style={styles.contentContainer}>

        <TouchableOpacity
          style={[styles.mediumCardContainer, local_styles.cardContainer]}
          onPress={onPressTutorial}
        >
          <Image source={require('../../assets/images/tutorial.png')} style={local_styles.icon} />
          <View style={local_styles.textContainer}>
            <Text style={[styles.mediumPrimaryText, local_styles.buttonText]}> Como Solicitar o auxílio </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.mediumCardContainer, local_styles.cardContainer]}
          onPress={onPressMap}
        >
          <Image source={require('../../assets/images/emergencial_aid_map.png')} style={local_styles.icon} />
          <View style={local_styles.textContainer}>
            <Text style={[styles.mediumPrimaryText, local_styles.buttonText]}> Agências da caixa próximas </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.mediumCardContainer, local_styles.cardContainer]}
          onPress={onPressFaq}
        >
          <Image source={require('../../assets/images/faq.png')} style={local_styles.icon} />
          <View style={local_styles.textContainer}>
            <Text style={[styles.mediumPrimaryText, local_styles.buttonText]}> Dúvidas frequentes </Text>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}
const local_styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1
  },
  icon: {
    height: 50,
    width: 50,
  },
  buttonText:{
    textAlign:'center'
  },
  textContainer:{
    flex:1
  }
})