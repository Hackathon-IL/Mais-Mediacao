import React from "react";
import { Text, View, ScrollView, useColorScheme, StyleSheet, Image, Linking } from 'react-native';
import { Button, TinyButton } from '../../../components/CommonComponents';
import { commonStyles } from '../../../styles/common.styles';
import { t } from 'i18n-js';
import Header from "../../../components/Header";
import { NavigationParams, NavigationState } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

export type SupportScreenProps = {
  navigation: NavigationStackProp<NavigationState, NavigationParams>
}

export default ({ navigation }: SupportScreenProps) => {
  const styles = commonStyles();
  const IMI_CONSTITUTION_LINK = 'http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm'
  const IMI_MOBILANG_LINK = 'http://www.mobilang.unb.br/'
  const IMI_ITAMARATY_LINK = 'http://www.portalconsular.itamaraty.gov.br/apoio-ao-imigrante'
  const DEAF_CONSTITUTION_LINK = 'http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.html'
  const DEAF_PORTAL_LINK = 'https://www.libras.com.br/'
  const IND_CONSTITUTION_LINK = 'http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.html'
  const IND_FUNAI_LINK = 'https://www.gov.br/funai/pt-br'

  return (
    <View style={styles.screen}>
      <Header
        title="Apoio"
        hasBackButton={true}
        onBackPress={navigation.goBack}
      />
      <ScrollView style={styles.contentContainer}>
        <View style={local_styles.contentContainer}>
          <View>
            <View style={local_styles.labelContainer}>
              <Image source={require('../../../assets/images/immigrant.png')} style={local_styles.icon} />
              <Text style={[styles.mediumPrimaryText]}> Imigrantes </Text>
            </View>
            <View style={styles.horizontalSeparator} />
          </View>
          <Button
            text="Constituição Brasileira"
            style={local_styles.button}
            onPress={() => Linking.openURL(IMI_CONSTITUTION_LINK)}
          />
          <Button
            text="Mobilang"
            style={local_styles.button}
            onPress={() => Linking.openURL(IMI_MOBILANG_LINK)}
          />
          <Button
            text="Itamaraty"
            style={local_styles.button}
            onPress={() => Linking.openURL(IMI_ITAMARATY_LINK)}
          />
        </View>
        <View style={local_styles.contentContainer}>
          <View>
            <View style={local_styles.labelContainer}>
              <Image source={require('../../../assets/images/deaf.png')} style={local_styles.icon} />
              <Text style={[styles.mediumPrimaryText]}> Surdos </Text>
            </View>
            <View style={styles.horizontalSeparator} />
          </View>
          <Button
            text="Constituição Brasileira"
            style={local_styles.button}
            onPress={() => Linking.openURL(DEAF_CONSTITUTION_LINK)}
          />
          <Button
            text="Portal LIBRAS"
            style={local_styles.button}
            onPress={() => Linking.openURL(DEAF_PORTAL_LINK)}
          />
        </View>
        <View style={local_styles.contentContainer}>
          <View>
            <View style={local_styles.labelContainer}>
              <Image source={require('../../../assets/images/indigenous.png')} style={local_styles.icon} />
              <Text style={[styles.mediumPrimaryText]}> Indígenas </Text>
            </View>
            <View style={styles.horizontalSeparator} />
          </View>
          <Button
            text="Constituição Brasileira"
            style={local_styles.button}
            onPress={() => Linking.openURL(IND_CONSTITUTION_LINK)}
          />
          <Button
            text="FUNAI"
            style={local_styles.button}
            onPress={() => Linking.openURL(IND_FUNAI_LINK)}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const local_styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
  },
  contentContainer: {
    padding: 10
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  icon: {
    height: 30,
    width: 30
  },
  button: {
    width: '100%'
  }
})