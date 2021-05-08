import React from "react";
import { View, StyleSheet, TextInput as TInput } from 'react-native';
import { Button, TextInput } from '../../../components/CommonComponents';
import { commonStyles } from '../../../styles/common.styles';
import Header from "../../../components/Header";
import { NavigationParams, NavigationState } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

export type SendQuestionScreenProps = {
  navigation: NavigationStackProp<NavigationState, NavigationParams>
}

export default ({ navigation }: SendQuestionScreenProps) => {
  const styles = commonStyles();
  return (
    <View style={styles.screen}>
      <Header
        title={"Envie sua dúvida - Administração"}
        hasBackButton={true}
        onBackPress={navigation.goBack}
      />
      <View style={styles.contentContainer}>
        <TextInput
          placeholder={"Nome"}
        />
        <TextInput
          placeholder={"Email"}
        />
        <View style={[styles.placeholderContainer, local_styles.questionContainer]}>
          <TInput
            placeholder={"Descreva sua dúvida"}
            style={local_styles.questionContainer}
            multiline
            numberOfLines={4}
          />
        </View>

        <Button text="Enviar dúvida" style={local_styles.button}/>
      </View>
    </View>
  );
}
const local_styles = StyleSheet.create({
  button: {
    alignSelf:'center',
    width:200
  },
  questionContainer: {
    height:250,
  }
})