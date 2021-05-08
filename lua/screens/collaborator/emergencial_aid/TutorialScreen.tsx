import React from "react";
import { Text, View, ScrollView, useColorScheme, StyleSheet, Linking } from 'react-native';
import { Button, TinyButton } from '../../../components/CommonComponents';
import { commonStyles } from '../../../styles/common.styles';
import { t } from 'i18n-js';
import Header from "../../../components/Header";
import { NavigationParams, NavigationState } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

export type TutorialScreenProps = {
  navigation: NavigationStackProp<NavigationState, NavigationParams>
}

export default ({ navigation }: TutorialScreenProps) => {
  const styles = commonStyles();

  const PORTUGUES_LINK = 'http://blog.mds.gov.br/redesuas/wp-content/uploads/2020/04/Apoios-por-perda-de-renda-Mobile-PT.pdf'
  const ESPANHOL_LINK = 'http://blog.mds.gov.br/redesuas/wp-content/uploads/2020/04/Apoios-por-perda-de-renda_ES.pdf'
  const FRANCES_LINK = 'http://blog.mds.gov.br/redesuas/wp-content/uploads/2020/04/FINAL-Apoios-por-perda-de-renda-Mobile-FR.pdf'
  const WARAO_LINK = 'http://aplicacoes.mds.gov.br/snas/midia/Apoio%20Emergencial.pdf'
  const DAW_LINK = 'http://aplicacoes.mds.gov.br/snas/midia/Apoio%20Emergencial.pdf'
  const BANIWA_LINK = 'https://airtable.com/embed/shrQ13JDklfbI1XDh/tbllH1EZHufyX9BPb/viwYkDJbVP5iKp4fG/recAfbzI651aZhJxH/fldel1kMW4z1BPJ33/attEB9b0rAyp3Y5tq?backgroundColor=cyan&viewControls=on'

  return (
    <View style={styles.screen}>
      <Header
        title="Como solicitar o auxílio"
        hasBackButton={true}
        onBackPress={navigation.goBack}
      />
      <ScrollView style={styles.contentContainer}>
        <View style={local_styles.contentContainer}>
          <Text style={[styles.mediumPrimaryText, local_styles.labelText]}>
            Cartilha {"\n"}
           Como buscar ajuda em tempos de COVID-19
          </Text>
          <View style={styles.horizontalSeparator} />
          <Button
            text="Português" style={local_styles.button}
            onPress={() => Linking.openURL(PORTUGUES_LINK)}
          />
          <Button
            text="Espanhol" style={local_styles.button}
            onPress={() => Linking.openURL(ESPANHOL_LINK)}
          />
          <Button
            text="Francês" style={local_styles.button}
            onPress={() => Linking.openURL(FRANCES_LINK)}
          />
          <Button
            text="Warao" style={local_styles.button}
            onPress={() => Linking.openURL(WARAO_LINK)}
          />
          <Button
            text="Dâw" style={local_styles.button}
            onPress={() => Linking.openURL(DAW_LINK)}
          />
          <Button
            text="Baniwa" style={local_styles.button}
            onPress={() => Linking.openURL(BANIWA_LINK)}
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

  },
  button: {
    width: '100%'
  },
  labelText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})