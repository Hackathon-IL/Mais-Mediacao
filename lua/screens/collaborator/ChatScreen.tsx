import React from "react";
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { commonStyles } from '../../styles/common.styles';
import Header from "../../components/Header";
import { NavigationParams, NavigationState } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

export type ChatScreenProps = {
  navigation: NavigationStackProp<NavigationState, NavigationParams>
}

export default ({ navigation }: ChatScreenProps) => {
  const styles = commonStyles();

  const onPressDeaf = () => {
    navigation.navigate('Deaf');
  }

  const onPressImmigrant = () => {
    navigation.navigate('Immigrant');
  }

  const onPressIndigenous = () => {
    navigation.navigate('Indigenous');
  }

  return (
    <View style={styles.screen}>
      <Header
        title="Chat"
        hasBackButton={true}
        onBackPress={navigation.goBack}
      />
      <ScrollView style={styles.contentContainer}>

        <TouchableOpacity
          style={[styles.mediumCardContainer, local_styles.cardContainer]}
          onPress={onPressIndigenous}
        >
          <Image source={require('../../assets/images/indigenous.png')} style={local_styles.icon} />
          <View style={local_styles.textContainer}>
            <Text style={[styles.mediumPrimaryText, local_styles.buttonText]}> Quero ajudar indígenas </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.mediumCardContainer, local_styles.cardContainer]}
          onPress={onPressImmigrant}
        >
          <Image source={require('../../assets/images/immigrant.png')} style={local_styles.icon} />
          <View style={local_styles.textContainer}>
            <Text style={[styles.mediumPrimaryText, local_styles.buttonText]}> Quero ajudar imigrantes </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.mediumCardContainer, local_styles.cardContainer]}
          onPress={onPressDeaf}
        >
          <Image source={require('../../assets/images/deaf.png')} style={local_styles.icon} />
          <View style={local_styles.textContainer}>
            <Text style={[styles.mediumPrimaryText, local_styles.buttonText]}> Quero ajudar surdos </Text>
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