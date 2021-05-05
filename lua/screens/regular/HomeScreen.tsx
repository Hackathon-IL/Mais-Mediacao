import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, TinyButton } from '../../components/CommonComponents';
import { commonStyles } from '../../styles/common.styles';
import Header from "../../components/Header";
import { NavigationParams, NavigationState } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

export type HomeScreenProps = {
  navigation: NavigationStackProp<NavigationState, NavigationParams>
}

export default ({ navigation }: HomeScreenProps) => {
  const styles = commonStyles();

  const onPressHealth = () => {
    navigation.navigate('HealthStack');
  }

  const onPressManagement = () => {
    navigation.navigate('ManagementStack');
  }

  const onPressEmergencialAid = () => {
    navigation.navigate('EmergencialAidStack');
  }

  const onPressChat = () => {
    navigation.navigate('ChatStack');
  }

  const onPressLoginPage = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.screen}>
      <Header
        title="Página Inicial"
      />
      <View style={[styles.contentContainer, local_styles.mainContainer]}>

        <View style={local_styles.buttonsContainer}>
          <View style={local_styles.buttonsHorizontalContainer}>
            <TouchableOpacity onPress={onPressHealth} style={[styles.bigCardContainer, local_styles.cardContainer]}>
              <Image
                source={require('../../assets/images/health.png')}
                style={local_styles.icon}
              />
              <Text style={[local_styles.healthText]}> Saúde </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressManagement} style={[styles.bigCardContainer, local_styles.cardContainer]}>
              <Image
                source={require('../../assets/images/management.png')}
                style={local_styles.icon}
              />
              <Text style={[local_styles.managementText]}> Administração </Text>
            </TouchableOpacity>
          </View >

          <View style={local_styles.buttonsHorizontalContainer}>
            <TouchableOpacity onPress={onPressEmergencialAid} style={[styles.bigCardContainer, local_styles.cardContainer]}>
              <Image
                source={require('../../assets/images/emergencial_aid.png')}
                style={local_styles.icon}
              />
              <Text style={[local_styles.emergencialAidText]}> Auxílio emergencial </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressChat} style={[styles.bigCardContainer, local_styles.cardContainer]}>
              <Image
                source={require('../../assets/images/chat.png')}
                style={local_styles.icon}
              />
              <Text style={[local_styles.chatText]}> Chat </Text>
            </TouchableOpacity>
          </View >
        </View>
        
        <View style={local_styles.logoutButtonContainer}>
        <TinyButton text="Retornar para tela de login" onPress={onPressLoginPage} />
        </View>
      </View>
    </View>
  );
}
const local_styles = StyleSheet.create({
  mainContainer: {
    justifyContent:'space-evenly',

  },
  buttonsContainer: {
    
  },
  logoutButtonContainer:{
    alignItems:'center',
  },
  buttonsHorizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardContainer: {
    height: 150,
    width: 150,
    justifyContent: 'space-evenly',
    padding:10,
    alignItems: 'center',
    margin: 20
  },
  icon: {
    height: 80,
    width: 80
  },
  healthText:{
    fontWeight:'bold',
    fontSize:16,
    textAlign:'center',
    color:'#FF2400'
  },
  managementText: {
    fontWeight:'bold',
    fontSize:16,
    textAlign:'center',
    color:'#B45534'
  },
  emergencialAidText:{
    fontWeight:'bold',
    fontSize:16,
    textAlign:'center',
    color:'#639021'
  },
  chatText:{
    fontWeight:'bold',
    fontSize:16,
    textAlign:'center',
    color:'#AF8BC8'
  }
})