import React from "react";
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { commonStyles } from '../../styles/common.styles';
import Header from "../../components/Header";
import { NavigationParams, NavigationState } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

export type ManagementScreenProps = {
  navigation: NavigationStackProp<NavigationState, NavigationParams>
}

export default ({ navigation }: ManagementScreenProps) => {
  const styles = commonStyles();

  const onPressDocument = () => {
    navigation.navigate('Document');
  }

  const onPressSupport = () => {
    navigation.navigate('Support');
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
          onPress={onPressDocument}
        >
          <Image source={require('../../assets/images/document.png')} style={local_styles.icon} />
          <View style={local_styles.textContainer}>
            <Text style={[styles.mediumPrimaryText, local_styles.buttonText]}> Como emitir documentos de identificação </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.mediumCardContainer, local_styles.cardContainer]}
          onPress={onPressSupport}
        >
          <Image source={require('../../assets/images/support.png')} style={local_styles.icon} />
          <View style={local_styles.textContainer}>
            <Text style={[styles.mediumPrimaryText, local_styles.buttonText]}> Apoio </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.mediumCardContainer, local_styles.cardContainer]}
          onPress={onPressMap}
        >
          <Image source={require('../../assets/images/map.png')} style={local_styles.icon} />
          <View style={local_styles.textContainer}>
            <Text style={[styles.mediumPrimaryText, local_styles.buttonText]}> Postos de emissão de documentos próximos </Text>
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