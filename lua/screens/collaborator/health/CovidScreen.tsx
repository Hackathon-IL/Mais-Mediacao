import React from "react";
import { Text, View, ScrollView, Linking, StyleSheet } from 'react-native';
import { Button, TinyButton } from '../../../components/CommonComponents';
import { commonStyles } from '../../../styles/common.styles';
import { t } from 'i18n-js';
import Header from "../../../components/Header";
import { NavigationParams, NavigationState } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

export type CovidScreenProps = {
  navigation: NavigationStackProp<NavigationState, NavigationParams>
}

export default ({ navigation }: CovidScreenProps) => {
  const styles = commonStyles();
  const PORTUGUES_LINK = 'https://airtable.com/embed/shrQ13JDklfbI1XDh/tbllH1EZHufyX9BPb/viwYkDJbVP5iKp4fG/rec3CFY5OhqBq3ptH/fldel1kMW4z1BPJ33/attnfXNIFmr5D0Kpg?backgroundColor=cyan&viewControls=on'
  const IMI_ESPANHOL_LINK =  'https://airtable.com/embed/shrQ13JDklfbI1XDh/tbllH1EZHufyX9BPb/viwYkDJbVP5iKp4fG/rec3CFY5OhqBq3ptH/fldel1kMW4z1BPJ33/attnfXNIFmr5D0Kpg?backgroundColor=cyan&viewControls=on'
  const IMI_FRANCES_LINK = 'https://airtable.com/embed/shrQ13JDklfbI1XDh/tbllH1EZHufyX9BPb/viwYkDJbVP5iKp4fG/recQVEA4M5IKFkdUX/fldel1kMW4z1BPJ33/attMgvraEykWgvVHJ?backgroundColor=cyan&viewControls=on'
  const IND_DAW_LINK = 'https://airtable.com/embed/shrQ13JDklfbI1XDh/tbllH1EZHufyX9BPb/viwYkDJbVP5iKp4fG/rec6GjQPOnYEdwMxz/fldel1kMW4z1BPJ33/att6Qi1HCFxkr0fsW?backgroundColor=cyan&viewControls=on'
  const IND_BANIWA_LINK = 'https://airtable.com/embed/shrQ13JDklfbI1XDh/tbllH1EZHufyX9BPb/viwYkDJbVP5iKp4fG/rechvbRXWM2mAMTfh/fldel1kMW4z1BPJ33/atts22RxNeC4340qB?backgroundColor=cyan&viewControls=on'
  const IND_NEENHGAT_LINK = 'https://airtable.com/embed/shrQ13JDklfbI1XDh/tbllH1EZHufyX9BPb/viwYkDJbVP5iKp4fG/recyKGlBZMvCIbUbk/fldel1kMW4z1BPJ33/attFNe4C5cNxDfpr8?backgroundColor=cyan&viewControls=on'
  const IND_TUCANO_LINK = 'https://airtable.com/embed/shrQ13JDklfbI1XDh/tbllH1EZHufyX9BPb/viwYkDJbVP5iKp4fG/recDzlRezGpKdD1jd/fldel1kMW4z1BPJ33/attdQfoJ5Aheui2yC?backgroundColor=cyan&viewControls=on'
  const IND_YANOMANI_LINK = 'https://airtable.com/embed/shrQ13JDklfbI1XDh/tbllH1EZHufyX9BPb/viwYkDJbVP5iKp4fG/recTzQSvut8KjbhA1/fldel1kMW4z1BPJ33/att9GQUAMuyUwTWGj?backgroundColor=cyan&viewControls=on'
  const IND_WAPICHANA_LINK = 'https://airtable.com/embed/shrQ13JDklfbI1XDh/tbllH1EZHufyX9BPb/viwYkDJbVP5iKp4fG/rec13srPG79jbhqhC/fldel1kMW4z1BPJ33/attfe608L9sAMHVpb?backgroundColor=cyan&viewControls=on'
  const IND_PORTUGUES_LINK = 'https://airtable.com/embed/shrQ13JDklfbI1XDh/tbllH1EZHufyX9BPb/viwYkDJbVP5iKp4fG/rec24AjPjLbT80BVb/fldel1kMW4z1BPJ33/attArr1z8GmX8rB9W?backgroundColor=cyan&viewControls=on'

  return (
    <View style={styles.screen}>
      <Header
        title="COVID"
        hasBackButton={true}
        onBackPress={navigation.goBack}
      />
      <ScrollView style={styles.contentContainer}>
        <View>
          <Text style={[styles.tinyPrimaryText, local_styles.labelCenteredText]}> Como se prevenir contra a COVID? </Text>
          <View style={styles.horizontalSeparator} />
        </View>
        <View>
          <Button
            text={"Português"}
            style={local_styles.buttonContainer}
            onPress={() => Linking.openURL(PORTUGUES_LINK)}
          />
        </View>

        <View>
          <View>
            <Text style={[styles.tinyPrimaryText, local_styles.labelText]}> Imigrantes </Text>
            <View style={styles.horizontalSeparator} />
          </View>
          <Button
            text={"Espanhol"}
            style={local_styles.buttonContainer}
            onPress={() => Linking.openURL(IMI_ESPANHOL_LINK)}
          />
          <Button
            text={"Francês"}
            style={local_styles.buttonContainer}
            onPress={() => Linking.openURL(IMI_FRANCES_LINK)}
          />
        </View>
        <View>
          <View>
            <Text style={[styles.tinyPrimaryText, local_styles.labelText]}> Indígenas </Text>
            <View style={styles.horizontalSeparator} />
          </View>
          <Button
            text={"Dâw"}
            style={local_styles.buttonContainer}
            onPress={() => Linking.openURL(IND_DAW_LINK)}
          />
          <Button
            text={"Baniwa"}
            style={local_styles.buttonContainer}
            onPress={() => Linking.openURL(IND_BANIWA_LINK)}
          />
          <Button
            text={"Neenhgat"}
            style={local_styles.buttonContainer}
            onPress={() => Linking.openURL(IND_NEENHGAT_LINK)}
          />
          <Button
            text={"Tucano"}
            style={local_styles.buttonContainer}
            onPress={() => Linking.openURL(IND_TUCANO_LINK)}
          />
          <Button
            text={"Yanomani"}
            style={local_styles.buttonContainer}
            onPress={() => Linking.openURL(IND_YANOMANI_LINK)}
          />
          <Button
            text={"Wapichana"}
            style={local_styles.buttonContainer}
            onPress={() => Linking.openURL(IND_WAPICHANA_LINK)}
          />
          <Button
            text={"Português"}
            style={local_styles.buttonContainer}
            onPress={() => Linking.openURL(IND_PORTUGUES_LINK)}
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
  labelText: {
    fontSize: 14,
    marginTop: 10
  },
  labelCenteredText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10
  },
  buttonContainer: {
    width: '100%'
  }
})